// ══════════════════════════════════════════
// PRODUCT MEMORY — data model + storage
// ══════════════════════════════════════════

const PRODUCTS_KEY = 'rc.products';
const SCHEMA_VERSION = 1;

function _now() { return Date.now(); }

function _uid() {
  // 6 lowercase-alphanumeric chars, good enough for per-user scope
  const c = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let s = 'p_';
  for (let i = 0; i < 6; i++) s += c[Math.floor(Math.random() * c.length)];
  return s;
}

function _canon(name) {
  return String(name || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

function _blankRecord() {
  const t = _now();
  return {
    id: _uid(),
    schemaVersion: SCHEMA_VERSION,
    source: 'sent',

    name: '',
    nameLC: '',
    description: '',
    unit: 'pc',
    customUnit: '',

    photoFileId: '',
    photoRatio: '',

    lastPlatform: '',
    lastType: '',
    lastCaption: '',

    firstSeenAt: t,
    lastUsedAt: t,
  };
}

// ─── storage adapter (localStorage today, CloudStorage-ready tomorrow) ───
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
  } catch (_) { /* quota / private mode — swallow */ }
}
function _collection() {
  const existing = _loadRaw();
  if (existing && Array.isArray(existing.products)) return existing;
  const fresh = {
    schemaVersion: SCHEMA_VERSION,
    createdAt: _now(),
    migratedAt: 0,
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

// Search against nameLC + description. All tokens must match. Returns recent-first.
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

// Create OR update by canonical name. Returns the record.
// patch may include: name, description, unit, customUnit, lastPlatform, lastType, lastCaption, source, photoFileId, photoRatio
function productUpsert(patch) {
  if (!patch || !patch.name) return null;
  const col = _collection();
  const lc = _canon(patch.name);
  let rec = col.products.find(p => p.nameLC === lc);
  if (!rec) {
    rec = _blankRecord();
    rec.firstSeenAt = _now();
    col.products.push(rec);
  }
  // update fields from patch
  rec.name = patch.name;
  rec.nameLC = lc;
  if (patch.description !== undefined) rec.description = patch.description;
  if (patch.unit !== undefined) rec.unit = patch.unit;
  if (patch.customUnit !== undefined) rec.customUnit = patch.customUnit;
  if (patch.lastPlatform !== undefined) rec.lastPlatform = patch.lastPlatform;
  if (patch.lastType !== undefined) rec.lastType = patch.lastType;
  if (patch.lastCaption !== undefined) rec.lastCaption = patch.lastCaption;
  if (patch.photoFileId !== undefined) rec.photoFileId = patch.photoFileId;
  if (patch.photoRatio !== undefined) rec.photoRatio = patch.photoRatio;
  if (patch.source) rec.source = patch.source;
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

// ─── import ───

// Parses the pasted grammar:
//   name
//   name | description
//   name | description | unit
// Returns a preview object: { rows: [{name,description,unit,match}], newCount, updateCount, skipCount }
function productsImportPreview(text) {
  const lines = String(text || '').split(/\r?\n/);
  const rows = [];
  let newCount = 0, updateCount = 0, skipCount = 0;
  const seen = new Set();
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    const parts = line.split('|').map(s => s.trim());
    const name = parts[0] || '';
    if (!name) { skipCount++; continue; }
    const lc = _canon(name);
    if (seen.has(lc)) { skipCount++; continue; }
    seen.add(lc);
    const description = parts[1] || '';
    const unit = parts[2] || '';
    const existing = productByName(name);
    const match = existing ? 'update' : 'new';
    if (match === 'new') newCount++; else updateCount++;
    rows.push({ name, description, unit, match });
  }
  return { rows, newCount, updateCount, skipCount };
}

function productsImportCommit(text) {
  const preview = productsImportPreview(text);
  for (const row of preview.rows) {
    const patch = { name: row.name, source: 'import' };
    if (row.description) patch.description = row.description;
    if (row.unit) patch.unit = row.unit;
    productUpsert(patch);
  }
  return preview;
}

// Expose globally for inline handlers
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
