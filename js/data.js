/* =========================================================
   MATERI — Buku Belajar Metode Pengukuran Intelegensi
   Sumber: Buku_Belajar_MPI.pdf (RPS IT051352, rev. 11 Sep 2023)
   ========================================================= */

const tbl = (head, rows, cls = '') => `
<div class="tbl-wrap"><table class="tbl ${cls}">
  <thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead>
  <tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
</table></div>`;

const note = (txt) => `<aside class="note"><span class="note__tag">[catatan]</span><p>${txt}</p></aside>`;

/* Kelompok navigasi — dipisah sesuai alat tes */
const GROUPS = [
  { id: 'dasar',    label: 'dasar',          chapters: [1, 2] },
  { id: 'wais',     label: 'wais',           chapters: [3, 4] },
  { id: 'apm',      label: 'apm / raven',    chapters: [5] },
  { id: 'ist',      label: 'ist',            chapters: [6] },
  { id: 'binet',    label: 'binet',          chapters: [7] },
  { id: 'cfit',     label: 'cfit',           chapters: [8] },
  { id: 'tidi',     label: 'tidi',           chapters: [9] },
  { id: 'praktik',  label: 'kasus & praktik', chapters: [10, 11] },
  { id: 'iq',       label: 'iq & quotient',  chapters: [12, 13] },
  { id: 'etika',    label: 'etika',          chapters: [14] },
];

const CHAPTERS = [
/* ---------------------------------------------------- BAB 1 */
{
  no: 1, tag: 'TEORI', group: 'dasar', meet: 'Pertemuan 1',
  title: 'Pengantar dan Teori Intelegensi',
  cpmk: 'Memahami dan menjelaskan pengantar dan teori intelegensi',
  html: `
<h2>1.1 Definisi Intelegensi</h2>
<p>Para ahli belum menyepakati satu definisi intelegensi. Setiap definisi lahir dari sudut pandang teoretis penyusunnya. <b>Binet</b> menekankan kemampuan menilai, memahami, dan menalar dengan baik, termasuk inisiatif dan kemampuan menyesuaikan diri. <b>Terman</b> mendefinisikan intelegensi sebagai kemampuan berpikir abstrak. <b>Wechsler (1958)</b> memandangnya sebagai kapasitas global untuk bertindak terarah, berpikir rasional, dan menghadapi lingkungan secara efektif.</p>
<p><b>Boring (1923)</b> memberi definisi operasional: intelegensi adalah <i>apa yang diukur oleh tes intelegensi</i>. Terdengar melingkar, tapi definisi ini mengingatkan bahwa skor tes hanya mewakili konstruk sejauh tes itu valid. <b>Gottfredson (1997)</b> merangkum pandangan 52 peneliti: intelegensi mencakup kemampuan menalar, merencanakan, memecahkan masalah, berpikir abstrak, memahami gagasan kompleks, dan belajar dari pengalaman.</p>
<p class="hl"><b>Azwar (2013)</b> membedakan intelegensi sebagai konstruk teoretis dan IQ sebagai hasil ukur. IQ adalah angka yang menunjukkan posisi relatif seseorang terhadap kelompok normanya. IQ bukan intelegensi itu sendiri.</p>

<h2>1.2 Perkembangan Tes Psikologi</h2>
<p>Sejarah tes intelegensi modern dimulai akhir abad ke-19. <b>Francis Galton</b> membuka laboratorium antropometri di London (1884) dan mengukur waktu reaksi serta ketajaman indra. <b>James McKeen Cattell</b> memperkenalkan istilah <i>mental test</i> (1890). Pendekatan sensoris ini gagal memprediksi prestasi akademik.</p>
<p><b>Alfred Binet dan Theodore Simon</b> mengubah arah pengukuran. Atas permintaan pemerintah Prancis, mereka menerbitkan skala 30 butir (1905) yang mengukur fungsi mental tinggi seperti penalaran dan pemahaman. Revisi 1908 memperkenalkan konsep <b>usia mental</b>. <b>Lewis Terman</b> mengadaptasinya menjadi Stanford-Binet (1916) dengan rasio IQ.</p>
<p>Perang Dunia I memicu lahirnya tes klasikal: <b>Army Alpha</b> untuk rekrut yang bisa membaca dan <b>Army Beta</b> untuk yang buta huruf. <b>David Wechsler</b> menerbitkan Wechsler-Bellevue (1939), cikal bakal WAIS, dan memperkenalkan IQ deviasi.</p>
${tbl(['Tahun', 'Peristiwa'], [
  ['1884', 'Galton membuka laboratorium antropometri'],
  ['1890', 'J. M. Cattell memperkenalkan istilah <i>mental test</i>'],
  ['1905', 'Skala Binet-Simon (30 butir)'],
  ['1908', 'Konsep usia mental diperkenalkan'],
  ['1916', 'Stanford-Binet (Terman), rasio IQ'],
  ['1917', 'Army Alpha dan Army Beta'],
  ['1938', 'Raven Standard Progressive Matrices'],
  ['1939', 'Wechsler-Bellevue, IQ deviasi'],
  ['1953', 'IST (Amthauer)'],
  ['1955', 'WAIS edisi pertama'],
], 'tbl--timeline')}

<h2>1.3 Pendekatan dalam Mempelajari Intelegensi</h2>
<div class="grid2">
  <div class="card"><span class="card__k">[teori belajar]</span><p>Intelegensi sebagai hasil proses belajar. Dearborn: kapasitas untuk belajar atau mendapat manfaat dari pengalaman. Menekankan lingkungan, latihan, penguatan.</p></div>
  <div class="card"><span class="card__k">[neurobiologis]</span><p>Mencari dasar intelegensi pada struktur dan fungsi otak. Hebb (1949): Intelegensi A vs B. Halstead: intelegensi biologis dari studi kerusakan otak.</p></div>
  <div class="card"><span class="card__k">[psikometris]</span><p>Mengukur perbedaan individual lewat tes dan analisis faktor. Melahirkan WAIS, APM, IST, CFIT. <b>Fokus mata kuliah ini.</b></p></div>
  <div class="card"><span class="card__k">[perkembangan]</span><p>Bagaimana kemampuan berpikir berubah seiring usia. Tokoh utama: Piaget. Fokus pada kualitas cara berpikir tiap tahap.</p></div>
</div>

<h2>1.4 Teori-teori Intelegensi</h2>
<p>RPS mengelompokkan teori menjadi <b>satu faktor, dua faktor, dan multifaktor</b>. Beberapa buku teks mengelompokkan tokoh secara berbeda (Thurstone, misalnya, lebih sering digolongkan multifaktor). Ikuti pengelompokan RPS untuk ujian, tetapi pahami isi teorinya.</p>
<dl class="defs">
  <dt>Binet <em>satu faktor</em></dt><dd>Intelegensi sebagai kemampuan umum yang menyatu: arah berpikir, adaptasi, kritik diri. Skala Binet menghasilkan satu skor global berupa usia mental.</dd>
  <dt>Spearman <em>dua faktor</em></dt><dd>Skor tes mental saling berkorelasi positif → faktor umum <b>g</b> dan faktor spesifik <b>s</b> (1904). Dasar teoretis Raven Progressive Matrices.</dd>
  <dt>Thurstone</dt><dd>Menolak dominasi g (1938). Tujuh kemampuan mental primer: pemahaman verbal, kelancaran kata, bilangan, ruang, memori asosiatif, kecepatan persepsi, penalaran. Memengaruhi IST.</dd>
  <dt>Hebb</dt><dd>Intelegensi A (potensi biologis) dan B (kinerja yang tampak). Tes hanya mengukur B. Vernon menambahkan Intelegensi C: kinerja yang terukur oleh tes tertentu.</dd>
  <dt>Cattell</dt><dd><b>Gf</b> (fluid): menalar dan memecahkan masalah baru tanpa bergantung pada pengetahuan. <b>Gc</b> (crystallized): pengetahuan dan keterampilan hasil pengalaman dan budaya (1963). CFIT mengukur Gf.</dd>
  <dt>Burt &amp; Vernon</dt><dd>Model hierarkis. g di puncak, lalu dua faktor kelompok besar: verbal-educational (v:ed) dan practical-mechanical-spatial (k:m).</dd>
  <dt>Guilford</dt><dd>Structure of Intellect (1967): operasi × isi × produk → 120, lalu 150 dan 180 kemampuan. Membedakan berpikir konvergen dan divergen.</dd>
  <dt>Thorndike</dt><dd>Intelegensi abstrak (simbol, ide), mekanis/konkret (benda), dan sosial (berhubungan dengan orang lain).</dd>
  <dt>Halstead</dt><dd>Intelegensi biologis: faktor C (central integrative field), A (abstraksi), P (power), D (directional).</dd>
  <dt>Piaget</dt><dd>Adaptasi lewat asimilasi dan akomodasi. Tahap: sensorimotor (0–2), praoperasional (2–7), operasional konkret (7–11), operasional formal (11+).</dd>
  <dt>Gardner</dt><dd>Intelegensi majemuk (1983): linguistik, logis-matematis, spasial, musikal, kinestetik-tubuh, interpersonal, intrapersonal, lalu naturalis. Populer, tapi dukungan psikometrisnya lemah.</dd>
  <dt>Sternberg</dt><dd>Teori triarkis (1985): analitis (komponensial), kreatif (eksperiensial), praktis (kontekstual). Mengkritik tes IQ yang hanya mengukur aspek analitis.</dd>
</dl>
<p>Tes modern seperti <b>WAIS-IV, WAIS-5, dan SB5</b> umumnya mengacu pada model <b>Cattell-Horn-Carroll (CHC)</b>, yang memadukan teori Gf-Gc dengan model tiga stratum Carroll (1993).</p>`,
  keys: [
    'IQ adalah hasil ukur, bukan intelegensi itu sendiri.',
    'Binet menjawab kebutuhan praktis sekolah; Wechsler memperkenalkan IQ deviasi.',
    'Spearman: g dan s. Thurstone: tujuh kemampuan primer. Cattell: Gf dan Gc.',
    'Raven berakar pada g Spearman, CFIT pada Gf Cattell, IST pada struktur kemampuan ala Thurstone.',
    'Tes modern umumnya mengacu pada model CHC.',
  ],
  checks: [
    'Jelaskan perbedaan intelegensi sebagai konstruk dan IQ sebagai skor.',
    'Mengapa pendekatan sensoris Galton gagal memprediksi prestasi akademik?',
    'Bandingkan teori Spearman dan Thurstone serta tes yang dipengaruhi masing-masing.',
    'Jelaskan perbedaan Gf dan Gc beserta contoh tugasnya.',
  ],
},
/* ---------------------------------------------------- BAB 2 */
{
  no: 2, tag: 'RAPPORT', group: 'dasar', meet: 'Pertemuan 2',
  title: 'Tes Individual dan Tes Klasikal',
  cpmk: 'Memahami perbedaan tes individual dan klasikal, mampu melakukan rapport',
  html: `
<h2>2.1 Pengertian</h2>
<p><b>Tes individual</b> diberikan oleh satu tester kepada satu testee dalam satu waktu, misalnya WAIS, TIDI, dan Stanford-Binet. <b>Tes klasikal</b> (kelompok) diberikan kepada banyak testee sekaligus, misalnya APM, IST, dan CFIT. Beberapa tes seperti APM bisa diberikan dengan kedua cara.</p>

<h2>2.2 Rapport</h2>
<p>Rapport adalah hubungan kerja yang hangat, saling percaya, dan kooperatif antara tester dan testee, agar testee menampilkan kemampuan terbaiknya. Rapport yang buruk bisa menurunkan skor karena testee cemas, curiga, atau tidak termotivasi. Cohen dkk. (2013) menekankan bahwa rapport harus dibangun <b>tanpa melanggar prosedur baku</b>.</p>
<ol class="steps">
  <li><b>Rapport awal</b> — sebelum tes: menyapa, memperkenalkan diri, menjelaskan tujuan dan gambaran tes, menjamin kerahasiaan, mengecek kondisi fisik dan psikologis, meminta persetujuan.</li>
  <li><b>Selama tes</b> — menjaga motivasi testee dengan dorongan netral.</li>
  <li><b>Rapport akhir</b> — setelah tes: terima kasih, menanyakan perasaan testee, menjelaskan tindak lanjut, menutup sesi dengan baik.</li>
</ol>
${tbl(['Aspek', 'Rapport Individual', 'Rapport Klasikal'], [
  ['Kedalaman', 'Personal, bisa menyesuaikan tiap testee', 'Umum, satu arah ke kelompok'],
  ['Durasi', 'Lebih panjang, bisa disertai obrolan ringan', 'Singkat dan terstruktur'],
  ['Cek kondisi', 'Ditanyakan langsung satu per satu', 'Ditanyakan ke kelompok; yang bermasalah diminta lapor'],
  ['Fokus', 'Kenyamanan dan kepercayaan', 'Ketertiban, kejelasan aturan, kesiapan alat'],
  ['Observasi', 'Detail perilaku testee', 'Terbatas, dibantu pengawas'],
])}

<h2>2.3 Pengadministrasian Tes Individual</h2>
<p>Tester mengikuti instruksi baku <b>kata per kata</b>, mengatur materi agar tidak terlihat testee sebelum waktunya, mencatat jawaban verbal secara <b>verbatim</b>, dan memakai stopwatch dengan tidak mencolok. Tester juga mencatat perilaku: cara mengerjakan, komentar spontan, tanda kelelahan.</p>
<p>Perhatikan ruangan yang tenang, pencahayaan cukup, dan posisi duduk nyaman (berhadapan atau menyudut sesuai manual). Tester tidak memberi petunjuk benar-salah dan harus menguasai materi agar tidak sibuk membaca manual.</p>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan</span><p>Observasi kaya, fleksibel untuk testee berkebutuhan khusus, rapport lebih dalam. Cocok untuk anak, lansia, konteks klinis.</p></div>
  <div><span class="pc pc--minus">− kelemahan</span><p>Biaya dan waktu besar, butuh tester terlatih, kesalahan tester lebih mudah memengaruhi hasil.</p></div>
</div>

<h2>2.4 Pengadministrasian Tes Klasikal</h2>
<p>Butuh persiapan logistik: buku soal, lembar jawab, alat tulis, stopwatch, denah tempat duduk, dan pengawas untuk kelompok besar. Tester membacakan instruksi dengan jelas, memberi contoh, memastikan semua paham, lalu memberi aba-aba mulai dan berhenti dengan tegas.</p>
<p>Perhatikan jarak tempat duduk (mencegah mencontek), cahaya yang cukup, dan waktu yang ketat. Pengawas berkeliling memastikan identitas terisi benar dan jawaban di kolom yang tepat.</p>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan</span><p>Efisien, biaya rendah per orang, prosedur seragam, skoring objektif.</p></div>
  <div><span class="pc pc--minus">− kelemahan</span><p>Observasi individual terbatas, testee yang tidak paham instruksi bisa luput, mengasumsikan kemampuan membaca dan motivasi cukup.</p></div>
</div>
<p class="more">Naskah contoh rapport lengkap ada di <a href="#/lampiran/a">Lampiran A →</a></p>`,
  keys: [
    'Rapport punya tiga tahap: awal, selama tes, dan akhir.',
    'Dorongan selama tes harus netral dan diberikan untuk semua jawaban.',
    'Tes individual unggul dalam observasi; tes klasikal unggul dalam efisiensi.',
    'Naskah contoh rapport ada di Lampiran A.',
  ],
  checks: [
    'Sebutkan langkah rapport awal pada tes individual.',
    'Apa risiko jika tester memuji hanya jawaban yang benar?',
    'Bandingkan tiga kelebihan dan tiga kelemahan tes individual dan klasikal.',
  ],
},
/* ---------------------------------------------------- BAB 3 */
{
  no: 3, tag: 'WECHSLER', group: 'wais', meet: 'Pertemuan 3',
  title: 'Teori dan Skala Wechsler',
  cpmk: 'Memahami teori Wechsler, dasar teoretis, dan jenis skala Wechsler',
  html: `
<h2>3.1 Teori Wechsler secara Umum</h2>
<p>David Wechsler, psikolog klinis di Bellevue Hospital, New York, menilai skala Binet kurang cocok untuk orang dewasa karena butirnya berorientasi anak dan sangat verbal. Ia menyusun <b>Wechsler-Bellevue Intelligence Scale (1939)</b>.</p>
<p>Wechsler memandang intelegensi sebagai <b>kapasitas global</b> yang tersusun dari berbagai kemampuan yang berbeda secara kualitatif. Ia meyakini faktor <b>non-intelektif</b> (motivasi, ketekunan, dorongan) ikut memengaruhi perilaku cerdas (Wechsler, 1958). Karena itu skalanya memuat banyak subtes yang berbeda.</p>

<h2>3.2 Dasar Teoretis Skala Wechsler</h2>
<p>Versi awal membagi subtes menjadi skala <b>Verbal</b> dan <b>Performance</b> — pembagian klinis-praktis, bukan hasil analisis faktor murni. Hasilnya tiga skor: <b>VIQ, PIQ, FSIQ</b>.</p>
<div class="bigstat">
  <div><span class="bigstat__n">100</span><span class="bigstat__l">rata-rata IQ deviasi</span></div>
  <div><span class="bigstat__n">15</span><span class="bigstat__l">SD IQ deviasi</span></div>
  <div><span class="bigstat__n">10</span><span class="bigstat__l">rata-rata skor skala subtes</span></div>
  <div><span class="bigstat__n">3</span><span class="bigstat__l">SD skor skala subtes</span></div>
</div>
<p>Inovasi terpenting Wechsler adalah <b>IQ deviasi</b>: IQ tidak lagi dihitung dari rasio usia mental/usia kronologis, tetapi dari posisi skor seseorang terhadap kelompok usianya.</p>
<p>Edisi modern bergeser ke struktur <b>indeks</b> berbasis analisis faktor. WAIS-IV (2008): Pemahaman Verbal (VCI), Penalaran Perseptual (PRI), Memori Kerja (WMI), Kecepatan Pemrosesan (PSI), dan meninggalkan VIQ–PIQ.</p>

<h2>3.3 Jenis Skala Wechsler</h2>
<dl class="defs">
  <dt>WPPSI-III</dt><dd>2002, usia 2;6 sampai 7;3, dibagi dua kelompok usia; kelompok muda mendapat lebih sedikit subtes. Edisi terbaru WPPSI-IV (2012).</dd>
  <dt>WISC-R &amp; WISC-IV</dt><dd>WISC-R (1974), 6–16 tahun, masih VIQ–PIQ; Mazes adalah subtes tambahan Performance. WISC-IV (2003) beralih ke empat indeks. Terbaru WISC-V (2014), lima indeks.</dd>
  <dt>WAIS-R, WAIS-IV, WAIS-5</dt><dd>WAIS-R (1981), 16–74 tahun, 11 subtes. WAIS-IV (2008), 16–90 tahun, 10 subtes inti + 5 tambahan. WAIS-5 (2024), 16–90;11, lima indeks primer: Verbal Comprehension, Visual Spatial, Fluid Reasoning, Working Memory, Processing Speed.</dd>
</dl>
${tbl(['Skala', 'Tahun', 'Usia', 'Struktur skor'], [
  ['WPPSI-III', '2002', '2;6 – 7;3', 'VIQ, PIQ, FSIQ + skor tambahan'],
  ['WISC-R', '1974', '6 – 16', 'VIQ, PIQ, FSIQ'],
  ['WISC-IV', '2003', '6 – 16', 'VCI, PRI, WMI, PSI, FSIQ'],
  ['WAIS-R', '1981', '16 – 74', 'VIQ, PIQ, FSIQ'],
  ['WAIS-IV', '2008', '16 – 90', 'VCI, PRI, WMI, PSI, FSIQ, GAI'],
  ['WAIS-5', '2024', '16 – 90;11', 'VCI, VSI, FRI, WMI, PSI, FSIQ'],
])}

<h2>3.4 Gambaran Administrasi WAIS</h2>
<p>WAIS diberikan secara individual sekitar <b>60–90 menit</b>. Perlu manual, kit materi (kartu gambar, balok, kepingan puzzle), formulir pencatatan, stopwatch, alat tulis. Di WAIS edisi pertama subtes verbal diberikan lebih dulu; di WAIS-R verbal dan performance <b>berselang-seling</b> agar testee tidak jenuh.</p>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan</span><p>Informasi klinis kaya, reliabilitas tinggi.</p></div>
  <div><span class="pc pc--minus">− kelemahan</span><p>Durasi panjang, biaya tinggi, butuh tester terlatih, norma belum tentu sesuai populasi Indonesia.</p></div>
</div>`,
  keys: [
    'Wechsler: intelegensi global, multifaset, dipengaruhi faktor non-intelektif.',
    'IQ deviasi: rata-rata 100, SD 15. Skor skala subtes: rata-rata 10, SD 3.',
    'WPPSI untuk prasekolah, WISC untuk anak, WAIS untuk dewasa.',
    'Versi lama: VIQ-PIQ. Versi modern: indeks berbasis analisis faktor.',
  ],
  checks: [
    'Mengapa Wechsler menyusun skala sendiri padahal sudah ada Stanford-Binet?',
    'Jelaskan perbedaan struktur skor WAIS-R dan WAIS-IV.',
    'Apa kelebihan IQ deviasi dibanding rasio IQ?',
  ],
},
/* ---------------------------------------------------- BAB 4 */
{
  no: 4, tag: 'WAIS', group: 'wais', meet: 'Pertemuan 4',
  title: 'Subtes, Administrasi, dan Skoring WAIS',
  cpmk: 'Memahami subtes WAIS dan mampu mengadministrasikan tes',
  html: `
${note('Bab ini mendeskripsikan fungsi subtes, bukan isi butir soal. Butir asli WAIS bersifat rahasia dan hanya boleh dipelajari dari manual resmi di bawah supervisi.')}
<h2>4.1 Subtes Verbal</h2>
${tbl(['Subtes', 'Bentuk tugas', 'Aspek yang diukur'], [
  ['Information', 'Menjawab pertanyaan pengetahuan umum', 'Pengetahuan umum, memori jangka panjang, minat budaya'],
  ['Comprehension', 'Menjelaskan alasan/tindakan dalam situasi sosial', 'Penilaian sosial, akal sehat, penalaran praktis'],
  ['Arithmetic', 'Soal hitungan lisan, tanpa kertas, berbatas waktu', 'Konsentrasi, memori kerja, penalaran numerik'],
  ['Similarities', 'Menyebut kesamaan dua hal', 'Penalaran verbal abstrak, pembentukan konsep'],
  ['Digit Span', 'Mengulang deret angka maju dan mundur', 'Atensi, memori jangka pendek, memori kerja'],
  ['Vocabulary', 'Menjelaskan arti kata', 'Pengetahuan kata, kemampuan verbal, Gc'],
])}

<h2>4.2 Subtes Performance</h2>
<p>RPS mencantumkan delapan subtes performance. Lima pertama adalah subtes performance WAIS. <b>Mazes, Animal House, dan Geometric Design</b> sebenarnya berasal dari skala anak (WISC dan WPPSI), tetapi tetap masuk materi.</p>
${tbl(['Subtes', 'Bentuk tugas', 'Aspek yang diukur'], [
  ['Picture Completion', 'Menunjuk bagian penting yang hilang dari gambar', 'Perhatian visual, membedakan yang esensial'],
  ['Picture Arrangement', 'Menyusun kartu gambar menjadi cerita logis', 'Pemahaman urutan sosial, perencanaan'],
  ['Block Design', 'Menyusun balok merah-putih sesuai pola', 'Analisis-sintesis visuospasial, koordinasi visual-motorik'],
  ['Object Assembly', 'Menyusun kepingan menjadi objek utuh', 'Organisasi perseptual, sintesis bagian ke keseluruhan'],
  ['Digit Symbol (Coding)', 'Menyalin simbol pasangan angka secepatnya', 'Kecepatan pemrosesan, koordinasi visual-motorik'],
  ['Mazes <small>(WISC, WPPSI)</small>', 'Menelusuri jalan keluar labirin', 'Perencanaan, organisasi perseptual'],
  ['Animal House <small>(WPPSI)</small>', 'Memasang pasak warna sesuai pasangan hewan', 'Memori, belajar asosiatif, kecepatan'],
  ['Geometric Design <small>(WPPSI)</small>', 'Mengenali dan menyalin bentuk geometris', 'Persepsi visual, koordinasi visual-motorik'],
])}

<h2>4.3 Administrasi Umum WAIS</h2>
<div class="rules">
  <div class="rule"><span class="rule__n">01</span><b>Titik mulai</b><p>Start point. Setiap subtes punya butir awal yang ditentukan manual.</p></div>
  <div class="rule"><span class="rule__n">02</span><b>Aturan balik</b><p>Reverse rule. Jika gagal pada butir awal, mundur ke butir lebih mudah sampai berhasil pada sejumlah butir berturut-turut.</p></div>
  <div class="rule"><span class="rule__n">03</span><b>Aturan berhenti</b><p>Discontinue rule. Subtes dihentikan setelah testee gagal pada sejumlah butir berturut-turut.</p></div>
</div>
<p>Jumlah butir untuk aturan balik dan berhenti berbeda tiap subtes dan tiap edisi — cek manual di laboratorium Anda.</p>
<p>Jawaban verbal dicatat <b>persis seperti diucapkan</b>. Jika ambigu, tester boleh bertanya netral ("Coba jelaskan lebih lanjut") dan menandainya dengan huruf <b>Q</b> di formulir. Tester tidak boleh mengulang butir bila manual tidak mengizinkan, mengubah kata instruksi, atau memberi petunjuk.</p>
<p>Pada subtes berbatas waktu (Arithmetic, Block Design, Object Assembly, Picture Arrangement, Digit Symbol), stopwatch dimulai tepat setelah instruksi selesai. Beberapa subtes memberi bonus untuk penyelesaian cepat. <b>Digit Symbol pada WAIS dan WAIS-R berlangsung 90 detik.</b></p>

<h2>4.4 Masalah dalam Pengambilan Tes WAIS</h2>
<p>Dari sisi tester: kesalahan skoring jawaban verbal, menghitung waktu, menerapkan aturan berhenti, dan mengubah skor mentah ke skor skala. Dari sisi testee: kecemasan, kelelahan, gangguan penglihatan/pendengaran, hambatan motorik yang menurunkan skor performance, perbedaan latar budaya. Waspadai juga gangguan ruangan seperti bising dan interupsi.</p>

<h2>4.5 Kelebihan dan Kelemahan WAIS</h2>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan</span><p>Reliabilitas skor total sangat tinggi, profil kemampuan rinci, kesempatan observasi, didukung penelitian yang sangat luas.</p></div>
  <div><span class="pc pc--minus">− kelemahan</span><p>Waktu panjang, butuh tester terlatih, mahal, muatan budaya pada subtes verbal, norma asing berisiko bias untuk testee Indonesia.</p></div>
</div>

<h2>4.6 Skoring dan Perhitungan IQ</h2>
<div class="flow">
  <span>Skor mentah</span><i>→</i><span>Skor skala <small>(M 10, SD 3)</small></span><i>→</i><span>Jumlah skor skala <small>V · P · Total</small></span><i>→</i><span>IQ <small>tabel usia</small></span>
</div>
<p>Comprehension, Similarities, dan Vocabulary memakai skor <b>0, 1, atau 2</b> sesuai kualitas jawaban. Subtes lain umumnya 0 atau 1, ditambah bonus waktu pada subtes tertentu. Pada WAIS-R, skor mentah → skor skala memakai tabel kelompok rujukan usia 20–34 tahun; konversi ke IQ memakai tabel kelompok usia testee.</p>
${tbl(['Rentang IQ', 'Klasifikasi (Wechsler)'], [
  ['130 ke atas', 'Very Superior'],
  ['120 – 129', 'Superior'],
  ['110 – 119', 'High Average (Bright Normal)'],
  ['90 – 109', 'Average'],
  ['80 – 89', 'Low Average (Dull Normal)'],
  ['70 – 79', 'Borderline'],
  ['69 ke bawah', 'Intellectually Deficient (Extremely Low)'],
], 'tbl--class')}
<p><b>Interpretasi bertingkat</b> (Groth-Marnat, 2009): (1) IQ total → (2) perbandingan VIQ–PIQ atau antarindeks → (3) pola naik-turun skor subtes → (4) analisis jawaban dalam satu subtes → (5) analisis kualitatif jawaban dan perilaku.</p>

<h2>4.7 Reliabilitas dan Validitas</h2>
<p>Konsistensi internal FSIQ WAIS-IV mencapai sekitar <b>.98</b> (Wechsler, 2008). Reliabilitas subtes lebih rendah daripada skor gabungan, jadi interpretasi satu subtes harus hati-hati. Analisis faktor WAIS-R umumnya menemukan tiga faktor: pemahaman verbal, organisasi perseptual, dan bebas distraksi — mendorong struktur indeks pada edisi berikutnya. Validitas prediktif tampak dari korelasi IQ dengan prestasi akademik dan kinerja kerja; validitas konkuren dari korelasi tinggi dengan Stanford-Binet.</p>`,
  keys: [
    'Kuasai tiga aturan: titik mulai, aturan balik, aturan berhenti.',
    'Catat jawaban verbal secara verbatim dan tandai pertanyaan lanjutan dengan Q.',
    'Skor 0-1-2 untuk Comprehension, Similarities, Vocabulary.',
    'Alur skoring: skor mentah, skor skala, jumlah skor skala, IQ.',
    'Interpretasi bertingkat, mulai dari skor paling reliabel (FSIQ).',
  ],
  checks: [
    'Jelaskan fungsi aturan balik dan aturan berhenti.',
    'Mengapa jawaban verbal harus dicatat verbatim?',
    'Uraikan langkah mengubah skor mentah menjadi IQ.',
    'Mengapa interpretasi satu subtes harus lebih hati-hati daripada FSIQ?',
  ],
},
/* ---------------------------------------------------- BAB 5 */
{
  no: 5, tag: 'APM', group: 'apm', meet: 'Pertemuan 5',
  title: 'Raven Progressive Matrices dan APM',
  cpmk: 'Memahami RPM dan mampu mengadministrasikan APM',
  html: `
<h2>5.1 Gambaran Umum</h2>
<p><b>John C. Raven</b> menyusun Progressive Matrices di Inggris; edisi Standard terbit <b>1938</b>. Dasarnya teori <b>g Spearman</b>. Tes ini mengukur <b>kemampuan eduktif</b>: menemukan makna dari situasi yang membingungkan dan menarik hubungan dari informasi baru (Raven dkk., 1998).</p>
<p>Setiap soal berupa matriks gambar dengan satu bagian hilang; testee memilih alternatif yang paling tepat. Tes ini <b>nonverbal</b>. Istilah <i>progressive</i> berarti soal disusun dari paling mudah ke paling sulit.</p>
<div data-widget="matrix"></div>

<h2>5.2 Jenis-jenis Progressive Matrices</h2>
${tbl(['Jenis', 'Sasaran', 'Struktur'], [
  ['Standard (SPM)', 'Usia sekolah sampai dewasa, kemampuan rata-rata', '60 soal, 5 set (A–E), tiap set 12 soal'],
  ['Coloured (CPM)', 'Anak ±5–11 tahun, lansia, individu dengan hambatan', '36 soal, 3 set (A, Ab, B), berwarna'],
  ['Advanced (APM)', 'Remaja akhir dan dewasa di atas rata-rata', 'Set I: 12 soal · Set II: 36 soal'],
])}
<p>APM dirancang membedakan individu pada rentang kemampuan atas, sehingga sering dipakai untuk seleksi mahasiswa, manajer, dan posisi yang menuntut penalaran tinggi. SPM terlalu mudah bagi kelompok ini → skor menumpuk di atas (<b>efek plafon</b>).</p>

<h2>5.3 Administrasi Umum APM</h2>
<ol class="steps">
  <li><b>Set I</b> berfungsi sebagai latihan dan penyaring kasar. Bagikan buku soal dan lembar jawab, minta testee mengisi identitas.</li>
  <li>Jelaskan bentuk soal memakai <b>soal pertama Set I</b> sebagai contoh: ada satu bagian matriks yang kosong, pilih alternatif yang tepat. Pastikan cara menulis jawaban dipahami.</li>
  <li>Setelah Set I, beri instruksi <b>Set II</b>: soal makin sulit, kerjakan berurutan, sebaiknya jawab semua soal.</li>
  <li>Versi berwaktu: <b>40 menit</b> untuk Set II. Versi tanpa batas waktu dipakai untuk mengukur kapasitas penalaran maksimal (mis. asesmen klinis).</li>
</ol>
<p>Skoring sederhana: tiap jawaban benar = 1. Skor mentah Set II 0–36 → persentil (tabel norma) → grade.</p>
${tbl(['Grade', 'Kriteria persentil', 'Klasifikasi'], [
  ['I', '95 ke atas', 'Intellectually superior'],
  ['II', '75 – &lt;95', 'Di atas rata-rata'],
  ['III', '25 – &lt;75', 'Rata-rata'],
  ['IV', '&gt;5 – 25', 'Di bawah rata-rata'],
  ['V', '5 ke bawah', 'Intellectually defective'],
], 'tbl--class')}
<p class="small">Batas grade bisa berbeda sedikit antarmanual. Gunakan tabel dari manual laboratorium Anda.</p>

<h2>5.4 Masalah dalam Pengambilan APM</h2>
<p>Testee menebak acak saat waktu hampir habis, melompati soal sulit, salah menulis nomor jawaban, atau salah paham format matriks di awal. Kelelahan dan penurunan konsentrasi muncul karena tes lama dan menuntut fokus tinggi.</p>

<h2>5.5 Kelebihan dan Kelemahan APM</h2>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan</span><p>Nonverbal, administrasi dan skoring mudah, bisa individual maupun klasikal, muatan g tinggi.</p></div>
  <div><span class="pc pc--minus">− kelemahan</span><p>Hanya mengukur penalaran nonverbal, tidak memberi profil, tidak sepenuhnya bebas budaya, norma lama perlu diperbarui karena efek Flynn (1987).</p></div>
</div>`,
  keys: [
    'Raven berakar pada teori g Spearman dan mengukur kemampuan eduktif.',
    'SPM 60 soal, CPM 36 soal berwarna, APM Set I 12 soal dan Set II 36 soal.',
    'Set I APM berfungsi sebagai latihan; contohkan soal pertama.',
    'Skor benar 1, ubah ke persentil, lalu ke grade I sampai V.',
  ],
  checks: [
    'Mengapa APM lebih tepat untuk kelompok berkemampuan tinggi daripada SPM?',
    'Jelaskan fungsi Set I pada APM.',
    'Apakah APM benar-benar bebas budaya? Jelaskan.',
  ],
},
/* ---------------------------------------------------- BAB 6 */
{
  no: 6, tag: 'IST', group: 'ist', meet: 'Pertemuan 6',
  title: 'Intelligenz Struktur Test (IST)',
  cpmk: 'Memahami IST dan mampu mengadministrasikan tes',
  html: `
<h2>6.1 Gambaran Umum dan Dasar Teoretis</h2>
<p><b>Rudolf Amthauer</b> menyusun IST di Jerman, pertama terbit <b>1953</b>. Revisi yang paling banyak dipakai di Indonesia adalah <b>IST-70</b>; revisi berikutnya IST 2000 dan IST 2000-R (Liepmann dkk., 2007).</p>
<p>Amthauer memandang intelegensi sebagai <b>struktur</b>: kesatuan berbagai kemampuan mental yang saling berhubungan, tampak sebagai pola kekuatan dan kelemahan yang khas tiap orang — sejalan dengan teori kemampuan primer <b>Thurstone</b>. Ia juga meyakini pola struktur intelegensi berkaitan dengan karakteristik kepribadian.</p>

<h2>6.2 Tujuan IST</h2>
<p>Memberi gambaran <b>struktur</b> intelegensi, bukan hanya satu angka IQ. Profilnya berguna untuk bimbingan pendidikan, penjurusan, bimbingan karier, dan seleksi karyawan. Umumnya untuk remaja hingga dewasa.</p>

<h2>6.3 Subtes IST-70</h2>
${tbl(['Kode', 'Nama', 'Soal', 'Waktu', 'Aspek'], [
  ['<b>SE</b>', 'Satzergänzung — melengkapi kalimat', '20', '6 mnt', 'Pembentukan keputusan, akal sehat'],
  ['<b>WA</b>', 'Wortauswahl — memilih kata yang berbeda', '20', '6 mnt', 'Kemampuan bahasa, rasa bahasa'],
  ['<b>AN</b>', 'Analogien — analogi kata', '20', '7 mnt', 'Fleksibilitas berpikir, menghubungkan konsep'],
  ['<b>GE</b>', 'Gemeinsamkeiten — kesamaan', '16', '8 mnt', 'Abstraksi verbal, pembentukan pengertian'],
  ['<b>RA</b>', 'Rechenaufgaben — hitungan', '20', '10 mnt', 'Berpikir praktis-hitungan'],
  ['<b>ZR</b>', 'Zahlenreihen — deret angka', '20', '10 mnt', 'Berpikir induktif-teoretis dengan angka'],
  ['<b>FA</b>', 'Figurenauswahl — memilih bentuk', '20', '7 mnt', 'Imajinasi ruang, menyatukan bagian'],
  ['<b>WU</b>', 'Würfelaufgaben — kubus', '20', '9 mnt', 'Kemampuan ruang tiga dimensi'],
  ['<b>ME</b>', 'Merkaufgaben — mengingat kata', '20', '3 hafal + 6 jawab', 'Daya ingat, konsentrasi'],
], 'tbl--ist')}
<div class="bigstat">
  <div><span class="bigstat__n">9</span><span class="bigstat__l">subtes</span></div>
  <div><span class="bigstat__n">176</span><span class="bigstat__l">soal total</span></div>
  <div><span class="bigstat__n">±72'</span><span class="bigstat__l">pengerjaan murni</span></div>
  <div><span class="bigstat__n">±90'</span><span class="bigstat__l">dengan instruksi</span></div>
</div>

<h2>6.4 Administrasi Umum IST</h2>
<p>Umumnya <b>klasikal</b>. Tester membacakan instruksi tiap subtes, memberi contoh, memberi aba-aba mulai, dan menghentikan pengerjaan tepat saat waktu habis. Testee tidak boleh membuka subtes berikutnya sebelum diperintah dan tidak boleh kembali ke subtes sebelumnya.</p>
<ul class="bul">
  <li><b>GE</b> — testee menuliskan kata jawaban sendiri, bukan memilih alternatif.</li>
  <li><b>RA &amp; ZR</b> — testee menandai angka jawaban pada kolom angka di lembar jawab.</li>
  <li><b>ME</b> — dua fase: menghafal daftar kata, menyimpan bahan hafalan, lalu menjawab dari ingatan. Pastikan bahan hafalan benar-benar tertutup/dikumpulkan.</li>
</ul>
${note('Urutan subtes dan posisi fase hafalan ME bisa berbeda antarversi dan antarlaboratorium. Ikuti manual atau panduan praktikum Anda.')}

<h2>6.5 Skoring IST</h2>
<p>Hitung skor mentah (<b>RW</b>, Rohwert) tiap subtes. <b>GE</b> diskor 2, 1, atau 0 sesuai tingkat abstraksi; subtes lain 1 untuk jawaban benar. Skor mentah → skor standar (<b>SW</b>, Standardwert) memakai tabel norma usia, dengan <b>rata-rata 100, SD 10</b>. Jumlah skor mentah keseluruhan → skor total → IQ.</p>
<p>Hasil ditampilkan dalam <b>profil</b>. Pengelompokan umum: verbal (SE, WA, AN, GE), numerik (RA, ZR), figural-spasial (FA, WU), dan memori (ME).</p>

<h2>6.6 IST Terkomputerisasi</h2>
<p>IST 2000-R tersedia versi digital dari Hogrefe: waktu otomatis, skor dan profil langsung. Kelebihan: akurasi dan efisiensi. Kelemahan: butuh perangkat, risiko gangguan teknis, perbedaan pengalaman testee dengan komputer.</p>

<h2>6.7 Masalah dalam Pengambilan IST</h2>
<p>Kesalahan pengaturan waktu, testee membuka subtes berikutnya, salah menulis jawaban di kolom subtes lain, dan <b>kebocoran bahan hafalan ME</b>. Kelelahan sering terjadi karena tes panjang dan waktunya ketat. Subtes verbal rentan terhadap perbedaan kosakata dan budaya.</p>

<h2>6.8 Kelebihan dan Kelemahan IST</h2>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan</span><p>Profil kemampuan rinci, klasikal efisien, praktis untuk penjurusan dan seleksi.</p></div>
  <div><span class="pc pc--minus">− kelemahan</span><p>Bergantung pada kecepatan, muatan bahasa pada subtes verbal, norma IST-70 sudah lama, butuh pengawasan waktu sangat disiplin.</p></div>
</div>`,
  keys: [
    'IST mengukur struktur intelegensi, bukan hanya IQ total.',
    'Sembilan subtes, 176 soal, waktu tiap subtes berbeda.',
    'GE ditulis dan diskor 2-1-0; ME punya fase hafalan.',
    'Skor standar subtes: rata-rata 100, SD 10.',
  ],
  checks: [
    'Jelaskan dasar teoretis IST menurut Amthauer.',
    'Sebutkan sembilan subtes IST dan aspek yang diukur.',
    'Apa kesalahan administrasi yang paling berisiko pada subtes ME?',
  ],
},
/* ---------------------------------------------------- BAB 7 */
{
  no: 7, tag: 'BINET', group: 'binet', meet: 'Pertemuan 7',
  title: 'Tes Binet',
  cpmk: 'Memahami perkembangan tes Binet dan administrasinya',
  html: `
<h2>7.1 Perkembangan Skala-skala Binet</h2>
<ol class="steps steps--years">
  <li><b>1905</b> Binet-Simon: 30 butir, dari mudah ke sulit.</li>
  <li><b>1908</b> Butir dikelompokkan per tingkat usia; usia mental diperkenalkan.</li>
  <li><b>1911</b> Ditambah tingkat usia dewasa.</li>
  <li><b>1916</b> Terman (Stanford): Stanford-Binet dengan rasio IQ usulan William Stern.</li>
  <li><b>1937</b> Terman &amp; Merrill: dua bentuk paralel, Form L dan Form M.</li>
  <li><b>1960</b> Form L-M; IQ deviasi dengan SD 16. Masih dikenal di banyak praktikum di Indonesia.</li>
  <li><b>1986</b> Edisi keempat: skala poin dengan empat area.</li>
  <li><b>2003</b> Edisi kelima (SB5).</li>
</ol>

<h2>7.2 Stanford-Binet Fifth Edition (SB5)</h2>
<p>Disusun <b>Roid (2003)</b> untuk usia 2 sampai 85+ tahun. Mengukur lima faktor — Fluid Reasoning, Knowledge, Quantitative Reasoning, Visual-Spatial Processing, Working Memory — masing-masing pada domain verbal dan nonverbal → <b>10 subtes</b>. Dua subtes <i>routing</i> menentukan titik mulai. IQ SB5: rata-rata 100, <b>SD 15</b>; strukturnya mengacu model CHC.</p>

<h2>7.3 Administrasi Tes Binet secara Umum</h2>
<p>Pada Form L-M, butir dikelompokkan per tingkat usia. Tester mulai sedikit di bawah usia perkiraan testee.</p>
<div class="grid2">
  <div class="card"><span class="card__k">[basal level]</span><p>Tingkat usia <b>tertinggi</b> di mana testee <b>lulus semua</b> butir.</p></div>
  <div class="card"><span class="card__k">[ceiling level]</span><p>Tingkat usia <b>terendah</b> di mana testee <b>gagal semua</b> butir.</p></div>
</div>
<p><b>Usia mental (MA)</b> = basal age + kredit bulan untuk setiap butir yang lulus di atas basal. Pada tingkat usia VI–XIV, tiap tingkat berisi enam butir dan tiap butir bernilai <b>2 bulan</b>. Cek tabel kredit di manual untuk tingkat usia lain.</p>
<p class="hl">Contoh: basal VII. Lulus 3 butir di VIII (3 × 2 = 6 bulan) dan 1 butir di IX (2 bulan). Gagal semua di X. MA = 7 tahun + 8 bulan = <b>7 tahun 8 bulan</b>.</p>
<div data-widget="ma"></div>

<h2>7.4 Rasio IQ dan Kelemahannya</h2>
<div class="formula">IQ = (MA / CA) × 100</div>
<p>CA = usia kronologis. Jika MA 7;8 (92 bulan) dan CA 7;0 (84 bulan), IQ = (92/84) × 100 = <b>109,5</b>.</p>
<ul class="bul">
  <li>Usia mental tidak terus naik setelah remaja akhir → rasio IQ tidak bermakna untuk dewasa.</li>
  <li>Sebaran rasio IQ berbeda tiap usia → angka yang sama bisa berarti posisi relatif berbeda.</li>
  <li>Satuan usia mental tidak setara di semua tingkat usia.</li>
</ul>
<p>Kelemahan ini mendorong peralihan ke IQ deviasi.</p>

<h2>7.5 Perhitungan IQ dalam Konsep Binet dan Normanya</h2>
<p>Form L-M sejak 1960 memakai tabel IQ deviasi (M 100, <b>SD 16</b>); IQ dicari pada tabel berdasarkan MA dan CA. SB5 memakai <b>SD 15</b>, sejajar dengan Wechsler. Perbedaan SD penting saat membandingkan skor antartes.</p>

<h2>7.6 Masalah Stanford-Binet pada Orang Dewasa</h2>
<p>Butir Form L-M berorientasi anak sehingga kurang menarik bagi dewasa; plafon terbatas; konsep usia mental sulit diterapkan; norma sangat lama. Untuk orang dewasa lebih tepat memakai WAIS atau SB5.</p>

<h2>7.7 Kelebihan dan Kelemahan Stanford-Binet</h2>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan</span><p>Sejarah penelitian panjang, cocok untuk anak, mampu mendeteksi keterlambatan perkembangan; SB5 rentang usianya sangat luas.</p></div>
  <div><span class="pc pc--minus">− kelemahan</span><p>Muatan verbal tinggi (Form L-M), norma lama, durasi bervariasi, butuh tester sangat terlatih.</p></div>
</div>`,
  keys: [
    'Basal level: tingkat usia tertinggi dengan semua butir lulus.',
    'Ceiling level: tingkat usia terendah dengan semua butir gagal.',
    'MA = basal age + kredit bulan butir yang lulus di atas basal.',
    'Rasio IQ = MA/CA x 100; tidak cocok untuk dewasa.',
    'Form L-M: SD 16. SB5: SD 15.',
  ],
  checks: [
    'Hitung MA jika basal VIII, lulus 4 butir di IX, 2 butir di X, gagal semua di XI (kredit 2 bulan per butir).',
    'Jelaskan tiga kelemahan rasio IQ.',
    'Mengapa Form L-M kurang tepat untuk orang dewasa?',
  ],
  answers: { 0: 'Basal VIII. Lulus 4 butir di IX (8 bulan) dan 2 butir di X (4 bulan). MA = 8 tahun + 12 bulan = <b>9 tahun 0 bulan</b>.' },
},
/* ---------------------------------------------------- BAB 8 */
{
  no: 8, tag: 'CFIT', group: 'cfit', meet: 'Pertemuan 8',
  title: 'Culture Fair Intelligence Test (CFIT)',
  cpmk: 'Memahami CFIT dan mampu mengadministrasikan tes',
  html: `
<h2>8.1 Dasar Teoretis dan Tujuan</h2>
<p><b>Raymond B. Cattell dan A. K. S. Cattell</b> menyusun CFIT, diterbitkan melalui Institute for Personality and Ability Testing (IPAT). CFIT berakar pada teori fluid–crystallized dan bertujuan mengukur <b>Gf</b> dengan meminimalkan pengaruh bahasa, pengetahuan, dan pengalaman budaya (Cattell &amp; Cattell, 1973).</p>
<p class="hl"><b>Culture fair ≠ culture free.</b> Culture fair berarti tes berusaha adil terhadap berbagai latar budaya. Para ahli sepakat tidak ada tes yang benar-benar bebas budaya.</p>

<h2>8.2 Skala CFIT</h2>
${tbl(['Skala', 'Sasaran'], [
  ['Skala 1', 'Anak 4–8 tahun dan dewasa dengan disabilitas intelektual'],
  ['Skala 2', 'Anak 8–14 tahun dan dewasa dengan kemampuan rata-rata'],
  ['Skala 3', 'Siswa SMA, mahasiswa, dan dewasa berkemampuan tinggi'],
])}
<p>Skala 2 dan 3 masing-masing punya dua bentuk paralel, <b>Form A dan Form B</b>, yang bisa diberikan berurutan untuk meningkatkan reliabilitas.</p>

<h2>8.3 Subtes CFIT Skala 2 dan 3</h2>
<div class="subtests">
  <div class="st"><span class="st__t">3'</span><b>Series</b><p>Memilih gambar yang melanjutkan suatu deret.</p></div>
  <div class="st"><span class="st__t">4'</span><b>Classifications</b><p>Memilih gambar yang berbeda dari kelompoknya.</p></div>
  <div class="st"><span class="st__t">3'</span><b>Matrices</b><p>Melengkapi pola matriks.</p></div>
  <div class="st"><span class="st__t">2,5'</span><b>Conditions <small>(Topology)</small></b><p>Memilih gambar yang memenuhi syarat posisi titik.</p></div>
</div>
<p>Jumlah soal sedikit berbeda antara Skala 2 dan 3. Satu form berlangsung sekitar <b>12,5 menit</b>, ditambah instruksi dan contoh.</p>

<h2>8.4 Administrasi Umum dan Skoring</h2>
<p>Bisa klasikal. Tester membacakan instruksi, mengerjakan contoh bersama testee, lalu memberi aba-aba mulai dan berhenti tiap subtes — waktu pendek menuntut stopwatch akurat. Tiap jawaban benar = 1. Total skor mentah → IQ dengan tabel norma usia. <b>IQ CFIT: rata-rata 100, SD 16.</b></p>

<h2>8.5 Masalah dalam Pengambilan CFIT</h2>
<p>Waktu sangat singkat → keterlambatan beberapa detik memengaruhi skor. Testee sering kesulitan memahami <b>Conditions</b> jika contoh tidak dijelaskan baik, dan salah menulis jawaban terutama pada <b>Classifications</b> yang meminta dua jawaban per soal.</p>

<h2>8.6 Kelebihan dan Kelemahan CFIT</h2>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan</span><p>Singkat, nonverbal, mudah diadministrasikan klasikal, tersedia bentuk paralel.</p></div>
  <div><span class="pc pc--minus">− kelemahan</span><p>Cakupan sempit (hanya Gf), bergantung pada kecepatan, skor tetap dipengaruhi pendidikan dan budaya.</p></div>
</div>`,
  keys: [
    'CFIT mengukur Gf menurut teori Cattell.',
    'Culture fair tidak sama dengan culture free.',
    'Empat subtes: Series, Classifications, Matrices, Conditions.',
    'IQ CFIT: rata-rata 100, SD 16.',
  ],
  checks: [
    'Jelaskan perbedaan culture fair dan culture free.',
    'Sebutkan empat subtes CFIT dan waktunya.',
    'Mengapa SD yang berbeda (15 dan 16) penting saat membandingkan IQ?',
  ],
},
/* ---------------------------------------------------- BAB 9 */
{
  no: 9, tag: 'TIDI', group: 'tidi', meet: 'Pertemuan 9',
  title: 'Tes Intelegensi Dewasa Indonesia (TIDI)',
  cpmk: 'Memahami TIDI dan administrasinya',
  html: `
<h2>9.1 Gambaran Umum dan Dasar Teoretis</h2>
<p>TIDI dikembangkan oleh <b>LPSP3 Fakultas Psikologi Universitas Indonesia (2009)</b>. TIDI adalah <b>adaptasi WAIS-R</b>, berlandaskan teori Wechsler, dan interpretasinya mengikuti WAIS-R (Toto &amp; Poerwandari, 2024).</p>
<p>Adaptasinya mencakup penulisan butir baru dan penentuan batas waktu sesuai konteks Indonesia. Analisis butir melibatkan <b>3.366 partisipan</b>, diambil acak dengan acuan data sensus di <b>Pulau Jawa</b>, mempertimbangkan jenis kelamin, usia, pekerjaan, pendidikan, dan tempat tinggal kota/desa.</p>

<h2>9.2 Tujuan TIDI</h2>
<p>Menyediakan tes intelegensi individual untuk orang dewasa Indonesia dengan <b>norma lokal</b>, mengurangi bias bila testee Indonesia dibandingkan dengan norma Amerika. Dipakai dalam asesmen klinis, pendidikan, dan industri.</p>

<h2>9.3 Subtes dan Skoring TIDI</h2>
<div class="grid2">
  <div class="card"><span class="card__k">[skala verbal · 6]</span><p>Information, Digit Span, Vocabulary, Arithmetic, Comprehension, Similarities.</p></div>
  <div class="card"><span class="card__k">[skala performance · 5]</span><p>Picture Completion, Picture Arrangement, Block Design, Object Assembly, Digit Symbol.</p></div>
</div>
<p>Skor mentah subtes → skor standar. TIDI menghasilkan <b>IQ Total, IQ Verbal, IQ Performance</b> — tanpa skor indeks seperti WAIS-IV. Instruksi dan sebagian soal boleh disampaikan dalam bahasa daerah bagi testee yang tidak menguasai bahasa Indonesia, selama isinya tidak berubah.</p>

<h2>9.4 Masalah dalam Pengambilan TIDI</h2>
<p>Mirip WAIS. Durasi panjang membuat testee lelah — tester bisa menawarkan pembagian sesi. Kesalahan skoring verbal dan pencatatan waktu tetap berisiko. Sampel norma dari Pulau Jawa, jadi berhati-hatilah menguji testee dari daerah dengan latar budaya berbeda.</p>

<h2>9.5 Kelebihan dan Kelemahan TIDI</h2>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan</span><p>Norma lokal, butir disesuaikan budaya Indonesia, kerangka interpretasi sama dengan WAIS-R sehingga literaturnya bisa dipakai.</p></div>
  <div><span class="pc pc--minus">− kelemahan</span><p>Data klasifikasi subtes, reliabilitas, dan validitas belum banyak dipublikasikan; tanpa skor indeks; model teoretis mengikuti WAIS-R yang sudah digantikan struktur indeks.</p></div>
</div>
${note('Informasi publik tentang TIDI terbatas. Lengkapi bab ini dengan manual dan materi dari dosen.')}`,
  keys: [
    'TIDI adalah adaptasi WAIS-R oleh LPSP3 UI (2009).',
    '11 subtes, menghasilkan FSIQ, VIQ, PIQ.',
    'Kelebihan: norma dan butir lokal. Kelemahan: data psikometrik terbatas, tanpa indeks.',
  ],
  checks: [
    'Mengapa adaptasi tes asing tidak cukup hanya dengan menerjemahkan butir?',
    'Bandingkan struktur skor TIDI dan WAIS-IV.',
    'Apa implikasi sampel norma dari Pulau Jawa bagi testee luar Jawa?',
  ],
},
/* ---------------------------------------------------- BAB 10 */
{
  no: 10, tag: 'KASUS', group: 'praktik', meet: 'Pertemuan 10',
  title: 'Analisis Kasus CFIT dan TIDI',
  cpmk: 'Menganalisis perbedaan tujuan, hasil, dan kegunaan pengukuran',
  html: `
<p>Bab ini menyajikan dua <b>kasus ilustrasi fiktif</b> untuk berlatih menganalisis perbedaan tujuan, hasil, dan kegunaan dua tes. Angka dalam kasus bukan data nyata.</p>
<div class="case">
  <span class="case__tag">KASUS A · CFIT</span>
  <h3>Seleksi staf administrasi</h3>
  <p>Perusahaan logistik menyeleksi 120 pelamar dan butuh alat yang cepat dan klasikal. Psikolog memilih <b>CFIT Skala 3 Form A</b>. Pelamar R (24 tahun, D3) memperoleh <b>IQ 112</b>.</p>
  <dl class="defs defs--tight">
    <dt>Tujuan</dt><dd>Menyaring penalaran umum dalam waktu singkat; CFIT sesuai karena pendek dan klasikal.</dd>
    <dt>Hasil</dt><dd>Penalaran fluid di atas rata-rata. Karena SD CFIT 16, skor ini sekitar <b>0,75 SD</b> di atas rata-rata.</dd>
    <dt>Kegunaan</dt><dd>Cukup untuk penyaringan awal, tetapi tidak memberi info kemampuan verbal, numerik, atau ketelitian kerja. Tambahkan tes lain untuk keputusan akhir.</dd>
  </dl>
</div>
<div class="case case--blue">
  <span class="case__tag">KASUS B · TIDI</span>
  <h3>Asesmen klinis</h3>
  <p>S (35 tahun, karyawan swasta) mengeluh sulit berkonsentrasi dan sering lupa setelah stres kerja berat. Hasil TIDI individual: <b>FSIQ 104, VIQ 110, PIQ 97</b>. Digit Span dan Digit Symbol relatif rendah. S sering meminta soal diulang dan tampak gelisah.</p>
  <dl class="defs defs--tight">
    <dt>Tujuan</dt><dd>Memahami profil kognitif, bukan sekadar angka IQ; TIDI memberi skor subtes dan kesempatan observasi.</dd>
    <dt>Hasil</dt><dd>FSIQ kategori rata-rata. Selisih VIQ–PIQ 13 poin perlu dicek signifikansinya dengan tabel manual. Skor rendah pada subtes atensi dan kecepatan sejalan dengan keluhan dan perilaku.</dd>
    <dt>Kegunaan</dt><dd>Hasil TIDI adalah salah satu data; padukan dengan wawancara, observasi, dan tes lain sebelum menyimpulkan.</dd>
  </dl>
</div>
<h2>10.3 Perbandingan</h2>
${tbl(['Aspek', 'CFIT (Kasus A)', 'TIDI (Kasus B)'], [
  ['Tujuan', 'Penyaringan cepat', 'Pemahaman profil kognitif'],
  ['Bentuk', 'Klasikal, nonverbal', 'Individual, verbal dan performance'],
  ['Hasil', 'Satu skor IQ (Gf)', 'FSIQ, VIQ, PIQ, skor subtes'],
  ['Observasi', 'Minim', 'Kaya'],
  ['Kegunaan', 'Seleksi massal', 'Diagnosis dan rekomendasi intervensi'],
  ['Keterbatasan', 'Cakupan sempit', 'Durasi panjang, data psikometrik terbatas'],
])}`,
  keys: [
    'Pilih tes sesuai tujuan: penyaringan cepat vs pemahaman profil.',
    'Baca skor relatif terhadap SD tes (CFIT SD 16).',
    'Satu hasil tes bukan dasar tunggal keputusan atau diagnosis.',
  ],
  checks: [
    'Jika perusahaan pada Kasus A hanya memakai CFIT untuk keputusan akhir, apa risikonya?',
    'Data apa lagi yang Anda butuhkan untuk menyimpulkan Kasus B?',
    'Buat satu kasus sendiri yang lebih cocok memakai IST daripada CFIT.',
  ],
},
/* ---------------------------------------------------- BAB 11 */
{
  no: 11, tag: 'PRAKTIKUM', group: 'praktik', meet: 'Pertemuan 12',
  title: 'Panduan Praktikum WAIS, APM, dan IST',
  cpmk: 'Mempresentasikan hasil praktikum secara berkelompok',
  html: `
<h2>11.1 Persiapan Praktikum</h2>
<ul class="check">
  <li>Baca ulang manual dan latih instruksi sampai lancar.</li>
  <li>Cek alat: buku soal, lembar jawab, formulir pencatatan, stopwatch, alat tulis, kit WAIS.</li>
  <li>Siapkan ruangan yang tenang dan terang.</li>
  <li>Siapkan lembar persetujuan (<i>informed consent</i>).</li>
  <li>Pastikan bekerja di bawah supervisi dosen atau asisten.</li>
</ul>

<h2>11.2 Checklist Pelaksanaan</h2>
${tbl(['Tahap', 'WAIS', 'APM', 'IST'], [
  ['Rapport awal', 'Individual, personal', 'Klasikal atau individual', 'Klasikal'],
  ['Instruksi', 'Baku, kata per kata', 'Contohkan soal pertama Set I', 'Baca instruksi dan contoh tiap subtes'],
  ['Waktu', 'Per butir / subtes tertentu', '40 menit Set II (berwaktu)', 'Berbeda tiap subtes'],
  ['Aturan khusus', 'Start, reverse, discontinue', 'Kerjakan berurutan', 'GE ditulis; ME fase hafalan'],
  ['Pencatatan', 'Verbatim, catat Q', 'Cek nomor jawaban', 'Cek kolom subtes'],
  ['Rapport akhir', 'Tanya perasaan, terima kasih', 'Terima kasih, tindak lanjut', 'Terima kasih, tindak lanjut'],
])}

<h2>11.3 Struktur Laporan dan Presentasi</h2>
<p>Laporan memuat: identitas testee (<b>inisial saja</b>), tujuan pemeriksaan, waktu dan tempat, alat tes, hasil observasi, hasil skoring, interpretasi, dan kesimpulan. Observasi memuat penampilan, sikap terhadap tes, cara kerja, dan reaksi terhadap soal sulit.</p>
<p>Presentasi kelompok menjelaskan proses administrasi, kendala, cara mengatasinya, dan hasil skoring, serta perbedaan pengalaman mengadministrasikan tes individual (WAIS) dan klasikal (APM, IST). <b>Jangan menampilkan identitas lengkap testee atau butir soal asli di slide.</b></p>`,
  keys: [
    'Latih instruksi sampai hafal sebelum praktikum.',
    'Gunakan inisial testee; jangan tampilkan butir soal asli.',
    'Presentasikan proses, kendala, solusi, dan hasil.',
  ],
  checks: [],
},
/* ---------------------------------------------------- BAB 12 */
{
  no: 12, tag: 'IQ', group: 'iq', meet: 'Pertemuan 13',
  title: 'Intelligence Quotient dan Permasalahan Intelegensi',
  cpmk: 'Memahami IQ dan permasalahan seputar intelegensi',
  html: `
<h2>12.1 Keterbatasan Rasio MA/CA</h2>
<p>Usia mental berhenti naik setelah remaja akhir, sebaran rasio IQ tidak sama tiap usia, dan satuan usia mental tidak setara. Akibatnya rasio IQ tidak bisa membandingkan orang secara adil lintas usia (lihat <a href="#/bab/7">Bab 7</a>).</p>

<h2>12.2 Perumusan IQ Deviasi</h2>
<p>IQ deviasi menunjukkan posisi skor seseorang terhadap rata-rata kelompok usianya dalam satuan simpangan baku.</p>
<div class="formula">z = (X − M) / SD &nbsp;&nbsp;·&nbsp;&nbsp; IQ = 100 + 15z</div>
<p>X = skor mentah testee, M = rata-rata kelompok usia, SD = simpangan baku kelompok usia. Contoh: X = 45, M = 40, SD = 5 → z = 1 → IQ = 100 + 15(1) = <b>115</b>.</p>
<p>Untuk tes dengan SD 16 (Stanford-Binet L-M, CFIT): <b>IQ = 100 + 16z</b>. Skor z yang sama menghasilkan angka IQ berbeda pada tes berbeda.</p>
<div data-widget="iq"></div>

<h2>12.3 Distribusi IQ dan Klasifikasi</h2>
<p>IQ diasumsikan tersebar mengikuti kurva normal: ±<b>68,26%</b> populasi dalam 1 SD (85–115 untuk SD 15), ±<b>95,44%</b> dalam 2 SD (70–130), ±<b>99,74%</b> dalam 3 SD (55–145). Klasifikasi Wechsler ada di <a href="#/bab/4">Bab 4</a>.</p>

<h2>12.4 Perkembangan Mental dan Kestabilan IQ</h2>
<p>Skor IQ bayi dan prasekolah kurang memprediksi IQ dewasa; kestabilan meningkat di usia sekolah dan umumnya tinggi pada dewasa. Di usia lanjut, kemampuan <b>fluid</b> dan kecepatan pemrosesan cenderung menurun lebih awal; <b>crystallized</b> bertahan lebih lama.</p>
<p>Kestabilan relatif tidak berarti skor tak bisa berubah: pendidikan, kesehatan, gizi, dan peristiwa hidup bisa mengubahnya. <b>Flynn (1987)</b> mencatat kenaikan rata-rata skor IQ antargenerasi, sehingga norma perlu diperbarui berkala.</p>

<h2>12.5 Pengaruh Faktor Bawaan dan Pengasuhan</h2>
<p>Studi kembar dan adopsi menunjukkan genetik dan lingkungan sama-sama berperan. Plomin dan Deary (2015): heritabilitas meningkat dari sekitar <b>20% (bayi)</b> menjadi sekitar <b>60% (dewasa)</b>. Heritabilitas adalah <b>statistik populasi</b> — tidak menunjukkan seberapa besar intelegensi satu orang ditentukan gen. Faktor lingkungan: gizi, stimulasi, pendidikan, status sosial ekonomi, pola asuh; gen dan lingkungan juga saling berinteraksi.</p>

<h2>12.6 Manfaat Pengukuran Intelegensi</h2>
<p>Penempatan dan bimbingan pendidikan, identifikasi anak berbakat dan berhambatan belajar, seleksi dan penempatan kerja, diagnosis klinis (disabilitas intelektual, gangguan neurokognitif), serta penelitian.</p>

<h2>12.7 Masalah Pengukuran pada Anak Prasekolah</h2>
<p>Rentang perhatian pendek dan mudah terdistraksi, bahasa terbatas, perkembangan sangat cepat sehingga skor cepat berubah, rapport sulit dibangun, dan tes lebih banyak mengukur kemampuan sensorimotor.</p>

<h2>12.8 Masalah Pengukuran pada Orang Dewasa</h2>
<p>Bisa tersinggung oleh butir kekanak-kanakan, motivasi rendah bila tes tak relevan, penurunan penglihatan/pendengaran/kecepatan motorik pada usia lanjut menurunkan skor tanpa mencerminkan penurunan penalaran, dan norma usia lanjut sering kurang memadai.</p>

<h2>12.9 Pengaruh Budaya terhadap Kinerja Tes</h2>
<p>Lewat bahasa, familiaritas materi, pengalaman sekolah, <i>test-wiseness</i>, dan nilai terhadap kecepatan. Steele dan Aronson (1995) menunjukkan efek <b>stereotype threat</b>: anggota kelompok yang distereotipkan berkinerja lebih rendah ketika stereotipnya diaktifkan. Pakai norma yang sesuai dan tafsirkan skor dengan mempertimbangkan latar belakang testee.</p>`,
  keys: [
    'IQ deviasi = 100 + 15z (atau 16z untuk tes dengan SD 16).',
    '68% populasi berada pada IQ 85 sampai 115.',
    'IQ makin stabil seiring usia; skor prasekolah kurang prediktif.',
    'Heritabilitas naik seiring usia dan merupakan statistik populasi.',
    'Budaya memengaruhi skor lewat bahasa, familiaritas, dan stereotype threat.',
  ],
  checks: [
    'Hitung IQ deviasi jika X = 32, M = 38, SD = 4 (SD IQ 15).',
    'Mengapa heritabilitas tidak bisa diterapkan pada satu individu?',
    'Sebutkan tiga masalah pengukuran intelegensi anak prasekolah.',
  ],
  answers: { 0: 'z = (32 − 38) / 4 = −1,5. IQ = 100 + 15(−1,5) = 77,5, dibulatkan <b>78</b>. Klasifikasi Wechsler: <b>Borderline</b>.' },
},
/* ---------------------------------------------------- BAB 13 */
{
  no: 13, tag: 'QUOTIENT', group: 'iq', meet: 'Pertemuan 14',
  title: 'Pengembangan Konsep Quotient',
  cpmk: 'Memahami perkembangan konsep quotient di berbagai aspek kehidupan',
  html: `
<p>Istilah <i>quotient</i> kini dipakai di luar intelegensi kognitif. Sebagian konsep punya dasar penelitian kuat; sebagian lain lebih populer di buku pengembangan diri daripada di jurnal ilmiah. Mahasiswa psikologi perlu membedakan keduanya.</p>
<div class="qgrid">
  <article class="q q--pink"><span class="q__big">EQ</span><h3>Emotional Quotient</h3>
    <p><b>Salovey &amp; Mayer (1990)</b>: kemampuan memantau emosi diri dan orang lain, membedakannya, dan memakai informasi itu untuk mengarahkan pikiran dan tindakan. <b>Goleman (1995)</b> mempopulerkan lima komponen: kesadaran diri, pengaturan diri, motivasi, empati, keterampilan sosial.</p>
    <p>Model <b>kemampuan</b> diukur tes kinerja (MSCEIT) dan lebih terpisah dari kepribadian; model <b>sifat</b> diukur kuesioner laporan diri dan banyak tumpang tindih dengan kepribadian.</p></article>
  <article class="q q--blue"><span class="q__big">SQ</span><h3>Spiritual Quotient</h3>
    <p><b>Zohar &amp; Marshall (2000)</b>: kemampuan memberi makna dan nilai pada tindakan dan hidup. Populer, tetapi dukungan empirisnya terbatas; kritikus mempertanyakan apakah SQ memenuhi kriteria intelegensi dan bagaimana mengukurnya secara valid.</p></article>
  <article class="q q--lime"><span class="q__big">AQ</span><h3>Adversity Quotient</h3>
    <p><b>Stoltz (1997)</b>: kemampuan menghadapi dan mengatasi kesulitan, diukur dengan <i>Adversity Response Profile</i> berdimensi <b>CO2RE</b>: Control, Origin &amp; Ownership, Reach, Endurance. Tipe orang: <i>quitters, campers, climbers</i>. Banyak dipakai di pelatihan organisasi, bukti psikometrik belum sekuat tes intelegensi.</p></article>
  <article class="q q--ink"><span class="q__big">EntQ</span><h3>Entrepreneurial Quotient</h3>
    <p>Kumpulan kemampuan dan sifat pendukung kewirausahaan: melihat peluang, berani mengambil risiko terukur, inovasi, ketekunan. Belum ada teori atau alat ukur baku yang diterima luas — perlakukan sebagai konsep praktis, bukan konstruk psikometris yang mapan.</p></article>
</div>
${tbl(['Konsep', 'Tokoh', 'Fokus', 'Status ilmiah'], [
  ['IQ', 'Binet, Wechsler', 'Kemampuan kognitif umum', '<span class="lvl lvl--4">Sangat kuat</span>'],
  ['EQ', 'Salovey &amp; Mayer, Goleman', 'Pengolahan emosi', '<span class="lvl lvl--3">Cukup kuat (model kemampuan)</span>'],
  ['SQ', 'Zohar &amp; Marshall', 'Makna dan nilai hidup', '<span class="lvl lvl--2">Terbatas</span>'],
  ['AQ', 'Stoltz', 'Respons terhadap kesulitan', '<span class="lvl lvl--2">Terbatas</span>'],
  ['EntQ', 'Beragam', 'Kemampuan wirausaha', '<span class="lvl lvl--1">Belum baku</span>'],
])}`,
  keys: [
    'EQ: Salovey & Mayer (1990), dipopulerkan Goleman (1995).',
    'SQ: Zohar & Marshall (2000). AQ: Stoltz (1997), dimensi CO2RE.',
    'Bedakan konsep populer dan konstruk dengan bukti psikometrik kuat.',
  ],
  checks: [
    'Bandingkan model kemampuan dan model sifat kecerdasan emosional.',
    'Jelaskan dimensi CO2RE pada AQ.',
    'Mengapa SQ dan EntQ belum dianggap konstruk psikometris yang mapan?',
  ],
},
/* ---------------------------------------------------- BAB 14 */
{
  no: 14, tag: 'ETIKA', group: 'etika', meet: 'Pertemuan 15',
  title: 'Etika Penggunaan Tes Intelegensi',
  cpmk: 'Memahami dan menginternalisasikan etika penggunaan tes',
  html: `
<p><b>Kode Etik Psikologi Indonesia (HIMPSI, 2010)</b> mengatur asesmen psikologis dalam bab khusus. Prinsip umumnya: menghormati martabat testee, bertindak kompeten, menjaga kerahasiaan, dan memakai alat tes dengan benar.</p>
<div class="ethics">
  <section><span class="ethics__n">01</span><h3>Persiapan tes</h3>
    <ul class="bul">
      <li>Hanya memakai tes sesuai kompetensi. WAIS dan TIDI hanya boleh dipakai psikolog; mahasiswa boleh mengadministrasikannya untuk belajar <b>di bawah supervisi</b>.</li>
      <li>Memilih tes yang valid, reliabel, sesuai tujuan dan karakteristik testee.</li>
      <li>Memakai norma yang tepat dan versi tes yang tidak usang.</li>
      <li>Meminta persetujuan setelah menjelaskan tujuan, prosedur, dan penggunaan hasil.</li>
    </ul></section>
  <section><span class="ethics__n">02</span><h3>Penggunaan tes</h3>
    <ul class="bul">
      <li>Mengikuti prosedur baku; tidak memberi bantuan yang tidak diizinkan manual.</li>
      <li>Menjaga kerahasiaan materi: <b>tidak memfotokopi, memotret, atau menyebarkan butir soal</b>.</li>
      <li>Memperlakukan testee dengan hormat, memperhatikan kondisi fisik dan psikologis, mencatat kondisi yang memengaruhi hasil.</li>
      <li>Menghindari konflik kepentingan.</li>
    </ul></section>
  <section><span class="ethics__n">03</span><h3>Hasil tes</h3>
    <ul class="bul">
      <li>Menafsirkan dengan mempertimbangkan keterbatasan tes, latar belakang testee, dan data lain.</li>
      <li>Tidak memberi label yang merendahkan.</li>
      <li>Menyampaikan hasil dengan bahasa mudah dipahami, hanya kepada pihak yang berhak.</li>
      <li>Menyimpan data dengan aman. Laporan praktikum memakai inisial dan tidak memuat butir soal.</li>
    </ul></section>
</div>`,
  keys: [
    'Kompetensi, persetujuan, kerahasiaan, dan keamanan materi tes.',
    'Ikuti prosedur baku; jangan menyebarkan butir soal.',
    'Tafsirkan hasil secara utuh dan sampaikan tanpa label merendahkan.',
  ],
  checks: [
    'Mengapa butir soal tes intelegensi harus dirahasiakan?',
    'Apa saja isi informed consent sebelum tes?',
    'Bagaimana cara menyampaikan hasil IQ rendah secara etis?',
  ],
},
];

/* ---------------------------------------------------- LAMPIRAN */
const say = (who, txt) => `<div class="line line--${who === 'Tester' ? 'tr' : 'te'}"><span>${who}</span><p>${txt}</p></div>`;

const APPENDIX = {
  a: {
    code: 'A', title: 'Naskah Contoh Role-play Rapport', tag: 'ROLE-PLAY',
    html: `
${note('Naskah ini contoh. Sesuaikan dengan gaya bicara Anda dan ketentuan laboratorium.')}
<h2>A.1 Rapport Awal Individual (WAIS)</h2>
<div class="script">
${say('Tester', 'Selamat pagi. Silakan duduk. Perkenalkan, saya [nama], mahasiswa psikologi Universitas Gunadarma. Dengan siapa saya berbicara?')}
${say('Testee', 'Saya [nama].')}
${say('Tester', 'Terima kasih sudah datang, [nama]. Bagaimana kabarnya hari ini?')}
${say('Testee', 'Baik.')}
${say('Tester', 'Syukurlah. Semalam tidurnya cukup? Sudah sarapan?')}
${say('Testee', 'Sudah.')}
${say('Tester', 'Ada keluhan kesehatan hari ini, misalnya pusing atau mengantuk? Apakah biasa memakai kacamata?')}
${say('Testee', 'Tidak ada keluhan. Tidak pakai kacamata.')}
${say('Tester', 'Baik. Hari ini kita akan mengerjakan beberapa tugas. Ada yang berupa pertanyaan, ada yang memakai gambar dan balok. Tujuannya untuk latihan praktikum saya, jadi ini bukan ujian yang menentukan apa pun untuk Anda. Sebagian soal mudah, sebagian sulit. Tidak ada orang yang bisa menjawab semuanya, jadi kerjakan sebaik mungkin saja.')}
${say('Tester', 'Semua hasil dan data Anda saya jaga kerahasiaannya dan hanya dipakai untuk keperluan belajar. Nama Anda akan ditulis inisial saja. Prosesnya sekitar satu jam lebih. Jika lelah atau ingin ke toilet, silakan sampaikan. Ada yang ingin ditanyakan?')}
${say('Testee', 'Tidak ada.')}
${say('Tester', 'Kalau begitu, apakah Anda bersedia mengikuti tes ini? Jika bersedia, mohon tanda tangan di lembar persetujuan ini.')}
</div>
<h2>A.2 Selama Tes</h2>
<p>Gunakan dorongan netral untuk <b>semua</b> jawaban: "Ya, lanjut ya", "Bagus, Anda sudah berusaha", atau "Coba saja kerjakan sebisanya". Jangan mengatakan "betul" atau "salah". Jika testee bertanya apakah jawabannya benar: <i>"Yang penting Anda sudah berusaha sebaik mungkin. Kita lanjut ke soal berikutnya."</i></p>
<h2>A.3 Rapport Akhir Individual</h2>
<div class="script">
${say('Tester', 'Baik, [nama], tesnya sudah selesai. Terima kasih banyak atas waktu dan kerja samanya.')}
${say('Tester', 'Bagaimana perasaan Anda setelah mengerjakan tadi?')}
${say('Testee', 'Agak capek, beberapa soal susah.')}
${say('Tester', 'Wajar sekali. Soalnya memang dibuat bertingkat, jadi semua orang akan menemukan soal yang sulit. Anda sudah berusaha dengan baik.')}
${say('Tester', 'Hasil tes ini akan saya olah untuk tugas praktikum dan tetap saya jaga kerahasiaannya. Ada yang ingin Anda tanyakan sebelum kita selesai?')}
${say('Testee', 'Tidak ada.')}
${say('Tester', 'Sekali lagi terima kasih. Hati-hati di jalan.')}
</div>
<h2>A.4 Rapport Awal Klasikal (APM atau IST)</h2>
<div class="script">
${say('Tester', 'Selamat pagi, Saudara-saudara. Perkenalkan, saya [nama], dan ini rekan saya [nama] yang akan membantu sebagai pengawas.')}
${say('Tester', 'Hari ini kita akan mengerjakan tes untuk keperluan praktikum. Hasilnya dirahasiakan dan hanya dipakai untuk belajar. Sebelum mulai, apakah ada yang merasa kurang sehat atau tidak membawa kacamata yang biasa dipakai? Jika ada, silakan angkat tangan.')}
${say('Tester', 'Pastikan di meja hanya ada alat tulis. Simpan ponsel dalam keadaan mati atau mode senyap di dalam tas.')}
${say('Tester', 'Aturannya sebagai berikut. Jangan membuka buku soal sebelum saya minta. Jangan menulis apa pun di buku soal. Tulis jawaban hanya di lembar jawab. Kerjakan sendiri dan jangan bekerja sama. Jika waktu habis, segera letakkan alat tulis.')}
${say('Tester', 'Sekarang isi identitas di lembar jawab: nama, tanggal lahir, jenis kelamin, dan tanggal hari ini. Ada pertanyaan sebelum kita mulai?')}
</div>
<h2>A.5 Rapport Akhir Klasikal</h2>
<div class="script">
${say('Tester', 'Waktu habis. Silakan letakkan alat tulis. Tutup buku soal dan letakkan di atas lembar jawab. Pengawas akan mengumpulkannya.')}
${say('Tester', 'Terima kasih atas kerja sama Saudara-saudara. Hasil tes ini akan diolah untuk keperluan praktikum dan dijaga kerahasiaannya. Mohon tidak menceritakan isi soal kepada orang lain. Silakan meninggalkan ruangan dengan tertib.')}
</div>
<h2>A.6 Hal yang Sering Dinilai dalam Role-play</h2>
<ul class="check">
  <li>Kelengkapan langkah rapport</li><li>Kontak mata</li><li>Intonasi ramah tetapi tegas</li><li>Bahasa tubuh terbuka</li>
  <li>Penjelasan kerahasiaan</li><li>Pengecekan kondisi testee</li><li>Gaya rapport sesuai setting individual/klasikal</li>
</ul>
<p>Hindari bicara terlalu cepat, membaca naskah terus-menerus, atau menjanjikan hal yang tidak bisa Anda tepati.</p>`,
  },
  b: {
    code: 'B', title: 'Tabel Perbandingan Tes', tag: 'BANDINGKAN',
    html: `
${tbl(['Aspek', 'WAIS', 'APM', 'IST', 'Binet L-M', 'CFIT', 'TIDI'], [
  ['Tokoh', 'Wechsler', 'Raven', 'Amthauer', 'Binet, Terman', 'Cattell', 'LPSP3 UI'],
  ['Dasar teori', 'Global-multifaset', 'g Spearman', 'Struktur', 'Kemampuan umum', 'Gf-Gc', 'Wechsler'],
  ['Bentuk', 'Individual', 'Individual / klasikal', 'Klasikal', 'Individual', 'Klasikal', 'Individual'],
  ['Muatan', 'Verbal + performance', 'Nonverbal', 'Verbal, numerik, figural, memori', 'Dominan verbal', 'Nonverbal', 'Verbal + performance'],
  ['Hasil', 'FSIQ, VIQ, PIQ / indeks', 'Persentil, grade', 'Profil SW, IQ', 'MA, IQ', 'IQ', 'FSIQ, VIQ, PIQ'],
  ['SD IQ', '15', '–', 'IQ total sesuai norma', '16', '16', 'Sesuai manual'],
], 'tbl--compare')}`,
  },
  c: {
    code: 'C', title: 'Kunci Soal Hitungan & Daftar Pustaka', tag: 'REFERENSI',
    html: `
<h2>Kunci Singkat Soal Hitungan</h2>
<div class="case"><span class="case__tag">BAB 7 · SOAL 1</span><p>Basal VIII. Lulus 4 butir di IX (8 bulan) dan 2 butir di X (4 bulan). MA = 8 tahun + 12 bulan = <b>9 tahun 0 bulan</b>.</p></div>
<div class="case case--blue"><span class="case__tag">BAB 12 · SOAL 1</span><p>z = (32 − 38) / 4 = −1,5. IQ = 100 + 15(−1,5) = 77,5, dibulatkan <b>78</b>. Klasifikasi Wechsler: <b>Borderline</b>.</p></div>
<h2>Daftar Pustaka</h2>
<ol class="refs">
<li>Amthauer, R. (1970). <i>Intelligenz-Struktur-Test 70 (I-S-T 70)</i>. Hogrefe.</li>
<li>Azwar, S. (2013). <i>Pengantar psikologi intelegensi</i>. Pustaka Pelajar.</li>
<li>Boring, E. G. (1923). Intelligence as the tests test it. <i>New Republic, 36</i>, 35–37.</li>
<li>Carroll, J. B. (1993). <i>Human cognitive abilities: A survey of factor-analytic studies</i>. Cambridge University Press.</li>
<li>Cattell, R. B. (1963). Theory of fluid and crystallized intelligence: A critical experiment. <i>Journal of Educational Psychology, 54</i>(1), 1–22.</li>
<li>Cattell, R. B., &amp; Cattell, A. K. S. (1973). <i>Measuring intelligence with the Culture Fair Tests</i>. IPAT.</li>
<li>Cohen, R. J., Swerdlik, M. E., &amp; Sturman, E. D. (2013). <i>Psychological testing and assessment</i> (8th ed.). McGraw-Hill.</li>
<li>Flynn, J. R. (1987). Massive IQ gains in 14 nations. <i>Psychological Bulletin, 101</i>(2), 171–191.</li>
<li>Gardner, H. (1983). <i>Frames of mind: The theory of multiple intelligences</i>. Basic Books.</li>
<li>Goleman, D. (1995). <i>Emotional intelligence</i>. Bantam Books.</li>
<li>Gottfredson, L. S. (1997). Mainstream science on intelligence. <i>Intelligence, 24</i>(1), 13–23.</li>
<li>Gregory, R. J. (2000). <i>Tes psikologi: Sejarah, prinsip, dan aplikasi</i>. Erlangga.</li>
<li>Groth-Marnat, G. (2009). <i>Handbook of psychological assessment</i> (5th ed.). Wiley.</li>
<li>Guilford, J. P. (1967). <i>The nature of human intelligence</i>. McGraw-Hill.</li>
<li>Hebb, D. O. (1949). <i>The organization of behavior</i>. Wiley.</li>
<li>Himpunan Psikologi Indonesia. (2010). <i>Kode etik psikologi Indonesia</i>. PP HIMPSI.</li>
<li>Liepmann, D., Beauducel, A., Brocke, B., &amp; Amthauer, R. (2007). <i>Intelligenz-Struktur-Test 2000 R</i>. Hogrefe.</li>
<li>Pearson. (2024). <i>WAIS-5 overview brochure</i>. Pearson Assessments.</li>
<li>Plomin, R., &amp; Deary, I. J. (2015). Genetics and intelligence differences. <i>Molecular Psychiatry, 20</i>(1), 98–108.</li>
<li>Raven, J., Raven, J. C., &amp; Court, J. H. (1998). <i>Manual for Raven's Progressive Matrices and Vocabulary Scales, Section 4: APM</i>. Oxford Psychologists Press.</li>
<li>Roid, G. H. (2003). <i>Stanford-Binet Intelligence Scales, Fifth Edition</i>. Riverside Publishing.</li>
<li>Salovey, P., &amp; Mayer, J. D. (1990). Emotional intelligence. <i>Imagination, Cognition and Personality, 9</i>(3), 185–211.</li>
<li>Spearman, C. (1904). "General intelligence," objectively determined and measured. <i>American Journal of Psychology, 15</i>(2), 201–292.</li>
<li>Steele, C. M., &amp; Aronson, J. (1995). Stereotype threat and the intellectual test performance of African Americans. <i>JPSP, 69</i>(5), 797–811.</li>
<li>Sternberg, R. J. (1985). <i>Beyond IQ: A triarchic theory of human intelligence</i>. Cambridge University Press.</li>
<li>Stoltz, P. G. (1997). <i>Adversity quotient</i>. Wiley.</li>
<li>Thurstone, L. L. (1938). <i>Primary mental abilities</i>. University of Chicago Press.</li>
<li>Toto, K. C., &amp; Poerwandari, E. K. (2024). Utilizing an intelligence test in clinical psychology assessments. <i>INSAN, 9</i>(2), 230–257.</li>
<li>Wechsler, D. (1958). <i>The measurement and appraisal of adult intelligence</i> (4th ed.). Williams &amp; Wilkins.</li>
<li>Wechsler, D. (2008). <i>WAIS-IV technical and interpretive manual</i>. Pearson.</li>
<li>Zohar, D., &amp; Marshall, I. (2000). <i>SQ: Spiritual intelligence</i>. Bloomsbury.</li>
</ol>`,
  },
};
