/* =========================================================
   APP — router, views, quiz engine, widgets
   ========================================================= */
(() => {
'use strict';

/* ---------------- storage (per-browser) ---------------- */
const KEY = 'mpi-web-v1';
const blank = () => ({ read: {}, quiz: {}, pre: null, post: null, notes: {} });
let S = blank();
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) { /* storage unavailable */ }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } };

/* ---------------- helpers ---------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pad = n => String(n).padStart(2, '0');
const ch = no => CHAPTERS.find(c => c.no === +no);
const dec = (n, d = 1) => n.toFixed(d).replace('.', ',');
const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const readCount = () => CHAPTERS.filter(c => S.read[c.no]).length;
const totalQuiz = Object.values(QUIZ).reduce((n, a) => n + a.length, 0);
const wechsler = iq => iq >= 130 ? 'Very Superior' : iq >= 120 ? 'Superior' : iq >= 110 ? 'High Average' : iq >= 90 ? 'Average' : iq >= 80 ? 'Low Average' : iq >= 70 ? 'Borderline' : 'Intellectually Deficient';

/* =========================================================
   SVG ART
   ========================================================= */
const INK = '#0C0C0C', PINK = '#FF2BAA', LIME = '#DDFF1F', BLUE = '#2B3BFF', RED = '#FF3426';
const MONO = "font-family='Space Mono, monospace'";

function shape(type, cx, cy, s, fill) {
  if (type === 'c') return `<circle cx="${cx}" cy="${cy}" r="${s * .55}" fill="${fill}"/>`;
  if (type === 's') return `<rect x="${cx - s / 2}" y="${cy - s / 2}" width="${s}" height="${s}" fill="${fill}"/>`;
  return `<path d="M${cx} ${cy - s * .6} L${cx + s * .6} ${cy + s * .45} L${cx - s * .6} ${cy + s * .45} Z" fill="${fill}"/>`;
}
function cellShapes(type, n, cx, cy, s, gap, fill) {
  let o = ''; const start = cx - (n - 1) * gap / 2;
  for (let k = 0; k < n; k++) o += shape(type, start + k * gap, cy, s, fill);
  return o;
}
const ROWS = ['c', 's', 't'];
const ROWFILL = [INK, PINK, INK];

function figMatrix() {
  let g = `<rect x="30" y="20" width="180" height="180" fill="#fff" stroke="${INK}" stroke-width="2"/>
  <path d="M90 20V200M150 20V200M30 80H210M30 140H210" stroke="${INK}" stroke-width="1.2"/>`;
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
    if (r === 2 && c === 2) continue;
    g += cellShapes(ROWS[r], c + 1, 60 + 60 * c, 50 + 60 * r, 10, 15, ROWFILL[r]);
  }
  g += `<rect x="150" y="140" width="60" height="60" fill="${LIME}" stroke="${INK}" stroke-width="2"/>
  <text x="180" y="182" text-anchor="middle" font-family="Chakra Petch, sans-serif" font-weight="700" font-size="34" fill="${INK}">?</text>`;
  const opts = [['t', 2], ['s', 3], ['t', 3], ['c', 3]];
  opts.forEach(([t, n], i) => {
    const x = 30 + i * 47;
    g += `<rect x="${x}" y="218" width="40" height="40" fill="#fff" stroke="${INK}" stroke-width="1.2"/>`;
    g += cellShapes(t, n, x + 20, 238, 6, 10, INK);
    g += `<text x="${x + 20}" y="272" text-anchor="middle" ${MONO} font-size="9">${'ABCD'[i]}</text>`;
  });
  g += `<text x="30" y="296" ${MONO} font-size="9.5">• matriks 3×3, satu sel hilang</text>
  <text x="30" y="311" ${MONO} font-size="9.5">• APM Set II — 36 soal</text>`;
  return `<svg viewBox="0 0 240 320" role="img" aria-label="Ilustrasi soal matriks">${g}</svg>`;
}

function figWatch() {
  let t = '';
  for (let i = 0; i < 24; i++) {
    const a = (i * 15 - 90) * Math.PI / 180, r1 = i % 6 === 0 ? 74 : 82, r2 = 90;
    t += `<line x1="${120 + r1 * Math.cos(a)}" y1="${140 + r1 * Math.sin(a)}" x2="${120 + r2 * Math.cos(a)}" y2="${140 + r2 * Math.sin(a)}" stroke="${INK}" stroke-width="${i % 6 === 0 ? 3 : 1.4}"/>`;
  }
  return `<svg viewBox="0 0 240 320" role="img" aria-label="Ilustrasi stopwatch">
  <rect x="106" y="12" width="28" height="14" rx="3" fill="${INK}"/><rect x="114" y="26" width="12" height="16" fill="${INK}"/>
  <rect x="182" y="50" width="22" height="12" rx="2" fill="${INK}" transform="rotate(42 193 56)"/>
  <circle cx="120" cy="140" r="96" fill="#fff" stroke="${INK}" stroke-width="3"/>
  <path d="M120 140 L120 60 A80 80 0 1 1 40 140 Z" fill="${LIME}"/>
  ${t}
  <text x="120" y="88" text-anchor="middle" ${MONO} font-size="11" font-weight="700">0</text>
  <text x="170" y="144" text-anchor="middle" ${MONO} font-size="11" font-weight="700">30</text>
  <text x="120" y="200" text-anchor="middle" ${MONO} font-size="11" font-weight="700">60</text>
  <text x="66" y="130" text-anchor="middle" ${MONO} font-size="11" font-weight="700">90</text>
  <line x1="120" y1="140" x2="44" y2="140" stroke="${PINK}" stroke-width="4" stroke-linecap="round"/>
  <circle cx="120" cy="140" r="7" fill="${INK}"/>
  <rect x="30" y="252" width="180" height="24" fill="none" stroke="${INK}" stroke-width="1.2"/>
  <text x="38" y="268" ${MONO} font-size="9.5">• Digit Symbol WAIS — 90 dtk</text>
  <text x="30" y="298" ${MONO} font-size="9.5">• CFIT: 3′ · 4′ · 3′ · 2,5′</text>
  <text x="30" y="313" ${MONO} font-size="9.5">• APM Set II: 40′</text></svg>`;
}

function figBlocks() {
  const pat = ['TL', 'R', 'TR', 'R', 'W', 'R', 'BL', 'R', 'BR'];
  let g = '';
  pat.forEach((p, i) => {
    const x = 45 + (i % 3) * 50, y = 22 + Math.floor(i / 3) * 50;
    g += `<rect x="${x}" y="${y}" width="50" height="50" fill="${p === 'R' ? RED : '#fff'}"/>`;
    const tri = { TL: `${x},${y} ${x + 50},${y} ${x},${y + 50}`, TR: `${x},${y} ${x + 50},${y} ${x + 50},${y + 50}`, BL: `${x},${y} ${x},${y + 50} ${x + 50},${y + 50}`, BR: `${x + 50},${y} ${x + 50},${y + 50} ${x},${y + 50}` }[p];
    if (tri) g += `<polygon points="${tri}" fill="${RED}"/>`;
    g += `<rect x="${x}" y="${y}" width="50" height="50" fill="none" stroke="${INK}" stroke-width="1.5"/>`;
  });
  return `<svg viewBox="0 0 240 320" role="img" aria-label="Ilustrasi balok Block Design dan kubus">
  ${g}
  <rect x="139" y="116" width="62" height="62" fill="none" stroke="${INK}" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="96" y="196" ${MONO} font-size="9.5">• Block Design (WAIS)</text>
  <polygon points="120,212 154,232 120,252 86,232" fill="#fff" stroke="${INK}" stroke-width="2"/>
  <polygon points="86,232 120,252 120,292 86,272" fill="${RED}" stroke="${INK}" stroke-width="2"/>
  <polygon points="120,252 154,232 154,272 120,292" fill="#fff" stroke="${INK}" stroke-width="2"/>
  <polygon points="120,252 154,232 120,292" fill="${RED}"/>
  <polygon points="120,252 154,232 154,272 120,292" fill="none" stroke="${INK}" stroke-width="2"/>
  <text x="30" y="313" ${MONO} font-size="9.5">• IST WU — kubus 3D</text></svg>`;
}

function heart() {
  return `<svg class="sticker-heart" viewBox="0 0 120 100" filter="url(#rough)" aria-hidden="true">
  <g fill="none" stroke="${PINK}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M42 46 C30 34 16 30 4 34 C12 38 16 40 18 43 C9 45 5 49 3 54 C12 54 18 54 22 56 C16 60 14 64 14 70 C24 66 32 60 40 58"/>
    <path d="M78 46 C90 34 104 30 116 34 C108 38 104 40 102 43 C111 45 115 49 117 54 C108 54 102 54 98 56 C104 60 106 64 106 70 C96 66 88 60 80 58"/>
  </g>
  <path d="M60 90 C26 68 28 40 46 38 C54 37 60 44 60 50 C60 44 66 37 74 38 C92 40 94 68 60 90 Z" fill="${PINK}"/>
  <path d="M50 52 C48 56 50 60 52 62" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`;
}

function smiley() {
  return `<svg class="smiley" viewBox="0 0 160 190" filter="url(#rough)" aria-hidden="true">
  <g fill="none" stroke="${INK}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">
    <path d="M80 12 C38 12 12 42 14 82 C16 124 44 150 84 148 C124 146 148 116 146 76 C144 38 118 12 80 12 Z"/>
    <path d="M44 58 l20 20 M64 58 l-20 20 M96 54 l20 20 M116 54 l-20 20"/><path d="M46 108 C 62 126 98 128 118 104"/></g>
  <g fill="${INK}"><path d="M36 128 q6 0 6 8 v26 q0 9 -6 9 q-6 0 -6 -9 v-26 q0 -8 6 -8z"/><path d="M118 136 q6 0 6 8 v30 q0 9 -6 9 q-6 0 -6 -9 v-30 q0 -8 6 -8z"/></g></svg>`;
}

/* normal curve */
function bell({ mean = 100, sd = 15, mark = null, W = 600, H = 210, small = false } = {}) {
  const lo = mean - 3.6 * sd, hi = mean + 3.6 * sd, padX = 20, base = H - 34, top = 18;
  const X = v => padX + (v - lo) / (hi - lo) * (W - 2 * padX);
  const Y = v => base - Math.exp(-Math.pow((v - mean) / sd, 2) / 2) * (base - top);
  const seg = (a, b) => { let d = `M${X(a)} ${base}`; for (let i = 0; i <= 60; i++) { const v = a + (b - a) * i / 60; d += ` L${X(v).toFixed(1)} ${Y(v).toFixed(1)}`; } return d + ` L${X(b)} ${base} Z`; };
  let s = `<path d="${seg(mean - 2 * sd, mean + 2 * sd)}" fill="#EEFF8A"/><path d="${seg(mean - sd, mean + sd)}" fill="${LIME}"/>`;
  let line = ''; for (let i = 0; i <= 120; i++) { const v = lo + (hi - lo) * i / 120; line += (i ? ' L' : 'M') + X(v).toFixed(1) + ' ' + Y(v).toFixed(1); }
  s += `<path d="${line}" fill="none" stroke="${INK}" stroke-width="2.2"/><line x1="${padX}" y1="${base}" x2="${W - padX}" y2="${base}" stroke="${INK}" stroke-width="1.5"/>`;
  for (let k = -3; k <= 3; k++) {
    const v = mean + k * sd;
    s += `<line x1="${X(v)}" y1="${base}" x2="${X(v)}" y2="${base + 6}" stroke="${INK}"/><text x="${X(v)}" y="${base + 20}" text-anchor="middle" ${MONO} font-size="${small ? 15 : 11}" font-weight="700">${v}</text>`;
  }
  if (!small) {
    s += `<text x="${X(mean)}" y="${Y(mean) + 40}" text-anchor="middle" ${MONO} font-size="11" font-weight="700">68,26%</text>`;
    s += `<text x="${X(mean - 1.5 * sd)}" y="${base - 8}" text-anchor="middle" ${MONO} font-size="10">13,6%</text><text x="${X(mean + 1.5 * sd)}" y="${base - 8}" text-anchor="middle" ${MONO} font-size="10">13,6%</text>`;
  }
  if (mark !== null && isFinite(mark)) {
    const m = Math.max(lo, Math.min(hi, mark)), x = X(m);
    s += `<line x1="${x}" y1="${base}" x2="${x}" y2="${Math.max(top - 6, Y(m) - 8)}" stroke="${PINK}" stroke-width="3"/>
      <rect x="${x - 26}" y="${Math.max(0, Y(m) - 34)}" width="52" height="20" fill="${PINK}"/>
      <text x="${x}" y="${Math.max(0, Y(m) - 34) + 14}" text-anchor="middle" ${MONO} font-size="12" font-weight="700" fill="#fff">${Math.round(mark)}</text>`;
  }
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Kurva normal distribusi IQ">${s}</svg>`;
}

/* outlined collage objects */
const TOOLS = [
  { n: 1, name: 'WAIS', to: '#/bab/4', c: 'var(--red)', vb: '0 0 220 230', ty: '58%',
    pos: 'left:1%;top:48%;width:20%', d: '<path d="M110 8 L204 60 L204 168 L110 220 L16 168 L16 60 Z"/>',
    dt: '<path d="M16 60 L110 112 L204 60 M110 112 V220"/>', txt: 'Individual · verbal + performance · IQ deviasi SD 15' },
  { n: 2, name: 'APM', to: '#/bab/5', c: 'var(--green)', vb: '0 0 300 230', ty: '42%',
    pos: 'left:3%;top:1%;width:37%', d: '<path d="M8 8 H292 V150 H196 V222 H8 Z"/>',
    dt: '<path d="M102 8 V222 M196 8 V150 M8 79 H292 M8 150 H196"/>', txt: 'Matriks nonverbal · g Spearman · Set I 12 + Set II 36 soal' },
  { n: 3, name: 'IST', to: '#/bab/6', c: 'var(--orange)', vb: '0 0 190 250', ty: '44%',
    pos: 'left:23%;top:52%;width:16%', d: '<path d="M8 8 H136 L182 54 V242 H8 Z"/>',
    dt: '<path d="M136 8 V54 H182 M30 196 H160 M30 210 H160 M30 224 H112"/>', txt: '9 subtes · 176 soal · profil struktur intelegensi' },
  { n: 4, name: 'BINET', to: '#/bab/7', c: 'var(--pink)', vb: '0 0 300 210', ty: '64%',
    pos: 'left:43%;top:5%;width:32%', d: '<path d="M8 202 V160 H64 V120 H120 V80 H176 V40 H232 V8 H292 V202 Z"/>',
    dt: '', txt: 'Basal &amp; ceiling · usia mental · Form L-M SD 16',
    extra: ['VI', 'VII', 'VIII', 'IX', 'X'].map((r, i) => `<text x="${36 + i * 56}" y="${152 - i * 40}" text-anchor="middle" ${MONO} font-size="10" fill="#999">${r}</text>`).join('') },
  { n: 5, name: 'CFIT', to: '#/bab/8', c: 'var(--yellow)', vb: '0 0 220 240', ty: '56%',
    pos: 'left:51%;top:50%;width:21%', d: '<circle cx="110" cy="134" r="98"/><path d="M92 8 H128 V36 H92 Z"/>',
    dt: '<path d="M110 44 V56 M110 212 V224 M20 134 H32 M188 134 H200"/>', txt: 'Gf Cattell · 4 subtes · ±12,5 menit' },
  { n: 6, name: 'TIDI', to: '#/bab/9', c: 'var(--blue)', vb: '0 0 210 250', ty: '50%',
    pos: 'left:79%;top:0%;width:19%', d: '<path d="M70 242 V200 C38 188 24 156 26 122 C28 70 64 26 114 26 C162 26 190 60 190 102 C190 120 184 130 196 150 C200 158 194 162 184 162 C184 176 186 188 172 192 C156 196 140 194 136 206 V242 Z"/>',
    dt: '', txt: 'Adaptasi WAIS-R · norma Indonesia · 11 subtes' },
];
function toolSvg(t) {
  return `<svg viewBox="${t.vb}" aria-hidden="true"><g class="sh" transform="translate(6 6)">${t.d}</g><g class="mn">${t.d}</g><g class="dt">${t.dt}</g>${t.extra || ''}</svg>`;
}

/* side portrait (public-domain photo from Wikimedia Commons; graceful fallback) */
function mountSide() {
  const el = $('#sidePhoto'); if (!el) return;
  el.innerHTML = `<div class="photo"><img alt="" loading="lazy" referrerpolicy="no-referrer"
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Alfred_Binet.jpg?width=460"><figcaption>Alfred Binet · skala 1905</figcaption></div>`;
  const img = $('img', el);
  img.addEventListener('error', () => { el.innerHTML = `<div class="photo photo--fallback"><b>1905</b><figcaption>Binet-Simon · 30 butir</figcaption></div>`; });
}

/* =========================================================
   NAV
   ========================================================= */
function renderNav(route) {
  const on = p => (route === p || route.startsWith(p + '/')) ? 'is-on' : '';
  const isMat = route.startsWith('/bab') || route.startsWith('/materi') || route.startsWith('/lampiran');
  const L = [
    ['#/materi', 'Materi', isMat ? 'is-on' : ''],
    ['#/alat', 'Alat tes', on('/alat')],
    ['#/kuis', 'Kuis', route === '/kuis' || /^\/kuis\/\d/.test(route) ? 'is-on' : ''],
    ['#/lampiran/a', 'Role-play', on('/lampiran/a')],
    ['#/lampiran/b', 'Perbandingan', on('/lampiran/b')],
  ];
  const R = [
    ['#/pretest', `Pre-test${S.pre ? `(${S.pre.pct})` : ''}`, on('/pretest')],
    ['#/posttest', `Post-test${S.post ? `(${S.post.pct})` : ''}`, on('/posttest')],
    ['#/progres', `Progres(${readCount()}/14)`, on('/progres')],
  ];
  const a = ([h, t, c]) => `<a href="${h}" class="${c}">${t}</a>`;
  $('#nav').innerHTML = `
    <div class="nav__l">${L.map(a).join('')}</div>
    <a class="logo" href="#/"><span>Buku</span><span>Belajar MPI</span></a>
    <div class="nav__r">${R.map(a).join('')}</div>
    <button class="nav__menu" id="menuBtn" aria-expanded="false" aria-controls="drawer">Menu</button>`;
  $('#drawer').innerHTML = [...L, ...R].map(a).join('');
  $('#drawer').classList.remove('is-open');
  $('#menuBtn').addEventListener('click', e => {
    const open = $('#drawer').classList.toggle('is-open');
    e.currentTarget.setAttribute('aria-expanded', open);
    e.currentTarget.textContent = open ? 'Tutup' : 'Menu';
  });
}

/* =========================================================
   VIEW: HOME
   ========================================================= */
function viewHome() {
  const tags = [['teori', 1], ['rapport', 2], ['wais', 3], ['apm', 5], ['ist', 6], ['binet', 7], ['cfit', 8], ['tidi', 9], ['iq', 12], ['etika', 14]];
  const chips = CHAPTERS.map(c => `<span class="${S.read[c.no] ? 'is-done' : ''}">${pad(c.no)}</span>`).join('');
  const scoreTxt = r => r ? `skor ${r.pct}` : 'belum dikerjakan';
  return `
<section class="hero">
  <h1 class="hero__title"><span>Tes</span><span>Intelegensi</span></h1>
  <ul class="hero__tags">${tags.map(([t, n]) => `<li><a href="#/bab/${n}">[${t}]</a></li>`).join('')}</ul>
  <div class="hero__row">
    <div class="hero__fig">${figMatrix()}</div>
    <p class="blurb">14 bab sesuai pertemuan 1–15 RPS Metode Pengukuran Intelegensi: dari teori, alat tes, sampai etika penggunaannya.</p>
    <div class="hero__fig">${figWatch()}</div>
    <p class="blurb">Tiap bab berisi materi inti, Poin Kunci, Cek Pemahaman, lalu kuis. Ukur kemajuanmu lewat pre-test dan post-test.</p>
    <div class="hero__fig">${figBlocks()}</div>
  </div>
</section>

<div class="split hdl">
  <div class="split__l">
    <p class="sec__k">[sejarah tes]</p>
    <ul class="tl">
      <li><b>1884</b><span>Galton membuka laboratorium antropometri</span></li>
      <li><b>1905</b><span>Skala Binet-Simon, 30 butir</span></li>
      <li><b>1916</b><span>Stanford-Binet (Terman), rasio IQ</span></li>
      <li><b>1938</b><span>Raven Standard Progressive Matrices</span></li>
      <li><b>1939</b><span>Wechsler-Bellevue, IQ deviasi</span></li>
      <li><b>1953</b><span>IST (Amthauer)</span></li>
      <li><b>1955</b><span>WAIS edisi pertama</span></li>
      <li><b>2009</b><span>TIDI — LPSP3 UI</span></li>
      <li><b>2024</b><span>WAIS-5, lima indeks primer</span></li>
    </ul>
  </div>
  <a class="split__cta" href="#/bab/1">Mulai dari<br>Bab 01 →</a>
  <span class="split__word">Sejarah-tes</span>
  <div class="split__r">
    ${heart()}
    <p>Tes intelegensi modern lahir dari kebutuhan praktis: pemerintah Prancis meminta Binet &amp; Simon mengenali anak yang butuh pendidikan khusus.</p>
    <p>Perang Dunia I melahirkan tes klasikal Army Alpha &amp; Beta. Wechsler lalu memperkenalkan IQ deviasi — rata-rata 100, SD 15.</p>
    <div class="split__inset"><svg viewBox="0 0 120 120"><text x="60" y="70" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="60" fill="${PINK}">30</text><text x="60" y="94" text-anchor="middle" ${MONO} font-size="9">butir · Binet 1905</text></svg></div>
    <p>Galton (1884) mengukur waktu reaksi dan ketajaman indra — pendekatan sensoris yang gagal memprediksi prestasi akademik.</p>
    <p>Dari sana lahir WAIS, APM, IST, CFIT, hingga TIDI dengan norma Indonesia.</p>
  </div>
</div>

<section class="mani">
  <p class="sec__k">[pesan utama]</p>
  <div class="mani__grid">
    <div class="mani__lines disp">
      <div class="mani__line"><span>IQ itu <span class="pink">hasil</span></span><span class="mani__note"><mark>Azwar (2013) membedakan intelegensi sebagai konstruk teoretis dan IQ sebagai hasil ukur.</mark></span></div>
      <div class="mani__line"><span>ukur, bukan</span><span class="mani__note"><mark>IQ menunjukkan posisi relatif seseorang terhadap kelompok normanya — skor hanya mewakili konstruk sejauh tesnya valid.</mark></span></div>
      <div class="mani__line mani__line--in">${smiley()}<span class="pink">intelegensi</span></div>
      <div class="mani__line mani__line--in"><span>itu sendiri.</span></div>
    </div>
    <figure class="mani__frame hdl">${bell({ W: 420, H: 200, small: true })}<p>±68,26% populasi berada di IQ 85–115 (SD 15).</p></figure>
  </div>
</section>

<section class="sec" id="alat">
  <div class="tools__head">
    <p class="sec__k">[alat tes]</p>
    <div><h2 class="disp">Alat tes</h2><p>Enam alat tes yang dibahas di buku ini. Tiap tes lahir dari teori yang berbeda — klik untuk membuka babnya.</p></div>
  </div>
  <div class="tools">
    ${TOOLS.map(t => `<a class="tool" href="${t.to}" style="--c:${t.c};--ty:${t.ty};${t.pos}">${toolSvg(t)}
      <span class="tool__txt"><b>[${t.n}]</b><em>${t.name}</em>${t.txt}</span></a>`).join('')}
    <a class="btn btn--lime" href="#/lampiran/b" style="position:absolute;left:77%;top:64%">Bandingkan<br>semua tes →</a>
  </div>
</section>

<section class="band">
  <div class="band__head">
    <p class="sec__k">[uji diri]</p>
    <div><h2 class="disp">Uji diri</h2><p>Kerjakan pre-test sebelum belajar, kuis tiap bab setelah membaca, lalu post-test untuk melihat seberapa jauh pemahamanmu naik.</p></div>
    <div class="band__scrib">100±15</div>
  </div>
  <div class="crew">
    <a class="mem" href="#/pretest"><div class="mem__pic hdl"><span class="mem__tag">Pre-test</span><div class="art art--pink"><div class="art__n">20<small>soal · sebelum belajar</small></div></div></div>
      <div class="mem__cap"><b>@pretest</b><span>${scoreTxt(S.pre)}</span></div></a>
    <a class="mem" href="#/progres"><div class="mem__pic hdl"><span class="mem__tag">Progres</span><div class="art art--white art--dots"><div class="art__n" style="background:#fff;padding:6px 10px;border:1.5px solid #0C0C0C">${readCount()}/14</div></div></div>
      <div class="mem__cap"><b>@progres</b><span>bab dibaca</span></div></a>
    <a class="mem mem--big" href="#/kuis"><div class="mem__pic hdl"><span class="mem__tag">Kuis per bab</span><div class="art art--blue"><div class="chips14">${chips}</div></div></div>
      <div class="mem__cap"><b>@kuis_bab</b><span>14 bab · ${totalQuiz} soal · langsung ada pembahasan</span></div></a>
    <a class="mem" href="#/lampiran/a"><div class="mem__pic hdl"><span class="mem__tag">Lampiran A</span><div class="art art--white"><div style="font:400 11px/1.45 'Space Mono',monospace;padding:16px">TESTER:<br>"Yang penting Anda sudah berusaha sebaik mungkin. Kita lanjut ke soal berikutnya."</div></div></div>
      <div class="mem__cap"><b>@roleplay</b><span>naskah rapport</span></div></a>
    <a class="mem" href="#/posttest"><div class="mem__pic hdl"><span class="mem__tag">Post-test</span><div class="art art--ink"><div class="art__n">20<small>soal · setelah belajar</small></div></div></div>
      <div class="mem__cap"><b>@posttest</b><span>${scoreTxt(S.post)}</span></div></a>
  </div>
</section>`;
}

/* =========================================================
   VIEW: MATERI (index, chapter, appendix)
   ========================================================= */
function tocHtml(active) {
  const g = GROUPS.map(gr => `<div class="toc__g"><span class="toc__k">[${gr.label}]</span>
    ${gr.chapters.map(n => { const c = ch(n); return `<a href="#/bab/${n}" class="${active === 'b' + n ? 'is-on' : ''}"><i>${pad(n)}</i><span>${c.title}</span><span class="ok">${S.read[n] ? '✓' : ''}</span></a>`; }).join('')}</div>`).join('');
  const ap = `<div class="toc__g"><span class="toc__k">[lampiran]</span>
    ${Object.entries(APPENDIX).map(([k, a]) => `<a href="#/lampiran/${k}" class="${active === 'a' + k ? 'is-on' : ''}"><i>${a.code}</i><span>${a.title}</span><span></span></a>`).join('')}</div>`;
  return g + ap;
}
function docShell(active, inner) {
  return `<div class="doc"><details class="toc__mob"><summary>Daftar bab ↓</summary><nav class="toc">${tocHtml(active)}</nav></details>
  <nav class="toc" aria-label="Daftar bab">${tocHtml(active)}</nav><article class="art-main">${inner}</article></div>`;
}

function viewMateri() {
  return `<section class="idx" style="border-top:1.5px solid var(--ink)">
  <div class="idx__head"><p class="sec__k">[daftar materi]</p><h1 class="disp">Materi <span class="pink">per alat tes</span></h1>
  <p class="mono" style="font-size:11px;max-width:560px;margin:14px 0 30px">Buku mengikuti urutan RPS. Pertemuan 11 (UTS) dan 16 (UAS) tidak punya bab sendiri. Waktu sempit? Baca Poin Kunci tiap bab dulu. Persiapan role-play: Bab 2 + Lampiran A. Praktikum WAIS, APM, IST: Bab 4, 5, 6, 11.</p></div>
  ${GROUPS.map(gr => `<div class="idx__group"><div class="idx__label"><span>${gr.label}</span></div><div class="idx__items">
    ${gr.chapters.map(n => { const c = ch(n); const best = S.quiz[n];
      return `<a class="idx__item" href="#/bab/${n}"><span class="idx__no">${pad(n)}</span><span class="idx__t">${c.title}<small>${c.meet} · ${c.cpmk}</small></span>
      <span class="idx__st"><span class="${S.read[n] ? 'on' : ''}">${S.read[n] ? 'dibaca' : 'belum'}</span>${best != null ? `<span class="on">kuis ${best}</span>` : ''}</span></a>`; }).join('')}
  </div></div>`).join('')}
  <div class="idx__group"><div class="idx__label"><span>lampiran</span></div><div class="idx__items">
    ${Object.entries(APPENDIX).map(([k, a]) => `<a class="idx__item" href="#/lampiran/${k}"><span class="idx__no">${a.code}</span><span class="idx__t">${a.title}</span><span></span></a>`).join('')}
  </div></div></section>`;
}

function viewChapter(no) {
  const c = ch(no); if (!c) return view404();
  const prev = ch(no - 1), next = ch(no + 1);
  const checks = c.checks.length ? `<section class="checks"><h2>Cek pemahaman</h2><ol>
    ${c.checks.map((q, i) => `<li><div>${q}
      <textarea data-note="${no}-${i}" placeholder="Tulis jawabanmu di sini (tersimpan di browser ini)…">${(S.notes[`${no}-${i}`] || '').replace(/</g, '&lt;')}</textarea>
      ${c.answers && c.answers[i] ? `<details class="key"><summary>Lihat kunci</summary><div>${c.answers[i]}</div></details>` : ''}</div></li>`).join('')}
  </ol></section>` : '';
  const inner = `
  <div class="crumb"><a href="#/materi">materi</a><span>/</span><span>[${GROUPS.find(g => g.id === c.group).label}]</span><span>/</span><span>bab ${pad(no)}</span></div>
  <header class="ch-head"><span class="ch-num">${pad(no)}</span>
    <span class="ch-tag">${c.tag}</span>
    <h1 class="ch-title">Bab ${no}. ${c.title}</h1>
    <p class="ch-cpmk">${c.meet} · <b>Sub-CPMK</b> ${c.cpmk.charAt(0).toLowerCase() + c.cpmk.slice(1)}</p></header>
  <div class="prose">${c.html}</div>
  <section class="keys hdl"><h2>Poin kunci</h2><ul>${c.keys.map(k => `<li>${k}</li>`).join('')}</ul></section>
  ${checks}
  <div class="ch-actions">
    <button class="btn ${S.read[no] ? 'btn--lime' : ''}" id="readBtn">${S.read[no] ? '✓ Sudah dibaca' : 'Tandai sudah dibaca'}</button>
    <a class="btn btn--pink" href="#/kuis/${no}">Kuis bab ${pad(no)} →</a>
  </div>
  <nav class="pager">
    ${prev ? `<a href="#/bab/${prev.no}"><small>← sebelumnya · bab ${pad(prev.no)}</small><b>${prev.title}</b></a>` : `<a href="#/materi"><small>← kembali</small><b>Daftar materi</b></a>`}
    ${next ? `<a href="#/bab/${next.no}"><small>berikutnya · bab ${pad(next.no)} →</small><b>${next.title}</b></a>` : `<a href="#/lampiran/a"><small>berikutnya →</small><b>Lampiran A · Role-play</b></a>`}
  </nav>`;
  return docShell('b' + no, inner);
}

function viewAppendix(k) {
  const a = APPENDIX[k]; if (!a) return view404();
  const keys = Object.keys(APPENDIX), i = keys.indexOf(k);
  const nk = keys[i + 1];
  const inner = `
  <div class="crumb"><a href="#/materi">materi</a><span>/</span><span>[lampiran]</span><span>/</span><span>${a.code}</span></div>
  <header class="ch-head"><span class="ch-num">${a.code}</span><span class="ch-tag">${a.tag}</span>
  <h1 class="ch-title">Lampiran ${a.code}. ${a.title}</h1></header>
  <div class="prose">${a.html}</div>
  <nav class="pager"><a href="#/bab/14"><small>← bab 14</small><b>Etika Penggunaan Tes Intelegensi</b></a>
  ${nk ? `<a href="#/lampiran/${nk}"><small>berikutnya →</small><b>Lampiran ${APPENDIX[nk].code} · ${APPENDIX[nk].title}</b></a>` : `<a href="#/posttest"><small>siap? →</small><b>Kerjakan post-test</b></a>`}</nav>`;
  return docShell('a' + k, inner);
}

function view404() {
  return `<section class="qz"><div class="qz__in"><h1 class="qz__title">404</h1><p class="qz__sub">Halaman tidak ditemukan.</p><p><a class="btn" href="#/">Ke beranda</a></p></div></section>`;
}

/* =========================================================
   WIDGETS (mounted after render)
   ========================================================= */
function mountWidgets(root) {
  $$('[data-widget="iq"]', root).forEach(el => {
    el.innerHTML = `<div class="wdg"><div class="wdg__head"><span>Kalkulator IQ deviasi</span><span>z = (X − M) / SD</span></div>
    <div class="wdg__body">
      <div class="wdg__row">
        <label class="fld">X skor mentah<input type="number" id="iqX" value="32" step="any"></label>
        <label class="fld">M rata-rata<input type="number" id="iqM" value="38" step="any"></label>
        <label class="fld">SD kelompok<input type="number" id="iqS" value="4" step="any" min="0.01"></label>
        <div class="fld">SD tes<div class="seg" id="iqSeg"><button type="button" class="on" data-v="15">15</button><button type="button" data-v="16">16</button></div></div>
      </div>
      <div class="out"><div><small>Skor z</small><b id="iqZ">–</b></div><div><small>IQ</small><b id="iqV">–</b></div><span class="cls" id="iqC">–</span></div>
      <div class="curve" id="iqCurve"></div>
    </div></div>`;
    let sdT = 15;
    const calc = () => {
      const X = parseFloat($('#iqX', el).value), M = parseFloat($('#iqM', el).value), SD = parseFloat($('#iqS', el).value);
      if (![X, M, SD].every(isFinite) || SD <= 0) { $('#iqZ', el).textContent = '–'; $('#iqV', el).textContent = '–'; $('#iqC', el).textContent = 'Isi X, M, dan SD > 0'; $('#iqCurve', el).innerHTML = bell({ sd: sdT }); return; }
      const z = (X - M) / SD, iq = 100 + sdT * z;
      $('#iqZ', el).textContent = dec(z, 2);
      $('#iqV', el).textContent = Number.isInteger(iq) ? iq : `${dec(iq)} ≈ ${Math.round(iq)}`;
      $('#iqC', el).textContent = sdT === 15 ? `Wechsler: ${wechsler(Math.round(iq))}` : 'SD 16: pakai tabel klasifikasi tes ybs.';
      $('#iqCurve', el).innerHTML = bell({ sd: sdT, mark: iq });
    };
    $$('input', el).forEach(i => i.addEventListener('input', calc));
    $$('#iqSeg button', el).forEach(b => b.addEventListener('click', () => { sdT = +b.dataset.v; $$('#iqSeg button', el).forEach(x => x.classList.toggle('on', x === b)); calc(); }));
    calc();
  });

  $$('[data-widget="ma"]', root).forEach(el => {
    const roman = ['VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV'];
    el.innerHTML = `<div class="wdg"><div class="wdg__head"><span>Kalkulator usia mental &amp; rasio IQ</span><span>2 bulan / butir (VI–XIV)</span></div>
    <div class="wdg__body">
      <div class="wdg__row">
        <label class="fld">Basal level<select id="maB">${roman.map((r, i) => `<option value="${i + 6}" ${i === 1 ? 'selected' : ''}>${r}</option>`).join('')}</select></label>
        <label class="fld"><span id="l1">Lulus di VIII</span><input type="number" id="maP1" value="3" min="0" max="6"></label>
        <label class="fld"><span id="l2">Lulus di IX</span><input type="number" id="maP2" value="1" min="0" max="6"></label>
        <label class="fld"><span id="l3">Lulus di X</span><input type="number" id="maP3" value="0" min="0" max="6"></label>
      </div>
      <div class="wdg__row">
        <label class="fld">CA tahun<input type="number" id="caY" value="7" min="0"></label>
        <label class="fld">CA bulan<input type="number" id="caM" value="0" min="0" max="11"></label>
      </div>
      <div class="out"><div><small>Usia mental (MA)</small><b id="maV">–</b></div><div><small>Rasio IQ = MA/CA × 100</small><b id="maIQ">–</b></div></div>
    </div></div>`;
    const calc = () => {
      const b = +$('#maB', el).value;
      [1, 2, 3].forEach(k => { $('#l' + k, el).textContent = `Lulus di ${roman[b - 6 + k] || '+' + k}`; });
      const p = [1, 2, 3].reduce((s, k) => s + Math.max(0, Math.min(6, +$('#maP' + k, el).value || 0)), 0);
      const ma = b * 12 + p * 2, ca = (+$('#caY', el).value || 0) * 12 + (+$('#caM', el).value || 0);
      $('#maV', el).textContent = `${Math.floor(ma / 12)} th ${ma % 12} bln`;
      $('#maIQ', el).textContent = ca > 0 ? dec(ma / ca * 100) : '–';
    };
    $$('input,select', el).forEach(i => i.addEventListener('input', calc));
    calc();
  });

  $$('[data-widget="matrix"]', root).forEach(el => {
    let g = `<rect x="2" y="2" width="216" height="216" fill="#fff" stroke="${INK}" stroke-width="2"/><path d="M74 2V218M146 2V218M2 74H218M2 146H218" stroke="${INK}" stroke-width="1.2"/>`;
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) { if (r === 2 && c === 2) continue; g += cellShapes(ROWS[r], c + 1, 38 + 72 * c, 38 + 72 * r, 12, 18, ROWFILL[r]); }
    g += `<rect x="146" y="146" width="72" height="72" fill="${LIME}" stroke="${INK}" stroke-width="2"/><text x="182" y="194" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="40">?</text>`;
    const opts = [['t', 2], ['s', 3], ['t', 3], ['c', 3]];
    el.innerHTML = `<div class="wdg"><div class="wdg__head"><span>Coba format matriks</span><span>contoh buatan · bukan butir APM asli</span></div>
    <div class="wdg__body"><div class="mx"><svg viewBox="0 0 220 220" role="img" aria-label="Contoh matriks buatan">${g}</svg>
      <div><p style="margin:0 0 12px;font-size:15px">Baris menentukan bentuk, kolom menentukan jumlah. Pilih sel yang melengkapi pola.</p>
      <div class="mx__opts">${opts.map(([t, n], i) => `<button type="button" data-i="${i}"><svg viewBox="0 0 60 60" width="56">${cellShapes(t, n, 30, 30, 9, 15, INK)}</svg>${'ABCD'[i]}</button>`).join('')}</div>
      <p class="mx__msg" id="mxMsg">Seperti di Set I APM, contoh pertama dipakai untuk menjelaskan bentuk soal.</p></div></div></div></div>`;
    $$('.mx__opts button', el).forEach(b => b.addEventListener('click', () => {
      const ok = b.dataset.i === '2';
      $$('.mx__opts button', el).forEach(x => x.classList.remove('ok', 'no'));
      b.classList.add(ok ? 'ok' : 'no');
      $('#mxMsg', el).textContent = ok ? 'Tepat. Baris 3 = segitiga, kolom 3 = tiga buah. Inilah kemampuan eduktif: menarik hubungan dari informasi baru.' : 'Belum tepat. Cek dua aturan sekaligus: bentuk per baris dan jumlah per kolom.';
    }));
  });
}

/* =========================================================
   QUIZ ENGINE
   ========================================================= */
let Q = null; // active session

function startQuiz(mode, id) {
  let src, title, sub;
  if (mode === 'bab') { src = shuffle(QUIZ[id].map(x => ({ ...x, bab: id }))); title = `Kuis ${pad(id)}`; sub = ch(id).title; }
  else if (mode === 'pre') { src = PRETEST; title = 'Pre-test'; sub = 'Sebelum belajar · 20 soal'; }
  else { src = POSTTEST; title = 'Post-test'; sub = 'Setelah belajar · 20 soal'; }
  Q = {
    mode, id, title, sub, idx: 0, done: false,
    items: src.map(x => { const o = shuffle(x.o.map((t, i) => ({ t, c: i === x.a }))); return { q: x.q, o, why: x.why, bab: x.bab }; }),
    ans: [],
  };
  renderQuiz();
}

function quizIntro(mode) {
  const last = mode === 'pre' ? S.pre : S.post;
  const other = mode === 'pre' ? S.post : S.pre;
  const isPre = mode === 'pre';
  return `<section class="qz view"><div class="qz__in">
    <span class="qz__mode">${isPre ? 'Bentuk A' : 'Bentuk B · paralel'}</span>
    <h1 class="qz__title">${isPre ? 'Pre-test' : 'Post-test'}</h1>
    <p class="qz__sub">${isPre ? 'Petakan pemahaman awalmu sebelum membaca materi.' : 'Ukur pemahamanmu setelah menyelesaikan materi.'}</p>
    <div class="intro">
      <div><h3>Aturan</h3><ul class="bul">
        <li>20 soal pilihan ganda, mencakup Bab 1–14.</li>
        <li>Jawaban benar &amp; pembahasan baru muncul setelah kamu mengumpulkan.</li>
        <li>Kamu bisa pindah-pindah soal sebelum mengumpulkan.</li>
        <li>${isPre ? 'Post-test memakai soal paralel (berbeda) dengan topik yang sama, jadi kenaikan skor bisa dibandingkan.' : 'Skor dibandingkan dengan pre-test (soal paralel, topik sama).'}</li>
        <li>Skor tersimpan di browser ini saja.</li></ul>
        <div class="btns" style="margin-top:18px"><button class="btn btn--pink" id="go">${last ? 'Ulangi' : 'Mulai'} ${isPre ? 'pre-test' : 'post-test'} →</button>
        ${!isPre && readCount() < 14 ? `<a class="btn btn--ghost" href="#/materi">Lanjut baca dulu (${readCount()}/14)</a>` : ''}</div></div>
      <div class="last">${last ? `Skor terakhir<b>${last.pct}</b>${last.correct}/${last.total} benar · ${new Date(last.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}` : 'Belum pernah dikerjakan.'}
        ${other ? `<p style="margin-top:16px">${isPre ? 'Post-test' : 'Pre-test'}: <strong>${other.pct}</strong></p>` : ''}
        ${last ? `<p><a href="#/progres">Lihat progres →</a></p>` : ''}</div>
    </div></div></section>`;
}

function renderQuiz() {
  const app = $('#app');
  if (Q.done) { app.innerHTML = renderResult(); bindResult(); return; }
  const it = Q.items[Q.idx], instant = Q.mode === 'bab', picked = Q.ans[Q.idx], answered = picked != null;
  const bar = Q.items.map((x, i) => {
    let c = '';
    if (instant && Q.ans[i] != null) c = x.o[Q.ans[i]].c ? 'ok' : 'no';
    else if (Q.ans[i] != null) c = 'done';
    return `<i class="${c} ${i === Q.idx ? 'cur' : ''}"></i>`;
  }).join('');
  const opts = it.o.map((o, i) => {
    let cls = '', mark = '';
    if (instant && answered) {
      if (o.c) { cls = 'ok'; mark = '✓ benar'; }
      else if (i === picked) { cls = 'no'; mark = '✗ jawabanmu'; }
      else cls = 'dim';
    } else if (i === picked) cls = 'sel';
    return `<button class="opt ${cls}" data-i="${i}" ${instant && answered ? 'disabled' : ''}><span class="opt__k">${'ABCD'[i]}</span><span>${o.t}</span><span class="opt__m">${mark}</span></button>`;
  }).join('');
  const why = instant && answered ? `<div class="why ${it.o[picked].c ? '' : 'why--no'}"><b>${it.o[picked].c ? 'Tepat' : 'Kurang tepat'}</b>${it.why}</div>` : '';
  const last = Q.idx === Q.items.length - 1;
  const nAns = Q.ans.filter(a => a != null).length;
  app.innerHTML = `<section class="qz"><div class="qz__in">
    <div class="qz__top"><div><span class="qz__mode">${Q.mode === 'bab' ? 'Kuis bab · pembahasan langsung' : Q.mode === 'pre' ? 'Pre-test · bentuk A' : 'Post-test · bentuk B'}</span>
      <h1 class="qz__title">${Q.title}</h1><p class="qz__sub">${Q.sub}</p></div>
      <span class="qz__count">${pad(Q.idx + 1)} / ${pad(Q.items.length)}</span></div>
    <div class="bar">${bar}</div>
    <div class="qcard hdl"><span class="qcard__k">Soal ${pad(Q.idx + 1)}${it.bab && Q.mode !== 'bab' ? ` · bab ${pad(it.bab)}` : ''}</span>
      <p class="qcard__q">${it.q}</p><div class="opts">${opts}</div>${why}</div>
    <div class="qz__nav">
      <button class="btn btn--ghost" id="prev" ${Q.idx === 0 ? 'disabled' : ''}>← Sebelumnya</button>
      ${instant
        ? `<button class="btn ${last ? 'btn--pink' : ''}" id="next" ${answered ? '' : 'disabled'}>${last ? 'Lihat hasil →' : 'Berikutnya →'}</button>`
        : `<div class="btns">${!last ? `<button class="btn" id="next">Berikutnya →</button>` : ''}<button class="btn btn--pink" id="submit">Kumpulkan (${nAns}/${Q.items.length})</button></div>`}
    </div>
    ${!instant ? `<div class="qz__dots">${Q.items.map((_, i) => `<button data-go="${i}" class="${Q.ans[i] != null ? 'ans' : ''} ${i === Q.idx ? 'cur' : ''}">${i + 1}</button>`).join('')}</div>` : ''}
  </div></section>`;

  $$('.opt', app).forEach(b => b.addEventListener('click', () => {
    if (instant && answered) return;
    Q.ans[Q.idx] = +b.dataset.i;
    if (!instant && Q.idx < Q.items.length - 1) { renderQuiz(); setTimeout(() => { Q.idx++; renderQuiz(); }, 160); return; }
    renderQuiz();
  }));
  const go = d => { Q.idx = Math.max(0, Math.min(Q.items.length - 1, Q.idx + d)); renderQuiz(); };
  $('#prev', app)?.addEventListener('click', () => go(-1));
  $('#next', app)?.addEventListener('click', () => { if (instant && last) finishQuiz(); else go(1); });
  $('#submit', app)?.addEventListener('click', () => {
    const left = Q.items.length - nAns;
    if (left && !confirm(`Masih ada ${left} soal belum dijawab. Kumpulkan sekarang?`)) return;
    finishQuiz();
  });
  $$('[data-go]', app).forEach(b => b.addEventListener('click', () => { Q.idx = +b.dataset.go; renderQuiz(); }));
}

function finishQuiz() {
  const total = Q.items.length;
  const correct = Q.items.filter((it, i) => Q.ans[i] != null && it.o[Q.ans[i]].c).length;
  const pct = Math.round(correct / total * 100);
  const byBab = {};
  Q.items.forEach((it, i) => { const b = it.bab; byBab[b] = byBab[b] || [0, 0]; byBab[b][1]++; if (Q.ans[i] != null && it.o[Q.ans[i]].c) byBab[b][0]++; });
  Q.result = { correct, total, pct, byBab, date: Date.now() };
  Q.prevBest = Q.mode === 'bab' ? S.quiz[Q.id] : null;
  if (Q.mode === 'bab') S.quiz[Q.id] = Math.max(S.quiz[Q.id] || 0, pct);
  if (Q.mode === 'pre') S.pre = Q.result;
  if (Q.mode === 'post') S.post = Q.result;
  save();
  Q.done = true;
  renderNav(currentRoute());
  renderQuiz();
  window.scrollTo({ top: 0 });
}

function renderResult() {
  const r = Q.result;
  let meta = '';
  if (Q.mode === 'bab') meta = `<b>${r.correct} dari ${r.total} benar</b>Skor terbaik bab ini: ${S.quiz[Q.id]}${Q.prevBest != null ? ` (sebelumnya ${Q.prevBest})` : ''}`;
  else meta = `<b>${r.correct} dari ${r.total} benar</b>${Q.title} tersimpan.`;
  if (Q.mode === 'post' && S.pre) { const d = r.pct - S.pre.pct; meta += `<br><span class="delta ${d >= 0 ? 'delta--up' : 'delta--down'}">Pre ${S.pre.pct} → Post ${r.pct} · ${d >= 0 ? '+' : ''}${d} poin</span>`; }
  if (Q.mode === 'pre' && S.post) meta += `<br><span class="delta">Post-test sebelumnya: ${S.post.pct}</span>`;

  const brk = Q.mode !== 'bab' ? `<h2 class="disp" style="font-size:26px;margin-top:30px">Per bab</h2><div class="brk">
    ${Object.entries(r.byBab).sort((a, b) => a[0] - b[0]).map(([b, [c, t]]) => { const p = Math.round(c / t * 100);
      return `<div class="brk__row"><a href="#/bab/${b}">${pad(b)} ${ch(b).tag}</a><div class="brk__bar"><i class="${p < 60 ? 'lo' : ''}" style="width:${p}%"></i></div><b>${c}/${t}</b></div>`; }).join('')}
  </div>` : '';
  const weak = Q.mode !== 'bab' ? Object.entries(r.byBab).filter(([, [c, t]]) => c / t < .6).map(([b]) => +b) : [];
  const rev = Q.items.map((it, i) => ({ it, i, ok: Q.ans[i] != null && it.o[Q.ans[i]].c })).sort((a, b) => a.ok - b.ok);
  return `<section class="qz view"><div class="qz__in">
    <span class="qz__mode">Hasil · ${Q.mode === 'bab' ? 'kuis bab ' + pad(Q.id) : Q.title}</span>
    <div class="res"><div class="res__score">${r.pct}<small>/100</small></div><div class="res__meta">${meta}</div></div>
    ${brk}
    ${weak.length ? `<p class="mono" style="font-size:12px">Bab yang perlu diulang: ${weak.map(b => `<a href="#/bab/${b}" style="color:var(--pink);font-weight:700">Bab ${b}</a>`).join(', ')}</p>` : ''}
    <div class="btns" style="margin:22px 0 30px">
      <button class="btn btn--pink" id="again">Ulangi</button>
      ${Q.mode === 'bab' ? `<a class="btn btn--ghost" href="#/bab/${Q.id}">Baca ulang bab ${pad(Q.id)}</a>${ch(Q.id + 1) ? `<a class="btn" href="#/kuis/${Q.id + 1}">Kuis bab ${pad(Q.id + 1)} →</a>` : `<a class="btn" href="#/posttest">Post-test →</a>`}` : ''}
      ${Q.mode === 'pre' ? `<a class="btn" href="#/bab/1">Mulai belajar Bab 01 →</a>` : ''}
      ${Q.mode === 'post' ? `<a class="btn" href="#/progres">Lihat progres →</a>` : ''}
    </div>
    <h2 class="disp" style="font-size:26px">Pembahasan</h2>
    <div class="rev">${rev.map(({ it, i, ok }) => {
      const right = it.o.find(o => o.c).t, mine = Q.ans[i] != null ? it.o[Q.ans[i]].t : '— tidak dijawab —';
      return `<div class="rev__it ${ok ? 'ok' : 'no'}"><span class="rev__n">${pad(i + 1)}</span><div><p class="rev__q">${it.q}</p>
        <p class="rev__a">${ok ? `✓ ${right}` : `<s>${mine}</s> → <b>${right}</b>`}</p><p class="rev__w">${it.why}</p></div></div>`;
    }).join('')}</div>
  </div></section>`;
}
function bindResult() { $('#again')?.addEventListener('click', () => { startQuiz(Q.mode, Q.id); window.scrollTo({ top: 0 }); }); }

/* =========================================================
   VIEW: kuis index + progres
   ========================================================= */
function viewKuis() {
  const card = (href, top, tag, big, title, bot, done) => `<a class="qi ${done ? 'done' : ''}" href="${href}"><div class="qi__top"><span>${top}</span><span>${tag}</span></div>
    <div class="qi__mid"><b>${big}</b><p>${title}</p></div><div class="qi__bot">${bot}</div></a>`;
  return `<section class="qz view"><div class="qz__in" style="max-width:1040px">
    <span class="qz__mode">Uji diri</span><h1 class="qz__title">Kuis</h1>
    <p class="qz__sub">Pre-test → baca bab → kuis bab → post-test.</p>
    <div class="qidx">
      ${card('#/pretest', 'bentuk A', '20 soal', S.pre ? S.pre.pct : 'PRE', 'Pre-test', `<span>sebelum belajar</span><span>${S.pre ? 'selesai' : 'mulai →'}</span>`, !!S.pre)}
      ${card('#/posttest', 'bentuk B', '20 soal', S.post ? S.post.pct : 'POST', 'Post-test', `<span>setelah belajar</span><span>${S.post ? 'selesai' : 'mulai →'}</span>`, !!S.post)}
      ${CHAPTERS.map(c => card(`#/kuis/${c.no}`, `bab ${pad(c.no)}`, `${QUIZ[c.no].length} soal`, S.quiz[c.no] != null ? S.quiz[c.no] : c.tag, c.title,
        `<span>${S.read[c.no] ? '✓ dibaca' : 'belum dibaca'}</span><span>${S.quiz[c.no] != null ? 'terbaik ' + S.quiz[c.no] : 'mulai →'}</span>`, S.quiz[c.no] != null)).join('')}
    </div></div></section>`;
}

function viewProgres() {
  const d = S.pre && S.post ? S.post.pct - S.pre.pct : null;
  const done = CHAPTERS.filter(c => S.quiz[c.no] != null);
  const avg = done.length ? Math.round(done.reduce((s, c) => s + S.quiz[c.no], 0) / done.length) : null;
  return `<section class="qz view"><div class="qz__in" style="max-width:1040px">
    <span class="qz__mode">Tersimpan di browser ini</span><h1 class="qz__title">Progres</h1>
    <div class="dash">
      <div><small>Bab dibaca</small><b>${readCount()}/14</b><span>${readCount() === 14 ? 'Semua bab selesai.' : `<a href="#/bab/${(CHAPTERS.find(c => !S.read[c.no]) || CHAPTERS[0]).no}">Lanjut ke bab berikutnya →</a>`}</span></div>
      <div><small>Pre → Post</small><b>${S.pre ? S.pre.pct : '–'}${S.post ? ' → ' + S.post.pct : ''}</b><span>${d != null ? `${d >= 0 ? 'Naik' : 'Turun'} ${Math.abs(d)} poin` : S.pre ? '<a href="#/posttest">Kerjakan post-test →</a>' : '<a href="#/pretest">Kerjakan pre-test →</a>'}</span></div>
      <div><small>Rata-rata kuis bab</small><b>${avg != null ? avg : '–'}</b><span>${done.length}/14 kuis dikerjakan</span></div>
    </div>
    <h2 class="disp" style="font-size:26px;margin-top:34px">Kuis per bab</h2>
    <div class="brk">${CHAPTERS.map(c => { const p = S.quiz[c.no];
      return `<div class="brk__row"><a href="#/kuis/${c.no}">${pad(c.no)} ${c.tag}${S.read[c.no] ? ' ✓' : ''}</a><div class="brk__bar">${p != null ? `<i class="${p < 60 ? 'lo' : ''}" style="width:${p}%"></i>` : ''}</div><b>${p != null ? p : '–'}</b></div>`; }).join('')}</div>
    <div class="btns" style="margin-top:30px"><a class="btn btn--pink" href="#/kuis">Ke daftar kuis</a><button class="btn btn--ghost" id="reset">Hapus semua progres</button></div>
  </div></section>`;
}

/* =========================================================
   ROUTER
   ========================================================= */
const currentRoute = () => (location.hash.replace(/^#/, '') || '/').replace(/\/$/, '') || '/';

function render() {
  const r = currentRoute();
  const app = $('#app');
  Q = null;
  renderNav(r);
  let m, html;
  if (r === '/' || r === '/alat') html = viewHome();
  else if (r === '/materi') html = viewMateri();
  else if ((m = r.match(/^\/bab\/(\d+)$/))) html = viewChapter(+m[1]);
  else if ((m = r.match(/^\/lampiran\/([abc])$/))) html = viewAppendix(m[1]);
  else if (r === '/kuis') html = viewKuis();
  else if ((m = r.match(/^\/kuis\/(\d+)$/)) && QUIZ[+m[1]]) { startQuiz('bab', +m[1]); window.scrollTo({ top: 0 }); return; }
  else if (r === '/pretest') html = quizIntro('pre');
  else if (r === '/posttest') html = quizIntro('post');
  else if (r === '/progres') html = viewProgres();
  else html = view404();

  app.innerHTML = `<div class="view">${html}</div>`;
  mountWidgets(app);

  // bindings
  $('#go', app)?.addEventListener('click', () => { startQuiz(r === '/pretest' ? 'pre' : 'post'); window.scrollTo({ top: 0 }); });
  $('#reset', app)?.addEventListener('click', () => { if (confirm('Hapus semua progres, skor, dan catatan di browser ini?')) { S = blank(); save(); render(); } });
  $('#readBtn', app)?.addEventListener('click', () => {
    const no = +r.split('/')[2]; S.read[no] = !S.read[no]; save();
    const b = $('#readBtn', app); b.textContent = S.read[no] ? '✓ Sudah dibaca' : 'Tandai sudah dibaca'; b.classList.toggle('btn--lime', !!S.read[no]);
    renderNav(r);
    $$('.toc a[href="#/bab/' + no + '"] .ok').forEach(x => { x.textContent = S.read[no] ? '✓' : ''; });
  });
  $$('textarea[data-note]', app).forEach(t => t.addEventListener('input', () => { S.notes[t.dataset.note] = t.value; save(); }));

  if (r === '/alat') requestAnimationFrame(() => $('#alat')?.scrollIntoView({ behavior: 'smooth' }));
  else window.scrollTo({ top: 0 });
}

window.addEventListener('hashchange', render);
mountSide();
render();
})();
