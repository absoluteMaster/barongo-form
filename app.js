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
  // Each variant is a full mini-product with its own wholesale, retail, flash,
  // plus visibility (👁 in caption) and a free-typed name (split to prefix-size
  // at caption build time only). Family S.w/S.r/S.flash are independent: family
  // wholesale in variants mode = carton pricing.
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
  if(m!=='variant') S.activeVariantId=null;
  if(S.type) renderFields();
  renderVariantChips();
  renderVariantPanel();
  // Entering variants collapses family retail field (variants owns retail per-item).
  if(m==='variant') collapseRetail();
  // Re-sync price field with family wholesale (or flash outside variant mode).
  const pf=document.getElementById('priceField');
  if(pf){
    const p = S.type==='flash' && m!=='variant' ? S.flash.price : S.w.price;
    pf.value = p || '';
  }
  updatePriceChip();
  regen();
}
function typeSupportsVariants(){
  const def=REGISTRY.find(r=>r.id===S.type);
  if(!def) return false;
  return def.groups.some(g=>['wholesale','retail','flash'].includes(g));
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
  S.name=''; S.w={price:'',qty:'',og:'',ogOn:false,status:'in_stock'};
  S.r={price:'',qty:'',og:'',ogOn:false,status:'in_stock'};
  S.flash={price:'',og:''}; S.restockDate=''; S.restockHeadline='';
  S.variants=[]; S.activeVariantId=null; S.mode='single';
  document.body.classList.remove('mode-variant');
  S.bundle={item2:'',comboPrice:'',savings:''}; S.lastQty='';
  S.review={quote:'',reviewer:'',stars:0}; S.previewEdited=false;
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
  if(def.groups.includes('restock_headline')) html+=htmlRestockHeadline();
  if(def.groups.includes('testimonial')) html+=htmlTestimonial();
  if(def.groups.includes('bundle')) html+=htmlBundleFields();
  if(def.groups.includes('last_qty')) html+=htmlLastQty();
  html+='</div>';
  area.innerHTML=html;
  if(def.groups.includes('testimonial')) applyStars(S.review.stars);
  renderVariantChips();
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
// VARIANTS — each is a full mini-product
// ═══════════════════════════════════════
// Shape: { id, name, w:{price,qty,og,ogOn,status}, r:{price,qty,og,ogOn,status},
//          flash:{price,og}, visible }
// - name is the raw typed text. Caption-side splits last token = size, rest = prefix.
// - Each variant carries its own wholesale / retail / flash + stock-via-status.
// - visible=false hides the variant from caption output but keeps its data.
// - Family S.w / S.r / S.flash are independent (S.w in variants mode = carton).

function variantSplit(raw){
  const tokens=(raw||'').trim().split(/\s+/).filter(Boolean);
  if(!tokens.length) return '';
  if(tokens.length===1) return tokens[0];
  return tokens.slice(0,-1).join('-')+'-'+tokens[tokens.length-1];
}
function variantHas(v){
  if(!v) return false;
  return !!(v.name||'').trim() || !!(v.w&&v.w.price) || !!(v.r&&v.r.price) || !!(v.flash&&v.flash.price);
}
function activeVariant(){ return S.variants.find(v=>v.id===S.activeVariantId)||null; }
function newVariantSlot(){
  return {
    id:'v'+Date.now().toString(36)+Math.random().toString(36).slice(2,5),
    name:'',
    w:{ price:'', qty:'', og:'', ogOn:false, status:'in_stock' },
    r:{ price:'', qty:'', og:'', ogOn:false, status:'in_stock' },
    flash:{ price:'', og:'' },
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
    v.flash.price=p.price;
    v.flash.og=p.og||'';
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
    if(!v.flash.price) return '';
    return v.flash.og ? `${v.flash.price},${v.flash.og}` : v.flash.price;
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
// Build a full pricing block for one variant: its name-heading plus per-variant
// wholesale / retail / flash lines. Hidden or empty variants return ''.
function getVariantBlock(v){
  if(!v || v.visible===false) return '';
  const pa=E('price_arrow');
  const lines=[];
  // Variant label: prefix-size suffix only. Family name is rendered as the
  // outer caption header by the builder — avoid repeating it per variant.
  const suffix=variantSplit(v.name||'');
  if(!suffix) return '';
  const label = suffix;
  // Wholesale
  if(v.w && v.w.price && v.w.status!=='out_of_stock'){
    const sw=E('section_wholesale');
    const qty=v.w.qty||'1';
    if(v.w.og){
      lines.push(`${sw} ${B(L('wholesale'))}`);
      lines.push(`${STR(`${pa} ${qty}pc = ${CC()} ${fmt(v.w.og)}`)}`);
      lines.push(`${pa} ${qty}pc = ${B(`${CC()} ${fmt(v.w.price)}`)}`);
    } else {
      lines.push(`${sw} ${B(L('wholesale'))} ${pa} ${qty}pc = ${B(`${CC()} ${fmt(v.w.price)}`)}`);
    }
    if(v.w.status==='low_stock') lines.push(`${E('status_low')} ${L('low_stock')}`);
  }
  // Retail
  if(v.r && v.r.price && v.r.status!=='out_of_stock'){
    const sr=E('section_retail');
    const qty=v.r.qty||'1';
    if(v.r.og){
      lines.push(`${sr} ${B(L('retail'))}`);
      lines.push(`${STR(`${pa} ${qty}pc = ${CC()} ${fmt(v.r.og)}`)}`);
      lines.push(`${pa} ${qty}pc = ${B(`${CC()} ${fmt(v.r.price)}`)}`);
    } else {
      lines.push(`${sr} ${B(L('retail'))} ${pa} ${qty}pc = ${B(`${CC()} ${fmt(v.r.price)}`)}`);
    }
    if(v.r.status==='low_stock') lines.push(`${E('status_low')} ${L('low_stock')}`);
  }
  // Flash (only in flash type)
  if(S.type==='flash' && v.flash && v.flash.price){
    if(v.flash.og){
      lines.push(`${STR(`${pa} ${CC()} ${fmt(v.flash.og)}`)}`);
    }
    lines.push(`${pa} ${B(`${CC()} ${fmt(v.flash.price)}`)}`);
  }
  if(!lines.length) return '';
  return clean(`${E('header_product')} ${B(label)}\n${lines.join('\n')}`);
}
function getVariantLines(){
  const blocks=S.variants.map(getVariantBlock).filter(Boolean);
  return blocks.length ? blocks.join('\n\n') : null;
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
    const famHead=clean(`${E('header_product')} ${B(name)}`);
    let body = lines ? `${famHead}\n\n${lines}` : famHead;
    let out=flashHead+descSuffix;
    out+=`\n${div}\n\n${body}\n\n${LH('limited_time','LIMITED_TIME')}`;
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
    S.flash.price=p.price;
    S.flash.og=p.og||'';
    if(p.qty) S.w.qty=p.qty;
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
  const p = S.type==='flash' && S.mode!=='variant' ? S.flash.price : S.w.price;
  const og = S.type==='flash' && S.mode!=='variant' ? S.flash.og : S.w.og;
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

// --- chip rail (platform / tone / lang) ---
// Stock lives inline in the price field (e.g. "500 10 low"), not as a chip.
function updateChipRail(){
  const p=document.getElementById('chipPlatformV');
  if(p) p.textContent = (PLATFORMS[S.network]?.fullLabel || S.network || '').toLowerCase();
  const t=document.getElementById('chipToneV'); if(t) t.textContent=S.tone;
  const l=document.getElementById('chipLangV'); if(l) l.textContent=S.lang;
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
  S.variants=[]; S.activeVariantId=null; S.mode='single';
  document.body.classList.remove('mode-variant');
  S.description='';
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
      if(v.flash) Object.assign(slot.flash, v.flash);
      // Legacy shape had a flat v.price → fold it into wholesale.
      if(!slot.w.price && v.price) slot.w.price = v.price;
      if(typeof v.visible === 'boolean') slot.visible = v.visible;
      return slot;
    });
  } else {
    S.variants = [];
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
window.onVariantNameInput = onVariantNameInput;
window.onVariantChipTap = onVariantChipTap;
window.onVariantFieldInput = onVariantFieldInput;
window.toggleVariantVisibility = toggleVariantVisibility;
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

