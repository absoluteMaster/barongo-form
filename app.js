// ═══════════════════════════════════════
// LANGUAGE STRINGS
// ═══════════════════════════════════════
const LANG = {
  en: {
    wholesale: 'Wholesale', retail: 'Retail', flash_price: 'Flash Price',
    low_stock: 'Low stock', out_of_stock: 'Out of Stock',
    restocking: 'Restocking', order_now: 'Order now',
    selling_fast: 'Selling fast — grab yours now!',
    SELLING_FAST: 'SELLING FAST — grab yours NOW!',
    still_available: 'still available!', STILL_AVAILABLE: 'STILL AVAILABLE!',
    flash_today: 'FLASH SALE — TODAY ONLY', limited_time: 'Limited time offer',
    LIMITED_TIME: 'LIMITED TIME — ACT NOW!',
    just_arrived: 'Just Arrived!', JUST_ARRIVED: 'JUST ARRIVED!',
    new_in_store: 'New in store!', NEW_IN_STORE: 'BRAND NEW IN STORE!',
    back_in_stock: 'Back in Stock!', BACK_IN_STOCK: 'BACK IN STOCK!',
    available_again: 'Available again!', AVAILABLE_AGAIN: 'AVAILABLE AGAIN!',
    coming_soon: 'Coming soon...',
    want: 'Want', budget: 'Tell us your budget — we\'ll make it work!',
    BUDGET: 'Tell us your budget — we\'ll give you the BEST deal!',
    ws_rs_welcome: 'Wholesale and retail welcome.',
    WS_RS_WELCOME: 'Wholesale and retail ALL welcome!',
    bundle_deal: 'Bundle Deal', BUNDLE_DEAL: 'BUNDLE DEAL',
    combo: 'Combo', save: 'Save', YOU_SAVE: 'YOU SAVE',
    only_left: 'Only %n left!', last_pieces: 'Last pieces!',
    LAST_PIECES: 'LAST PIECES!', dont_miss: 'Don\'t miss out.',
    DONT_MISS: 'GET YOURS BEFORE THEY\'RE GONE!',
    customer_review: 'Customer Review',
    price_drop: 'Price Drop', PRICE_DROP: 'PRICE DROP',
    was: 'Was', now_only: 'Now only', you_save_pct: 'You save %p%!',
    YOU_SAVE_PCT: 'YOU SAVE %p%!', prices_slashed: 'Prices slashed!',
    PRICES_SLASHED: 'PRICES SLASHED!',
    dm_prices: 'DM for prices', DM_PRICES: 'DM NOW for prices!',
    dm_order: 'DM to order', GET_DEAL: 'GET THIS DEAL NOW!',
    dm_budget: 'DM your budget', dm_gone: 'DM before it\'s gone',
    ALMOST_GONE: 'ALMOST GONE — DM NOW!',
    its_back: 'It\'s back! Get yours', ITS_BACK: 'IT\'S BACK! Get yours',
    pick_prompt: 'Pick a platform and caption type…',
    copied: 'Copied!', copy: 'Copy Caption',
  },
  sw: {
    wholesale: 'Jumla', retail: 'Rejareja', flash_price: 'Bei ya Flash',
    low_stock: 'Inakwisha', out_of_stock: 'Haipatikani',
    restocking: 'Inarudi', order_now: 'Agiza sasa',
    selling_fast: 'Inaendelea kuuzwa — chukua yako sasa!',
    SELLING_FAST: 'INAUZWA HARAKA — chukua yako SASA!',
    still_available: 'bado zipo!', STILL_AVAILABLE: 'BADO ZIPO!',
    flash_today: 'FLASH SALE — LEO TU', limited_time: 'Offer ya muda mfupi',
    LIMITED_TIME: 'MUDA MFUPI — CHUKUA SASA!',
    just_arrived: 'Imefika!', JUST_ARRIVED: 'IMEFIKA!',
    new_in_store: 'Mpya dukani!', NEW_IN_STORE: 'MPYA DUKANI!',
    back_in_stock: 'Imerudishwa!', BACK_IN_STOCK: 'IMERUDISHWA!',
    available_again: 'Inapatikana tena!', AVAILABLE_AGAIN: 'INAPATIKANA TENA!',
    coming_soon: 'Inakuja hivi karibuni...',
    want: 'Unataka', budget: 'Tuambie bajeti yako — tutakupa bei nzuri!',
    BUDGET: 'Tuambie bajeti yako — tutakupa BEI BORA!',
    ws_rs_welcome: 'Jumla na rejareja mnakaribishwa.',
    WS_RS_WELCOME: 'Jumla na rejareja MNAKARIBISHWA!',
    bundle_deal: 'Mchanganyiko', BUNDLE_DEAL: 'MCHANGANYIKO',
    combo: 'Pamoja', save: 'Okoa', YOU_SAVE: 'UNAOKOA',
    only_left: 'Zimebaki %n tu!', last_pieces: 'Mwisho!',
    LAST_PIECES: 'MWISHO!', dont_miss: 'Usikose.',
    DONT_MISS: 'CHUKUA KABLA HAZIJAISHA!',
    customer_review: 'Maoni ya Mteja',
    price_drop: 'Bei Imeshuka', PRICE_DROP: 'BEI IMESHUKA',
    was: 'Ilikuwa', now_only: 'Sasa ni', you_save_pct: 'Unaokoa %p%!',
    YOU_SAVE_PCT: 'UNAOKOA %p%!', prices_slashed: 'Bei zimeshuka!',
    PRICES_SLASHED: 'BEI ZIMESHUKA!',
    dm_prices: 'DM kwa bei', DM_PRICES: 'DM SASA kwa bei!',
    dm_order: 'DM kuagiza', GET_DEAL: 'PATA DEAL HII SASA!',
    dm_budget: 'DM bajeti yako', dm_gone: 'DM kabla haijaisha',
    ALMOST_GONE: 'INAKWISHA — DM SASA!',
    its_back: 'Imerudishwa! Chukua yako', ITS_BACK: 'IMERUDISHWA! Chukua yako',
    pick_prompt: 'Chagua mtandao na aina ya caption…',
    copied: 'Imenakiliwa!', copy: 'Nakili Caption',
  }
};

function L(key) { return LANG[S.lang]?.[key] || LANG.en[key] || key; }
function LH(normalKey, hypeKey) { return S.tone === 'hype' ? L(hypeKey) : L(normalKey); }

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
const S = {
  network: 'whatsapp', type: null, mode: 'single', tone: 'balanced', lang: 'en', name: '',
  w: { price:'', qty:'', og:'', ogOn:false, status:'in_stock' },
  r: { price:'', qty:'', og:'', ogOn:false, status:'in_stock' },
  flash: { price:'', og:'' },
  restockDate: '', restockHeadline: '',
  variants: [], activeVariantId: null,
  bundle: { item2:'', comboPrice:'', savings:'' },
  lastQty: '',
  review: { quote:'', reviewer:'', stars:0 },
  previewEdited: false,
};

// ═══════════════════════════════════════
// CONFIG (localStorage)
// ═══════════════════════════════════════
const CFG = (() => {
  try { const r=localStorage.getItem('rc_cfg'); if(r) return JSON.parse(r); } catch(e){}
  return { handle:'', location:'', phone:'', currency:'USD', tone:'balanced', lang:'en', hashtags:'' };
})();

function saveCfg() {
  CFG.handle=document.getElementById('cfgHandle').value;
  CFG.location=document.getElementById('cfgLocation').value;
  CFG.phone=document.getElementById('cfgPhone').value;
  CFG.currency=document.getElementById('cfgCurrency').value||'USD';
  CFG.hashtags=document.getElementById('cfgHashtags').value;
  CFG.tone=S.tone; CFG.lang=S.lang;
  localStorage.setItem('rc_cfg', JSON.stringify(CFG));
  updateSettingsBtn(); regen();
}
function initCfgFields() {
  document.getElementById('cfgHandle').value=CFG.handle||'';
  document.getElementById('cfgLocation').value=CFG.location||'';
  document.getElementById('cfgPhone').value=CFG.phone||'';
  document.getElementById('cfgCurrency').value=CFG.currency||'USD';
  document.getElementById('cfgHashtags').value=CFG.hashtags||'';
  if(CFG.tone){ S.tone=CFG.tone; setTone(S.tone); }
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
  header_product:    { hype:'🛒', balanced:'🛒', pro:'' },
  header_flash:      { hype:'⚡', balanced:'⚡', pro:'' },
  header_new:        { hype:'✨', balanced:'✨', pro:'' },
  header_restock:    { hype:'🔄', balanced:'🔄', pro:'' },
  header_repost:     { hype:'📢', balanced:'📢', pro:'' },
  header_bundle:     { hype:'🎁', balanced:'🎁', pro:'' },
  header_last:       { hype:'🚨', balanced:'🚨', pro:'' },
  header_drop:       { hype:'📉', balanced:'📉', pro:'' },
  header_review:     { hype:'⭐', balanced:'⭐', pro:'' },
  section_wholesale: { hype:'📦', balanced:'📦', pro:'' },
  section_retail:    { hype:'🛍️', balanced:'🛍️', pro:'' },
  price_arrow:       { hype:'👉', balanced:'👉', pro:'•' },
  status_in:         { hype:'✅', balanced:'✅', pro:'' },
  status_low:        { hype:'⚠️', balanced:'⚠️', pro:'' },
  status_out:        { hype:'❌', balanced:'❌', pro:'' },
  cta_order:         { hype:'🏃💨', balanced:'👇', pro:'' },
  cta_dm:            { hype:'💬', balanced:'💬', pro:'' },
  sig_handle:        { hype:'🌐', balanced:'🌐', pro:'' },
  sig_location:      { hype:'📍', balanced:'📍', pro:'' },
  sig_phone:         { hype:'📞', balanced:'📞', pro:'' },
  fire:              { hype:'🔥', balanced:'', pro:'' },
  star:              { hype:'⭐', balanced:'⭐', pro:'' },
  divider:           { hype:'🔥🔥🔥🔥🔥🔥🔥🔥🔥', balanced:'───────────────', pro:'───────────────' },
};

function E(role) {
  let effective=S.tone;
  if(S.network==='tiktok'||S.network==='twitter') effective='pro';
  else if((S.network==='instagram'||S.network==='facebook')&&S.tone==='hype') effective='balanced';
  else if(S.network==='any') effective='pro';
  return EM[role]?.[effective]||'';
}
function Ep(role) { return EM[role]?.[S.tone]||''; }

// ═══════════════════════════════════════
// PLATFORM CONFIG
// ═══════════════════════════════════════
const PLATFORMS = {
  whatsapp:  { label:'💬 WA', fullLabel:'WhatsApp',  md:true,  maxLen:0,    short:false },
  telegram:  { label:'✈️ TG', fullLabel:'Telegram',  md:true,  maxLen:0,    short:false },
  instagram: { label:'📸 IG', fullLabel:'Instagram', md:false, maxLen:2200, short:false },
  tiktok:    { label:'🎵 TT', fullLabel:'TikTok',    md:false, maxLen:150,  short:true  },
  facebook:  { label:'👥 FB', fullLabel:'Facebook',  md:false, maxLen:500,  short:false },
  twitter:   { label:'𝕏 X',   fullLabel:'X',         md:false, maxLen:280,  short:true  },
  any:       { label:'📄 Plain', fullLabel:'Plain',  md:false, maxLen:0,    short:false },
};
function useMd() { return PLATFORMS[S.network]?.md; }
function isShort() { return PLATFORMS[S.network]?.short; }
function maxLen() { return PLATFORMS[S.network]?.maxLen||0; }
function B(t) { return useMd()?`*${t}*`:t; }
function STR(t) { return useMd()?`~${t}~`:t; }
function I(t) { return useMd()?`_${t}_`:t; }
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
  { id:'standard',      label:'Standard',     nets:['whatsapp','telegram','instagram','facebook','twitter','any'], groups:['wholesale','retail'], build:buildStandard },
  { id:'repost',        label:'Repost',       nets:['whatsapp','telegram','instagram','facebook','any'], groups:['wholesale','retail'], build:buildRepost },
  { id:'flash',         label:'Flash Sale',   nets:['whatsapp','telegram','instagram','facebook','twitter','any'], groups:['flash','wholesale'], build:buildFlash },
  { id:'new_arrival',   label:'New Arrival',  nets:['whatsapp','telegram','tiktok','instagram','facebook','twitter','any'], groups:['wholesale','retail'], build:buildNewArrival },
  { id:'back_in_stock', label:'Back in Stock',nets:['whatsapp','telegram','instagram','facebook','any'], groups:['restock_headline','wholesale','retail'], build:buildBackInStock },
  { id:'engagement',    label:'Engagement',   nets:['tiktok','instagram','facebook','twitter','any'], groups:[], build:buildEngagement },
  { id:'price_drop',    label:'Price Drop',   nets:['whatsapp','telegram','instagram','facebook','twitter','any'], groups:['wholesale','retail'], build:buildPriceDrop },
  { id:'bundle',        label:'Bundle Deal',  nets:['whatsapp','telegram','instagram','facebook','twitter','any'], groups:['bundle','wholesale','retail'], build:buildBundle },
  { id:'last_pieces',   label:'Last Pieces',  nets:['whatsapp','telegram','instagram','facebook','twitter','any'], groups:['last_qty','wholesale','retail'], build:buildLastPieces },
  { id:'review',        label:'Review',       nets:['whatsapp','telegram','instagram','facebook','any'], groups:['testimonial','wholesale','retail'], build:buildReview },
];

function currentTypeLabel() {
  if(!S.type) return '';
  const def=REGISTRY.find(r=>r.id===S.type);
  return def?def.label:'';
}

// ═══════════════════════════════════════
// TONE & LANG
// ═══════════════════════════════════════
function setTone(t) {
  S.tone=t;
  document.getElementById('toneHype').classList.toggle('on',t==='hype');
  document.getElementById('toneBalanced').classList.toggle('on',t==='balanced');
  document.getElementById('tonePro').classList.toggle('on',t==='pro');
  CFG.tone=t; try{localStorage.setItem('rc_cfg',JSON.stringify(CFG));}catch(e){}
  regen();
}
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
  const vt=document.getElementById('variantToggle');
  if(vt) vt.textContent = m==='variant' ? '− variants' : '⚡ variants';
  if(S.type) renderFields();
  renderVariantChips();
  // Re-sync price field when returning to single mode: show the single-mode price.
  if(m==='single'){
    const pf=document.getElementById('priceField');
    if(pf){
      const p = S.type==='flash' ? S.flash.price : S.w.price;
      pf.value = p || '';
    }
  }
  updatePriceChip();
  regen();
}
function typeSupportsVariants(){
  const def=REGISTRY.find(r=>r.id===S.type);
  if(!def) return false;
  return def.groups.some(g=>['wholesale','retail','flash'].includes(g));
}
function toggleVariantMode(){
  if(!S.type){ showToast('pick a type first'); return; }
  if(!typeSupportsVariants()){ showToast('no variants for this type'); return; }
  setMode(S.mode==='variant' ? 'single' : 'variant');
  if(S.mode==='variant'){
    if(S.variants.length===0) spawnVariant();
    S.activeVariantId=S.variants[0].id;
    renderVariantChips();
    requestAnimationFrame(()=>{
      const input=document.querySelector('.variant-chip.active input');
      if(input) input.focus();
    });
  } else {
    deactivateVariant();
  }
}

// ═══════════════════════════════════════
// CLEAR FORM
// ═══════════════════════════════════════
function clearForm() {
  S.name=''; S.w={price:'',qty:'',og:'',ogOn:false,status:'in_stock'};
  S.r={price:'',qty:'',og:'',ogOn:false,status:'in_stock'};
  S.flash={price:'',og:''}; S.restockDate=''; S.restockHeadline='';
  S.variants=[]; S.activeVariantId=null;
  S.bundle={item2:'',comboPrice:'',savings:''}; S.lastQty='';
  S.review={quote:'',reviewer:'',stars:0}; S.previewEdited=false;
  document.getElementById('productName').value='';
  document.getElementById('resetPill').classList.remove('show');
  if(S.type) renderFields();
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
  if(def.groups.includes('restock_headline')) html+=htmlRestockHeadline();
  if(def.groups.includes('testimonial')) html+=htmlTestimonial();
  if(def.groups.includes('bundle')) html+=htmlBundleFields();
  if(def.groups.includes('last_qty')) html+=htmlLastQty();
  html+='</div>';
  area.innerHTML=html;
  if(def.groups.includes('testimonial')) applyStars(S.review.stars);
  renderVariantChips();
}

function htmlWholesaleGroup(){
  return `<div class="fc" id="wCard"><div class="fc-title">${E('section_wholesale')} Wholesale</div>
    <div class="grid2"><div class="fld"><label class="fld-lbl">Price (${CC()})</label><input type="number" placeholder="150" value="${S.w.price}" oninput="S.w.price=this.value;regen()"></div>
    <div class="fld"><label class="fld-lbl">Qty (pc)</label><input type="number" placeholder="50" value="${S.w.qty}" oninput="S.w.qty=this.value;regen()"></div></div>
    <div class="og-row"><button class="og-toggle-btn ${S.w.ogOn?'on':''}" id="wOgBtn" onclick="toggleOg('w')">+ Old price</button></div>
    <div class="og-field ${S.w.ogOn?'show':''}" id="wOgField"><div class="fld"><label class="fld-lbl">Original (${CC()})</label><input type="number" placeholder="Old price" value="${S.w.og}" oninput="S.w.og=this.value;regen()"></div></div>
    <div class="fld-lbl" style="margin-top:4px;">Stock</div>
    <div class="status-row"><button class="st-btn" id="wSt_in" onclick="setStatus('w','in_stock')">In Stock</button><button class="st-btn" id="wSt_low" onclick="setStatus('w','low_stock')">Low</button><button class="st-btn" id="wSt_out" onclick="setStatus('w','out_of_stock')">Out</button></div>
    <div class="restock-reveal" id="wRestock"><div class="fld"><label class="fld-lbl">Restock Date</label><input type="text" placeholder="e.g. April 20" value="${S.restockDate}" oninput="S.restockDate=this.value;regen()"></div></div></div>`;
}
function htmlRetailGroup(){
  return `<div class="fc" id="rCard"><div class="fc-title">${E('section_retail')} Retail</div>
    <div class="grid2"><div class="fld"><label class="fld-lbl">Price (${CC()})</label><input type="number" placeholder="5.50" value="${S.r.price}" oninput="S.r.price=this.value;regen()"></div>
    <div class="fld"><label class="fld-lbl">Qty (if &gt; 1)</label><input type="number" placeholder="1" value="${S.r.qty}" oninput="S.r.qty=this.value;regen()"></div></div>
    <div class="og-row"><button class="og-toggle-btn ${S.r.ogOn?'on':''}" id="rOgBtn" onclick="toggleOg('r')">+ Old price</button></div>
    <div class="og-field ${S.r.ogOn?'show':''}" id="rOgField"><div class="fld"><label class="fld-lbl">Original (${CC()})</label><input type="number" placeholder="Old price" value="${S.r.og}" oninput="S.r.og=this.value;regen()"></div></div>
    <div class="fld-lbl" style="margin-top:4px;">Stock</div>
    <div class="status-row"><button class="st-btn" id="rSt_in" onclick="setStatus('r','in_stock')">In Stock</button><button class="st-btn" id="rSt_low" onclick="setStatus('r','low_stock')">Low</button><button class="st-btn" id="rSt_out" onclick="setStatus('r','out_of_stock')">Out</button></div>
    <div class="restock-reveal" id="rRestock"><div class="fld"><label class="fld-lbl">Restock Date</label><input type="text" placeholder="e.g. April 20" value="${S.restockDate}" oninput="S.restockDate=this.value;regen()"></div></div></div>`;
}
function htmlFlashGroup(){
  return `<div class="fc"><div class="fc-title">${E('header_flash')} Flash Sale</div>
    <div class="grid2"><div class="fld"><label class="fld-lbl">Flash Price (${CC()})</label><input type="number" placeholder="Sale price" value="${S.flash.price}" oninput="S.flash.price=this.value;regen()"></div>
    <div class="fld"><label class="fld-lbl">Original (${CC()})</label><input type="number" placeholder="Was price" value="${S.flash.og}" oninput="S.flash.og=this.value;regen()"></div></div></div>`;
}
function htmlRestockHeadline(){
  return `<div class="fc"><div class="fc-title">${E('header_restock')} Restock Info</div>
    <div class="fld"><label class="fld-lbl">Headline</label><input type="text" placeholder="e.g. Back April 15" value="${S.restockHeadline}" oninput="S.restockHeadline=this.value;regen()"></div></div>`;
}
function htmlBundleFields(){
  return `<div class="fc"><div class="fc-title">${E('header_bundle')} Bundle Details</div>
    <div class="fld"><label class="fld-lbl">Second Item</label><input type="text" placeholder="e.g. Phone Case" value="${S.bundle.item2}" oninput="S.bundle.item2=this.value;regen()"></div>
    <div class="grid2"><div class="fld"><label class="fld-lbl">Combo Price (${CC()})</label><input type="number" placeholder="Bundle price" value="${S.bundle.comboPrice}" oninput="S.bundle.comboPrice=this.value;regen()"></div>
    <div class="fld"><label class="fld-lbl">You Save (${CC()})</label><input type="number" placeholder="Savings" value="${S.bundle.savings}" oninput="S.bundle.savings=this.value;regen()"></div></div></div>`;
}
function htmlLastQty(){
  return `<div class="fc"><div class="fc-title">${E('header_last')} Remaining</div>
    <div class="fld"><label class="fld-lbl">Pieces Left</label><input type="number" placeholder="e.g. 5" value="${S.lastQty}" oninput="S.lastQty=this.value;regen()"></div></div>`;
}
function htmlTestimonial(){
  return `<div class="fc"><div class="fc-title">${E('header_review')} Review</div>
    <div class="fld"><label class="fld-lbl">Rating</label><div class="stars" id="starsWrap">${[1,2,3,4,5].map(n=>`<button class="star-btn" onclick="setStar(${n})">&#9733;</button>`).join('')}</div></div>
    <div class="fld"><label class="fld-lbl">Quote</label><textarea class="field-ta" placeholder="What they said..." oninput="S.review.quote=this.value;regen()">${S.review.quote}</textarea></div>
    <div class="fld"><label class="fld-lbl">Reviewer (optional)</label><input type="text" placeholder="e.g. Sarah M." value="${S.review.reviewer}" oninput="S.review.reviewer=this.value;regen()"></div></div>`;
}
function setStar(n){ S.review.stars=(S.review.stars===n)?0:n; applyStars(S.review.stars); regen(); }
function applyStars(n){ const w=document.getElementById('starsWrap'); if(!w)return; w.querySelectorAll('.star-btn').forEach((b,i)=>b.classList.toggle('on',i<n)); }

// ═══════════════════════════════════════
// VARIANTS (chip-row model)
// ═══════════════════════════════════════
// A variant is { id, rawInput, price }. Status is derived.
// Rules:
//   • variantSplit("12kg")          → "12kg"
//   • variantSplit("bottle 500ml")  → "bottle-500ml"
//   • variantSplit("large bottle L")→ "large-bottle-L"
// Spawn rule: when the trailing chip transitions from empty → named via a
// commit event (tap another chip, tap price field), append one empty chip.
function variantSplit(raw){
  const tokens=(raw||'').trim().split(/\s+/).filter(Boolean);
  if(!tokens.length) return '';
  if(tokens.length===1) return tokens[0];
  return tokens.slice(0,-1).join('-')+'-'+tokens[tokens.length-1];
}
function variantSuffix(v){ return variantSplit(v&&v.rawInput||''); }
function variantStatus(v){
  if(!v) return 'empty';
  const hasName=!!variantSuffix(v);
  const hasPrice=!!(v.price||'').toString().trim();
  if(hasName&&hasPrice) return 'priced';
  if(hasName) return 'named';
  return 'empty';
}
function activeVariant(){ return S.variants.find(v=>v.id===S.activeVariantId)||null; }
function spawnVariant(){
  const id='v'+Date.now().toString(36)+Math.random().toString(36).slice(2,5);
  S.variants.push({ id, rawInput:'', price:'' });
  return id;
}
function ensureTrailingEmpty(){
  const last=S.variants[S.variants.length-1];
  if(!last||variantStatus(last)!=='empty') spawnVariant();
}
function addVariant(v){
  // Kept for back-compat with vault import. Old-shape variants get dropped
  // (unsupported in the new model) unless they already carry { rawInput }.
  if(v&&typeof v.rawInput==='string'){
    S.variants.push({ id:v.id||('v'+Math.random().toString(36).slice(2,8)),
      rawInput:v.rawInput, price:v.price||'' });
    renderVariantChips(); regen();
  }
}
function commitTrailing(){
  const v=activeVariant();
  if(!v) return;
  const wasLast=v===S.variants[S.variants.length-1];
  if(wasLast && variantStatus(v)!=='empty') spawnVariant();
}
function activateVariant(id){
  S.activeVariantId=id;
  renderVariantChips();
  updatePriceChip();
  const v=activeVariant();
  if(!v) return;
  // Price field always reflects the active variant's price (empty for un-priced chips).
  const pf=document.getElementById('priceField');
  if(pf) pf.value=v.price||'';
  const st=variantStatus(v);
  requestAnimationFrame(()=>{
    if(st==='empty'){
      const input=document.querySelector('.variant-chip.active input');
      if(input){ input.focus(); input.setSelectionRange(input.value.length,input.value.length); }
    }
  });
}
function deactivateVariant(){
  S.activeVariantId=null;
  renderVariantChips();
  updatePriceChip();
}
function onVariantInput(id, raw){
  const v=S.variants.find(x=>x.id===id);
  if(!v) return;
  v.rawInput=raw;
  regen();
}
function onVariantChipTap(id){
  if(S.activeVariantId===id) return;
  commitTrailing();
  activateVariant(id);
}
function onVariantPriceFocus(){
  if(S.mode!=='variant') return;
  commitTrailing();
  renderVariantChips();
  const v=activeVariant();
  if(v){
    const pf=document.getElementById('priceField');
    if(pf && pf.value==='' && v.price) pf.value=v.price;
  }
}
function clearVariants(){
  S.variants=[];
  S.activeVariantId=null;
  spawnVariant();
  S.activeVariantId=S.variants[0].id;
  renderVariantChips();
  regen();
}
function escAttr(s){ return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }
function renderVariantChips(){
  const row=document.getElementById('variantRow');
  if(!row) return;
  if(S.mode!=='variant'){ row.classList.remove('show'); row.innerHTML=''; return; }
  row.classList.add('show');
  if(S.variants.length===0){
    spawnVariant();
    S.activeVariantId=S.variants[0].id;
  }
  const chips=S.variants.map(v=>{
    const st=variantStatus(v);
    const isActive=S.activeVariantId===v.id;
    const suffix=variantSuffix(v);
    const priceTxt=v.price?fmt(v.price):'';
    let inner;
    if(isActive){
      inner=`<input type="text" class="vc-input" value="${escAttr(v.rawInput||'')}" placeholder="size · prefix size" oninput="onVariantInput('${v.id}', this.value)" onclick="event.stopPropagation()" onkeydown="if(event.key==='Enter'){event.preventDefault();document.getElementById('priceField').focus();}">`;
    } else if(st==='empty'){
      inner=`<span class="vc-ph">+ variant</span>`;
    } else if(st==='named'){
      inner=`<span class="vc-suf">${escAttr(suffix)}</span>`;
    } else {
      inner=`<span class="vc-suf">${escAttr(suffix)}</span><span class="vc-sep">·</span><span class="vc-pr">${escAttr(priceTxt)}</span>`;
    }
    return `<button type="button" class="variant-chip ${st}${isActive?' active':''}" onclick="onVariantChipTap('${v.id}')">${inner}</button>`;
  }).join('');
  const hasAny=S.variants.some(v=>variantStatus(v)!=='empty');
  const clearBtn=hasAny?`<button type="button" class="variant-clear" onclick="clearVariants()" title="clear">×</button>`:'';
  row.innerHTML=`<div class="variant-row-inner">${chips}${clearBtn}</div>`;
}

// ═══════════════════════════════════════
// STATUS & OG HELPERS
// ═══════════════════════════════════════
function setStatus(w,val){ if(w==='w')S.w.status=val;else S.r.status=val; applyStatus(w,val); checkRestockVisibility(); regen(); }
function applyStatus(w,val){ ['in','low','out'].forEach(s=>{ const btn=document.getElementById(`${w}St_${s}`); if(!btn)return; btn.className='st-btn'; if(s==='in'&&val==='in_stock')btn.classList.add('g'); if(s==='low'&&val==='low_stock')btn.classList.add('o'); if(s==='out'&&val==='out_of_stock')btn.classList.add('r'); }); }
function checkRestockVisibility(){ const def=REGISTRY.find(r=>r.id===S.type); if(!def||def.groups.includes('restock_headline'))return; const wr=document.getElementById('wRestock'); const rr=document.getElementById('rRestock'); if(wr)wr.classList.toggle('show',S.w.status==='out_of_stock'); if(rr)rr.classList.toggle('show',S.r.status==='out_of_stock'); }
function toggleOg(w){ if(w==='w')S.w.ogOn=!S.w.ogOn;else S.r.ogOn=!S.r.ogOn; const f=document.getElementById(w+'OgField'); const btn=document.getElementById(w+'OgBtn'); const on=w==='w'?S.w.ogOn:S.r.ogOn; if(f)f.classList.toggle('show',on); if(btn)btn.classList.toggle('on',on); if(!on){if(w==='w')S.w.og='';else S.r.og='';} regen(); }

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
  if(S.network==='tiktok'||S.network==='twitter') return h?`\n${h}`:'';
  if(S.network==='instagram') return '\n'+[h,l,p].filter(Boolean).join(' | ');
  if(S.network==='whatsapp'||S.network==='telegram'){
    const div=E('divider')||'───────────────';
    let lines=[`\n${div}`];
    if(h)lines.push(`${Ep('sig_handle')} ${h}`.trim());
    if(l)lines.push(`${Ep('sig_location')} ${l}`.trim());
    if(p)lines.push(`${Ep('sig_phone')} ${p}`.trim());
    return lines.join('\n');
  }
  return '\n'+[h,l,p].filter(Boolean).join(' | ');
}

// ═══════════════════════════════════════
// CAPTION BLOCKS
// ═══════════════════════════════════════
function getWBlock(){
  const price=S.mode==='single'?S.w.price:null, qty=S.mode==='single'?(S.w.qty||'1'):null;
  const og=S.mode==='single'&&S.w.ogOn?S.w.og:'', status=S.mode==='single'?S.w.status:null;
  if(!price||!qty||status==='out_of_stock') return '';
  const sw=E('section_wholesale'), pa=E('price_arrow');
  let line=og
    ? `${sw} ${B(L('wholesale'))}\n${STR(`${pa} ${qty}pc = ${CC()} ${fmt(og)}`)}\n${pa} ${qty}pc = ${B(`${CC()} ${fmt(price)}`)}`
    : `${sw} ${B(L('wholesale'))}\n${pa} ${qty}pc = ${B(`${CC()} ${fmt(price)}`)}`;
  if(status==='low_stock') line+=`\n${E('status_low')} ${L('low_stock')}`;
  return clean(line);
}
function getRBlock(){
  const price=S.mode==='single'?S.r.price:null, qty=S.mode==='single'?(S.r.qty||'1'):null;
  const og=S.mode==='single'&&S.r.ogOn?S.r.og:'', status=S.mode==='single'?S.r.status:null;
  if(!price||status==='out_of_stock') return '';
  const sr=E('section_retail'), pa=E('price_arrow');
  let line=og
    ? `${sr} ${B(L('retail'))}\n${STR(`${pa} ${qty}pc = ${CC()} ${fmt(og)}`)}\n${pa} ${qty}pc = ${B(`${CC()} ${fmt(price)}`)}`
    : `${sr} ${B(L('retail'))}\n${pa} ${qty}pc = ${B(`${CC()} ${fmt(price)}`)}`;
  if(status==='low_stock') line+=`\n${E('status_low')} ${L('low_stock')}`;
  return clean(line);
}
function getVariantLines(){
  const priced=S.variants.filter(v=>variantStatus(v)==='priced');
  if(!priced.length) return null;
  const pa=E('price_arrow');
  return priced.map(v=>{
    const suffix=variantSuffix(v);
    return clean(`${pa} ${B(suffix)} — ${B(`${CC()} ${fmt(v.price)}`)}`);
  }).join('\n');
}
function getOutOfStockBlock(){
  const date=S.restockDate;
  if(date) return clean(`${E('status_out')} ${L('restocking')} — ${B(date)}`);
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

function assembleSingle(header, body, footer=''){
  const div=E('divider')||'───────────────'; const sig=getSig();
  const desc=descLine();
  let out=header;
  if(desc) out+=`\n\n${desc}`;
  if(body && body.trim()) out+=`\n${div}\n\n${body}`;
  if(footer) out+= (body && body.trim()) ? `\n\n${footer}` : `\n${div}\n\n${footer}`;
  if(sig) out+=`\n${sig}`;
  return out;
}
function buildShort(hook, cta){
  const sig=getSig();
  let out=`${hook}\n${cta}`;
  if(sig) out+=sig;
  // truncate for platform
  const ml=maxLen();
  if(ml&&out.length>ml) out=out.slice(0,ml-1)+'…';
  return out;
}

// ═══════════════════════════════════════
// CAPTION BUILDERS
// ═══════════════════════════════════════
function buildStandard(){
  const name=(S.name||'').trim()||'—';
  if(isShort()) return buildShort(`${E('header_product')} ${name}`, LH('dm_prices','DM_PRICES'));
  const h=clean(`${E('header_product')} ${B(name)}`);
  if(S.mode==='variant') return assembleSingle(h, variantBody());
  return assembleSingle(h, priceBody());
}

function buildRepost(){
  const name=(S.name||'').trim()||'—';
  const cta=clean(`${E('cta_order')} ${LH('selling_fast','SELLING_FAST')}`);
  if(isShort()) return buildShort(`${E('header_repost')} ${name} — ${LH('still_available','STILL_AVAILABLE')}`, cta);
  const h=clean(`${E('header_repost')} ${B(`${name} — ${LH('still_available','STILL_AVAILABLE')}`)}`);
  if(S.mode==='variant') return assembleSingle(h, variantBody(), cta);
  return assembleSingle(h, priceBody(), cta);
}

function buildFlash(){
  const name=(S.name||'').trim()||'—';
  const flashHead=clean(`${E('header_flash')} ${B(L('flash_today'))} ${E('header_flash')}`);
  if(isShort()){
    const fp=S.flash.price?` ${CC()} ${fmt(S.flash.price)}`:'';
    return buildShort(flashHead, `${name}${fp}\n${LH('limited_time','LIMITED_TIME')}`);
  }
  const div=E('divider')||'───────────────'; const sig=getSig(); const pa=E('price_arrow');
  const desc=descLine(); const descSuffix=desc?`\n\n${desc}`:'';
  if(S.mode==='variant'){
    const lines=getVariantLines();
    let body='';
    if(lines) body=clean(`${E('header_product')} ${B(name)}`)+'\n\n'+lines;
    let out=flashHead+descSuffix;
    if(body) out+=`\n${div}\n\n${body}\n\n${LH('limited_time','LIMITED_TIME')}`;
    if(sig) out+=`\n${sig}`; return out;
  }
  let body=clean(`${E('header_product')} ${B(name)}`);
  if(S.flash.og) body+='\n'+clean(`${STR(`${pa} ${CC()} ${fmt(S.flash.og)}`)}`);
  if(S.flash.price) body+='\n'+clean(`${pa} ${B(`${CC()} ${fmt(S.flash.price)}`)}`);
  const wBlock=getWBlock(); if(wBlock) body+='\n\n'+wBlock;
  body+=`\n\n${LH('limited_time','LIMITED_TIME')}`;
  let out=`${flashHead}${descSuffix}\n${div}\n\n${body}`; if(sig) out+=`\n${sig}`; return out;
}

function buildNewArrival(){
  const name=(S.name||'').trim()||'—';
  if(isShort()) return buildShort(`${E('header_new')} ${name} — ${LH('just_arrived','JUST_ARRIVED')}`, LH('dm_prices','DM_PRICES'));
  const h=clean(`${E('header_new')} ${B(`${name} — ${LH('just_arrived','JUST_ARRIVED')}`)}`);
  const intro=LH('new_in_store','NEW_IN_STORE');
  if(S.mode==='variant'){
    const vb=variantBody();
    return assembleSingle(h, vb?`${intro}\n\n${vb}`:intro);
  }
  const pb=priceBody();
  return assembleSingle(h, pb?`${intro}\n\n${pb}`:intro);
}

function buildBackInStock(){
  const name=(S.name||'').trim()||'—';
  const headline=S.restockHeadline||LH('back_in_stock','BACK_IN_STOCK');
  if(isShort()) return buildShort(`${E('header_restock')} ${name} — ${headline}`, LH('its_back','ITS_BACK'));
  const h=clean(`${E('header_restock')} ${B(`${name} — ${headline}`)}`);
  const intro=clean(`${E('status_in')} ${LH('available_again','AVAILABLE_AGAIN')}`);
  if(S.mode==='variant'){
    const vb=variantBody();
    return assembleSingle(h, vb?`${intro}\n\n${vb}`:intro);
  }
  const pb=priceBody();
  return assembleSingle(h, pb?`${intro}\n\n${pb}`:intro);
}

function buildEngagement(){
  const name=(S.name||'').trim()||'this';
  const wantLine=`${L('want')} ${name}?`;
  if(isShort()) return buildShort(wantLine, LH('budget','BUDGET'));
  const div=E('divider')||'───────────────';
  const body=LH('budget','BUDGET')+'\n\n'+LH('ws_rs_welcome','WS_RS_WELCOME');
  const sig=getSig();
  const desc=descLine(); const descSuffix=desc?`\n\n${desc}`:'';
  return `${wantLine}${descSuffix}\n${div}\n\n${body}${sig?'\n'+sig:''}`;
}

function buildPriceDrop(){
  const name=(S.name||'').trim()||'—';
  if(isShort()) return buildShort(`${E('header_drop')} ${name} — ${LH('price_drop','PRICE_DROP')}`, LH('dm_prices','DM_PRICES'));
  const h=clean(`${E('header_drop')} ${B(`${name} — ${LH('price_drop','PRICE_DROP')}`)}`);
  const intro=LH('prices_slashed','PRICES_SLASHED');
  let pb;
  if(S.mode==='variant'){
    pb=variantBody();
  } else {
    let wLine='';
    if(S.w.price && S.w.status!=='out_of_stock'){
      const sw=E('section_wholesale'), pa=E('price_arrow');
      const qty=S.w.qty||'1';
      wLine=`${sw} ${B(L('wholesale'))}`;
      if(S.w.og){
        wLine+=`\n${STR(`${pa} ${L('was')}: ${CC()} ${fmt(S.w.og)}`)}`;
        wLine+=`\n${pa} ${L('now_only')}: ${B(`${CC()} ${fmt(S.w.price)}`)}`;
        const pct=Math.round((1-Number(S.w.price)/Number(S.w.og))*100);
        if(pct>0) wLine+=`\n${LH('you_save_pct','YOU_SAVE_PCT').replace('%p',pct)}`;
      } else {
        wLine+=`\n${pa} ${qty}pc = ${B(`${CC()} ${fmt(S.w.price)}`)}`;
      }
      if(S.w.status==='low_stock') wLine+=`\n${E('status_low')} ${L('low_stock')}`;
    }
    let rLine='';
    if(S.r.price && S.r.status!=='out_of_stock'){
      const sr=E('section_retail'), pa=E('price_arrow');
      rLine=`${sr} ${B(L('retail'))}`;
      if(S.r.og){
        rLine+=`\n${STR(`${pa} ${L('was')}: ${CC()} ${fmt(S.r.og)}`)}`;
        rLine+=`\n${pa} ${L('now_only')}: ${B(`${CC()} ${fmt(S.r.price)}`)}`;
        const pct=Math.round((1-Number(S.r.price)/Number(S.r.og))*100);
        if(pct>0) rLine+=`\n${LH('you_save_pct','YOU_SAVE_PCT').replace('%p',pct)}`;
      } else {
        rLine+=`\n${pa} 1pc = ${B(`${CC()} ${fmt(S.r.price)}`)}`;
      }
      if(S.r.status==='low_stock') rLine+=`\n${E('status_low')} ${L('low_stock')}`;
    }
    const blocks=[wLine,rLine].filter(Boolean);
    if(blocks.length) pb=blocks.join('\n\n');
    else if(S.w.status==='out_of_stock'||S.r.status==='out_of_stock') pb=getOutOfStockBlock();
    else pb='';
  }
  return assembleSingle(h, pb?`${intro}\n\n${pb}`:intro);
}

function buildBundle(){
  const name=(S.name||'').trim()||'—'; const item2=S.bundle.item2||'Item 2';
  const combo=S.bundle.comboPrice; const savings=S.bundle.savings;
  if(isShort()){
    let short=`${E('header_bundle')} ${name} + ${item2}`;
    if(combo) short+=`\n${L('combo')}: ${CC()} ${fmt(combo)}`;
    return buildShort(short, LH('dm_order','GET_DEAL'));
  }
  const h=clean(`${E('header_bundle')} ${B(`${name} + ${item2}`)}`);
  let bb=LH('bundle_deal','BUNDLE_DEAL');
  if(combo) bb+='\n'+clean(`${E('price_arrow')} ${L('combo')}: ${B(`${CC()} ${fmt(combo)}`)}`);
  if(savings) bb+='\n'+LH(`${L('save')} ${CC()} ${fmt(savings)}`,`${L('YOU_SAVE')} ${CC()} ${fmt(savings)}!`);
  if(S.mode==='variant'){ const l=getVariantLines(); if(l) bb+='\n\n'+l; }
  else { const pb=[getWBlock(),getRBlock()].filter(Boolean).join('\n\n'); if(pb) bb+='\n\n'+pb; }
  return assembleSingle(h, bb);
}

function buildLastPieces(){
  const name=(S.name||'').trim()||'—'; const qty=S.lastQty;
  const qtyText=qty?L('only_left').replace('%n',qty):L('last_pieces');
  const qtyHype=qty?L('only_left').replace('%n',qty).toUpperCase():L('LAST_PIECES');
  if(isShort()) return buildShort(`${E('header_last')} ${name} — ${qtyText}`, LH('dm_gone','ALMOST_GONE'));
  const h=clean(`${E('header_last')} ${B(`${name} — ${S.tone==='hype'?qtyHype:qtyText}`)}`);
  const urgency=clean(`${E('status_low')} ${S.tone==='hype'?qtyHype:qtyText} ${LH('dont_miss','DONT_MISS')}`);
  let body;
  if(S.mode==='variant'){ const vb=variantBody(); body=vb?`${urgency}\n\n${vb}`:urgency; }
  else { const pb=priceBody(); body=pb?`${urgency}\n\n${pb}`:urgency; }
  return assembleSingle(h, body);
}

function buildReview(){
  const name=(S.name||'').trim()||'—'; const q=S.review.quote||'Great product!';
  const reviewer=S.review.reviewer; const stars=S.review.stars;
  const starStr=stars?(E('star')||'★').repeat(stars):'';
  if(isShort()) return buildShort(`${E('header_review')} "${q.slice(0,60)}${q.length>60?'...':''}"`, `${name}${reviewer?' — '+reviewer:''}`);
  const h=clean(`${E('header_review')} ${B(name)} — ${L('customer_review')}`);
  let rb=''; if(starStr) rb+=starStr+'\n'; rb+=`"${q}"`; if(reviewer) rb+=`\n— ${reviewer}`;
  let pb; if(S.mode==='variant') pb=getVariantLines(); else pb=[getWBlock(),getRBlock()].filter(Boolean).join('\n\n');
  return assembleSingle(h, pb?`${rb}\n\n${pb}`:rb);
}

// ═══════════════════════════════════════
// INSTAGRAM HASHTAGS
// ═══════════════════════════════════════
function maybeAddHashtags(text){
  if(S.network!=='instagram') return text;
  const custom=CFG.hashtags?.trim();
  if(!custom) return text;
  return text+'\n.\n.\n.\n'+custom;
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
  const icon={standard:'🛒',flash:'⚡',new_arrival:'✨',last_pieces:'🔥',repost:'📢',back_in_stock:'🔄',engagement:'💬',price_drop:'📉',bundle:'🎁',review:'⭐'}[S.type]||'▸';
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
function parsePriceInput(raw){
  const text=(raw||'').trim();
  // Variant mode: price field only routes to the active named/priced variant.
  // If nothing is active (or active chip is still empty), drop input silently
  // so we don't clobber S.w/S.r that single-mode owns.
  if(S.mode==='variant'){
    const av=activeVariant();
    if(av && variantStatus(av)!=='empty'){
      av.price=text.replace(/[^\d.]/g,'');
      renderVariantChips();
      updatePriceChip();
      regen();
    }
    return;
  }
  const tokens=text.split(/\s+/).filter(Boolean);
  let price='', qty='', og='', status=null;
  if(tokens.length){
    const first=tokens[0];
    const sep = first.includes(',') ? ',' : first.includes('~') ? '~' : null;
    if(sep){
      const [p,o]=first.split(sep);
      price=(p||'').replace(/[^\d.]/g,'');
      og=(o||'').replace(/[^\d.]/g,'');
    } else {
      price=first.replace(/[^\d.]/g,'');
    }
    for(const t of tokens.slice(1)){
      const low=t.toLowerCase();
      if(/^\d+$/.test(t) && !qty) qty=t;
      else if(low==='low'||low==='low_stock') status='low_stock';
      else if(low==='out'||low==='out_of_stock') status='out_of_stock';
      else if(low==='in'||low==='in_stock') status='in_stock';
    }
  }

  // Map to state based on type
  if(S.type==='flash'){
    S.flash.price=price;
    if(og) S.flash.og=og;
    if(qty) S.w.qty=qty;
    if(status) S.w.status=status;
  } else {
    S.w.price=price;
    if(qty) S.w.qty=qty;
    if(og){ S.w.og=og; S.w.ogOn=true; }
    else { S.w.ogOn=false; S.w.og=''; }
    if(status) S.w.status=status;
  }

  updatePriceChip();
  updateChipRail();
  regen();
}
function updatePriceChip(){
  const chip=document.getElementById('priceChip'); if(!chip) return;
  // Variant mode: show which variant is being priced.
  if(S.mode==='variant'){
    const av=activeVariant();
    if(av && variantStatus(av)!=='empty'){
      const suf=variantSuffix(av);
      chip.textContent='• pricing: '+suf;
      return;
    }
    chip.textContent='';
    return;
  }
  const p = S.type==='flash' ? S.flash.price : S.w.price;
  const og = S.type==='flash' ? S.flash.og : S.w.og;
  const q = S.w.qty;
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

// --- chip rail (platform / status / tone / lang / retail) ---
function updateChipRail(){
  const p=document.getElementById('chipPlatformV');
  if(p) p.textContent = (PLATFORMS[S.network]?.fullLabel || S.network || '').toLowerCase();
  const t=document.getElementById('chipToneV'); if(t) t.textContent=S.tone;
  const l=document.getElementById('chipLangV'); if(l) l.textContent=S.lang;
  const sv=document.getElementById('chipStatusV'); const sc=document.getElementById('chipStatus');
  if(sv && sc){
    const st=S.w.status;
    sv.textContent = st==='in_stock'?'in':st==='low_stock'?'low':'out';
    sc.dataset.status = st==='in_stock'?'in':st==='low_stock'?'low':'out';
  }
}
function cycleStatus(){
  const seq=['in_stock','low_stock','out_of_stock'];
  const i=seq.indexOf(S.w.status);
  const next=seq[(i+1)%seq.length];
  S.w.status=next;
  // Keep retail status in sync (one status chip governs both)
  if(S.r) S.r.status=next;
  updateChipRail();
  regen();
}
function parseRetailString(raw){
  const trimmed=(raw||'').trim();
  if(!trimmed){
    S.r.price=''; S.r.qty=''; S.r.og=''; S.r.ogOn=false;
    return;
  }
  const parts=trimmed.split(/\s+/);
  const head=parts[0];
  const sep = head.includes(',') ? ',' : head.includes('~') ? '~' : null;
  if(sep){
    const [p,o]=head.split(sep);
    S.r.price=(p||'').replace(/[^\d.]/g,'');
    S.r.og=(o||'').replace(/[^\d.]/g,'');
    S.r.ogOn=!!S.r.og;
  } else {
    S.r.price=head.replace(/[^\d.]/g,'');
    S.r.og=''; S.r.ogOn=false;
  }
  if(parts[1] && /^\d+$/.test(parts[1])) S.r.qty=parts[1];
  else S.r.qty='';
}
function onRetailInput(raw){
  parseRetailString(raw);
  regen();
}
function toggleRetail(){
  const box=document.getElementById('retailField');
  const btn=document.getElementById('retailToggle');
  if(!box||!btn) return;
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
    const icon={standard:'🛒',flash:'⚡',new_arrival:'✨',last_pieces:'🔥',repost:'📢',back_in_stock:'🔄',engagement:'💬',price_drop:'📉',bundle:'🎁',review:'⭐'}[r.id]||'▸';
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
  } else if(field==='tone'){
    title.textContent = '▸ tone';
    current = S.tone;
    rows = [{id:'hype',label:'hype — playful, emoji-heavy'},{id:'balanced',label:'balanced — clean & warm'},{id:'pro',label:'pro — minimal, business'}];
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
  else if(_pickerField==='tone') setTone(id);
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
  S.name=''; S.w.price=''; S.w.qty=''; S.w.og=''; S.w.ogOn=false;
  S.flash.price=''; S.flash.og='';
  S.r.price=''; S.r.qty=''; S.r.og=''; S.r.ogOn=false;
  S.description='';
  S.previewEdited=false;
  const n=document.getElementById('productName'); if(n) n.value='';
  const p=document.getElementById('priceField'); if(p) p.value='';
  const db=document.getElementById('descBox'); if(db) db.value='';
  collapseDescription();
  collapseRetail();
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
    wholesale: { price:S.w.price, qty:S.w.qty, og:S.w.og, ogOn:S.w.ogOn, status:S.w.status },
    retail:    { price:S.r.price, qty:S.r.qty, og:S.r.og, ogOn:S.r.ogOn, status:S.r.status },
    flash:     { price:S.flash.price, og:S.flash.og },
    mode: S.mode,
    variants: JSON.parse(JSON.stringify(S.variants || [])),
    testimonial: { quote:S.review.quote, reviewer:S.review.reviewer, stars:S.review.stars },
    bundle:      { item2:S.bundle.item2, comboPrice:S.bundle.comboPrice, savings:S.bundle.savings },
    restockDate: S.restockDate || '',
    restockHeadline: S.restockHeadline || '',
    lastQty: S.lastQty || '',
    lastType: S.type || '',
    lastPlatform: S.network || '',
    lastTone: S.tone || '',
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
    S.w.price  = p.wholesale.price  || '';
    S.w.qty    = p.wholesale.qty    || '';
    S.w.og     = p.wholesale.og     || '';
    S.w.ogOn   = !!p.wholesale.ogOn;
    S.w.status = p.wholesale.status || 'in_stock';
  }
  // 4. retail
  if(p.retail){
    S.r.price  = p.retail.price  || '';
    S.r.qty    = p.retail.qty    || '';
    S.r.og     = p.retail.og     || '';
    S.r.ogOn   = !!p.retail.ogOn;
    S.r.status = p.retail.status || 'in_stock';
  }
  // 5. flash
  if(p.flash){
    S.flash.price = p.flash.price || '';
    S.flash.og    = p.flash.og    || '';
  }
  // 6. mode + variants (migrate/drop legacy variant shape)
  if(p.mode) S.mode = p.mode;
  if(Array.isArray(p.variants)){
    S.variants = p.variants
      .filter(v => v && typeof v.rawInput === 'string')
      .map(v => ({
        id: v.id || ('v'+Math.random().toString(36).slice(2,8)),
        rawInput: v.rawInput || '',
        price: v.price || '',
      }));
  }
  S.activeVariantId = null;
  // 7. type-specific extras
  if(p.testimonial){
    S.review.quote    = p.testimonial.quote    || '';
    S.review.reviewer = p.testimonial.reviewer || '';
    S.review.stars    = p.testimonial.stars    || 0;
  }
  if(p.bundle){
    S.bundle.item2      = p.bundle.item2      || '';
    S.bundle.comboPrice = p.bundle.comboPrice || '';
    S.bundle.savings    = p.bundle.savings    || '';
  }
  S.restockDate     = p.restockDate     || '';
  S.restockHeadline = p.restockHeadline || '';
  S.lastQty         = p.lastQty         || '';
  // 8. last session context — auto-select type; detect falls back to standard
  if(p.lastPlatform && PLATFORMS[p.lastPlatform]) S.network = p.lastPlatform;
  if(p.lastTone) { S.tone = p.lastTone; setTone(p.lastTone); }
  if(p.lastLang) { S.lang = p.lastLang; setLang(p.lastLang); }
  const resolvedType = (p.lastType && REGISTRY.find(r=>r.id===p.lastType)) ? p.lastType : 'standard';
  if(resolvedType !== S.type) selectType(resolvedType);
  // 9. reflect price field + chips
  const pf = document.getElementById('priceField');
  if(pf){
    const p0 = (S.type==='flash' ? S.flash.price : S.w.price) || '';
    const og0 = (S.type==='flash' ? S.flash.og : (S.w.ogOn ? S.w.og : '')) || '';
    let disp = p0;
    if(og0) disp = `${p0},${og0}`;
    if(S.w.qty && S.w.qty !== '1') disp += ` ${S.w.qty}`;
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
window.onVariantInput = onVariantInput;
window.onVariantChipTap = onVariantChipTap;
window.onVariantPriceFocus = onVariantPriceFocus;
window.clearVariants = clearVariants;
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

