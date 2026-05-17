export const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;0,800;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
 
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; font-size: 16px; }
  body { font-family: 'Plus Jakarta Sans', sans-serif; background: #f9f7f3; color: #1c1c1c; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
  img { display: block; max-width: 100%; }
 
  :root {
    --gold:       #c8952a;
    --gold-lt:    #f0d080;
    --gold-pale:  #fdf5e0;
    --navy:       #0d1f3c;
    --navy2:      #183060;
    --cream:      #f9f7f3;
    --stone:      #f0ece3;
    --muted:      #6b7280;
    --border:     #e5ddd0;
    --white:      #ffffff;
    --r: 16px;
    --r-lg: 24px;
  }
 
  
  .rv  { opacity:0; transform:translateY(32px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
  .rv.in { opacity:1; transform:none; }
  .rvl { opacity:0; transform:translateX(-40px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
  .rvl.in { opacity:1; transform:none; }
  .rvr { opacity:0; transform:translateX(40px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
  .rvr.in { opacity:1; transform:none; }
  .d1{transition-delay:.07s} .d2{transition-delay:.14s} .d3{transition-delay:.21s}
  .d4{transition-delay:.28s} .d5{transition-delay:.35s} .d6{transition-delay:.42s}
 
  @keyframes pulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.6)} }
  @keyframes floatY { 0%,100%{transform:translateY(0)}      50%{transform:translateY(-16px)} }
  .pulse-dot { animation: pulse 2.2s ease-in-out infinite; }
  .float-y   { animation: floatY 7s ease-in-out infinite; }
 
  
  .navbar { position:fixed; top:0; left:0; right:0; z-index:500; transition:background .35s, box-shadow .35s; }
  .navbar.solid { background:rgba(255,255,255,.97); box-shadow:0 1px 24px rgba(0,0,0,.09); backdrop-filter:blur(18px); }
  .nav-link { background:none; border:none; cursor:pointer; font-family:inherit; font-size:.875rem; font-weight:600; color:inherit; padding:4px 0; position:relative; letter-spacing:.01em; }
  .nav-link::after { content:''; position:absolute; bottom:-3px; left:0; width:0; height:2px; background:var(--gold); border-radius:2px; transition:width .28s ease; }
  .nav-link:hover::after { width:100%; }
 
  
  .btn-gold  { display:inline-flex; align-items:center; gap:8px; background:var(--gold); color:#fff; border:none; border-radius:12px; padding:13px 26px; font-family:inherit; font-size:.9rem; font-weight:700; cursor:pointer; transition:background .22s, transform .18s, box-shadow .22s; white-space:nowrap; }
  .btn-gold:hover  { background:#a97820; transform:translateY(-2px); box-shadow:0 10px 26px rgba(200,149,42,.36); }
  .btn-outline { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,.1); color:#fff; border:1.5px solid rgba(255,255,255,.38); border-radius:12px; padding:13px 26px; font-family:inherit; font-size:.9rem; font-weight:600; cursor:pointer; transition:background .22s, border-color .22s, transform .18s; white-space:nowrap; }
  .btn-outline:hover { background:rgba(255,255,255,.2); border-color:rgba(255,255,255,.75); transform:translateY(-2px); }
 
  
  .sec-tag { display:inline-flex; align-items:center; gap:9px; font-size:.68rem; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:var(--gold); }
  .sec-tag::before,.sec-tag::after { content:''; height:1px; width:24px; background:var(--gold); opacity:.45; }
 
  
  .card { background:#fff; border:1px solid var(--border); border-radius:var(--r-lg); transition:transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s, border-color .3s; }
  .card:hover { transform:translateY(-5px); box-shadow:0 20px 52px rgba(0,0,0,.09); border-color:var(--gold); }
 
  
  .hero-slide { position:absolute; inset:0; background-size:cover; background-position:center center; opacity:0; transition:opacity 1.3s cubic-bezier(.4,0,.2,1); }
  .hero-slide.active { opacity:1; }
  .hero-dot { width:8px; height:8px; border-radius:50%; border:1.5px solid rgba(255,255,255,.5); background:transparent; cursor:pointer; transition:all .3s; flex-shrink:0; }
  .hero-dot.on { background:var(--gold); border-color:var(--gold); transform:scale(1.4); }
 
  
  .prog-tab { padding:9px 18px; border-radius:100px; font-size:.82rem; font-weight:600; border:1.5px solid var(--border); background:none; cursor:pointer; font-family:inherit; transition:all .22s; display:inline-flex; align-items:center; gap:7px; }
  .prog-tab.on { background:var(--navy); color:#fff; border-color:var(--navy); }
 
  
  .slider-track { display:flex; gap:16px; transition:transform .55s cubic-bezier(.22,1,.36,1); will-change:transform; }
  .campus-card { flex-shrink:0; border-radius:var(--r); overflow:hidden; position:relative; }
  .campus-card img { width:100%; height:100%; object-fit:cover; transition:transform .5s; }
  .campus-card:hover img { transform:scale(1.06); }
  .campus-cap { position:absolute; inset:0; background:linear-gradient(to top, rgba(13,31,60,.75) 0%, transparent 55%); display:flex; align-items:flex-end; padding:14px; color:#fff; font-size:.78rem; font-weight:600; opacity:0; transition:opacity .3s; }
  .campus-card:hover .campus-cap { opacity:1; }
 
  .testi-card { flex-shrink:0; background:#fff; border:1px solid var(--border); border-radius:var(--r-lg); padding:28px; transition:box-shadow .3s, transform .3s; }
  .testi-card:hover { box-shadow:0 14px 44px rgba(0,0,0,.08); transform:translateY(-4px); }
 
  
  .drawer { position:fixed; top:0; right:0; bottom:0; width:min(300px, 85vw); background:#fff; z-index:600; transform:translateX(110%); transition:transform .35s cubic-bezier(.4,0,.2,1); box-shadow:-6px 0 36px rgba(0,0,0,.14); padding:0 28px 40px; display:flex; flex-direction:column; }
  .drawer.open { transform:translateX(0); }
  .drawer-overlay { position:fixed; inset:0; background:rgba(0,0,0,.42); z-index:550; }
 
  
  ::-webkit-scrollbar { width:4px; }
  ::-webkit-scrollbar-track { background:var(--stone); }
  ::-webkit-scrollbar-thumb { background:var(--gold); border-radius:4px; }
 
  
 
  
  @media (max-width:1023px) {
    .about-grid       { grid-template-columns: 1fr !important; }
    .strengths-grid   { grid-template-columns: repeat(2,1fr) !important; }
    .footer-grid      { grid-template-columns: 1fr 1fr !important; gap:32px !important; }
    .footer-brand     { grid-column: 1 / -1; }
    .hero-stat-strip  { gap:16px !important; }
    .prog-grid        { grid-template-columns: repeat(2,1fr) !important; }
  }
 
  
  @media (max-width:639px) {
    .about-grid       { gap:32px !important; }
    .strengths-grid   { grid-template-columns: 1fr !important; }
    .prog-grid        { grid-template-columns: 1fr !important; }
    .hero-stat-strip  { grid-template-columns: repeat(2,1fr) !important; display:grid !important; gap:12px !important; border-top:none !important; padding-top:20px !important; }
    .stat-divider     { display:none !important; }
    .cta-btn-row      { flex-direction:column !important; align-items:stretch !important; }
    .cta-btn-row button { justify-content:center; width:100%; }
    .hero-btns        { flex-direction:column !important; align-items:flex-start !important; }
    .hero-btns button { width:100%; justify-content:center; }
    .contact-row      { flex-direction:column !important; align-items:center !important; gap:14px !important; }
    .footer-grid      { grid-template-columns: 1fr !important; }
    .footer-legal     { flex-direction:column !important; align-items:center !important; text-align:center; gap:10px !important; }
    .pillar-grid      { grid-template-columns: 1fr !important; }
    .about-img-overlay { flex-direction:column !important; gap:10px !important; }
    .testi-card       { width: calc(100vw - 64px) !important; padding:22px !important; }
    .campus-card      { width:calc(100vw - 72px) !important; height:200px !important; }
  }
`;

