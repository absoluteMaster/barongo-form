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
  variants: [], variantRestock: '',
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
const UNITS = ['pc','kg','g','L','ml','cm','inch','--'];

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
  document.getElementById('net_'+id).classList.add('on');
  if(S.type){ const def=REGISTRY.find(r=>r.id===S.type); if(!def||!def.nets.includes(id)) S.type=null; }
  renderTypePills();
  document.getElementById('typeBlk').classList.remove('gone');
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
  document.querySelectorAll('#typePills .pill').forEach(b=>b.classList.remove('on'));
  const btn=document.getElementById('type_'+id); if(btn) btn.classList.add('on');
  renderFields(); updatePreviewMeta(); regen();
}
function setMode(m) {
  S.mode=m;
  document.getElementById('modeSingle').classList.toggle('on',m==='single');
  document.getElementById('modeVariant').classList.toggle('on',m==='variant');
  if(S.type) renderFields(); regen();
}

// ═══════════════════════════════════════
// CLEAR FORM
// ═══════════════════════════════════════
function clearForm() {
  S.name=''; S.w={price:'',qty:'',og:'',ogOn:false,status:'in_stock'};
  S.r={price:'',qty:'',og:'',ogOn:false,status:'in_stock'};
  S.flash={price:'',og:''}; S.restockDate=''; S.restockHeadline='';
  S.variants=[]; S.variantRestock='';
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
  let html='<div class="blk">';
  if(S.mode==='variant'){
    const needsPrices=def.groups.some(g=>['wholesale','retail','flash'].includes(g));
    if(def.groups.includes('restock_headline')) html+=htmlRestockHeadline();
    if(def.groups.includes('testimonial')) html+=htmlTestimonial();
    if(def.groups.includes('bundle')) html+=htmlBundleFields();
    if(def.groups.includes('last_qty')) html+=htmlLastQty();
    if(def.groups.includes('flash')) html+=htmlFlashGroupVariant();
    if(needsPrices) html+=htmlVariantSection();
  } else {
    if(def.groups.includes('restock_headline')) html+=htmlRestockHeadline();
    if(def.groups.includes('testimonial')) html+=htmlTestimonial();
    if(def.groups.includes('bundle')) html+=htmlBundleFields();
    if(def.groups.includes('last_qty')) html+=htmlLastQty();
    if(def.groups.includes('flash')) html+=htmlFlashGroup();
    if(def.groups.includes('wholesale')) html+=htmlWholesaleGroup();
    if(def.groups.includes('retail')) html+=htmlRetailGroup();
  }
  html+='</div>';
  area.innerHTML=html;
  if(S.mode==='single'){
    applyStatus('w',S.w.status); applyStatus('r',S.r.status);
    // Auto-enable old price fields for Price Drop
    if(S.type==='price_drop'&&!S.w.ogOn){S.w.ogOn=true;}
    if(S.type==='price_drop'&&!S.r.ogOn){S.r.ogOn=true;}
    if(S.w.ogOn){const f=document.getElementById('wOgField');if(f)f.classList.add('show');const b=document.getElementById('wOgBtn');if(b)b.classList.add('on');}
    if(S.r.ogOn){const f=document.getElementById('rOgField');if(f)f.classList.add('show');const b=document.getElementById('rOgBtn');if(b)b.classList.add('on');}
    checkRestockVisibility();
  } else { renderVariantRows(); }
  if(def.groups.includes('testimonial')) applyStars(S.review.stars);
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
function htmlFlashGroupVariant(){
  return `<div class="fc"><div class="fc-title">${E('header_flash')} Flash Sale — Per Variant</div>
    <p style="font-size:12px;color:var(--sub);">Set flash prices on each variant below.</p></div>`;
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

function htmlVariantSection(){
  return `<div class="fc" id="variantSection"><div class="fc-title">VARIANTS</div>
    <div id="variantRows"></div>
    <button class="add-variant-btn" onclick="addVariant()">+ Add Variant</button>
    <div class="restock-reveal" id="variantRestockReveal"><div class="fld"><label class="fld-lbl">Restock Date</label><input type="text" placeholder="e.g. April 20" value="${S.variantRestock}" oninput="S.variantRestock=this.value;regen()"></div></div></div>`;
}

// ═══════════════════════════════════════
// VARIANT MANAGEMENT
// ═══════════════════════════════════════
function addVariant(v={}){
  S.variants.push({ prefix:v.prefix||'',size:v.size||'',unit:v.unit||'pc',customUnit:v.customUnit||'',
    wholesale:v.wholesale||'',wholesaleQty:v.wholesaleQty||'',wOg:v.wOg||'',
    retail:v.retail||'',rOg:v.rOg||'',flashPrice:v.flashPrice||'',flashOg:v.flashOg||'',status:v.status||'in_stock' });
  renderVariantRows(); regen();
}
function removeVariant(i){ S.variants.splice(i,1); renderVariantRows(); regen(); }
function renderVariantRows(){
  const c=document.getElementById('variantRows'); if(!c)return; c.innerHTML='';
  const def=REGISTRY.find(r=>r.id===S.type); const isFlash=def&&def.groups.includes('flash');
  S.variants.forEach((v,i)=>{
    const name=buildVName(v); const div=document.createElement('div'); div.className='variant-card';
    let ph='';
    if(isFlash){
      ph=`<div class="div"></div><div class="grid2"><div class="fld"><label class="fld-lbl">Flash (${CC()})</label><input type="number" placeholder="Sale" value="${v.flashPrice}" oninput="S.variants[${i}].flashPrice=this.value;regen()"></div>
      <div class="fld"><label class="fld-lbl">Original (${CC()})</label><input type="number" placeholder="Was" value="${v.flashOg}" oninput="S.variants[${i}].flashOg=this.value;regen()"></div></div>`;
    } else {
      ph=`<div class="div"></div><div class="grid2"><div class="fld"><label class="fld-lbl">Wholesale (${CC()})</label><input type="number" value="${v.wholesale}" oninput="S.variants[${i}].wholesale=this.value;regen()"></div>
      <div class="fld"><label class="fld-lbl">W. Qty</label><input type="number" value="${v.wholesaleQty}" oninput="S.variants[${i}].wholesaleQty=this.value;regen()"></div></div>
      <div class="fld"><label class="fld-lbl">Old W. Price</label><input type="number" value="${v.wOg}" oninput="S.variants[${i}].wOg=this.value;regen()"></div>
      <div class="div"></div>
      <div class="fld"><label class="fld-lbl">Retail (${CC()})</label><input type="number" value="${v.retail}" oninput="S.variants[${i}].retail=this.value;regen()"></div>
      <div class="fld"><label class="fld-lbl">Old R. Price</label><input type="number" value="${v.rOg}" oninput="S.variants[${i}].rOg=this.value;regen()"></div>`;
    }
    div.innerHTML=`<div class="v-label" id="vlabel_${i}">VARIANT ${i+1}${name?' — '+name:''}</div>
      <button class="v-del" onclick="removeVariant(${i})">x</button>
      <div class="grid2"><div class="fld"><label class="fld-lbl">Prefix</label><input type="text" placeholder="e.g. Spiral" value="${v.prefix}" oninput="S.variants[${i}].prefix=this.value;updateVLabel(${i});regen()"></div>
      <div class="fld"><label class="fld-lbl">Size</label><input type="text" placeholder="e.g. 12, L" value="${v.size}" oninput="S.variants[${i}].size=this.value;updateVLabel(${i});regen()"></div></div>
      <div class="fld"><label class="fld-lbl">Unit</label><div class="unit-chips">${UNITS.map(u=>`<button class="uc ${v.unit===u?'on':''}" onclick="setVUnit(${i},'${u}')">${u==='--'?'Custom':u}</button>`).join('')}</div>
      <input type="text" id="vcu_${i}" placeholder="Custom unit" value="${v.customUnit}" style="${v.unit!=='--'?'display:none':''}" oninput="S.variants[${i}].customUnit=this.value;regen()"></div>
      ${ph}
      <div class="fld-lbl" style="margin-top:10px;">Stock</div>
      <div class="status-row"><button class="st-btn ${v.status==='in_stock'?'g':''}" onclick="setVStatus(${i},'in_stock')">In</button>
      <button class="st-btn ${v.status==='low_stock'?'o':''}" onclick="setVStatus(${i},'low_stock')">Low</button>
      <button class="st-btn ${v.status==='out_of_stock'?'r':''}" onclick="setVStatus(${i},'out_of_stock')">Out</button></div>`;
    c.appendChild(div);
  });
  checkVariantRestock();
}
function updateVLabel(i){ const el=document.getElementById('vlabel_'+i); if(!el)return; const n=buildVName(S.variants[i]); el.textContent=`VARIANT ${i+1}${n?' — '+n:''}`; }
function setVUnit(i,u){ S.variants[i].unit=u; const ci=document.getElementById('vcu_'+i); if(ci)ci.style.display=u==='--'?'block':'none'; const card=document.getElementById('variantRows').children[i]; if(card)card.querySelectorAll('.uc').forEach((b,j)=>b.classList.toggle('on',UNITS[j]===u)); regen(); }
function setVStatus(i,st){ S.variants[i].status=st; const card=document.getElementById('variantRows').children[i]; if(card){const b=card.querySelectorAll('.status-row .st-btn'); b[0].className='st-btn'+(st==='in_stock'?' g':''); b[1].className='st-btn'+(st==='low_stock'?' o':''); b[2].className='st-btn'+(st==='out_of_stock'?' r':'');} checkVariantRestock(); regen(); }
function checkVariantRestock(){ const el=document.getElementById('variantRestockReveal'); if(!el)return; el.classList.toggle('show',S.variants.length>0&&S.variants.every(v=>v.status==='out_of_stock')); }
function buildVName(v){ const u=v.unit==='--'?v.customUnit:v.unit; if(!v.size)return v.prefix||''; if(v.prefix)return(u&&u!=='pc')?`${v.prefix}-${v.size} ${u}`:`${v.prefix}-${v.size}`; return(u&&u!=='pc')?`${v.size} ${u}`:v.size; }

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
function getVariantLines(isFlash=false){
  const active=S.variants.filter(v=>v.status!=='out_of_stock');
  if(!active.length) return null;
  const pa=E('price_arrow'), sw=E('section_wholesale'), sr=E('section_retail');
  return active.map(v=>{
    const vn=buildVName(v);
    let b=`${E('fire')} ${B(vn)}`;
    if(isFlash){
      b+=`\n${E('header_flash')} ${L('flash_price')}`;
      if(v.flashOg) b+=`\n${STR(`${pa} ${CC()} ${fmt(v.flashOg)}`)}`;
      if(v.flashPrice) b+=`\n${pa} ${B(`${CC()} ${fmt(v.flashPrice)}`)}`;
    } else {
      if(v.wholesale&&v.wholesaleQty){
        b+=`\n${sw} ${B(L('wholesale'))}`;
        if(v.wOg) b+=`\n${STR(`${pa} ${v.wholesaleQty}pc = ${CC()} ${fmt(v.wOg)}`)}`;
        b+=`\n${pa} ${v.wholesaleQty}pc = ${B(`${CC()} ${fmt(v.wholesale)}`)}`;
      }
      if(v.retail){
        b+=`\n${sr} ${B(L('retail'))}`;
        if(v.rOg) b+=`\n${STR(`${pa} 1pc = ${CC()} ${fmt(v.rOg)}`)}`;
        b+=`\n${pa} 1pc = ${B(`${CC()} ${fmt(v.retail)}`)}`;
      }
    }
    if(v.status==='low_stock') b+=`\n${E('status_low')} ${L('low_stock')}`;
    return clean(b);
  }).join('\n\n');
}
function getOutOfStockBlock(){
  const date=S.mode==='variant'?S.variantRestock:S.restockDate;
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
function variantBody(isFlash=false){
  const lines=getVariantLines(isFlash);
  if(lines) return lines;
  // Only show out-of-stock when user added variants AND every one is out
  if(S.variants.length>0 && S.variants.every(v=>v.status==='out_of_stock')) return getOutOfStockBlock();
  return '';
}

function assembleSingle(header, body, footer=''){
  const div=E('divider')||'───────────────'; const sig=getSig();
  let out=header;
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
  const name=S.name||'—';
  if(isShort()) return buildShort(`${E('header_product')} ${name}`, LH('dm_prices','DM_PRICES'));
  const h=clean(`${E('header_product')} ${B(name)}`);
  if(S.mode==='variant') return assembleSingle(h, variantBody());
  return assembleSingle(h, priceBody());
}

function buildRepost(){
  const name=S.name||'—';
  const cta=clean(`${E('cta_order')} ${LH('selling_fast','SELLING_FAST')}`);
  if(isShort()) return buildShort(`${E('header_repost')} ${name} — ${LH('still_available','STILL_AVAILABLE')}`, cta);
  const h=clean(`${E('header_repost')} ${B(`${name} — ${LH('still_available','STILL_AVAILABLE')}`)}`);
  if(S.mode==='variant') return assembleSingle(h, variantBody(), cta);
  return assembleSingle(h, priceBody(), cta);
}

function buildFlash(){
  const name=S.name||'—';
  const flashHead=clean(`${E('header_flash')} ${B(L('flash_today'))} ${E('header_flash')}`);
  if(isShort()){
    const fp=S.flash.price?` ${CC()} ${fmt(S.flash.price)}`:'';
    return buildShort(flashHead, `${name}${fp}\n${LH('limited_time','LIMITED_TIME')}`);
  }
  const div=E('divider')||'───────────────'; const sig=getSig(); const pa=E('price_arrow');
  if(S.mode==='variant'){
    const lines=getVariantLines(true);
    const hasContent=!!lines || S.variants.length>0;
    let body='';
    if(lines) body=clean(`${E('header_product')} ${B(name)}`)+'\n\n'+lines;
    else if(S.variants.length>0 && S.variants.every(v=>v.status==='out_of_stock')) body=getOutOfStockBlock();
    let out=flashHead;
    if(body) out+=`\n${div}\n\n${body}\n\n${LH('limited_time','LIMITED_TIME')}`;
    if(sig) out+=`\n${sig}`; return out;
  }
  let body=clean(`${E('header_product')} ${B(name)}`);
  if(S.flash.og) body+='\n'+clean(`${STR(`${pa} ${CC()} ${fmt(S.flash.og)}`)}`);
  if(S.flash.price) body+='\n'+clean(`${pa} ${B(`${CC()} ${fmt(S.flash.price)}`)}`);
  const wBlock=getWBlock(); if(wBlock) body+='\n\n'+wBlock;
  body+=`\n\n${LH('limited_time','LIMITED_TIME')}`;
  let out=`${flashHead}\n${div}\n\n${body}`; if(sig) out+=`\n${sig}`; return out;
}

function buildNewArrival(){
  const name=S.name||'—';
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
  const name=S.name||'—';
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
  const name=S.name||'this';
  const wantLine=`${L('want')} ${name}?`;
  if(isShort()) return buildShort(wantLine, LH('budget','BUDGET'));
  const div=E('divider')||'───────────────';
  const body=LH('budget','BUDGET')+'\n\n'+LH('ws_rs_welcome','WS_RS_WELCOME');
  const sig=getSig();
  return `${wantLine}\n${div}\n\n${body}${sig?'\n'+sig:''}`;
}

function buildPriceDrop(){
  const name=S.name||'—';
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
  const name=S.name||'—'; const item2=S.bundle.item2||'Item 2';
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
  const name=S.name||'—'; const qty=S.lastQty;
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
  const name=S.name||'—'; const q=S.review.quote||'Great product!';
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
function doCopy(){
  const text=document.getElementById('previewBox').value;
  if(!text||text===L('pick_prompt')) return;
  navigator.clipboard.writeText(text).then(()=>{
    const btn=document.getElementById('copyBtn');
    const mini=document.getElementById('miniCopyBtn');
    btn.textContent=L('copied'); btn.classList.add('done');
    if(mini){ mini.innerHTML=CHECK_SVG; mini.classList.add('done'); }
    setTimeout(()=>{
      btn.textContent=L('copy'); btn.classList.remove('done');
      if(mini){ mini.innerHTML=COPY_SVG; mini.classList.remove('done'); }
    },2500);
  });
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
  TG.MainButton.setText('SEND TO CHAT');
  TG.MainButton.color = '#7ee787';
  TG.MainButton.textColor = '#0a0a0a';
  TG.MainButton.onClick(()=>{
    const text = document.getElementById('previewBox').value;
    if (!text || text === L('pick_prompt')) return;
    TG.sendData(text);
    TG.close();
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
// INIT
// ═══════════════════════════════════════
initNetworks();
initCfgFields();
regen();
tgInit();
