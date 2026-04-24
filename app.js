// ═══════════════════════════════════════
// LANGUAGE STRINGS
// ═══════════════════════════════════════
const LANG = {
  en: {
    wholesale: 'Wholesale', retail: 'Retail',
    low_stock: 'Low stock', out_of_stock: 'Out of Stock',
    flash_today: 'FLASH SALE — TODAY ONLY', limited_time: 'Limited time offer',
    price_drop: 'Price Drop', prices_slashed: 'Prices slashed!',
    you_save_pct: 'You save %p%!',
    dm_prices: 'DM for prices',
    order_now: 'Order now', restocking: 'Restocking',
    pick_prompt: 'Pick a platform and caption type…',
    copied: 'Copied!', copy: 'Copy Caption',
  },
  sw: {
    wholesale: 'Jumla', retail: 'Rejareja',
    low_stock: 'Inakwisha', out_of_stock: 'Haipatikani',
    flash_today: 'FLASH SALE — LEO TU', limited_time: 'Offer ya muda mfupi',
    price_drop: 'Bei Imeshuka', prices_slashed: 'Bei zimeshuka!',
    you_save_pct: 'Unaokoa %p%!',
    dm_prices: 'DM nikupe bei',
    order_now: 'Agiza sasa', restocking: 'Inarudi',
    pick_prompt: 'Chagua mtandao na aina ya caption…',
    copied: 'Imenakiliwa!', copy: 'Nakili Caption',
  }
};

function L(key) { return LANG[S.lang]?.[key] || LANG.en[key] || key; }

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
const S = {
  network: 'whatsapp', type: null, mode: 'single', lang: 'en', name: '',
  description: '',
  showPrices: true,
  hashtags: '',
  w: { price:'', qty:'', og:'', ogOn:false, status:'in_stock', flashPrice:'', flashQty:'' },
  r: { price:'', qty:'', og:'', ogOn:false, status:'in_stock', flashPrice:'', flashQty:'' },
  variants: [], activeVariantId: null,
  previewEdited: false,
};

// ═══════════════════════════════════════
// CONFIG (localStorage)
// ═══════════════════════════════════════
const CFG = (() => {
  try { const r=localStorage.getItem('rc_cfg'); if(r) return JSON.parse(r); } catch(e){}
  return { handle:'', location:'', phone:'', currency:'USD', lang:'en', hashtags:'' };
})();

function saveCfg() {
  CFG.handle=document.getElementById('cfgHandle').value;
  CFG.location=document.getElementById('cfgLocation').value;
  CFG.phone=document.getElementById('cfgPhone').value;
  CFG.currency=document.getElementById('cfgCurrency').value||'USD';
  CFG.hashtags=document.getElementById('cfgHashtags').value;
  CFG.lang=S.lang;
  localStorage.setItem('rc_cfg', JSON.stringify(CFG));
  updateSettingsBtn(); regen();
}
function initCfgFields() {
  document.getElementById('cfgHandle').value=CFG.handle||'';
  document.getElementById('cfgLocation').value=CFG.location||'';
  document.getElementById('cfgPhone').value=CFG.phone||'';
  document.getElementById('cfgCurrency').value=CFG.currency||'USD';
  document.getElementById('cfgHashtags').value=CFG.hashtags||'';
  if(CFG.lang){ S.lang=CFG.lang; setLang(S.lang); }
  updateSettingsBtn();
}
function updateSettingsBtn() {
  document.getElementById('settingsBtn').classList.toggle('has-config', !!(CFG.handle||CFG.location||CFG.phone));
}
function toggleSettings() {
  document.getElementById('settingsPanel').classList.toggle('show');
  document.getElementById('settingsBackdrop').classList.toggle('show');
}
function CC() { return CFG.currency||'USD'; }

// ═══════════════════════════════════════
// EMOJI REGISTRY
// ═══════════════════════════════════════
const EM = {
  header_product:    '🛒',
  header_flash:      '⚡',
  header_drop:       '📉',
  section_wholesale: '📦',
  section_retail:    '🛍️',
  variant_anchor:    '🏷️',
  price_arrow:       '👉',
  status_in:         '✅',
  status_low:        '⚠️',
  status_out:        '❌',
  cta_dm:            '💬',
  sig_handle:        '🌐',
  sig_location:      '📍',
  sig_phone:         '📞',
  divider:           '━━━━━━━━━━━━━━━',
  divider_light:     '───────────────',
};

function E(role) { return EM[role] || ''; }

// ═══════════════════════════════════════
// PLATFORM CONFIG
// ═══════════════════════════════════════
const PLATFORMS = {
  whatsapp:  { label:'💬 WA', fullLabel:'WhatsApp',  md:true,  maxLen:0    },
  telegram:  { label:'✈️ TG', fullLabel:'Telegram',  md:false, maxLen:0    },
  instagram: { label:'📸 IG', fullLabel:'Instagram', md:false, maxLen:2200 },
  tiktok:    { label:'🎵 TT', fullLabel:'TikTok',    md:false, maxLen:2200 },
};
function useMd() { return PLATFORMS[S.network]?.md; }
function maxLen() { return PLATFORMS[S.network]?.maxLen||0; }
function B(t) { return useMd()?`*${t}*`:t; }
function STR(t) { return useMd()?`~${t}~`:t; }
function I(t) { return useMd()?`_${t}_`:t; }
function MONO(t) { return useMd()?`\`${t}\``:t; }
function platformDivider(){
  if(S.network==='whatsapp') return '━━━━━━━━━━━━━━━';
  if(S.network==='instagram') return '───────────────';
  return '';
}
// Universal old→new price pattern (§4.2): ❌ ~qty = CCY X~ / 👉 qty = `CCY Y`.
// TT/IG strip tildes+backticks automatically via useMd()=false.
function oldPriceLine(qty, price){
  return `${E('status_out')} ${STR(`${qty} = ${CC()} ${fmt(price)}`)}`;
}
function newPriceLine(arrow, qty, price){
  return `${arrow} ${qty} = ${MONO(`${CC()} ${fmt(price)}`)}`;
}
function descLine(){
  const d=(S.description||'').trim();
  if(!d) return '';
  return I(clean(d));
}

// ═══════════════════════════════════════
// NETWORKS & TYPES
// ═══════════════════════════════════════
const NETWORKS = Object.keys(PLATFORMS);
const REGISTRY = [
  { id:'standard',   label:'Standard',   nets:['whatsapp','telegram','tiktok','instagram'], groups:['wholesale','retail'],   build:buildStandard  },
  { id:'flash',      label:'Flash Sale', nets:['whatsapp','telegram','tiktok','instagram'], groups:['flash_w','flash_r'],    build:buildFlash     },
  { id:'price_drop', label:'Price Drop', nets:['whatsapp','telegram','tiktok','instagram'], groups:['wholesale','retail'],   build:buildPriceDrop },
];

function currentTypeLabel() {
  if(!S.type) return '';
  const def=REGISTRY.find(r=>r.id===S.type);
  return def?def.label:'';
}

// ═══════════════════════════════════════
// TONE & LANG
// ═══════════════════════════════════════
function setLang(lang) {
  S.lang=lang;
  document.getElementById('langEn').classList.toggle('on',lang==='en');
  document.getElementById('langSw').classList.toggle('on',lang==='sw');
  CFG.lang=lang; try{localStorage.setItem('rc_cfg',JSON.stringify(CFG));}catch(e){}
  regen();
}

// ═══════════════════════════════════════
// NETWORK & TYPE SELECTION
// ═══════════════════════════════════════
function initNetworks() {
  document.getElementById('netPills').innerHTML=NETWORKS.map(id=>
    `<button class="pill${S.network===id?' on':''}" onclick="selectNetwork('${id}')" id="net_${id}">${PLATFORMS[id].label}</button>`
  ).join('');
  // auto-show type pills since WhatsApp is pre-selected
  if(S.network) document.getElementById('typeBlk').classList.remove('gone');
  renderTypePills();
  updatePreviewMeta();
}
function selectNetwork(id) {
  S.network=id;
  document.querySelectorAll('#netPills .pill').forEach(b=>b.classList.remove('on'));
  document.getElementById('net_'+id)?.classList.add('on');
  if(S.type){
    const def=REGISTRY.find(r=>r.id===S.type);
    if(!def||!def.nets.includes(id)){
      S.type=null;
      document.body.classList.remove('has-type','focus-name','focus-price','kb-up');
      document.body.classList.add('no-type');
      if(typeof updateTypeChip==='function') updateTypeChip();
    }
  }
  renderTypePills();
  document.getElementById('typeBlk')?.classList.remove('gone');
  updateCharCounter();
  updatePreviewMeta();
  regen();
}
function renderTypePills() {
  const el=document.getElementById('typePills');
  const avail=REGISTRY.filter(r=>r.nets.includes(S.network));
  el.innerHTML=avail.map(r=>`<button class="pill${S.type===r.id?' on':''}" onclick="selectType('${r.id}')" id="type_${r.id}">${r.label}</button>`).join('');
}
function selectType(id) {
  S.type=id;
  document.body.classList.remove('no-type');
  document.body.classList.add('has-type');
  document.querySelectorAll('.type-tile').forEach(t=>t.classList.toggle('on', t.dataset.type===id));
  if(typeof updateTypeChip==='function') updateTypeChip();
  renderFields();
  // Re-parse the existing price text so state routes to the correct slot (flash vs w)
  const pf=document.getElementById('priceField');
  if(pf && pf.value && typeof parsePriceInput==='function') parsePriceInput(pf.value);
  if(typeof updatePriceChip==='function') updatePriceChip();
  if(typeof updateChipRail==='function') updateChipRail();
  updatePreviewMeta();
  regen();
  if(typeof closeAllPanels==='function') closeAllPanels();
  setTimeout(()=>{ if(!S.name && typeof focusName==='function') focusName(); }, 180);
}
function setMode(m) {
  S.mode=m;
  document.getElementById('modeSingle').classList.toggle('on',m==='single');
  document.getElementById('modeVariant').classList.toggle('on',m==='variant');
  document.body.classList.toggle('mode-variant', m==='variant');
  if(m!=='variant') S.activeVariantId=null;
  if(S.type) renderFields();
  renderVariantChips();
  renderVariantPanel();
  // Entering variants collapses family retail field (variants owns retail per-item).
  if(m==='variant') collapseRetail();
  // Re-sync price field with family wholesale (or flash outside variant mode).
  const pf=document.getElementById('priceField');
  if(pf){
    const p = S.type==='flash' && m!=='variant' ? S.w.flashPrice : S.w.price;
    pf.value = p || '';
  }
  updatePriceChip();
  regen();
}
function typeSupportsVariants(){
  const def=REGISTRY.find(r=>r.id===S.type);
  if(!def) return false;
  return def.groups.some(g=>['wholesale','retail'].includes(g));
}
// Entering variants via the row trigger. Exiting happens automatically when
// the user taps `+ retail` (family retail is mutually exclusive with variants).
function toggleVariantMode(){
  if(!S.type){ showToast('pick a type first'); return; }
  if(!typeSupportsVariants()){ showToast('no variants for this type'); return; }
  if(S.mode==='variant'){
    setMode('single');
    return;
  }
  setMode('variant');
  if(S.variants.length===0) spawnVariant();
  S.activeVariantId=S.variants[0].id;
  renderVariantChips();
  renderVariantPanel();
  requestAnimationFrame(()=>{
    const input=document.querySelector('.variant-chip.active .vc-input');
    if(input) input.focus();
  });
}

// ═══════════════════════════════════════
// CLEAR FORM
// ═══════════════════════════════════════
function clearForm() {
  S.name='';
  S.w={price:'',qty:'',og:'',ogOn:false,status:'in_stock',flashPrice:'',flashQty:''};
  S.r={price:'',qty:'',og:'',ogOn:false,status:'in_stock',flashPrice:'',flashQty:''};
  S.variants=[]; S.activeVariantId=null; S.mode='single';
  S.description=''; S.hashtags=''; S.showPrices=true;
  document.body.classList.remove('mode-variant');
  S.previewEdited=false;
  document.getElementById('productName').value='';
  document.getElementById('resetPill').classList.remove('show');
  if(S.type) renderFields();
  renderVariantChips();
  renderVariantPanel();
  regen();
}

// ═══════════════════════════════════════
// FIELD RENDERING
// ═══════════════════════════════════════
function renderFields() {
  const area=document.getElementById('fieldsArea');
  if(!S.type){area.innerHTML='';return;}
  const def=REGISTRY.find(r=>r.id===S.type);
  if(!def){area.innerHTML='';return;}
  // Name + price inputs handle wholesale/retail/flash pricing.
  // Type-specific extras (bundle, review, restock headline, last qty) render here.
  // Variants render in their own row outside fieldsArea via renderVariantChips().
  let html='<div class="blk">';
  html+='</div>';
  area.innerHTML=html;
  renderVariantChips();
}

// ═══════════════════════════════════════
// VARIANTS — each is a full mini-product
// ═══════════════════════════════════════
// Shape: { id, name, w:{price,qty,og,ogOn,status,flashPrice,flashQty},
//          r:{price,qty,og,ogOn,status,flashPrice,flashQty}, visible }
// - name is the raw typed text. Caption-side splits last token = size, rest = prefix.
// - visible=false hides the variant from caption output but keeps its data.
// - Family S.w in variants mode = carton pricing.

function variantSplit(raw){
  const tokens=(raw||'').trim().split(/\s+/).filter(Boolean);
  if(!tokens.length) return '';
  if(tokens.length===1) return tokens[0];
  return tokens.slice(0,-1).join('-')+'-'+tokens[tokens.length-1];
}
function variantHas(v){
  if(!v) return false;
  return !!(v.name||'').trim() || !!(v.w&&v.w.price) || !!(v.r&&v.r.price) || !!(v.w&&v.w.flashPrice) || !!(v.r&&v.r.flashPrice);
}
function activeVariant(){ return S.variants.find(v=>v.id===S.activeVariantId)||null; }
function newVariantSlot(){
  return {
    id:'v'+Date.now().toString(36)+Math.random().toString(36).slice(2,5),
    name:'',
    w:{ price:'', qty:'', og:'', ogOn:false, status:'in_stock', flashPrice:'', flashQty:'' },
    r:{ price:'', qty:'', og:'', ogOn:false, status:'in_stock', flashPrice:'', flashQty:'' },
    visible:true,
  };
}
function spawnVariant(){
  const v=newVariantSlot();
  S.variants.push(v);
  return v.id;
}
function ensureTrailingEmpty(){
  const last=S.variants[S.variants.length-1];
  if(!last||variantHas(last)) spawnVariant();
}
function activateVariant(id){
  S.activeVariantId=id;
  renderVariantChips();
  renderVariantPanel();
  requestAnimationFrame(()=>{
    const input=document.querySelector('.variant-chip.active .vc-input');
    if(input){ input.focus(); input.setSelectionRange(input.value.length,input.value.length); }
  });
}
function deactivateVariant(){
  S.activeVariantId=null;
  renderVariantChips();
  renderVariantPanel();
}
function onVariantNameInput(id, raw){
  const v=S.variants.find(x=>x.id===id);
  if(!v) return;
  const wasEmpty=!variantHas(v);
  v.name=raw;
  // Auto-spawn a trailing empty chip once this (previously empty) chip becomes named.
  if(wasEmpty && variantHas(v)){
    const idx=S.variants.indexOf(v);
    const isLast=idx===S.variants.length-1;
    if(isLast) spawnVariant();
  }
  renderVariantChips();
  regen();
}
function onVariantChipTap(id){
  if(S.activeVariantId===id) return;
  // Leaving a chip: if it was last and has content, ensure a trailing empty exists.
  const leaving=activeVariant();
  if(leaving && variantHas(leaving)){
    const idx=S.variants.indexOf(leaving);
    if(idx===S.variants.length-1) spawnVariant();
  }
  activateVariant(id);
}
function onVariantFieldInput(kind, raw){
  const v=activeVariant();
  if(!v) return;
  const p=parsePriceFormat(raw);
  if(kind==='w'){
    v.w.price=p.price; v.w.qty=p.qty||'';
    v.w.og=p.og||''; v.w.ogOn=!!p.og;
    if(p.status) v.w.status=p.status;
    else if(!raw||!raw.trim()) v.w.status='in_stock';
  } else if(kind==='r'){
    v.r.price=p.price; v.r.qty=p.qty||'';
    v.r.og=p.og||''; v.r.ogOn=!!p.og;
    if(p.status) v.r.status=p.status;
    else if(!raw||!raw.trim()) v.r.status='in_stock';
  } else if(kind==='flash'){
    v.w.flashPrice=p.price;
    v.w.flashQty=p.qty||'';
  }
  renderVariantChips();
  regen();
}
function toggleVariantVisibility(id){
  const v=S.variants.find(x=>x.id===id);
  if(!v) return;
  v.visible=v.visible===false ? true : false;
  renderVariantChips();
  renderVariantPanel();
  regen();
}
function clearVariants(){
  S.variants=[];
  S.activeVariantId=null;
  spawnVariant();
  S.activeVariantId=S.variants[0].id;
  renderVariantChips();
  renderVariantPanel();
  regen();
}
function escAttr(s){ return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }
function variantDisplayValue(v,kind){
  if(kind==='flash'){
    if(!v.w.flashPrice) return '';
    return v.w.flashQty && v.w.flashQty!=='1' ? `${v.w.flashPrice} ${v.w.flashQty}` : v.w.flashPrice;
  }
  const s = kind==='w' ? v.w : v.r;
  if(!s.price) return '';
  let out = s.og ? `${s.price},${s.og}` : s.price;
  if(s.qty && s.qty!=='1') out += ` ${s.qty}`;
  if(s.status==='low_stock') out += ' low';
  else if(s.status==='out_of_stock') out += ' out';
  return out;
}
function renderVariantChips(){
  const row=document.getElementById('variantRow');
  if(!row) return;
  if(S.mode!=='variant'){ row.classList.remove('show'); row.innerHTML=''; return; }
  row.classList.add('show');
  if(S.variants.length===0) spawnVariant();
  const chips=S.variants.map(v=>{
    const has=variantHas(v);
    const isActive=S.activeVariantId===v.id;
    const hidden=v.visible===false;
    let inner;
    if(isActive){
      inner=`<input type="text" class="vc-input" value="${escAttr(v.name||'')}" placeholder="e.g. 70l · red small" oninput="onVariantNameInput('${v.id}', this.value)" onclick="event.stopPropagation()" onkeydown="if(event.key==='Enter'){event.preventDefault();const f=document.querySelector('.vp-w');if(f)f.focus();}">`;
    } else if(!has){
      inner=`<span class="vc-ph">${S.variants.length===1?'+ variants':'+'}</span>`;
    } else {
      inner=`<span class="vc-suf">${escAttr(v.name||'—')}</span>`;
    }
    const cls=['variant-chip'];
    cls.push(has?'named':'empty');
    if(isActive) cls.push('active');
    if(hidden) cls.push('hidden');
    return `<button type="button" class="${cls.join(' ')}" onclick="onVariantChipTap('${v.id}')">${inner}</button>`;
  }).join('');
  const hasAny=S.variants.some(variantHas);
  const clearBtn=hasAny?`<button type="button" class="variant-clear" onclick="clearVariants()" title="clear">×</button>`:'';
  row.innerHTML=`<div class="variant-row-inner">${chips}${clearBtn}</div>`;
}
function renderVariantPanel(){
  const panel=document.getElementById('variantPanel');
  if(!panel) return;
  const v=activeVariant();
  if(S.mode!=='variant' || !v){ panel.classList.remove('show'); panel.innerHTML=''; return; }
  panel.classList.add('show');
  const isFlash=S.type==='flash';
  const eye=v.visible===false?'🚫':'👁';
  const eyeTitle=v.visible===false?'hidden from caption — tap to show':'shown — tap to hide';
  panel.innerHTML=`
    <div class="vp-head">
      <span class="vp-label">variant</span>
      <button class="vp-eye${v.visible===false?' off':''}" onclick="toggleVariantVisibility('${v.id}')" title="${escAttr(eyeTitle)}">${eye}</button>
    </div>
    <div class="vp-field">
      <label class="vp-lbl">wholesale</label>
      <input type="text" class="vp-w" placeholder="500 10 · 500,700 10 low"
             value="${escAttr(variantDisplayValue(v,'w'))}"
             oninput="onVariantFieldInput('w', this.value)"
             onkeydown="if(event.key==='Enter'){event.preventDefault();const f=this.parentElement.nextElementSibling?.querySelector('input');if(f)f.focus();}">
    </div>
    <div class="vp-field">
      <label class="vp-lbl">retail</label>
      <input type="text" class="vp-r" placeholder="80 · 80,100 low"
             value="${escAttr(variantDisplayValue(v,'r'))}"
             oninput="onVariantFieldInput('r', this.value)"
             onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}">
    </div>
    ${isFlash?`<div class="vp-field">
      <label class="vp-lbl">flash</label>
      <input type="text" class="vp-f" placeholder="flash 40,80"
             value="${escAttr(variantDisplayValue(v,'flash'))}"
             oninput="onVariantFieldInput('flash', this.value)"
             onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}">
    </div>`:''}`;
}

// ═══════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════
function fmt(n){ if(!n)return n; return Number(String(n).replace(/,/g,'')).toLocaleString('en-US'); }
function clean(text){ return text.replace(/  +/g,' ').replace(/^ +/gm,'').replace(/\n{3,}/g,'\n\n'); }

// ═══════════════════════════════════════
// SIGNATURE
// ═══════════════════════════════════════
function getSig(){
  const h=CFG.handle,l=CFG.location,p=CFG.phone;
  if(!h&&!l&&!p) return '';
  if(S.network==='tiktok') return h?`\n${h}`:'';
  if(S.network==='instagram') return '\n'+[h,l,p].filter(Boolean).join(' | ');
  if(S.network==='whatsapp'||S.network==='telegram'){
    const div=E('divider')||'───────────────';
    let lines=[`\n${div}`];
    if(h)lines.push(`${E('sig_handle')} ${h}`.trim());
    if(l)lines.push(`${E('sig_location')} ${l}`.trim());
    if(p)lines.push(`${E('sig_phone')} ${p}`.trim());
    return lines.join('\n');
  }
  return '\n'+[h,l,p].filter(Boolean).join(' | ');
}

// ═══════════════════════════════════════
// CAPTION BLOCKS
// ═══════════════════════════════════════
// Price-tier block (wholesale/retail). newArrow lets Price Drop variant override
// the new-price prefix (📦/🛍️ instead of universal 👉) to preserve tier identity
// in a context where the header doesn't declare a sale.
function buildTierBlock(slot, tier, newArrow){
  if(!slot) return '';
  const label = L(tier);
  const sec   = E(tier==='wholesale' ? 'section_wholesale' : 'section_retail');
  const head  = `${sec} ${B(label)}`;
  if(!S.showPrices) return head;
  const status = slot.status;
  if(status==='out_of_stock') return '';
  const price = slot.price;
  if(!price) return '';
  const qty = slot.qty||'1';
  const arrow = newArrow || E('price_arrow');
  const lines = [head];
  if(slot.ogOn && slot.og){
    lines.push(oldPriceLine(qty, slot.og));
    lines.push(newPriceLine(arrow, qty, price));
  } else {
    lines.push(newPriceLine(arrow, qty, price));
  }
  if(status==='low_stock') lines.push(`${E('status_low')} ${L('low_stock')}`);
  return clean(lines.join('\n'));
}
function getWBlock(){ return S.mode==='single' ? buildTierBlock(S.w, 'wholesale') : ''; }
function getRBlock(){ return S.mode==='single' ? buildTierBlock(S.r, 'retail')    : ''; }
// Build a pricing block for one variant: size-anchor heading + per-side price
// lines. Hidden variants return ''. When showPrices=false the anchor still
// renders but all price lines are stripped.
function getVariantBlock(v){
  if(!v || v.visible===false) return '';
  const suffix=variantSplit(v.name||'');
  if(!suffix) return '';
  const anchor = `${E('variant_anchor')} ${B(suffix)}`;
  if(!S.showPrices) return clean(anchor);
  const lines=[];
  const pa=E('price_arrow');
  // Price Drop exception: new-price prefix is 📦/🛍️ per tier. Flash + Standard
  // variants use universal 👉 (flash declares sale context via ⚡ header).
  const wArrow = (S.type==='price_drop') ? E('section_wholesale') : pa;
  const rArrow = (S.type==='price_drop') ? E('section_retail')    : pa;
  const isFlash = S.type==='flash';
  const wHasFlash = isFlash && v.w && v.w.flashPrice;
  const rHasFlash = isFlash && v.r && v.r.flashPrice;
  // Wholesale side — skip when flashPrice set (the flash block below covers the strike→new pair)
  if(!wHasFlash && v.w && v.w.price && v.w.status!=='out_of_stock'){
    const qty = v.w.qty||'1';
    if(v.w.og){
      lines.push(oldPriceLine(qty, v.w.og));
      lines.push(newPriceLine(wArrow, qty, v.w.price));
    } else {
      lines.push(newPriceLine(wArrow, qty, v.w.price));
    }
    if(v.w.status==='low_stock') lines.push(`${E('status_low')} ${L('low_stock')}`);
  }
  // Retail side — same guard
  if(!rHasFlash && v.r && v.r.price && v.r.status!=='out_of_stock'){
    const qty = v.r.qty||'1';
    if(v.r.og){
      lines.push(oldPriceLine(qty, v.r.og));
      lines.push(newPriceLine(rArrow, qty, v.r.price));
    } else {
      lines.push(newPriceLine(rArrow, qty, v.r.price));
    }
    if(v.r.status==='low_stock') lines.push(`${E('status_low')} ${L('low_stock')}`);
  }
  // Flash side (only in flash type) — universal pattern with ⚡ declared above
  if(S.type==='flash'){
    if(v.w && v.w.flashPrice){
      const oldQty = v.w.qty||'1';
      const newQty = v.w.flashQty||oldQty;
      if(v.w.price) lines.push(oldPriceLine(oldQty, v.w.price));
      lines.push(newPriceLine(pa, newQty, v.w.flashPrice));
    }
    if(v.r && v.r.flashPrice){
      const oldQty = v.r.qty||'1';
      const newQty = v.r.flashQty||oldQty;
      if(v.r.price) lines.push(oldPriceLine(oldQty, v.r.price));
      lines.push(newPriceLine(pa, newQty, v.r.flashPrice));
    }
  }
  if(!lines.length) return clean(anchor);
  return clean(`${anchor}\n${lines.join('\n')}`);
}
function getVariantLines(){
  const blocks=S.variants.map(getVariantBlock).filter(Boolean);
  return blocks.length ? blocks.join('\n\n') : null;
}
function getOutOfStockBlock(){
  return clean(`${E('status_out')} ${B(L('out_of_stock'))}`);
}

// Empty-state-aware body builders.
// Only fall back to "out of stock" when the user actually selected that status —
// otherwise leave the body empty (header alone is sufficient placeholder while typing).
function priceBody(){
  const blocks=[getWBlock(),getRBlock()].filter(Boolean);
  if(blocks.length) return blocks.join('\n\n');
  if(S.w.status==='out_of_stock'||S.r.status==='out_of_stock') return getOutOfStockBlock();
  return '';
}
function variantBody(){
  return getVariantLines() || '';
}

// DM-prices CTA shown between empty price area and signature when showPrices=false.
function dmPricesLine(){
  return `${E('cta_dm')} ${L('dm_prices')}`;
}
function assembleSingle(header, body, footer=''){
  const div=platformDivider(); const sig=getSig();
  const desc=descLine();
  let out=header;
  if(desc) out+=`\n\n${desc}`;
  const joiner = div ? `\n${div}\n\n` : `\n\n`;
  if(body && body.trim()) out+=`${joiner}${body}`;
  if(footer){
    if(body && body.trim()) out+=`\n\n${footer}`;
    else out+=`${joiner}${footer}`;
  }
  if(!S.showPrices){
    out+=`\n\n${dmPricesLine()}`;
  }
  if(sig) out+=`\n${sig}`;
  return out;
}
// ═══════════════════════════════════════
// CAPTION BUILDERS
// ═══════════════════════════════════════
function buildStandard(){
  const name=(S.name||'').trim()||'—';
  const h=clean(`${E('header_product')} ${B(name)}`);
  if(S.mode==='variant') return assembleSingle(h, variantBody());
  return assembleSingle(h, priceBody());
}

function buildFlash(){
  const name=(S.name||'').trim()||'—';
  const flashHead=clean(`${E('header_flash')} ${B(L('flash_today'))} ${E('header_flash')}`);
  const famHead=clean(`${E('header_product')} ${B(name)}`);
  const pa=E('price_arrow');
  if(S.mode==='variant'){
    const lines=getVariantLines();
    const body = lines ? `${famHead}\n\n${lines}` : famHead;
    const footer = S.showPrices ? L('limited_time') : '';
    return assembleSingle(flashHead, body, footer);
  }
  let body = famHead;
  if(S.showPrices){
    if(S.w.flashPrice){
      const oldQty = S.w.qty||'1';
      if(S.w.price) body += '\n'+clean(oldPriceLine(oldQty, S.w.price));
      const newQty = S.w.flashQty||oldQty;
      body += '\n'+clean(newPriceLine(pa, newQty, S.w.flashPrice));
    } else {
      const wBlock = getWBlock(); if(wBlock) body += '\n\n'+wBlock;
      const rBlock = getRBlock(); if(rBlock) body += '\n\n'+rBlock;
    }
  }
  const footer = S.showPrices ? L('limited_time') : '';
  return assembleSingle(flashHead, body, footer);
}

// Price Drop single-mode tier line: universal old→new pattern, but the new-price
// prefix is the section emoji (📦/🛍️) instead of 👉, since the header doesn't
// declare a sale context — tier identity must ride the arrow.
function priceDropTier(slot, tier){
  const label = L(tier);
  const sec   = E(tier==='wholesale' ? 'section_wholesale' : 'section_retail');
  const head  = `${sec} ${B(label)}`;
  if(!S.showPrices) return head;
  if(!slot || slot.status==='out_of_stock' || !slot.price) return '';
  const qty = slot.qty||'1';
  const lines = [head];
  if(slot.og){
    lines.push(oldPriceLine(qty, slot.og));
    lines.push(newPriceLine(sec, qty, slot.price));
    const pct = Math.round((1 - Number(slot.price)/Number(slot.og))*100);
    if(pct>0) lines.push(L('you_save_pct').replace('%p',pct));
  } else {
    lines.push(newPriceLine(sec, qty, slot.price));
  }
  if(slot.status==='low_stock') lines.push(`${E('status_low')} ${L('low_stock')}`);
  return clean(lines.join('\n'));
}
function buildPriceDrop(){
  const name=(S.name||'').trim()||'—';
  const h=clean(`${E('header_drop')} ${B(`${name} — ${L('price_drop')}`)}`);
  const intro=S.showPrices ? L('prices_slashed') : '';
  let pb;
  if(S.mode==='variant'){
    pb=variantBody();
  } else if(!S.showPrices){
    const blocks=[priceDropTier(S.w,'wholesale'), priceDropTier(S.r,'retail')].filter(Boolean);
    pb=blocks.join('\n\n');
  } else {
    const blocks=[priceDropTier(S.w,'wholesale'), priceDropTier(S.r,'retail')].filter(Boolean);
    if(blocks.length) pb=blocks.join('\n\n');
    else if(S.w.status==='out_of_stock'||S.r.status==='out_of_stock') pb=getOutOfStockBlock();
    else pb='';
  }
  const body = intro && pb ? `${intro}\n\n${pb}` : (intro || pb || '');
  return assembleSingle(h, body);
}

// ═══════════════════════════════════════
// HASHTAGS — TT + IG only. Three tiers concatenated with spaces:
// 1) type-auto per-language, 2) per-caption (S.hashtags), 3) global CFG.hashtags.
// IG prepends `.\n.\n.\n` buffer to keep tags out of feed preview.
// ═══════════════════════════════════════
function typeAutoHashtags(){
  if(S.type==='flash'){
    return S.lang==='sw' ? '#flashsale #leotu' : '#flashsale #todayonly';
  }
  if(S.type==='price_drop'){
    return S.lang==='sw' ? '#pricedrop #beiimeshuka' : '#pricedrop #priceslashed';
  }
  return '';
}
function maybeAddHashtags(text){
  if(S.network!=='instagram' && S.network!=='tiktok') return text;
  const tiers=[typeAutoHashtags(), (S.hashtags||'').trim(), (CFG.hashtags||'').trim()].filter(Boolean);
  if(!tiers.length) return text;
  const tags=tiers.join(' ');
  const sep = S.network==='instagram' ? '\n.\n.\n.\n' : '\n\n';
  return text+sep+tags;
}

// ═══════════════════════════════════════
// PREVIEW ENGINE
// ═══════════════════════════════════════
function regen(){
  if(S.previewEdited) return;
  const box=document.getElementById('previewBox');
  if(!S.type){
    box.value=L('pick_prompt');
    box.classList.add('placeholder');
    updateCharCounter();
    return;
  }
  const def=REGISTRY.find(r=>r.id===S.type); if(!def)return;
  let text=clean(def.build());
  text=maybeAddHashtags(text);
  box.value=text;
  box.classList.remove('placeholder');
  updateCharCounter();
}
function onPreviewEdit(){
  if(!S.type)return;
  S.previewEdited=true;
  document.getElementById('resetPill').classList.add('show');
  document.getElementById('previewBox').classList.remove('placeholder');
  updateCharCounter();
}
function resetPreview(){ S.previewEdited=false; document.getElementById('resetPill').classList.remove('show'); regen(); }
function updateCharCounter(){ const el=document.getElementById('charCounter'); const ml=maxLen(); if(!ml){el.classList.remove('show');return;} const len=document.getElementById('previewBox').value.length; el.textContent=`${len}/${ml}`; el.classList.add('show'); el.classList.toggle('warn',len>ml*0.8&&len<=ml); el.classList.toggle('over',len>ml); }

function updatePreviewMeta(){
  const el=document.getElementById('previewMeta');
  if(!el) return;
  const platform=PLATFORMS[S.network]?.fullLabel||'';
  const type=currentTypeLabel();
  const parts=[];
  if(platform) parts.push(platform);
  if(type) parts.push(type);
  el.textContent=parts.length?' · '+parts.join(' · '):'';
}

// ═══════════════════════════════════════
// COPY
// ═══════════════════════════════════════
const COPY_SVG='<svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="9" height="9" rx="1.5"/><path d="M11 5V3a1.5 1.5 0 0 0-1.5-1.5h-6A1.5 1.5 0 0 0 2 3v6A1.5 1.5 0 0 0 3.5 10.5H5"/></svg>';
const CHECK_SVG='<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 8 7 12 13 4"/></svg>';
async function doCopy(){
  const text=document.getElementById('previewBox').value;
  if(!text||text===L('pick_prompt')) return;
  const btn=document.getElementById('copyBtn');
  const mini=document.getElementById('miniCopyBtn');
  let clipboardOk=false;
  try {
    await navigator.clipboard.writeText(text);
    clipboardOk=true;
  } catch(e) { /* fall through */ }
  autoSaveProduct(text);
  if(clipboardOk){
    btn.textContent=L('copied'); btn.classList.add('done');
    if(mini){ mini.innerHTML=CHECK_SVG; mini.classList.add('done'); }
  } else {
    btn.textContent='✗ blocked — saved'; btn.classList.add('done');
    showToast('clipboard blocked — saved to vault');
  }
  setTimeout(()=>{
    btn.textContent=L('copy'); btn.classList.remove('done');
    if(mini){ mini.innerHTML=COPY_SVG; mini.classList.remove('done'); }
  },2500);
}

// ═══════════════════════════════════════
// TELEGRAM WEB APP INTEGRATION
// ═══════════════════════════════════════
const TG = window.Telegram?.WebApp;
const IN_TG = !!TG && TG.initData !== undefined && TG.initData !== '';

function tgInit() {
  if (!IN_TG) return;
  TG.ready(); TG.expand();
  document.body.classList.add('in-tg');
  // Dark theme always — our design is dark-only
  try { TG.setHeaderColor('#0a0a0a'); TG.setBackgroundColor('#0a0a0a'); } catch(e){}
  TG.MainButton.setText('send to chat');
  TG.MainButton.color = '#7ee787';
  TG.MainButton.textColor = '#0a0a0a';
  TG.MainButton.onClick(()=>{
    const text = document.getElementById('previewBox').value;
    if (!text || text === L('pick_prompt')) return;
    sendCaption(text);
  });
  updateTgMainBtn();
}
function updateTgMainBtn() {
  if (!IN_TG) return;
  const text = document.getElementById('previewBox').value;
  const ready = !!S.type && text && text !== L('pick_prompt');
  if (ready) TG.MainButton.show(); else TG.MainButton.hide();
}

// Patch regen + onPreviewEdit to also update the MainButton visibility
const _regen = regen;
regen = function(){ _regen.apply(this, arguments); updateTgMainBtn(); };
const _onPreviewEdit = onPreviewEdit;
onPreviewEdit = function(){ _onPreviewEdit.apply(this, arguments); updateTgMainBtn(); };

// ═══════════════════════════════════════
// NEW UI LAYER (phased interaction)
// ═══════════════════════════════════════

// --- type chip ---
function updateTypeChip(){
  const chip=document.getElementById('typeChip');
  if(!chip) return;
  if(!S.type){ chip.textContent='—'; return; }
  const def=REGISTRY.find(r=>r.id===S.type);
  const icon={standard:'🛒',flash:'⚡',price_drop:'📉'}[S.type]||'▸';
  chip.textContent=`${icon} ${def?def.label.toLowerCase():S.type}`;
}

// --- name ---
function onNameInput(){
  const chip=document.getElementById('nameChip');
  if(chip) chip.textContent = S.name ? '• ' + S.name : '';
  if(typeof renderSuggestions==='function') renderSuggestions();
  regen();
}
function onDescInput(){
  S.description = document.getElementById('descBox')?.value || '';
  regen();
}
function toggleDescription(){
  const box=document.getElementById('descBox');
  const btn=document.getElementById('descToggle');
  if(!box||!btn) return;
  const open = box.classList.toggle('show');
  btn.textContent = open ? '− description' : '+ description';
  if(open){ box.focus(); }
}
function revealDescription(){
  const box=document.getElementById('descBox');
  const btn=document.getElementById('descToggle');
  if(!box||!btn) return;
  box.classList.add('show');
  btn.textContent = '− description';
}
function collapseDescription(){
  const box=document.getElementById('descBox');
  const btn=document.getElementById('descToggle');
  if(!box||!btn) return;
  box.classList.remove('show');
  btn.textContent = '+ description';
}
function focusName(){
  // Un-hide name field before focusing (CSS may hide it when focus-price is active)
  document.body.classList.remove('focus-price');
  requestAnimationFrame(()=>{
    const el=document.getElementById('productName');
    if(el){ el.focus(); el.select(); }
  });
}
function focusPrice(){
  document.body.classList.remove('focus-name');
  requestAnimationFrame(()=>{
    const el=document.getElementById('priceField');
    if(el) el.focus();
  });
}

// --- price smart parser ---
// Accepts: "1200", "1200 10", "1200,1500", "1200,1500 10", "1200 10 low", "1200 10 out"
// (~ also accepted as old-price separator for backward compat)
// Universal pricing format: `price[,oldprice] [qty|stock] [stock|qty]`
// Qty = numeric token. Stock = string token (in / low / out / none).
// Order of trailing tokens doesn't matter — type disambiguates.
function parsePriceFormat(raw){
  const text=(raw||'').trim();
  const out={ price:'', og:'', qty:'', status:null };
  if(!text) return out;
  const tokens=text.split(/\s+/).filter(Boolean);
  const first=tokens[0];
  const sep = first.includes(',') ? ',' : first.includes('~') ? '~' : null;
  if(sep){
    const [p,o]=first.split(sep);
    out.price=(p||'').replace(/[^\d.]/g,'');
    out.og=(o||'').replace(/[^\d.]/g,'');
  } else {
    out.price=first.replace(/[^\d.]/g,'');
  }
  for(const t of tokens.slice(1)){
    const low=t.toLowerCase();
    if(/^\d+$/.test(t)){ if(!out.qty) out.qty=t; continue; }
    if(low==='low'||low==='low_stock') out.status='low_stock';
    else if(low==='out'||low==='out_of_stock'||low==='none') out.status='out_of_stock';
    else if(low==='in'||low==='in_stock') out.status='in_stock';
  }
  return out;
}

// Family wholesale (or flash, when type=flash) input handler.
// In variants mode this represents family/carton wholesale; per-variant
// pricing is captured in the variant panel, not here.
function parsePriceInput(raw){
  const p=parsePriceFormat(raw);
  if(S.type==='flash' && S.mode!=='variant'){
    S.w.flashPrice=p.price;
    S.w.flashQty=p.qty||'';
    if(p.status) S.w.status=p.status;
  } else {
    S.w.price=p.price;
    if(p.qty) S.w.qty=p.qty;
    if(p.og){ S.w.og=p.og; S.w.ogOn=true; }
    else { S.w.ogOn=false; S.w.og=''; }
    if(p.status) S.w.status=p.status;
  }
  updatePriceChip();
  updateChipRail();
  regen();
}
function updatePriceChip(){
  const chip=document.getElementById('priceChip'); if(!chip) return;
  // priceField represents family wholesale (or family flash when type=flash).
  // In variants mode the family wholesale = optional carton price.
  const isFlash = S.type==='flash' && S.mode!=='variant';
  const p = isFlash ? S.w.flashPrice : S.w.price;
  const og = isFlash ? '' : S.w.og;
  const q = isFlash ? (S.w.flashQty||S.w.qty) : S.w.qty;
  if(!p){ chip.textContent=''; return; }
  let parts=[`${CC()} ${fmt(p)}`];
  if(og) parts.push(`,${fmt(og)}`);
  if(q && q!=='1') parts.push(`×${q}`);
  chip.textContent='• '+parts.join(' ');
}
function showPriceHint(show){ /* hint visibility driven by :focus-within CSS; kept for API */ }

// --- focus step (keyboard-up collapsing) ---
function setFocusStep(step){
  document.body.classList.remove('focus-name','focus-price','kb-up');
  if(step){
    document.body.classList.add('focus-'+step, 'kb-up');
  }
}

// --- chip rail (platform / lang / prices) ---
// Stock lives inline in the price field (e.g. "500 10 low"), not as a chip.
function updateChipRail(){
  const p=document.getElementById('chipPlatformV');
  if(p) p.textContent = (PLATFORMS[S.network]?.fullLabel || S.network || '').toLowerCase();
  const l=document.getElementById('chipLangV'); if(l) l.textContent=S.lang;
  const pc=document.getElementById('chipPricesV'); if(pc) pc.textContent = S.showPrices ? 'on' : 'off';
  const tagsInput = document.getElementById('captionTags');
  if(tagsInput){
    const isTagNet = S.network==='tiktok' || S.network==='instagram';
    tagsInput.style.display = isTagNet ? '' : 'none';
    if(tagsInput.value !== (S.hashtags||'')) tagsInput.value = S.hashtags || '';
  }
}
function togglePrices(){
  S.showPrices = !S.showPrices;
  updateChipRail();
  regen();
}
function onCaptionTagsInput(){
  const el=document.getElementById('captionTags');
  S.hashtags = el ? el.value : '';
  regen();
}
function parseRetailString(raw){
  const p=parsePriceFormat(raw);
  S.r.price=p.price||'';
  S.r.qty=p.qty||'';
  S.r.og=p.og||'';
  S.r.ogOn=!!p.og;
  if(p.status) S.r.status=p.status;
  else if(!raw||!raw.trim()) S.r.status='in_stock';
}
function onRetailInput(raw){
  parseRetailString(raw);
  regen();
}
function toggleRetail(){
  const box=document.getElementById('retailField');
  const btn=document.getElementById('retailToggle');
  if(!box||!btn) return;
  // Family retail is mutually exclusive with variants mode.
  // Tapping + retail while in variants exits variants (data preserved).
  if(S.mode==='variant'){
    setMode('single');
    box.classList.add('show');
    btn.textContent='− retail';
    box.value = S.r.price
      ? (S.r.og?`${S.r.price},${S.r.og}`:S.r.price) + (S.r.qty && S.r.qty!=='1' ? ` ${S.r.qty}` : '')
      : '';
    box.focus();
    return;
  }
  const open=box.classList.toggle('show');
  btn.textContent = open ? '− retail' : '+ retail';
  if(open){ box.focus(); }
  else { parseRetailString(''); regen(); }
}
function revealRetail(){
  const box=document.getElementById('retailField');
  const btn=document.getElementById('retailToggle');
  if(!box||!btn) return;
  box.classList.add('show');
  btn.textContent='− retail';
  // reflect current S.r into input
  const disp = S.r.price
    ? (S.r.og ? `${S.r.price},${S.r.og}` : S.r.price) + (S.r.qty && S.r.qty!=='1' ? ` ${S.r.qty}` : '')
    : '';
  box.value = disp;
}
function collapseRetail(){
  const box=document.getElementById('retailField');
  const btn=document.getElementById('retailToggle');
  if(!box||!btn) return;
  box.classList.remove('show');
  btn.textContent='+ retail';
  box.value='';
}

// --- side panels ---
function showPanel(id){
  document.getElementById('backdrop')?.classList.add('show');
  document.getElementById(id)?.classList.add('show');
}
const ALL_PANELS=['settingsPanel','typesPanel','pickerPanel','vaultPanel','importPanel','previewPanel'];
function hidePanel(id){
  document.getElementById(id)?.classList.remove('show');
  const anyOpen = ALL_PANELS.some(p=>document.getElementById(p)?.classList.contains('show'));
  if(!anyOpen) document.getElementById('backdrop')?.classList.remove('show');
}
function closeAllPanels(){
  ALL_PANELS.forEach(p=>document.getElementById(p)?.classList.remove('show'));
  document.getElementById('backdrop')?.classList.remove('show');
}
// override toggleSettings to use panel API
const _toggleSettings_orig = toggleSettings;
toggleSettings = function(){
  const p=document.getElementById('settingsPanel');
  if(p?.classList.contains('show')) hidePanel('settingsPanel');
  else showPanel('settingsPanel');
};

// --- types panel ---
function openTypesPanel(){
  const list=document.getElementById('typesList'); if(!list) return;
  const avail=REGISTRY.filter(r=>r.nets.includes(S.network));
  list.innerHTML = avail.map(r=>{
    const icon={standard:'🛒',flash:'⚡',price_drop:'📉'}[r.id]||'▸';
    return `<button class="type-row${S.type===r.id?' on':''}" onclick="pickTypeFromPanel('${r.id}')">${icon} ${r.label.toLowerCase()}</button>`;
  }).join('');
  showPanel('typesPanel');
}
function closeTypesPanel(){ hidePanel('typesPanel'); }
function pickTypeFromPanel(id){
  closeTypesPanel();
  selectType(id);
}

// --- generic picker (platform, tone, lang) ---
let _pickerField = null;
function openPicker(field){
  _pickerField = field;
  const title=document.getElementById('pickerTitle');
  const list=document.getElementById('pickerList');
  if(!title||!list) return;
  let rows=[], current='';
  if(field==='platform'){
    title.textContent = '▸ platform';
    current = S.network;
    rows = Object.keys(PLATFORMS).map(k=>({ id:k, label:(PLATFORMS[k].fullLabel||k).toLowerCase() }));
  } else if(field==='lang'){
    title.textContent = '▸ language';
    current = S.lang;
    rows = [{id:'en',label:'english'},{id:'sw',label:'swahili'}];
  }
  list.innerHTML = rows.map(r=>`<button class="picker-row${r.id===current?' on':''}" onclick="pickFromPanel('${r.id}')">${r.label}</button>`).join('');
  showPanel('pickerPanel');
}
function closePicker(){ hidePanel('pickerPanel'); _pickerField=null; }
function pickFromPanel(id){
  if(_pickerField==='platform') selectNetwork(id);
  else if(_pickerField==='lang') setLang(id);
  closePicker();
  updateChipRail();
}

// --- clear: two flavors ---
function clearAll(){
  S.type=null;
  clearForm(); // resets name + prices + extras
  S.description='';
  const db=document.getElementById('descBox'); if(db) db.value='';
  collapseDescription();
  document.body.classList.remove('has-type','focus-name','focus-price','kb-up');
  document.body.classList.add('no-type');
  const p=document.getElementById('priceField'); if(p) p.value='';
  updateTypeChip();
  updatePriceChip();
  updateChipRail();
  renderFields();
  updatePreviewMeta();
  regen();
  closeAllPanels();
}
// After sending from Telegram, we clear name+price but keep type/platform
function resetAfterSend(){
  S.name='';
  S.w.price=''; S.w.qty=''; S.w.og=''; S.w.ogOn=false; S.w.flashPrice=''; S.w.flashQty='';
  S.r.price=''; S.r.qty=''; S.r.og=''; S.r.ogOn=false; S.r.flashPrice=''; S.r.flashQty='';
  S.variants=[]; S.activeVariantId=null; S.mode='single';
  document.body.classList.remove('mode-variant');
  S.description=''; S.hashtags=''; S.showPrices=true;
  S.previewEdited=false;
  const n=document.getElementById('productName'); if(n) n.value='';
  const p=document.getElementById('priceField'); if(p) p.value='';
  const db=document.getElementById('descBox'); if(db) db.value='';
  collapseDescription();
  collapseRetail();
  renderVariantChips();
  renderVariantPanel();
  onNameInput();
  updatePriceChip();
  updateChipRail();
  regen();
  setTimeout(focusName, 200);
}

// ═══════════════════════════════════════
// SEND / AUTO-SAVE / TOAST
// ═══════════════════════════════════════
function sendCaption(text){
  // 1. clipboard (best-effort; may fail on some older browsers)
  try { if(navigator.clipboard) navigator.clipboard.writeText(text); } catch(e){}
  // 2. send to Telegram chat
  try { if(IN_TG) TG.sendData(text); } catch(e){}
  // 3. haptic ack
  try { if(IN_TG && TG.HapticFeedback) TG.HapticFeedback.notificationOccurred('success'); } catch(e){}
  // 4. memory
  autoSaveProduct(text);
  // 5. user feedback
  showToast(IN_TG ? '✓ sent to chat · copied' : '✓ copied');
  // 6. clear name+price, keep type
  resetAfterSend();
}

function stateSnapshot(){
  return {
    name: S.name || '',
    description: (document.getElementById('descBox')?.value || '').trim(),
    wholesale: { price:S.w.price, qty:S.w.qty, og:S.w.og, ogOn:S.w.ogOn, status:S.w.status, flashPrice:S.w.flashPrice, flashQty:S.w.flashQty },
    retail:    { price:S.r.price, qty:S.r.qty, og:S.r.og, ogOn:S.r.ogOn, status:S.r.status, flashPrice:S.r.flashPrice, flashQty:S.r.flashQty },
    mode: S.mode,
    variants: JSON.parse(JSON.stringify(S.variants || [])),
    lastType: S.type || '',
    lastPlatform: S.network || '',
    lastLang: S.lang || '',
  };
}
function autoSaveProduct(lastCaption){
  if(typeof productUpsert!=='function') return;
  const name=(S.name||'').trim();
  if(!name) return;
  const snap = stateSnapshot();
  snap.lastCaption = lastCaption || '';
  snap.source = 'sent';
  productUpsert(snap);
}

let _toastTimer=null;
function showToast(msg){
  const t=document.getElementById('toast');
  if(!t) return;
  t.textContent=msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer=setTimeout(()=>t.classList.remove('show'), 1800);
}

// ═══════════════════════════════════════
// SUGGESTIONS (below name input)
// ═══════════════════════════════════════
function renderSuggestions(){
  const strip=document.getElementById('suggestStrip');
  if(!strip||typeof productsAll!=='function') return;
  const q=(S.name||'').trim();
  const results = q ? productsSearch(q) : productsAll();
  const top = results.slice(0, 4);
  if(!top.length && !productsCount()){
    strip.innerHTML=''; strip.classList.remove('show');
    return;
  }
  const chips = top.map(p=>`<button class="sg-chip" onclick="pickProduct('${p.id}')" title="${esc(p.description||'')}">${esc(p.name)}</button>`).join('');
  const vaultChip = `<button class="sg-chip sg-all" onclick="openVault()">⋯ all (${productsCount()})</button>`;
  strip.innerHTML = chips + vaultChip;
  strip.classList.add('show');
}
function hideSuggestions(){
  const strip=document.getElementById('suggestStrip');
  if(strip){ strip.classList.remove('show'); }
}
function esc(s){ return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function pickProduct(id){
  const p = productById(id);
  if(!p) return;
  // 1. name
  S.name = p.name;
  const n=document.getElementById('productName'); if(n) n.value=p.name;
  // 2. description
  const desc = p.description || '';
  const db = document.getElementById('descBox');
  if(db){ db.value = desc; }
  S.description = desc;
  if(desc) revealDescription(); else collapseDescription();
  // 3. wholesale
  if(p.wholesale){
    S.w.price      = p.wholesale.price      || '';
    S.w.qty        = p.wholesale.qty        || '';
    S.w.og         = p.wholesale.og         || '';
    S.w.ogOn       = !!p.wholesale.ogOn;
    S.w.status     = p.wholesale.status     || 'in_stock';
    S.w.flashPrice = p.wholesale.flashPrice || '';
    S.w.flashQty   = p.wholesale.flashQty   || '';
  }
  // 4. retail
  if(p.retail){
    S.r.price      = p.retail.price      || '';
    S.r.qty        = p.retail.qty        || '';
    S.r.og         = p.retail.og         || '';
    S.r.ogOn       = !!p.retail.ogOn;
    S.r.status     = p.retail.status     || 'in_stock';
    S.r.flashPrice = p.retail.flashPrice || '';
    S.r.flashQty   = p.retail.flashQty   || '';
  }
  // 5. legacy flash migration: old records carried top-level `flash:{price,og}` →
  // fold price into S.w.flashPrice; the old `og` was a duplicate "was" — drop it
  // (regular S.w.price already carries the crossed-out baseline under the new pattern).
  if(p.flash && !S.w.flashPrice){
    S.w.flashPrice = p.flash.price || '';
    S.w.flashQty   = S.w.qty || '';
  }
  // 6. mode + variants (migrate legacy {rawInput,price} chip-row data into full slots)
  if(p.mode) S.mode = p.mode;
  if(Array.isArray(p.variants)){
    S.variants = p.variants.map(v => {
      const slot = newVariantSlot();
      slot.id = v.id || slot.id;
      if(typeof v.name === 'string') slot.name = v.name;
      else if(typeof v.rawInput === 'string') slot.name = v.rawInput;
      if(v.w) Object.assign(slot.w, v.w);
      if(v.r) Object.assign(slot.r, v.r);
      // Legacy slot had v.flash:{price,og} — migrate price into w.flashPrice.
      if(v.flash && !slot.w.flashPrice){
        slot.w.flashPrice = v.flash.price || '';
        slot.w.flashQty   = slot.w.qty || '';
      }
      // Legacy shape had a flat v.price → fold it into wholesale.
      if(!slot.w.price && v.price) slot.w.price = v.price;
      if(typeof v.visible === 'boolean') slot.visible = v.visible;
      return slot;
    });
  } else {
    S.variants = [];
  }
  S.activeVariantId = null;
  // 7. last session context — auto-select type; detect falls back to standard
  if(p.lastPlatform && PLATFORMS[p.lastPlatform]) S.network = p.lastPlatform;
  if(p.lastLang) { S.lang = p.lastLang; setLang(p.lastLang); }
  const resolvedType = (p.lastType && REGISTRY.find(r=>r.id===p.lastType)) ? p.lastType : 'standard';
  if(resolvedType !== S.type) selectType(resolvedType);
  // 8. reflect price field + chips
  const pf = document.getElementById('priceField');
  if(pf){
    const isFlash = S.type==='flash';
    const p0 = (isFlash ? S.w.flashPrice : S.w.price) || '';
    const og0 = (isFlash ? '' : (S.w.ogOn ? S.w.og : '')) || '';
    const q0 = isFlash ? (S.w.flashQty||S.w.qty) : S.w.qty;
    let disp = p0;
    if(og0) disp = `${p0},${og0}`;
    if(q0 && q0 !== '1') disp += ` ${q0}`;
    pf.value = disp;
  }
  if(S.r.price) revealRetail(); else collapseRetail();
  onNameInput();
  renderFields();
  updatePriceChip();
  updateChipRail();
  hideSuggestions();
  regen();
  focusPrice();
}

// ═══════════════════════════════════════
// VAULT PANEL
// ═══════════════════════════════════════
function openVault(){
  const search=document.getElementById('vaultSearch');
  if(search) search.value='';
  resetWipeConfirm();
  renderVault();
  showPanel('vaultPanel');
}
function renderVault(){
  const listEl=document.getElementById('vaultList');
  const countEl=document.getElementById('vaultCount');
  if(!listEl) return;
  const q=(document.getElementById('vaultSearch')?.value||'').trim();
  const rows = q ? productsSearch(q) : productsAll();
  if(countEl) countEl.textContent = '('+productsCount()+')';
  if(!rows.length){
    listEl.innerHTML = '<div class="vault-empty">'+(productsCount()?'no matches':'no products yet — sent captions auto-save here')+'</div>';
    return;
  }
  listEl.innerHTML = rows.map(p=>{
    const when = p.lastUsedAt ? timeAgo(p.lastUsedAt) : '';
    const desc = p.description ? esc(p.description) : '';
    const platform = p.lastPlatform ? `<span class="vr-pf">${esc(p.lastPlatform)}</span>` : '';
    return `<div class="vault-row" data-id="${p.id}">
      <button class="vr-main" onclick="pickFromVault('${p.id}')">
        <div class="vr-name">${esc(p.name)}</div>
        ${desc?`<div class="vr-desc">${desc}</div>`:''}
        <div class="vr-meta">${platform}<span class="vr-when">${when}</span></div>
      </button>
      <button class="vr-ex" onclick="exportOne('${p.id}')" title="export">↓</button>
      <button class="vr-del" onclick="vaultDelete('${p.id}')" title="delete">×</button>
    </div>`;
  }).join('');
}
function pickFromVault(id){
  hidePanel('vaultPanel');
  pickProduct(id);
}
function vaultDelete(id){
  if(typeof productDelete!=='function') return;
  productDelete(id);
  renderVault();
  renderSuggestions();
}
let _wipeArmed=false, _wipeTimer=null;
function vaultWipeRequest(){
  const btn=document.getElementById('vaultWipeBtn');
  if(!btn) return;
  if(!_wipeArmed){
    _wipeArmed=true;
    btn.textContent = `confirm · ${productsCount()}`;
    btn.classList.add('armed');
    clearTimeout(_wipeTimer);
    _wipeTimer=setTimeout(resetWipeConfirm, 3000);
    return;
  }
  productsWipe();
  resetWipeConfirm();
  renderVault();
  renderSuggestions();
  showToast('✓ wiped');
}
function resetWipeConfirm(){
  _wipeArmed=false;
  clearTimeout(_wipeTimer);
  const btn=document.getElementById('vaultWipeBtn');
  if(btn){ btn.textContent='wipe'; btn.classList.remove('armed'); }
}
function timeAgo(ts){
  const d = Date.now()-ts;
  if(d<60000) return 'just now';
  if(d<3600000) return Math.floor(d/60000)+'m';
  if(d<86400000) return Math.floor(d/3600000)+'h';
  if(d<604800000) return Math.floor(d/86400000)+'d';
  return Math.floor(d/604800000)+'w';
}

// ═══════════════════════════════════════
// IMPORT
// ═══════════════════════════════════════
function openImportPanel(){
  hidePanel('vaultPanel');
  const t=document.getElementById('importText'); if(t) t.value='';
  renderImportPreview();
  showPanel('importPanel');
}
function renderImportPreview(){
  const text=document.getElementById('importText')?.value||'';
  const box=document.getElementById('importPreview');
  const btn=document.getElementById('importCommitBtn');
  if(!box||typeof productsImportPreview!=='function') return;
  if(!text.trim()){ box.innerHTML=''; if(btn) btn.disabled=true; return; }
  const pv = productsImportPreview(text);
  if(pv.error){
    box.innerHTML = `<div class="ip-err">${esc(pv.error)}</div>`;
    if(btn) btn.disabled = true;
    return;
  }
  if(btn) btn.disabled = !pv.rows.length;
  const rows = pv.rows.slice(0,20).map(r=>`<div class="ip-row ip-${r.match}"><span class="ip-tag">${r.match}</span> ${esc(r.name)}${r.description?' · '+esc(r.description):''}</div>`).join('');
  const more = pv.rows.length>20 ? `<div class="ip-more">+${pv.rows.length-20} more…</div>` : '';
  box.innerHTML = `<div class="ip-summary">new <b>${pv.newCount}</b> · update <b>${pv.updateCount}</b>${pv.skipCount?` · skip <b>${pv.skipCount}</b>`:''}</div>${rows}${more}`;
}
function doImportCommit(){
  const text=document.getElementById('importText')?.value||'';
  if(!text.trim()) return;
  const pv = productsImportCommit(text);
  if(pv.error){ showToast('✗ '+pv.error); return; }
  hidePanel('importPanel');
  showToast(`✓ imported · new ${pv.newCount} · update ${pv.updateCount}`);
  renderSuggestions();
  if(document.getElementById('vaultPanel')?.classList.contains('show')) renderVault();
}

// ═══════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════
function _downloadJSON(filename, data){
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
function exportOne(id){
  const p = productById(id); if(!p) return;
  const slug = productSlug(p);
  _downloadJSON(`${slug}.json`, productExportPayload(p));
  showToast(`✓ exported ${slug}.json`);
}
function exportAll(){
  const all = productsAll();
  if(!all.length){ showToast('nothing to export'); return; }
  const payload = all.map(productExportPayload);
  const date = new Date().toISOString().slice(0,10);
  _downloadJSON(`rapid-captions-vault-${date}.json`, payload);
  showToast(`↓ exported ${all.length} product${all.length>1?'s':''}`);
}

// expose for inline handlers
window.sendCaption = sendCaption;
window.renderSuggestions = renderSuggestions;
window.pickProduct = pickProduct;
window.openVault = openVault;
window.renderVault = renderVault;
window.pickFromVault = pickFromVault;
window.vaultDelete = vaultDelete;
window.vaultWipeRequest = vaultWipeRequest;
window.openImportPanel = openImportPanel;
window.renderImportPreview = renderImportPreview;
window.doImportCommit = doImportCommit;
window.exportOne = exportOne;
window.exportAll = exportAll;
window.toggleDescription = toggleDescription;
window.onDescInput = onDescInput;
window.toggleRetail = toggleRetail;
window.onRetailInput = onRetailInput;
window.revealRetail = revealRetail;
window.collapseRetail = collapseRetail;
window.toggleVariantMode = toggleVariantMode;
window.onVariantNameInput = onVariantNameInput;
window.onVariantChipTap = onVariantChipTap;
window.onVariantFieldInput = onVariantFieldInput;
window.toggleVariantVisibility = toggleVariantVisibility;
window.clearVariants = clearVariants;
window.togglePrices = togglePrices;
window.onCaptionTagsInput = onCaptionTagsInput;
function openPreview(){
  const box=document.getElementById('previewBox');
  if(box && box.value && box.value !== L('pick_prompt')){ regen(); }
  showPanel('previewPanel');
}
window.openPreview = openPreview;

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
initNetworks();
initCfgFields();
regen();
updateTypeChip();
updateChipRail();
tgInit();

// Float-then-dock: when the mobile keyboard opens, push the chip rail above it.
// When it closes, rail returns to its docked position above the footer.
(function wireKeyboardRail(){
  const vv = window.visualViewport;
  if(!vv) return;
  const DOCKED = 58; // footer height in px (matches --kb-h fallback)
  let raf = null;
  function apply(){
    raf = null;
    const kbH = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
    const bottom = kbH > 40 ? kbH : DOCKED;
    document.documentElement.style.setProperty('--kb-h', bottom + 'px');
  }
  function schedule(){ if(raf==null) raf = requestAnimationFrame(apply); }
  vv.addEventListener('resize', schedule);
  vv.addEventListener('scroll', schedule);
  apply();
})();

