// ══════════════════════════════════════════
// PRODUCT MEMORY — full-state product records
// ══════════════════════════════════════════

const PRODUCTS_KEY = 'rc.products';
const SCHEMA_VERSION = 2;

function _now() { return Date.now(); }

function _uid() {
  const c = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let s = 'p_';
  for (let i = 0; i < 6; i++) s += c[Math.floor(Math.random() * c.length)];
  return s;
}

function _canon(name) {
  return String(name || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

function _slug(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64) || 'product';
}

function _blankRecord() {
  const t = _now();
  return {
    id: _uid(),
    schemaVersion: SCHEMA_VERSION,

    // identity
    name: '',
    nameLC: '',
    description: '',
    unit: 'pc',
    customUnit: '',

    // wholesale block
    wholesale: { price:'', qty:'', og:'', ogOn:false, status:'in_stock' },

    // retail block
    retail: { enabled:false, price:'', qty:'', og:'', ogOn:false, status:'in_stock' },

    // flash block
    flash: { price:'', og:'' },

    // variant mode
    mode: 'single',
    variants: [],
    variantRestock: '',

    // type-specific extras
    testimonial: { quote:'', reviewer:'', stars:0 },
    bundle: { item2:'', comboPrice:'', savings:'' },
    restockDate: '',
    restockHeadline: '',
    lastQty: '',

    // last session context
    lastType: '',
    lastPlatform: '',
    lastTone: '',
    lastLang: '',
    lastCaption: '',

    // meta
    firstSeenAt: t,
    lastUsedAt: t,
    source: 'sent',
  };
}

function _merge(dst, src) {
  if (!src || typeof src !== 'object') return dst;
  for (const k of Object.keys(src)) {
    const v = src[k];
    if (v && typeof v === 'object' && !Array.isArray(v) && dst[k] && typeof dst[k] === 'object' && !Array.isArray(dst[k])) {
      _merge(dst[k], v);
    } else if (v !== undefined) {
      dst[k] = v;
    }
  }
  return dst;
}

// ─── storage adapter ───
function _loadRaw() {
  try {
    const raw = localStorage.getItem(PRODUCTS_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (_) { return null; }
}
function _saveRaw(collection) {
  try {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(collection));
  } catch (_) { /* quota — swallow */ }
}
function _collection() {
  const existing = _loadRaw();
  if (existing && Array.isArray(existing.products)) return existing;
  const fresh = {
    schemaVersion: SCHEMA_VERSION,
    createdAt: _now(),
    deviceOrigin: (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData) ? 'tg' : 'web',
    products: [],
  };
  _saveRaw(fresh);
  return fresh;
}

// ─── public API ───

function productsAll() {
  return _collection().products
    .slice()
    .sort((a, b) => (b.lastUsedAt || 0) - (a.lastUsedAt || 0));
}

function productsSearch(query) {
  const q = _canon(query);
  if (!q) return productsAll();
  const tokens = q.split(' ').filter(Boolean);
  return productsAll().filter(p => {
    const hay = (p.nameLC || '') + ' ' + _canon(p.description || '');
    return tokens.every(t => hay.includes(t));
  });
}

function productById(id) {
  return _collection().products.find(p => p.id === id) || null;
}

function productByName(name) {
  const lc = _canon(name);
  if (!lc) return null;
  return _collection().products.find(p => p.nameLC === lc) || null;
}

// Upsert by canonical name. patch is deep-merged into existing or blank record.
function productUpsert(patch) {
  if (!patch || !patch.name) return null;
  const col = _collection();
  const lc = _canon(patch.name);
  let rec = col.products.find(p => p.nameLC === lc);
  const isNew = !rec;
  if (isNew) {
    rec = _blankRecord();
    rec.firstSeenAt = _now();
    col.products.push(rec);
  }
  _merge(rec, patch);
  rec.name = patch.name;
  rec.nameLC = lc;
  rec.schemaVersion = SCHEMA_VERSION;
  rec.lastUsedAt = _now();
  _saveRaw(col);
  return rec;
}

function productDelete(id) {
  const col = _collection();
  const before = col.products.length;
  col.products = col.products.filter(p => p.id !== id);
  if (col.products.length !== before) _saveRaw(col);
}

function productsWipe() {
  const col = _collection();
  col.products = [];
  _saveRaw(col);
}

function productsCount() { return _collection().products.length; }

// ─── import / export (JSON) ───

// Accepts either a single product object or an array of product objects.
// Returns { rows: [{name, description, match: 'new'|'update'}], newCount, updateCount, skipCount, error }
function productsImportPreview(text) {
  const out = { rows: [], newCount: 0, updateCount: 0, skipCount: 0, error: '' };
  const t = String(text || '').trim();
  if (!t) return out;
  let data;
  try { data = JSON.parse(t); }
  catch (e) { out.error = 'invalid JSON: ' + e.message; return out; }
  const arr = Array.isArray(data) ? data : [data];
  const seen = new Set();
  for (const item of arr) {
    if (!item || typeof item !== 'object' || !item.name) { out.skipCount++; continue; }
    const lc = _canon(item.name);
    if (!lc || seen.has(lc)) { out.skipCount++; continue; }
    seen.add(lc);
    const match = productByName(item.name) ? 'update' : 'new';
    if (match === 'new') out.newCount++; else out.updateCount++;
    out.rows.push({ name: item.name, description: item.description || '', match });
  }
  return out;
}

function productsImportCommit(text) {
  const preview = productsImportPreview(text);
  if (preview.error) return preview;
  const t = String(text || '').trim();
  let data;
  try { data = JSON.parse(t); } catch (e) { preview.error = e.message; return preview; }
  const arr = Array.isArray(data) ? data : [data];
  const seen = new Set();
  for (const item of arr) {
    if (!item || typeof item !== 'object' || !item.name) continue;
    const lc = _canon(item.name);
    if (!lc || seen.has(lc)) continue;
    seen.add(lc);
    productUpsert({ ...item, source: item.source || 'import' });
  }
  return preview;
}

// Strip runtime-local fields before export
function productExportPayload(rec) {
  if (!rec) return null;
  const { id, nameLC, firstSeenAt, lastUsedAt, ...rest } = rec;
  return rest;
}

function productSlug(rec) { return _slug(rec?.name); }

// Expose globally
window.productsAll = productsAll;
window.productsSearch = productsSearch;
window.productById = productById;
window.productByName = productByName;
window.productUpsert = productUpsert;
window.productDelete = productDelete;
window.productsWipe = productsWipe;
window.productsCount = productsCount;
window.productsImportPreview = productsImportPreview;
window.productsImportCommit = productsImportCommit;
window.productExportPayload = productExportPayload;
window.productSlug = productSlug;
