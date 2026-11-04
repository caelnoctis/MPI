/* =========================================================
   PENDALAMAN — MATERI KELAS (PPT dosen & presentasi kelompok 3PA18)
   Dirangkum dari folder "MPI MATERI". Butir soal / isi aitem asli
   sengaja TIDAK disalin (Kode Etik HIMPSI); yang dimuat hanya
   konsep, prosedur administrasi, skoring, dan interpretasi.
   ========================================================= */

const src = t => `<p class="src">sumber kelas: ${t}</p>`;

/* ---------- bab baru: TIKI ---------- */
CHAPTERS.push({
  no: 15, tag: 'TIKI', group: 'tiki', meet: 'Materi kelas · Kelompok 8',
  title: 'Tes Intelegensi Kolektif Indonesia (TIKI)',
  cpmk: 'Memahami dasar teori, subtes, skoring, serta kelebihan dan kelemahan TIKI',
  html: `
${note('Bab ini tidak ada di buku belajar. Isinya dirangkum dari presentasi Kelompok 8 (M8). Lengkapi dengan manual dan arahan dosen.')}
<h2>15.1 Pengertian dan Dasar Teoretis</h2>
<p><b>Tes Intelegensi Kolektif Indonesia (TIKI)</b> adalah tes intelegensi yang mengukur kemampuan seperti rentang ingatan, berhitung, dan kosakata melalui berbagai butir soal. TIKI disusun lewat kerja sama <b>Fakultas Psikologi Universitas Padjadjaran (UNPAD) Bandung</b> dengan <i>Department of Industrial and Organizational Psychology and Test Development</i>, <b>Vrije Universiteit Amsterdam</b>.</p>
<p>Landasan teorinya adalah <b>Factor-Model dari French dkk. (1963)</b> dan <b>Structure of Intellect (SI) Guilford (1971)</b> (Drenth &amp; Dengah, 1977). Karena itu, cocokkan dengan teori Guilford di <a href="#/bab/1">Bab 1</a>.</p>
<div class="grid3">
  <div class="card"><span class="card__k">[TIKI-D]</span><p>Tingkat <b>dasar</b>: SD kelas 6 sampai SMP.</p></div>
  <div class="card"><span class="card__k">[TIKI-M]</span><p>Tingkat <b>menengah</b>: SMP kelas 3 sampai SMA.</p></div>
  <div class="card"><span class="card__k">[TIKI-T]</span><p>Tingkat <b>tinggi</b>: mahasiswa dan dewasa.</p></div>
</div>

<h2>15.2 Tujuan TIKI</h2>
<p>Mengukur tingkat kecerdasan berdasarkan <b>norma yang berlaku di Indonesia</b> dalam bentuk IQ (Aprilianti, 2017; Nur'aeni, 2012).</p>

<h2>15.3 Subtes</h2>
<p>Subtes yang tercantum dalam materi kelas:</p>
<div class="chips">
  <span>Berhitung angka</span><span>Berhitung</span><span>Eksklusi kata</span><span>Gabungan bagian</span><span>Eksklusi gambar</span><span>Bayangan cermin</span><span>Hubungan kata</span><span>Meneliti</span><span>Berhitung huruf</span><span>Membandingkan benda</span><span>Pembentukan kata</span><span>Membentuk benda</span>
</div>
<p class="small">Pembagian subtes per tingkat (D/M/T) dan jumlah soal tiap subtes ikuti manual TIKI yang dipakai.</p>

<h2>15.4 Kualifikasi Pengguna dan Skoring</h2>
<p>TIKI termasuk <b>tes tipe A</b>. Administrasi sampai skoring boleh dilakukan minimal oleh <b>sarjana psikologi</b>. <b>Interpretasi hasil</b> hanya boleh diberikan oleh <b>psikolog atau ilmuwan psikologi</b>.</p>
<div class="flow"><span>Hitung benar per subtes</span><i>→</i><span>Jumlahkan semua subtes</span><i>→</i><span>Konversi ke IQ <small>tabel jenis TIKI</small></span></div>
<div class="bigstat bigstat--2">
  <div><span class="bigstat__n">100</span><span class="bigstat__l">mean IQ TIKI</span></div>
  <div><span class="bigstat__n">10</span><span class="bigstat__l">SD menurut materi kelas</span></div>
</div>
<p>Klasifikasi yang dipakai di materi kelas (skala Wechsler):</p>
${tbl(['Rentang IQ', 'Klasifikasi'], [
  ['128 ke atas', 'Very Superior'],
  ['120 – 127', 'Superior'],
  ['111 – 119', 'Bright Normal (High Average)'],
  ['91 – 110', 'Average'],
  ['80 – 90', 'Dull Normal (Low Average)'],
  ['66 – 79', 'Borderline-Defective'],
  ['65 ke bawah', 'Mentally Defective'],
], 'tbl--class')}
${note('Batas klasifikasi ini berbeda dari tabel Wechsler di Bab 4 (mis. Average 90–109). Untuk ujian, ikuti tabel yang diajarkan dosen untuk tes yang bersangkutan.')}

<h2>15.5 Kelebihan dan Kelemahan</h2>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan</span><p>Dibuat dan dikembangkan di Indonesia sehingga sesuai kultur Indonesia. Bentuknya dikategorikan menurut usia/jenjang (D, M, T).</p></div>
  <div><span class="pc pc--minus">− kelemahan</span><p>Karena berbasis kultur Indonesia, pemakaiannya terbatas di Indonesia. Tidak dikembangkan berdasarkan teori kecerdasan terkini. Dalam pandangan psikoedukasi, kurang tepat untuk mendeteksi kelebihan dan kekurangan kemampuan kognitif siswa.</p></div>
</div>
${src('M8 · Tes Intelligence Kolektif Indonesia (Kelompok 8)')}`,
  keys: [
    'TIKI: kerja sama Psikologi UNPAD dan Vrije Universiteit Amsterdam.',
    'Dasar teori: Factor-Model French dkk. (1963) dan Structure of Intellect Guilford (1971).',
    'Tiga tingkat: TIKI-D, TIKI-M, TIKI-T.',
    'Tes tipe A: administrasi oleh minimal sarjana psikologi, interpretasi oleh psikolog.',
    'Mean 100, SD 10 (menurut materi kelas).',
  ],
  checks: [
    'Jelaskan dasar teoretis TIKI dan hubungkan dengan teori Guilford.',
    'Apa arti TIKI sebagai tes tipe A?',
    'Bandingkan kelebihan TIKI dengan tes intelegensi buatan luar negeri.',
  ],
});
GROUPS.splice(GROUPS.findIndex(g => g.id === 'tidi') + 1, 0, { id: 'tiki', label: 'tiki', chapters: [15] });

/* ---------- pendalaman per bab ---------- */
const KELAS = {
/* ================= BAB 1 ================= */
1: `
<h2>A. Pendekatan dalam Mempelajari Intelegensi — rinci</h2>
<h3>Pendekatan teori belajar</h3>
<p>Para ahli memusatkan perhatian pada <b>perilaku yang tampak</b>, bukan konsep mental intelegensi. Hakikat intelegensi dipahami lewat hukum dan prinsip yang dipakai individu untuk memperoleh perilaku baru. Dalam pendekatan ini <b>intelegensi bukan sifat kepribadian (trait)</b>, melainkan <b>kualitas hasil belajar</b> yang telah terjadi.</p>
${tbl(['Tokoh', 'Teori', 'Inti'], [
  ['Ivan Pavlov', 'Classical conditioning', 'Bentuk paling sederhana dari belajar adalah pengondisian. Tingkah laku adalah rangkaian refleks berkondisi yang bisa dipelajari dan berubah lewat latihan.'],
  ['E. L. Thorndike', 'Hukum pengaruh (law of effect)', 'Belajar = interaksi stimulus–respons. Makin banyak hubungan S–R yang dikuasai lewat pengulangan, makin berhasil belajarnya.'],
  ['B. F. Skinner', 'Operant conditioning', 'Bagian dari pembelajaran asosiatif: konsekuensi sebuah perilaku mengubah kemungkinan perilaku itu diulang.'],
  ['Albert Bandura', 'Belajar sosial / kognitif sosial', 'Mengamati dan meniru perilaku, sikap, dan emosi orang lain. Faktor kognitif (internal) dan lingkungan (eksternal) saling memengaruhi: <i>behavior – personal – environment</i>.'],
])}
<h3>Pendekatan neurobiologis</h3>
<p>Intelegensi dianggap punya <b>dasar anatomis dan biologis</b>. Perilaku inteligen bisa ditelusuri ke dasar neuro-anatomis dan proses neurofisiologisnya, sehingga penelitian mencari korelasi intelegensi dengan aspek anatomi, elektrokimia, atau fisiologi.</p>
<h3>Pendekatan psikometris</h3>
<p>Intelegensi dianggap <b>konstruk atau trait</b> yang kadarnya berbeda tiap orang. Ahli psikometri lebih tertarik pada cara praktis untuk <b>klasifikasi dan prediksi</b> daripada meneliti hakikat intelegensi. Biasanya setelah instrumen selesai dirancang, barulah mereka mempersoalkan konstruk apa yang sebenarnya diukur. Ada dua arah studi: (1) praktis, menekankan <b>pemecahan masalah</b>; (2) menekankan <b>konsep dan penyusunan teori</b>. Contoh hasilnya: skala Binet-Simon dan Wechsler.</p>
<dl class="defs">
  <dt>Galton (1879)</dt><dd>Psikometri adalah "seni memaksakan pengukuran dan angka pada operasi pikiran".</dd>
  <dt>Peter Molenaar</dt><dd>Perkiraan proses psikologis laten melalui analisis stokastik pada tingkat individu dan populasi.</dd>
  <dt>Denny Borsboom</dt><dd>Disiplin yang berkaitan dengan konstruksi alat penilaian, instrumen pengukuran, dan model formal yang menghubungkan fenomena yang dapat diamati.</dd>
</dl>
<p><b>Kritik Sigel (1963, dalam Groth-Marnat, 1984):</b> perancang tes terlalu menekankan aspek <b>kuantitatif</b> intelegensi dan kurang memperhatikan aspek <b>kualitatif</b>.</p>
<h3>Pendekatan teori perkembangan</h3>
<p>Studi dipusatkan pada perkembangan intelegensi <b>secara kualitatif</b> dalam kaitannya dengan tahap-tahap perkembangan biologis individu.</p>

<h2>B. Teori Intelegensi — rincian materi kelas</h2>
<dl class="defs">
  <dt>Binet <em>faktor tunggal</em></dt><dd>Intelegensi bersifat <b>monogenetik</b>: berkembang dari satu faktor umum. Tiga komponen: <b>direction</b> (arah), <b>adaptation</b> (penyesuaian), <b>criticism</b> (kritik diri).</dd>
  <dt>Spearman <em>dua faktor</em></dt><dd>Faktor g mendasari segala tingkah laku; faktor s hanya berfungsi pada tingkah laku khusus. Tiap tingkah laku memakai g yang sama dan s yang berbeda. Dua komponen kualitatif: <b>eduksi relasi</b> (menemukan hubungan dasar antara dua hal) dan <b>eduksi korelasi</b> (menerapkan hubungan yang ditemukan ke situasi baru).</dd>
  <dt>Thurstone &amp; Thurstone</dt><dd>Louis Leon Thurstone dan Thelma Gwinn Thurstone: perilaku inteligen adalah hasil kerja kemampuan mental tertentu. Materi kelas menyebut faktor <b>V</b> (verbal), <b>N</b> (number), <b>S</b> (spatial), <b>W</b> (word fluency), <b>M</b> (memory), <b>R</b> (reasoning). Buku menambahkan <i>perceptual speed</i> sehingga menjadi tujuh.</dd>
  <dt>Hebb</dt><dd><b>Intelegensi A</b>: kemampuan dasar (<i>human basic potentiality</i>) untuk belajar dari lingkungan dan menyesuaikan diri. <b>Intelegensi B</b>: tingkat kemampuan yang tampak dalam perilaku yang dapat diamati langsung.</dd>
  <dt>Cattell</dt><dd><b>Fluid (gf)</b> = faktor bawaan biologis; <b>crystallized (gc)</b> = mencerminkan pengaruh pengalaman, pendidikan, dan kebudayaan.</dd>
  <dt>Thorndike <em>multifaktor</em></dt><dd>Intelegensi terdiri dari banyak kemampuan spesifik, berupa hubungan neural antara stimulus dan respons: <b>abstrak</b> (gagasan, simbol), <b>mekanik</b> (alat mekanis, aktivitas sensori-motor), <b>sosial</b> (berhubungan efektif dengan orang sekitar).</dd>
  <dt>Cyril Burt</dt><dd>Faktor kemampuan tersusun <b>hierarkis</b>: (1) satu faktor umum, (2) faktor kelompok besar (<i>broad group</i>), (3) faktor kelompok kecil (<i>narrow group</i>), (4) faktor spesifik.</dd>
  <dt>Philip E. Vernon</dt><dd>g di puncak hierarki. Di bawahnya <b>v:ed</b> (verbal-educational) dan <b>k:m</b> (practical-mechanical). Faktor spesifik dianggap kurang bernilai praktis karena relevansinya dengan kehidupan sehari-hari tidak jelas.</dd>
  <dt>Halstead</dt><dd>Beberapa fungsi otak terkait kecerdasan dan relatif <b>tidak bergantung budaya</b>: faktor C (central integrative), A (abstraction), P (power), D (directional).</dd>
</dl>
<h3>Structure of Intellect (Guilford) — tiga dimensi</h3>
${tbl(['Dimensi', 'Kategori', 'Penjelasan singkat'], [
  ['Isi (content)', 'Figural', 'Informasi berupa figur/bentuk yang menggambarkan keadaan objek.'],
  ['', 'Simbolik', 'Bentuknya bisa mirip figur, tetapi maknanya mewakili objek lain.'],
  ['', 'Semantik', 'Informasi yang disampaikan secara lisan/bermakna kata.'],
  ['', 'Perilaku', 'Informasi berupa perilaku orang lain.'],
  ['Operasi', 'Kognisi', 'Menemukan atau mengenali kembali informasi.'],
  ['', 'Ingatan', 'Membawa kembali informasi yang pernah diterima ke kesadaran.'],
  ['', 'Produksi konvergen', 'Memakai informasi untuk sampai pada satu jawaban yang benar.'],
  ['', 'Produksi divergen', 'Menghasilkan berbagai jawaban yang baik; cerminan berpikir kreatif.'],
  ['', 'Evaluasi', 'Menilai dari sudut pandang evaluatif, termasuk penilaian moral.'],
  ['Produk', 'Satuan', 'Respons tunggal, mis. (X).'],
  ['', 'Kelas', 'Respons dalam kelompok kelas, mis. (X, Y, Z).'],
  ['', 'Relasi', 'Hubungan antarsatuan, mis. X = Y; X &gt; Y &gt; Z.'],
  ['', 'Sistem', 'Respons terstruktur yang terorganisasi menyeluruh.'],
  ['', 'Transformasi', 'Perubahan satu jenis produk menjadi bentuk lain.'],
  ['', 'Implikasi', 'Produk yang berlaku juga di luar data yang diproses.'],
], 'tbl--si')}
<h3>Piaget — tahap perkembangan intelegensi</h3>
<ol class="steps">
  <li><b>Sensorimotor (0–2 th) — intelegensi praktis.</b> Anak tahu cara melakukan sesuatu, tetapi belum memahami apa yang dilakukan dan konsekuensinya.</li>
  <li><b>Praoperasional (2–7 th).</b> Pemikiran intuitif, egosentris, cenderung menghubungkan sifat manusia dengan benda mati, belum mampu tugas yang perlu arahan mental dan koordinasi.</li>
  <li><b>Operasional konkret.</b> Mampu konservasi dan klasifikasi, tetapi belum mampu menangani situasi hipotetis. <small>(Slide kelas menulis 5–7 th; buku: 7–11 th.)</small></li>
  <li><b>Operasional formal (remaja awal).</b> Mampu berpikir abstrak.</li>
</ol>
<p>Piaget memandang intelegensi dari segi <b>isi, struktur, dan fungsi</b>, tidak sebagai sesuatu yang bisa didefinisikan secara kuantitatif.</p>
<h3>Gardner — sumber data dan tujuh intelegensi</h3>
<p>Pendekatan Gardner berorientasi pada struktur intelegensi. Datanya berasal dari pengetahuan perkembangan individu normal dan superior, informasi kerusakan otak, studi orang eksepsional (sangat cerdas, <i>idiot savant</i>, autistik), data psikometri, dan studi pelatihan psikologis.</p>
${tbl(['Intelegensi', 'Dipakai untuk'], [
  ['Linguistik', 'Membaca, menulis, berbicara, mendengarkan.'],
  ['Logis-matematis', 'Memecahkan masalah logika simbolik dan matematika abstrak.'],
  ['Spasial', 'Menemukan cara berpindah dari satu tempat ke tempat lain.'],
  ['Musikal', 'Komposisi lagu, bernyanyi, memainkan alat musik, mendengarkan musik.'],
  ['Kinestetik-tubuh', 'Olahraga, menari, berjalan, dan aktivitas fisik lain.'],
  ['Interpersonal', 'Berkomunikasi dan berinteraksi dengan orang lain.'],
  ['Intrapersonal', 'Memahami diri sendiri.'],
])}
<h3>Sternberg — teori triarkis</h3>
<div class="grid3">
  <div class="card"><span class="card__k">[komponensial]</span><p>Intelegensi dan dunia <b>internal</b>: struktur dan proses kognitif yang mendasari perilaku inteligen.</p></div>
  <div class="card"><span class="card__k">[kontekstual]</span><p>Intelegensi dan dunia <b>eksternal</b>: perilaku yang dianggap cerdas dalam lingkungan budaya tertentu.</p></div>
  <div class="card"><span class="card__k">[pengalaman]</span><p>Peran pengalaman sebagai perantara internal–eksternal: merespons situasi baru secara otomatis dan tanpa kesulitan.</p></div>
</div>
<p>Komponen intelegensi manusia: <b>metakomponen</b> (proses tingkat tinggi/eksekutif untuk merencanakan, memantau, mengevaluasi kinerja), <b>komponen performansi</b> (proses tingkat rendah untuk menjalankan strategi), dan <b>komponen penerimaan pengetahuan</b> (mempelajari informasi baru dan menyimpannya di memori).</p>
${src('M1 · Pendekatan dan Teori Intelegensi (Kelompok 1)')}`,

/* ================= BAB 2 ================= */
2: `
<h2>A. Pengertian Administrasi Tes</h2>
<p>Menurut <b>Fudyartanta (2017)</b>, administrasi tes adalah urutan penyelenggaraan pengetesan dari awal sampai akhir, termasuk laporan tertulis lengkap yang mencakup interpretasi, kesimpulan, bahkan rekomendasi.</p>

<h2>B. Pengadministrasian Tes Individual</h2>
<h3>1. Rapport</h3>
<dl class="defs">
  <dt>Willis <em>dalam Lubis, 2011</em></dt><dd>Hubungan yang ditandai keharmonisan, kecocokan, dan saling tarik-menarik.</dd>
  <dt>Brammer, Abrego &amp; Shostrom</dt><dd>Iklim psikologis positif yang hangat dan menerima, sehingga peserta tidak merasa terancam.</dd>
  <dt>Lubis (2011)</dt><dd>Rapport diawali basa-basi yang tidak berkaitan dengan permasalahan peserta, tujuannya hanya membuat peserta nyaman. Hubungan berjalan efektif bila rapport sudah terbangun.</dd>
</dl>
<p>Sikap penguji: <b>empati</b>, terbuka, menerima tanpa syarat, menghormati, mampu membaca perilaku nonverbal, serta jujur dan berminat membantu tanpa pamrih.</p>
<h3>2. Penyajian tes</h3>
<p>Tes individual dirancang <i>one-on-one</i> (Gregory, 2015). Langkah penyajian menurut <b>Purna dkk. (2020)</b>:</p>
<ol class="steps">
  <li><b>Persiapan mental</b> — keyakinan mental dan siap mengantisipasi respons apa pun dari klien.</li>
  <li><b>Persiapan materi</b> — menentukan jenis tes, menyiapkan tata ruang yang nyaman, menyiapkan dan memeriksa kelengkapan alat.</li>
  <li><b>Rapport</b> — klien merasa aman dan termotivasi, tidak tegang; tester tidak memberi petunjuk jawaban benar.</li>
  <li><b>Pelaksanaan tes</b> — patuhi prosedur standar (pahami manual), perhatikan batas waktu, perhatikan urutan pengetesan dan selingi istirahat agar tidak kelelahan.</li>
  <li><b>Pemberian nilai</b> — skoring.</li>
  <li><b>Interpretasi</b> — memaknai hasil skoring, biasanya dalam laporan pemeriksaan psikologis.</li>
  <li><b>Mengomunikasikan hasil</b> — hasil bersifat rahasia, tidak boleh dilihat sembarang orang.</li>
  <li><b>Evaluasi</b> — perbaikan untuk pengujian berikutnya.</li>
</ol>
<h3>3. Hal yang harus diperhatikan (Gregory, 2015)</h3>
<div class="rules">
  <div class="rule"><span class="rule__n">01</span><b>Kuasai bahan &amp; petunjuk</b><p>Choi &amp; Proctor menemukan <b>25 dari 27</b> mahasiswa pascasarjana membuat kesalahan serius saat mengadministrasikan Stanford-Binet edisi IV. Dua kesalahan tersering: tidak menanyakan jawaban verbal yang ambigu/tidak lengkap, dan memberi poin berlebihan untuk jawaban di bawah standar.</p></div>
  <div class="rule"><span class="rule__n">02</span><b>Peka keterbatasan fisik</b><p>Pendengaran, penglihatan, wicara, kontrol motorik dapat sangat menyimpangkan hasil. Vernon &amp; Brown melaporkan anak tunarungu yang dimasukkan ke RS retardasi mental karena penguji tidak peka.</p></div>
  <div class="rule"><span class="rule__n">03</span><b>Menjalin rapport</b><p>Gagal membangun hubungan bisa memicu kecemasan dan sikap pasif-agresif, sehingga kemampuan peserta diremehkan dan kepribadiannya salah dinilai.</p></div>
  <div class="rule"><span class="rule__n">04</span><b>Jenis kelamin, pengalaman, ras penguji</b><p>Hasil penelitian saling bertentangan sehingga tidak bisa disimpulkan gamblang (mis. kasus Terrell, Terrell &amp; Taylor).</p></div>
  <div class="rule"><span class="rule__n">05</span><b>Kecemasan tes</b><p>Respons fenomenologis, fisiologis, dan perilaku yang menyertai kekhawatiran gagal. Pemicu: pernah gagal, kinerja buruk terlepas dari cemasnya, dan tekanan waktu sempit.</p></div>
  <div class="rule"><span class="rule__n">06</span><b>Motivasi berbohong</b><p>Pemalsuan untuk memberi impresi baik (seleksi kerja) atau buruk (mis. menghindari wajib militer) (Fudyartanta, 2017).</p></div>
</div>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan (Anastasi, 1976)</span><p>Dapat menilai motivasi serta faktor seperti impulsivitas dan kecemasan; observasi langsung dan mendalam; lebih fleksibel, isi lebih spesifik dan mendalam.</p></div>
  <div><span class="pc pc--minus">− kelemahan (Anastasi, 1976)</span><p>Butuh penguji terlatih dan berpengalaman; hasil tidak bisa digeneralisasi ke individu lain; memakan waktu lebih banyak.</p></div>
</div>

<h2>C. Pengadministrasian Tes Klasikal</h2>
<p><b>Rapport (Anastasi, 1976):</b> usaha membangkitkan minat, mengajak kerja sama, dan memastikan peserta mengikuti instruksi standar. Keseragaman kondisi tes sangat penting; setiap penyimpangan dari kondisi standar harus dicatat. Rapport klasikal meliputi sambutan ramah, penjelasan tujuan dan pentingnya tes, jaminan kerahasiaan, dan kesempatan bertanya. Penguji juga peka pada kelompok khusus (gangguan emosional, narapidana, anak nakal).</p>
<p><b>Penyajian tes</b> umumnya <i>pencil-and-paper</i> untuk banyak orang sekaligus (Gregory, 2015):</p>
${tbl(['Tahap', 'Isi'], [
  ['A. Perencanaan', 'Menentukan tujuan tes dan desain soal (tingkat kesulitan, format).'],
  ['B. Instruksi &amp; pengenalan', 'Gambaran umum tes, alasan tes dilakukan, aturan, waktu, cara menjawab.'],
  ['C. Pelaksanaan', 'Mengawasi jalannya tes, waktu, suasana ruangan; mencegah kecurangan; waktu sesuai prosedur.'],
  ['D. Penyelesaian', 'Prosedur pengumpulan jawaban yang efisien; cek kelengkapan dan kebersihan lembar jawab.'],
  ['E. Koreksi &amp; penilaian', 'Pakai kunci jawaban tiap subtes, nilai secara objektif, tabulasi untuk distribusi frekuensi.'],
  ['F. Pelaporan hasil', 'Analisis pola dan tren, laporan terstruktur dengan ringkasan dan interpretasi.'],
  ['G. Umpan balik', 'Hasil numerik/kualitatif dan kesempatan bertanya.'],
  ['H. Evaluasi &amp; pembaruan', 'Evaluasi proses dan pembaruan instrumen.'],
  ['I. Keamanan data', 'Data disimpan aman dan terlindung dari akses tidak sah.'],
  ['J. Kepatuhan &amp; etika', 'Patuhi aturan privasi; jalankan tes dengan integritas dan hormat.'],
])}
<p><b>Urutan teknis (Fudyartanta, 2017):</b> (1) peserta masuk dan diberi pengantar, (2) identitas dicatat di lembar jawab, (3) buku tes dibagikan tertutup, (4) petunjuk dibacakan jelas, (5) waktu dimulai dengan stopwatch, (6) lembar jawab dan buku tes dikumpulkan asisten. Peserta juga dapat dikelompokkan sesuai (mis. sekolah negeri vs swasta).</p>
<p><b>Hal yang harus diperhatikan:</b> pengaturan waktu, kejelasan petunjuk, kebisingan, serta penjelasan kapan dan apakah peserta boleh menebak.</p>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan</span><p>Bisa serentak untuk banyak orang; peran penguji lebih sederhana; penilaian objektif; sangat hemat biaya; norma lebih mapan; soal serupa dikelompokkan dalam subtes berwaktu terpisah.</p></div>
  <div><span class="pc pc--minus">− kelemahan</span><p>Sedikit kesempatan membangun rapport; jawaban terbatas pada pilihan ganda; kurang fleksibel.</p></div>
</div>
${src('M2 · Pengadministrasian Tes (Kelompok 2)')}`,

/* ================= BAB 3 ================= */
3: `
<h2>A. Sejarah WBIS menurut materi dosen</h2>
<ol class="steps steps--years">
  <li><b>1932</b> Wechsler merancang instrumen untuk berbagai pasien departemen psikiatri RS Bellevue, New York; terinspirasi skala Binet dan Army Alpha &amp; Beta.</li>
  <li><b>1939</b> Wechsler-Bellevue Intelligence Scale (WBIS), tes Wechsler pertama untuk dewasa.</li>
  <li><b>1949</b> WISC untuk anak 6–16 tahun, dikembangkan dari isi skala W-B.</li>
  <li><b>1955</b> WAIS.</li>
  <li><b>1967</b> WPPSI untuk anak usia dini (4–6,5 tahun).</li>
  <li><b>1974</b> WISC-R; <b>1981</b> WAIS-R; <b>1997</b> WAIS-III; <b>2002</b> WPPSI-III; <b>2003</b> WISC-IV; <b>2008</b> WAIS-IV.</li>
</ol>
<p>Skala W-B dan WAIS sudah diterjemahkan ke bahasa Indonesia.</p>

<h2>B. Kelemahan tes sebelumnya yang ingin diperbaiki</h2>
<ul class="bul">
  <li>Soal tidak dibuat untuk orang dewasa.</li>
  <li>Terlalu banyak soal yang sekadar manipulasi kata-kata.</li>
  <li>Instruksi menekankan kecepatan tanpa mempedulikan akurasi.</li>
  <li>Ketergantungan pada usia mental tidak relevan untuk dewasa.</li>
</ul>
<p>Ilustrasi dosen soal rasio IQ pada dewasa, bila usia mental berhenti di 20 tahun (240 bulan):</p>
${tbl(['Usia', 'Perhitungan MA/CA × 100', 'IQ'], [
  ['17 tahun', '17/17 × 100', '100 (rata-rata)'],
  ['20 tahun', '20/20 × 100', '100 (rata-rata)'],
  ['30 tahun', '240/360 × 100', '67'],
  ['40 tahun', '240/480 × 100', '50'],
])}
<p>Padahal kemampuannya tidak menurun. Solusi Wechsler: menambah soal <b>performance</b> untuk menyeimbangkan soal verbal, mengurangi penekanan pada kecepatan, dan memakai metode baru:</p>
<div class="formula">IQ = skor aktual / mean skor yang diharapkan untuk usia tersebut (norma kelompok)</div>
<p>Asumsinya, IQ tetap konstan dengan bertambahnya usia secara normal.</p>

<h2>C. Verbal vs Performance sebagai petunjuk diagnostik</h2>
<p>Skala dipisah agar penguji bisa membandingkan kemampuan memakai kata/simbol (verbal) dengan kemampuan memanipulasi objek dan memahami pola visual (performance). Selisih besar dianggap bermakna diagnostik:</p>
<div class="grid2">
  <div class="card"><span class="card__k">[pola V &gt; P]</span><p>Penyakit organis, psikosis, gangguan emosional.</p></div>
  <div class="card"><span class="card__k">[pola P &gt; V]</span><p>Psikopat remaja dan retardasi mental ringan.</p></div>
</div>
<p>Subtes verbal mengukur <b>berpikir konseptual-teoretis</b>; subtes performance mengukur <b>berpikir praktis dan konkret</b>.</p>

<h2>D. WISC dan WISC-R</h2>
<p>WISC-R terdiri dari <b>12 subtes</b>. Dua di antaranya adalah <b>subtes pengganti</b>: <b>Rentang Angka</b> (verbal) dan <b>Mazes</b> (performance), dipakai jika ada kekeliruan pemakaian subtes lain. WISC-R tidak memberi data validitas baru (memakai data WAIS), tetapi normanya baru dan distratifikasi hati-hati.</p>
${tbl(['Skala Verbal', 'Skala Performance'], [
  ['Informasi', 'Melengkapi gambar'], ['Pemahaman', 'Menyusun gambar'], ['Hitungan', 'Rancangan balok'],
  ['Kesamaan', 'Merakit objek'], ['Kosakata', 'Sandi (coding)'], ['Rentang angka <small>(pengganti)</small>', 'Mazes <small>(pengganti)</small>'],
])}
<p><b>Administrasi WISC:</b> (1) persiapan alat dan rapport; (2) hitung usia kronologis → lakukan pengetesan sesuai petunjuk → skoring → hitung IQ.</p>
<p><b>WISC-IV (2003)</b> direvisi agar lebih mengukur kecerdasan <i>fluid</i>, kurang dipengaruhi pengetahuan faktual/akademis, dan lebih bebas budaya (Kezer &amp; Arik, 2012).</p>

<h2>E. WPPSI</h2>
<p>Subtes disusun <b>bergantian verbal–performance</b> untuk menjaga minat anak.</p>
${tbl(['Verbal', 'Keterangan', 'Performance', 'Keterangan'], [
  ['Information', '23 pertanyaan umum', 'Animal House', 'Mencocokkan hewan dengan "rumah"-nya di papan bergambar'],
  ['Vocabulary', '22 kata, sebagian dari WISC', 'Picture Completion', '23 gambar'],
  ['Arithmetic', '20 soal, tanpa alat bantu; memakai kartu, balok, dan lisan', 'Mazes', '10 labirin; logika dan pemecahan masalah'],
  ['Similarities', '16 pertanyaan; logika berpikir anak', 'Geometric Design', '10 desain (lingkaran, kotak, dsb.) ditiru; dinilai dari kemiripan'],
  ['Comprehension', '15 pertanyaan; pemahaman situasi sehari-hari', 'Block Design', 'Sama seperti WISC &amp; WAIS'],
  ['Sentences', 'Suplementer', '', ''],
])}
<p>Reliabilitas WPPSI <b>.97</b> (sangat tinggi). Standardisasinya sangat baik: 4 wilayah geografis, pria dan wanita, kulit putih dan non-kulit putih, kota dan desa, seluruh kelas sosioekonomi.</p>

<h2>F. Catatan WAIS-R dan WAIS-IV</h2>
<p>WAIS-R (1981): 6 subtes verbal + 5 performance; menghasilkan IQ verbal, IQ performance, dan full scale IQ; tidak ada data validitas baru, tetapi norma diperbarui. WAIS-IV (2008): 15 subtes (10 inti, 5 tambahan). Subtes inti dibutuhkan untuk IQ dan skor indeks. Diperkenalkan <b>General Ability Index (GAI)</b> dari VCI + PRI, berguna secara klinis karena kurang rentan terhadap gangguan kecepatan pemrosesan dan memori kerja.</p>
${src('PPT dosen "Skala Intelegensi Wechsler" (Dr. Meta Damariyanti, M.Psi., Psikolog) · M3 Kelompok 3')}`,

/* ================= BAB 4 ================= */
4: `
${note('Bagian ini memuat aturan administrasi dari materi kelas. Kalimat instruksi lengkap dan isi butir soal tidak disalin. Pelajari langsung dari manual WAIS di laboratorium, di bawah supervisi.')}
<h2>A. Persiapan dan Rapport</h2>
<div class="grid2">
  <div class="card"><span class="card__k">[alat]</span><p>Alat tes lengkap, lembar jawaban, stopwatch, alat tulis, <b>lembar observasi</b>, ruangan tertata rapi.</p></div>
  <div class="card"><span class="card__k">[sebelum mulai]</span><p>Salam dan perkenalan; sampaikan maksud dan tujuan; jelaskan tiap subtes punya instruksi sendiri dan testee boleh bertanya; beri kesempatan ke kamar kecil; ingatkan tidak ada waktu istirahat/makan; minta HP dinonaktifkan. Jika ditanya lamanya tes: "tergantung jawaban yang Saudara berikan".</p></div>
</div>

<h2>B. Aturan per Subtes (WAIS versi praktikum)</h2>
${tbl(['Subtes', 'Mulai &amp; aturan balik', 'Berhenti', 'Skor / catatan'], [
  ['Informasi', 'Mulai soal 5. Jika 5 atau 6 gagal → berikan 1–4. Jika 5 &amp; 6 benar → 1–4 dianggap benar (masing-masing 1).', '5 gagal berturut-turut', 'Jawaban singkat dan tepat.'],
  ['Pemahaman', 'Mulai soal 3. Jika salah satu dari 3–5 gagal → berikan 1 &amp; 2.', '4 gagal berturut-turut', 'No. 1–2: 2 atau 0. No. 3–14: 2/1/0 (cek manual). Jawaban singkat boleh di-inquiry. Bila 10–15 detik tanpa respons, pertanyaan boleh diulang.'],
  ['Hitungan', 'Mulai soal 3 &amp; 4. Jika salah satu/keduanya gagal → berikan 1 &amp; 2.', '4 gagal berturut-turut', 'Jangan menyebut "soal hitungan"; tanpa kertas buram; pakai stopwatch. Soal boleh diulang tanpa mengubah kata-kata.'],
  ['Persamaan', 'Mulai soal 1.', '4 gagal berturut-turut', 'Bantuan hanya pada soal pertama; soal berikutnya tanpa bantuan.'],
  ['Rentang angka', 'Angka ke muka, lalu ke belakang. Mulai percobaan I rangkaian 3 angka. I benar → naik rangkaian; I gagal → percobaan II.', 'Gagal percobaan I dan II pada satu rangkaian', 'Untuk ke belakang ada contoh dan koreksi bila testee belum paham.'],
  ['Kosa kata', 'Mulai kata 4–8. Jika ada nilai 0 di 4–8 → berikan 1–3. Jika 4–8 benar → 1–3 dianggap benar.', '5 gagal berturut-turut', 'Boleh meminta "jelaskan" bila jawaban ragu/sangat singkat.'],
  ['Simbol angka', 'Demonstrasi 3 simbol, testee mengerjakan 7 kotak contoh (beri garis batas), bantu bila belum paham.', 'Waktu habis', '<b>90 detik</b>, isi berurutan tanpa melompat.'],
  ['Melengkapi gambar', 'Mulai kartu pertama.', 'Sesuai manual', 'Bantuan boleh sampai soal ke-2; nilai 1 tiap jawaban benar.'],
  ['Rancangan balok', 'Perkenalkan sisi balok (merah, putih, separuh). Tester membuat rancangan 1, testee meniru. Gagal → percobaan 2 (balok diacak). Rancangan 1 &amp; 2 gagal → lanjut ke 3.', '3 gagal berturut-turut', 'Benar di percobaan pertama rancangan 1 = 4. Hanya sisi atas yang ditiru. Rancangan awal 4 balok; rancangan 7–10 memakai 9 balok. Stopwatch tiap item.'],
  ['Susunan gambar', 'Soal 1 diberikan ke semua testee; bila salah, tester mendemonstrasikan urutan benar.', 'Sesuai manual', 'Urutan kunci tertera di belakang kartu.'],
  ['Merakit objek', 'Potongan diatur sesuai urutan manual.', 'Sesuai manual', 'Dikerjakan secepat-cepatnya; tiap item berwaktu.'],
], 'tbl--rules')}

<h2>C. Makna Tiap Subtes (materi dosen)</h2>
${tbl(['Subtes', 'Yang diungkap', 'Catatan interpretasi'], [
  ['Informasi', 'Faktor g, crystallized intelligence; <i>intellectual drive</i> ikut menaikkan skor (29 pertanyaan).', 'Gagal di soal mudah tetapi berhasil di soal sulit → motivasi rendah atau kecemasan; bisa menandakan kesulitan menggali informasi di LTM.'],
  ['Pengertian', 'Faktor g, intelegensi sosial (terkait sosial-budaya).', 'Memahami situasi lalu memberi jawaban.'],
  ['Hitungan', 'Faktor g, konsentrasi, atensi, operasi angka, strategi pemrosesan informasi.', 'Dipengaruhi pendidikan, minat, fluktuasi atensi; berbatas waktu.'],
  ['Persamaan', 'Faktor g, berpikir logis.', 'Jawaban "tidak ada kesamaan" → negativisme, penghindaran tugas, atau memang tidak tahu.'],
  ['Rentang angka', 'Faktor g, memori jangka pendek, atensi, mengingat angka secara auditori.', 'Testee rileks cenderung lebih tinggi daripada yang sangat cemas. Bisa mengulang angka tapi salah urutan → defisit <i>auditory sequencing</i>, bukan <i>auditory memory</i>.'],
  ['Perbendaharaan kata', 'Faktor g, kemampuan belajar, akumulasi informasi, kekayaan ide, perkembangan bahasa.', 'Mengungkap latar belakang, lingkungan, perkembangan sosial, pengalaman hidup, respons frustrasi, proses berpikir.'],
  ['Simbol angka', 'Faktor g, <i>paired associates</i>, pembelajaran cepat.', 'Berbatas waktu; sensitif terhadap penurunan kinerja otak.'],
  ['Melengkapi gambar', 'Faktor g, organisasi perseptual, konsentrasi, kewaspadaan visual, memori visual jangka panjang.', 'Melibatkan pengenalan visual objek yang familier.'],
  ['Rancangan balok', 'Persepsi dan analisis bentuk, pemecahan masalah dan logika, koordinasi visual-motor.', 'Tiap item berwaktu; menekankan kecepatan.'],
  ['Mengatur gambar', 'Faktor g, kemampuan merencanakan.', 'Menafsirkan dan mengantisipasi peristiwa sosial dalam konteks budaya; berbatas waktu.'],
  ['Merakit objek', 'Faktor g, organisasi visual, kemampuan konstruktif.', 'Butuh koordinasi dan kontrol motorik; tiap item berwaktu.'],
])}
<div class="grid3">
  <div class="card"><span class="card__k">[verbal comprehension]</span><p>Informasi, Kosakata, Pengertian, Persamaan.</p></div>
  <div class="card"><span class="card__k">[perceptual organization]</span><p>Rancangan balok, Merakit objek, Melengkapi gambar.</p></div>
  <div class="card"><span class="card__k">[freedom from distractibility]</span><p>Rentang angka, Hitungan.</p></div>
</div>
<p><b>Kemampuan fisik yang diperlukan:</b> subtes verbal butuh pendengaran dan fungsi bahasa yang memadai; subtes performance butuh penglihatan dan kemampuan visual-motor yang memadai.</p>

<h2>D. Langkah Skoring WAIS (catatan papan tulis kelas)</h2>
<ol class="steps">
  <li>Jumlahkan semua jawaban benar tiap subtes verbal dan performance.</li>
  <li>Masukkan ke kolom <b>RS / angka kasar</b> di lembar skoring.</li>
  <li>Konversikan angka kasar ke <b>angka skala (SS)</b> memakai buku pedoman WAIS.</li>
  <li>Jumlahkan angka skala tiap subtes verbal dan performance. Catatan dosen: <b>Angka Verbal = 5/6 × jumlah SS verbal</b>; <b>Angka Performance = jumlah SS performance</b>.</li>
  <li>Konversikan Angka Verbal dan Angka Performance ke norma IQ sesuai usia subjek.</li>
  <li>Jumlahkan Angka Verbal + Angka Performance menjadi <b>angka skala lengkap</b>, lalu konversikan ke norma IQ sesuai usia.</li>
  <li>Jika selisih IQ Verbal dan IQ Performance <b>≤ 5</b> → gambar <b>1 kurva normal</b>; jika <b>&gt; 5</b> → gambar <b>2 kurva</b> (kurva verbal dan kurva performance).</li>
</ol>
${note('Rumus prorata 5/6 dari papan tulis menyetarakan 6 subtes verbal dengan 5 subtes performance. Contoh di PPT dosen di bawah memakai jumlah SS verbal langsung (63). Tanyakan ke dosen versi mana yang dipakai di praktikum.')}
<p>Urutan subtes pada lembar skoring kelas. Verbal: Informasi, Pengertian, Persamaan, Deret Angka (Digit Span), Hitungan, Kosa Kata. Performance: Picture Arrangement, Picture Completion, Object Assembly, Block Design, Digit Symbol.</p>
<h3>Contoh hasil dari PPT dosen (testee usia 21 tahun)</h3>
${tbl(['Subtes verbal', 'RS', 'SS', 'Subtes performance', 'RS', 'SS'], [
  ['Informasi', '11', '8', 'Simbol angka', '56', '10'],
  ['Pengertian', '20', '12', 'Melengkapi gambar', '8', '7'],
  ['Hitungan', '7', '7', 'Rancangan balok', '32', '10'],
  ['Persamaan', '17', '12', 'Mengatur gambar', '24', '10'],
  ['Rentang angka', '11', '10', 'Merakit objek', '16', '5'],
  ['Perbendaharaan kata', '63', '14', '', '', ''],
  ['<b>Jumlah SS</b>', '', '<b>63</b>', '<b>Jumlah SS</b>', '', '<b>42</b>'],
])}
${tbl(['Skala', 'Weighted score', 'IQ', 'Kategori'], [
  ['Verbal', '63', '103', 'Average'],
  ['Performance', '42', '89', 'Dull Normal'],
  ['Full scale', '105', '97', 'Average'],
], 'tbl--class')}
<p>Selisih VIQ–PIQ = 14 (&gt; 5), jadi menurut aturan papan tulis digambar dua kurva.</p>

<h2>E. Kesalahan Administrasi dan Urutan Subtes</h2>
<p>Sebab kesalahan, walaupun manual cukup jelas: instruksi kurang baik, ketidakhati-hatian, kualitas hubungan tester–testee, dan beban kerja klinisi berlebih.</p>
<ul class="bul">
  <li><b>Error of administration</b> — gagal mencatat waktu atau respons.</li>
  <li><b>Clerical error</b> — salah konversi RS ke SS, salah menjumlah SS, salah menghitung usia kronologis, salah memberi skor item, salah timing.</li>
  <li>Terlalu banyak mencatat respons testee, dan <b>poor reading</b>.</li>
</ul>
<p><b>Urutan pemberian:</b> standarnya verbal lalu performance. Urutan boleh disesuaikan. Testee yang mudah lelah (lansia, sakit fisik) diberi subtes seperti Hitungan, Rentang Angka, dan Simbol di awal saat energi dan atensi masih baik. Testee yang cemas dimulai dengan subtes tanpa batas waktu dan tidak mengancam (Informasi, Perbendaharaan Kata, Pengertian).</p>
<p>Testee dengan gangguan jiwa/saraf mungkin tidak bisa menyelesaikan WAIS dalam satu sesi, sehingga tes bisa dilanjutkan di sesi lain. Namun <b>Persamaan, Rancangan Balok, dan Mengatur Gambar tidak boleh dihentikan di tengah</b>, karena item mudah berfungsi sebagai latihan untuk item sulit.</p>
<h2>F. Catatan Kelompok 3</h2>
<p>WAIS unggul untuk asesmen klinis, neuropsikologis, dan diagnostik (Basri, 2019; Walker dkk., 2009). WAIS dikritik karena bonus batas waktu merugikan klien yang lebih tua, sehingga penilaian diubah untuk meminimalkan bonus waktu. <b>Short form</b> WAIS juga memiliki validitas dan reliabilitas tinggi, hampir setara versi penuh. Kegunaan WAIS: memperoleh IQ remaja hingga dewasa, menentukan fungsi kognitif dewasa, mendiagnosis bakat dan keterbelakangan mental, serta menilai gangguan mental dan neuropsikologis.</p>
${src('PPT dosen "Skala Intelegensi Wechsler" · M3 Kelompok 3 · foto papan tulis "Skoring Tes WAIS"')}`,

/* ================= BAB 5 ================= */
5: `
<h2>A. Latar Belakang</h2>
<p><b>John Carlyle Raven</b>, psikolog Inggris, adalah <b>murid Spearman</b>. Penyusunan PM didasari konsep Spearman tentang <b>eduction of relations</b> dan <b>eduction of correlates</b>. Materi dosen mencantumkan tokoh J. C. Raven, J. H. Court, dan J. Raven. Tes pertama diperkenalkan 1938, versi terbaru 1995. Awalnya dipakai untuk merekrut tentara dari rakyat sipil Inggris yang banyak belum berpendidikan. Reliabilitasnya <b>.91</b> dengan validitas baik.</p>
<p>SPM dirancang tahun <b>1936</b> dan terbit <b>1938</b>, untuk mengukur dua komponen faktor g (Raven, 2000):</p>
<div class="grid2">
  <div class="card"><span class="card__k">[eductive ability]</span><p>Mencari makna dari ketidakteraturan, mengorganisasi dan mengenali hubungan antarinformasi untuk memecahkan persoalan.</p></div>
  <div class="card"><span class="card__k">[reproductive ability]</span><p>Menangkap, menarik kembali, dan mereproduksi informasi eksplisit yang dikomunikasikan.</p></div>
</div>
<p>Deskripsi dosen: tes nonverbal tentang penalaran dari rangsangan figural, mengukur kemampuan <b>membandingkan, analogi, dan mengatur persepsi spasial menjadi keseluruhan</b>.</p>

<h2>B. Tiga Bentuk — detail</h2>
${tbl(['Bentuk', 'Sasaran', 'Struktur &amp; waktu', 'Aspek yang diukur'], [
  ['SPM', 'Rentang 6–65 tahun, terutama dewasa (dosen: 6–17 tahun)', '60 soal, seri A–E @12; individual/klasikal; <b>30 menit</b>', 'Faktor g, hubungan-hubungan abstrak; instruksi sederhana, hampir tanpa bahasa.'],
  ['CPM', 'Anak 5–11 tahun, kesulitan belajar, lansia, disabilitas, tidak berbahasa Inggris', '36 soal berwarna, set A, AB, B @12; tanpa batas waktu (klasikal biasanya 30–60 menit)', 'Berpikir logis, pengamatan ruang, memahami hubungan keseluruhan–bagian, berpikir analogi.'],
  ['APM', 'Mulai 11 tahun hingga dewasa, kemampuan di atas rata-rata', 'Dikembangkan 1943, dipakai luas sejak 1970. Set I 12 soal (5 mnt), Set II 36 soal (40 mnt; tanpa batas hingga ±60 mnt)', 'Daya abstraksi, berpikir logis dan sistematis, kecepatan pemrosesan, ketelitian, konsentrasi.'],
], 'tbl--rules')}

<h2>C. Administrasi APM (materi kelas)</h2>
<p>Di Indonesia dikenal sebagai <b>APM Set I dan Set II</b>, untuk orang normal di atas 11 tahun. Tanpa batas waktu, tes mengukur kemampuan observasi dan <i>clear thinking</i>. Dengan batas waktu (untuk melihat kecepatan dan ketepatan), total <b>±50 menit</b>:</p>
<div class="bigstat bigstat--3">
  <div><span class="bigstat__n">5'</span><span class="bigstat__l">petunjuk &amp; isi lembar jawab</span></div>
  <div><span class="bigstat__n">5'</span><span class="bigstat__l">Set I</span></div>
  <div><span class="bigstat__n">40'</span><span class="bigstat__l">Set II</span></div>
</div>
<p><b>Inti instruksi (parafrase):</b> ada gambar besar dengan satu bagian kosong dan beberapa gambar kecil bernomor di bawahnya. Pilih satu gambar kecil yang paling tepat mengisi bagian kosong, lalu tulis nomornya di lembar jawab. Hanya ada satu jawaban yang cocok. Kerjakan cepat, jangan terlalu lama di satu soal, tebak bila ragu, dan jangan mencoret buku soal. Dosen menganalogikannya dengan sapu tangan bermotif yang berlubang, dengan 8 pilihan penambal.</p>
<p><b>Tata cara:</b> (1) buku dibagikan tertutup, (2) instruksi jumlah soal dan waktu, (3) aba-aba "mulai", (4) peserta mengerjakan, (5) aba-aba selesai, buku dikumpulkan.</p>

<h2>D. Skoring — langkah rinci</h2>
<ol class="steps">
  <li>Hitung jawaban benar. Konvensi koreksi kelas: <b>kosong</b> → tanda "V" pena <b>hijau</b>; <b>salah</b> → coret pena <b>merah</b>; <b>benar</b> → tanda "V" pena <b>biru</b>, nilai 1.</li>
  <li>Konversi skor mentah ke <b>persentil</b> dengan tabel sesuai <b>usia kronologis</b>.</li>
  <li>Bila diperlukan, persentil dikonversi ke IQ dengan <b>tabel ekuivalensi</b>.</li>
  <li>Tentukan taraf intelegensi.</li>
</ol>
${tbl(['Grade', 'Persentil', 'Label Raven'], [
  ['I', '≥ 95', 'Intellectually superior'],
  ['II', '75 – 95', 'Definitely above the average in intellectual capacity'],
  ['III', '25 – 75', 'Intellectually average'],
  ['IV', '5 – 25', 'Definitely below the average in intellectual capacity'],
  ['V', '≤ 5', 'Intellectually defective'],
], 'tbl--class')}
<p>Catatan dosen: hasil RPM <b>tidak dinyatakan dalam angka IQ</b>, tetapi dalam kategori grade. Karena soal disusun menurut derajat kesulitan, <b>distribusi kesalahan</b> menunjukkan optimalisasi proses kerja dan derajat kemampuan peserta.</p>

<h2>E. Penerapan</h2>
<div class="grid3">
  <div class="card"><span class="card__k">[klinis]</span><p>Membantu asesmen kerusakan neuropsikologis; untuk lansia, dewasa berkebutuhan khusus (disleksia, tunarungu), pasien yang tidak dapat bicara atau tidak sanggup tes panjang.</p></div>
  <div class="card"><span class="card__k">[pekerjaan]</span><p>Mengidentifikasi supervisor, profesional, pebisnis, wirausahawan, manajer, administrator.</p></div>
  <div class="card"><span class="card__k">[pendidikan]</span><p>Mengukur kemampuan nonverbal; individual/kelompok; siswa tunarungu (instruksi pantomim); anak yang tidak berbahasa Inggris (<i>culturally reduced test</i>).</p></div>
</div>
<p><b>Masalah:</b> norma asli APM Set II diteliti Raven tahun 1962 dalam persentil, sedangkan norma Indonesia belum pernah diteliti.</p>
<p><b>Kekurangan tambahan (Kelompok 4):</b> tidak menggambarkan kemampuan verbal, sosial, atau praktis; kurang cocok untuk seleksi yang menuntut komunikasi tertulis; hasil dapat terpengaruh autisme atau disleksia; butuh interpretasi ahli; masih ada unsur budaya; batas waktu ketat menimbulkan tekanan.</p>
${src('PPT dosen "Raven Progressive Matrices" · M4 Kelompok 4')}`,

/* ================= BAB 6 ================= */
6: `
<h2>A. Info Tambahan</h2>
<p>IST dibuat untuk subjek <b>14 hingga 60 tahun</b>. Masuk ke Indonesia tahun <b>1970</b> dan pertama kali dipakai oleh <b>UNPAD</b>. IST dapat dilaksanakan klasikal maupun individual. Alatnya buku soal, lembar jawab, dan alat tulis; instruksi acuan tester ada di buku soal.</p>
<p><b>Tujuan:</b> mengukur tingkat intelegensi, kapasitas belajar dari pengalaman, kapasitas menghadapi situasi dan lingkungan, serta minat dan bakat.</p>

<h2>B. Bentuk Tugas dan Fungsi Tiap Subtes</h2>
${tbl(['Subtes', 'Bentuk tugas', 'Fungsi yang diungkap'], [
  ['SE · 20 · 6\'', 'Melengkapi kalimat yang belum lengkap dengan 1 dari 5 pilihan.', 'Pengambilan keputusan, memahami realitas, pembentukan pendapat, berpikir praktis, kemandirian berpikir.'],
  ['WA · 20 · 6\'', 'Dari 5 kata, pilih satu yang tidak memiliki kesamaan dengan 4 lainnya.', 'Kemampuan bahasa, rasa empati, berpikir induktif, intuisi, pemahaman pengertian.'],
  ['AN · 20 · 7\'', 'Temukan hubungan dua kata pertama, lalu pilih kata yang membentuk hubungan serupa.', 'Fleksibilitas berpikir, logika, memahami hubungan antarmasalah, analisis, penarikan kesimpulan.'],
  ['GE · 16 · 8\'', 'Tuliskan satu kata yang mencakup pengertian dua kata yang diberikan.', 'Abstraksi, pembentukan pengertian, mencari inti masalah, penalaran logis.'],
  ['RA · 20 · 10\'', 'Soal hitungan sederhana (cerita).', 'Berpikir praktis dalam menggunakan bilangan dan menghitung.'],
  ['ZR · 20 · 10\'', 'Lanjutkan deret angka sesuai aturannya.', 'Melihat momen ritmis, berpikir induktif, berpikir teoretis dengan hitungan.'],
  ['FA · 20 · 7\'', 'Pilih bentuk utuh dari potongan-potongan yang dapat disusun.', 'Imajinasi, konstruksi, berpikir konkret-menyeluruh, memasukkan bagian ke keseluruhan.'],
  ['WU · 20 · 9\'', 'Cocokkan kubus soal dengan salah satu dari 5 kubus bersisi berbeda dalam posisi berlainan.', 'Membayangkan ruang tiga dimensi, berpikir analitis.'],
  ['ME · 20 · 3\'+6\'', 'Hafalkan daftar kata 3 menit, lalu jawab dari ingatan 6 menit.', 'Daya ingat, terutama terkait perhatian dan konsentrasi.'],
], 'tbl--ist')}
${note('Contoh soal dari buku tes IST tidak dicantumkan di sini karena bagian dari materi tes yang dilindungi.')}

<h2>C. Skoring dan Norma Taraf</h2>
<p>Jawaban dicocokkan dengan kunci. Semua subtes bernilai 1 benar / 0 salah, <b>kecuali GE (2, 1, 0)</b>. Total benar per subtes (<b>RW</b>) dikonversi ke <b>SW</b> lewat tabel norma. Materi kelas menyebut tabel ini disusun <b>sesuai tingkat pendidikan</b> peserta; buku menyebut usia, jadi cek manual.</p>
${tbl(['Skor akhir', 'Taraf intelegensi'], [
  ['119 ke atas', 'Tinggi sekali'], ['105 – 118', 'Tinggi'], ['100 – 104', 'Cukup'],
  ['95 – 99', 'Sedang'], ['81 – 94', 'Rendah'], ['80 ke bawah', 'Rendah sekali'],
], 'tbl--class')}

<h2>D. Interpretasi Profil</h2>
<div class="grid3">
  <div class="card"><span class="card__k">[taraf kecerdasan]</span><p>IQ dari total SW; menggambarkan perkembangan individu dalam pendidikan dan pekerjaan; dikaitkan dengan usia dan latar belakang.</p></div>
  <div class="card"><span class="card__k">[festigung – flexibilität]</span><p>Dua kutub cara berpikir. <b>GE + RA</b> lebih besar → <i>festigung</i> (eksak). <b>AN + ZR</b> lebih besar → <i>flexibilität</i> (non-eksak).</p></div>
  <div class="card"><span class="card__k">[profil M – W]</span><p>Grafik 4 subtes <b>SE, WA, AN, GE</b>. Bentuk huruf <b>M</b> → verbal-teoretis; bentuk <b>W</b> → praktis-konkret.</p></div>
</div>
<div data-widget="ist"></div>

<h2>E. Masalah, Kelebihan, Kekurangan (Kelompok 5)</h2>
<p><b>Masalah norma:</b> interpretasi IQ masih banyak memakai norma asli Jerman. Norma versi Indonesia sudah dipakai, tetapi bersifat lokal dan belum ada acuan bersama, sehingga perlu penelitian psikometris lanjutan.</p>
<p><b>Computerized IST</b> mengurangi risiko kerusakan alat, <i>human error</i> dalam pemeriksaan, serta biaya, tenaga, dan waktu.</p>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan</span><p>Terus diperbarui; arahan dan prediksi untuk pendidikan dan pekerjaan; pengawasan langsung meminimalkan kecurangan; administrasi mudah karena instruksi ada di buku; mengukur kognitif secara umum sekaligus kemampuan khusus.</p></div>
  <div><span class="pc pc--minus">− kekurangan</span><p>Skoring manual lama dan menuntut ketelitian; butuh kertas dan tempat; kerahasiaan soal sulit dikontrol karena banyak bocoran beredar.</p></div>
</div>
${src('M5 · Intelligenz Struktur Test (Kelompok 5)')}`,

/* ================= BAB 7 ================= */
7: `
<h2>A. Perkembangan Skala Binet — detail</h2>
${tbl(['Tahun', 'Versi', 'Ciri penting'], [
  ['1905', 'Binet &amp; Simon', '30 item.'],
  ['1908', 'Binet &amp; Simon', 'Bertambah menjadi 58 soal; per tingkat usia.'],
  ['1911', 'Binet &amp; Simon', 'Revisi pertama skala Binet-Simon.'],
  ['1916', 'Terman (Stanford)', 'Stanford-Binet.'],
  ['1937', 'Terman &amp; Merrill', 'Dua bentuk alternatif, Form L dan Form M; melibatkan 3.200 peserta usia 1;6 – 18 tahun.'],
  ['1960', 'Terman &amp; Merrill (SB3)', 'Form L-M: 142 item paling membedakan dari formulir 1937; IQ deviasi (M 100, SD 16).'],
  ['1972', 'Revisi norma', 'Tes pada dasarnya sama dengan 1960, dengan sampel norma baru dan penyesuaian kecil.'],
  ['1986', 'SB4 · Thorndike, Hagen &amp; Sattler', 'Empat faktor kognitif: penalaran verbal, abstrak/visual, kuantitatif, memori jangka pendek; tes routing; skor gabungan dan profil subtes.'],
  ['2003', 'SB5 · Roid', 'Routing nonverbal, format skala usia lebih fleksibel, variasi konten.'],
])}
<div class="proscons">
  <div><span class="pc pc--plus">+ SB4</span><p>Skor gabungan umum dan beberapa skor faktor, format easel dengan arahan, manual teknis dengan studi validitas ekstensif, rentang usia lebih luas.</p></div>
  <div><span class="pc pc--minus">− SB4</span><p>Kurang interaksi pemeriksa–peserta, kurang elemen mirip permainan, sampel norma terlalu mewakili manajer/profesional dan anak-anak mereka.</p></div>
</div>
<h3>SB5 — fitur kunci</h3>
${tbl(['Faktor SB5', 'Arti'], [
  ['Fluid Reasoning', 'Memecahkan masalah yang sifatnya baru.'],
  ['Knowledge', 'Informasi umum yang terakumulasi dari pengalaman di rumah, sekolah, masyarakat.'],
  ['Quantitative Reasoning', 'Memecahkan masalah dengan angka dan memahami konsep dasar angka.'],
  ['Visual-Spatial Processing', 'Mengenali hubungan antarobjek, spasial, dan pola.'],
  ['Working Memory', 'Memproses dan mempertahankan informasi verbal dan nonverbal.'],
])}
<ul class="bul">
  <li><b>Routing procedure &amp; tailored testing:</b> menentukan titik awal subtes berikutnya (verbal: perbendaharaan kata; nonverbal: rangkaian dan matriks objek). Memakai <b>teori respons butir modern</b> sehingga tes beradaptasi dengan tingkat fungsi peserta, lebih singkat tanpa kehilangan ketepatan.</li>
  <li>Soal tingkat atas untuk individu berbakat; bagian nonverbal tidak menuntut bahasa ekspresif (cocok untuk tuli, gangguan komunikasi, kemampuan bahasa Inggris terbatas).</li>
  <li>Soal ditinjau dari sisi ras, etnis, gender, disabilitas, dan tradisi religius; faktor working memory membantu memahami anak ADHD.</li>
  <li>Standardisasi <b>4.800</b> sampel; reliabilitas sangat tinggi. Validitas didukung kemiripan dengan SB4 (mis. Lamp &amp; Krohn, 2001: 89 anak usia 4–6,5 tahun, korelasi sangat tinggi).</li>
</ul>

<h2>B. Struktur Form L-M</h2>
<p>Revisi ketiga Terman &amp; Merrill (1960). Kelompok soal digolongkan per tingkat umur: <b>Tahun II sampai V dengan interval 6 bulan</b> (II, II-6, III, ...), lalu <b>Tahun VI sampai XIV interval 1 tahun</b>, dilanjutkan <b>Dewasa Rata-rata, Dewasa Superior I, II, III</b>. Totalnya <b>20 tingkat umur</b> dan <b>173 soal</b>, tetapi tidak semua diberikan; penyajian bergantung umur kronologis hingga basal dan ceiling ditemukan.</p>
<p class="small">Jenis tugas yang muncul antara lain: perbendaharaan kata gambar, kombinasi kata, membangun balok, mengenal bagian badan, menguntai manik, mengutip lingkaran dan belah ketupat, melacak maze, melipat dan memotong kertas, mengulang angka, mengingat cerita, keanehan verbal, mengingat desain, menghitung balok, kata abstrak, mencari alasan, mengingat kalimat.</p>

<h2>C. Administrasi dan Skoring</h2>
<p>Ikuti arahan terstandar dengan tepat; rapport penting; urutan boleh disesuaikan bila kondisi peserta menuntut; hindari pengulangan pertanyaan; pastikan peserta bersungguh-sungguh. Dalam skoring, ikuti kunci jawaban dan hindari <b>halo effect</b>.</p>
<ol class="steps">
  <li><b>Hitung CA</b>: tanggal tes − tanggal lahir. 1 tahun = 12 bulan, 1 bulan = 30 hari. Sisa hari <b>≤ 15</b> diabaikan, <b>≥ 16</b> dibulatkan ke atas satu bulan.</li>
  <li><b>Mulai tes</b>: untuk anak rata-rata, mulai satu tingkat umur di bawah CA.</li>
  <li><b>Cari umur basal</b>: tingkat umur dengan semua soal benar, tepat sebelum tingkat munculnya kegagalan pertama.</li>
  <li><b>Angka kredit</b>: tiap soal benar di atas basal mendapat kredit. Contoh Tahun VII: 6 tes × 2 bulan, atau 4 tes × 3 bulan.</li>
  <li><b>Ceiling</b>: tingkat umur dengan semua soal salah; tes dihentikan.</li>
  <li><b>MA = basal + total kredit.</b> Contoh kelas: basal 8 tahun, kredit 3 tahun 6 bulan → MA 11 tahun 6 bulan.</li>
</ol>
<div data-widget="ca"></div>
<p><b>Masalah pada dewasa (Kelompok 6):</b> kurang motivasi dan sulit menjelaskan instruksi pada individu dengan kesulitan bahasa atau intelektual. Solusinya pendekatan personal, lingkungan yang mendukung, dan bila perlu adaptasi instrumen. Membandingkan MA dan CA pada dewasa tidak mencerminkan kemampuan sebenarnya; lebih baik dibandingkan dengan norma kelompok seusia.</p>
<div class="proscons">
  <div><span class="pc pc--plus">+ kelebihan</span><p>Level disesuaikan kemampuan peserta; ramah anak; formulir pencatatan dirancang baik; individual sehingga minat dan perhatian bisa diamati detail.</p></div>
  <div><span class="pc pc--minus">− kekurangan</span><p>Soal lisan dan beberapa instruksi tidak boleh diulang, sehingga menyulitkan anak dengan gangguan atensi.</p></div>
</div>
${src('M6 · Binet (Kelompok 6)')}`,

/* ================= BAB 8 ================= */
8: `
<h2>A. Sejarah dan Dasar Teori — detail</h2>
<p>CFIT mengukur kemampuan berpikir nonverbal yang disebut <b>fluid intelligence</b>, dikembangkan Raymond B. Cattell bersama peneliti <b>IPAT</b> di Universitas Illinois, Champaign, AS. Tujuan utamanya mengukur kemampuan berpikir abstrak sebebas mungkin dari pengaruh budaya.</p>
<ol class="steps steps--years">
  <li><b>1940</b> CFIT pertama dibuat Raymond B. Cattell dan Karen S. Cattell, terdiri dari 6 subtes.</li>
  <li><b>1949</b> Revisi ke format yang dipertahankan sampai sekarang: 4 subtes (seri, klasifikasi, matriks, kondisi) pada dua tingkat kesulitan.</li>
</ol>
<p>Cattell (1963): fluid = faktor bawaan biologis; crystallized = pengaruh pengalaman, pendidikan, kebudayaan. Dalam perkembangannya, <b>fluid ability memengaruhi crystallized ability</b>. CFIT populer di Indonesia karena administrasinya cepat, <b>±30 menit</b>.</p>

<h2>B. Penyajian dan Skala</h2>
<p>Bisa individual maupun klasikal. Untuk kelompok <b>25 orang atau lebih</b>, perlu <b>pengawas tambahan</b>. Alat: buku soal, lembar jawaban, stopwatch, alat tulis, norma dan tabel IQ.</p>
${tbl(['Skala', 'Sasaran (materi kelas)', 'Bentuk', 'Subtes'], [
  ['Skala 1', 'Usia 4–8 tahun atau individu dengan retardasi mental', 'Tidak ada Form A/B', '8 subtes'],
  ['Skala 2', 'Usia 8–15 tahun; dewasa di bawah rata-rata; banyak di setting pendidikan', 'Form A &amp; B', '4 subtes'],
  ['Skala 3', 'Usia &gt; 15 tahun (SMA ke atas); dewasa berkecerdasan tinggi; paling umum untuk rekrutmen dan asesmen awal', 'Form A &amp; B', '4 subtes'],
])}
<div class="grid2">
  <div><h3>Skala 1</h3>
  ${tbl(['Subtes', 'Waktu', 'Item'], [
    ['1. Substitusi', '3\'', '12'], ['2. Klasifikasi', '2\'', '12'], ['3. Mazes', '2,5\'', '12'], ['4. Selecting Named Objects', '2,5\'', '12'],
    ['5. Following Directions', '4\'', '12'], ['6. Wrong Pictures', '2,5\'', '12'], ['7. Riddles', '3,5\'', '12'], ['8. Similarities', '2\'', '12'],
  ])}</div>
  <div><h3>Skala 2 &amp; 3</h3>
  ${tbl(['Subtes', 'Waktu', 'Item'], [
    ['1. Seri', '3\'', '12'], ['2. Klasifikasi', '4\'', '14'], ['3. Matriks', '3\'', '12'], ['4. Persyaratan (kondisi)', '2,5\'', '8 (Skala 2) / 10 (Skala 3)'],
  ])}</div>
</div>

<h2>C. Aspek yang Diukur Tiap Subtes</h2>
${tbl(['Subtes', 'Aspek'], [
  ['1 · Seri', '<b>Sistematika berpikir</b>: mengatur pikiran secara terstruktur untuk masalah yang saling berkaitan.'],
  ['2 · Klasifikasi', '<b>Ketajaman diferensiasi</b>: mengamati detail dan berpikir kritis untuk menemukan perbedaan penting.'],
  ['3 · Matriks', '<b>Asosiasi</b>: analisis-sintesis untuk menghubungkan dua atau lebih masalah yang berkaitan.'],
  ['4 · Persyaratan', '<b>Pemahaman konsep</b>: memahami prinsip tertentu dan menerapkannya di berbagai situasi.'],
])}

<h2>D. Skoring — contoh kelas</h2>
<div class="formula">RS = jumlah jawaban benar subtes 1–4 × 1</div>
<p>Contoh: benar 6 + 8 + 6 + 4 = <b>RS 24</b>. RS lalu dikonversi ke IQ memakai tabel norma sesuai usia.</p>
<div data-widget="cfit"></div>

<h2>E. Miskonsepsi dan Kritik</h2>
<p>Pandangan keliru awam tentang tes intelegensi di bidang pendidikan: (1) tes mengukur kemampuan bawaan, (2) prediksinya pasti akurat, (3) skornya sangat reliabel, (4) tes mengungkap semua kompetensi potensial dan aktual.</p>
<p>Ada dua jenis tes adil budaya: (1) berisi item yang dianggap diketahui semua latar sosial-ekonomi dan etnis, (2) tidak memuat item verbal sama sekali. CFIT juga dapat membantu mengidentifikasi masalah belajar atau emosional. Kritiknya: tidak ada tes yang adil bagi semua budaya; <i>culture-fair</i> adalah abstraksi ideal yang tak pernah tercapai karena semua pengetahuan berbasis budaya. Seperti dicatat <b>Scarr (1994)</b>, tidak ada tes yang bebas budaya.</p>
${src('M7 · CFIT (Kelompok 7)')}`,

/* ================= BAB 12 ================= */
12: `
<h2>A. Asal Istilah IQ</h2>
<p>Istilah <i>intelligence quotient</i> diperkenalkan pertama kali tahun <b>1912</b> oleh psikolog Jerman <b>William Stern</b>. IQ bukan satu-satunya indikator kecerdasan. Gardner (Harvard) mengusulkan banyak dimensi, termasuk naturalis dan eksistensial.</p>

<h2>B. Rumus Umum Skor Standar</h2>
<div class="formula">Skor standar = m + s [ (X − M) / Sx ]</div>
${tbl(['Simbol', 'Arti'], [
  ['m', 'Mean skor standar yang diinginkan (IQ: 100)'], ['s', 'Deviasi standar yang diinginkan (mis. 15)'],
  ['X', 'Skor mentah yang dikonversi'], ['M', 'Mean distribusi skor mentah kelompok'], ['Sx', 'Deviasi standar skor mentah kelompok'],
])}
<p>Contoh kelas: kelompok usia 16 tahun memiliki M = 70, Sx = 10. Untuk IQ deviasi dengan m = 100, s = 15: <b>IQ = 100 + 15 [(X − 70) / 10]</b>. Skor X = 85 → IQ 122,5.</p>

<h2>C. Distribusi, Perkembangan, dan Kestabilan</h2>
<p>Distribusi IQ mengikuti kurva lonceng simetris, sesuai deskripsi matematis <b>Quetelet</b> yang dipakai <b>Galton (1869)</b>. Persentase terbesar populasi ada di sekitar mean (90–110); makin ke kiri atau kanan, makin kecil.</p>
<ul class="bul">
  <li><b>Studi longitudinal</b>: perubahan kemampuan individu yang sama diamati dari waktu ke waktu. <b>Cross-sectional</b>: kelompok usia berbeda diukur sekali sehingga lebih singkat.</li>
  <li><b>Garrison &amp; Magoon (1972)</b>: IQ cenderung stabil. Bila kemampuan dipisah, crystallized meningkat seiring usia dan pengalaman, fluid cenderung menurun. Gabungannya disebut <b>kurva omnibus</b>, yang biasanya tercermin dalam tes umum. Karena IQ deviasi dikonversi ke norma kelompok usia, angka IQ relatif tidak berubah. Jadi kestabilan IQ ≠ kestabilan kemampuan mental.</li>
  <li>Puncak perkembangan: pertumbuhan mental cepat di usia belasan dan memuncak di usia dua puluhan. <b>Harvard Growth Study</b>: peningkatan bisa sampai 30 tahun. <b>Wechsler</b>: puncak sekitar 20 tahun. Kurva <b>Bayley</b>: MA naik tajam sampai menjelang 20 tahun, lalu mendatar.</li>
  <li>Harvard Growth Study juga menemukan korelasi IQ usia 16 dengan IQ usia lebih muda makin kecil bila jarak usianya makin jauh.</li>
</ul>
<h2>D. Permasalahan Seputar Intelegensi</h2>
<ul class="bul">
  <li>Pemakaian tes melibatkan asumsi yang bisa menimbulkan salah interpretasi serius.</li>
  <li>Perdebatan apakah intelegensi tetap atau terus naik.</li>
  <li>Perbedaan pendapat apakah IQ tinggi menjamin kehidupan lebih baik.</li>
  <li>Intelegensi manusia sering disamakan dengan kecerdasan buatan, padahal tidak dapat disamakan.</li>
  <li>Tes tidak dapat mengungkap seluruh intelegensi seseorang.</li>
</ul>
<p><b>Bawaan dan pengasuhan:</b> faktor herediter menentukan batas kemungkinan, dan gen resesif bisa membuat anak lebih cerdas dari orang tuanya. Pola asuh (otoriter, permisif, autoritatif) sangat penting bagi perkembangan intelegensi.</p>
<p><b>Manfaat pengukuran:</b> mengenali potensi dan kekurangan diri, mengukur kinerja dan prestasi, bahan penelitian (kaitan dengan kepribadian, motivasi, emosi, kreativitas), serta panduan memilih profesi, karier, dan jurusan.</p>
<p><b>Anak usia dini (0–8 th):</b> dipengaruhi perkembangan fisik, sosial, emosional, lingkungan, minat, dan bakat. Anak ber-IQ tinggi juga bisa bermasalah, misalnya bosan karena penjelasan guru terasa lambat. <b>Dewasa:</b> masalah keadilan, validitas, reliabilitas, kesesuaian; tuntutan kecepatan menyulitkan; norma usia mental tidak berlaku.</p>
<h2>E. Tujuh Jalur Pengaruh Budaya</h2>
<div class="chips"><span>Bahasa</span><span>Konteks sosial &amp; kultural</span><span>Pendidikan</span><span>Pentingnya tes di masyarakat</span><span>Pengalaman hidup</span><span>Norma &amp; nilai</span><span>Pola pikir &amp; gaya belajar</span></div>
${src('Kelompok 9 · Intelligence Quotient (IQ)')}`,

/* ================= BAB 13 ================= */
13: `
<h2>A. IQ dan Indikatornya</h2>
<p>Menurut <b>Uno (2010)</b>, kecerdasan intelektual adalah kemampuan bertindak terarah, berpikir rasional, dan menghadapi lingkungan secara efektif. Indikator IQ tinggi: kemampuan matematis, membayangkan ruang, mencari hubungan antarbentuk, mengenali dan merangkai kata, memori baik, dan melihat sekeliling secara menyeluruh.</p>
<h2>B. Emotional Quotient — rinci</h2>
<p>Keterampilan emosional yang membentuk karakter, termasuk pengendalian diri, empati, dan optimisme. EQ memengaruhi semangat, konsentrasi belajar, penyesuaian sosial, dan sikap.</p>
<p><b>Ciri:</b> mampu memotivasi diri, tidak berlebihan mengekspresikan kesenangan, mengatur suasana hati agar tidak mudah stres, tidak membiarkan emosi melumpuhkan kemampuan berpikir, berempati.</p>
<ol class="steps">
  <li><b>Mengenali emosi</b> — kesadaran diri saat perasaan terjadi; disebut <i>metamood</i>.</li>
  <li><b>Mengelola emosi</b> — menghibur diri, melepaskan kecemasan dan kemurungan, bangkit dari perasaan menekan.</li>
  <li><b>Memotivasi diri</b> — emosi sebagai alat memberi perhatian dan berkreasi (motivasi menurut Myers).</li>
  <li><b>Mengenali emosi orang lain</b> — empati; memahami kebutuhan dan sudut pandang orang lain.</li>
  <li><b>Membina hubungan</b> — mengelola emosi orang lain; butuh manajemen diri dan empati.</li>
</ol>
<p><b>Manfaat:</b> komunikasi efektif, mengatasi tekanan kerja, mampu menerima kritik tanpa membela diri.</p>
<h2>C. Spiritual Quotient — versi materi kelas</h2>
<p><b>Agustian (2001)</b>: kecerdasan jiwa yang membantu membangun diri secara utuh, membedakan benar–salah, dan bersikap bijaksana. Indikatornya ada empat:</p>
<div class="grid2">
  <div class="card"><span class="card__k">[keyakinan]</span><p>Keyakinan dan kepercayaan kepada Tuhan.</p></div>
  <div class="card"><span class="card__k">[menghadapi masalah]</span><p>Menyelesaikan masalah berlandaskan kebaikan.</p></div>
  <div class="card"><span class="card__k">[kebijakan moral]</span><p>Bersikap berdasarkan nilai moral.</p></div>
  <div class="card"><span class="card__k">[kesadaran diri]</span><p>Menilai diri agar bersyukur dan bertanggung jawab.</p></div>
</div>
<h2>D. Adversity Quotient — rinci</h2>
<p><b>Stoltz</b>, seorang konsultan bisnis. <i>Adversity</i> = kemalangan/kesengsaraan. AQ adalah potensi mengamati kesulitan dan mengolahnya menjadi tantangan.</p>
<p><b>Tiga bentuk AQ:</b> (1) kerangka kerja konseptual baru untuk memahami kesuksesan, (2) ukuran respons terhadap kesulitan, (3) alat berdasar ilmiah untuk memperbaiki respons terhadap kesulitan.</p>
${tbl(['Tipe', 'AQ', 'Ciri'], [
  ['Quitters', 'Rendah', 'Keluar dari masalah, menghindari kewajiban, mundur dari tanggung jawab.'],
  ['Campers', 'Sedang', 'Menghadapi kesulitan sejauh mungkin lalu berhenti saat merasa puas; mudah bosan, kurang suka tantangan.'],
  ['Climbers', 'Tinggi', 'Menyukai tantangan, tidak mudah putus asa, terus memperbaiki diri.'],
])}
${tbl(['Dimensi CO2RE', 'Makna'], [
  ['Control (kendali)', 'Mengendalikan diri dan emosi saat menghadapi masalah.'],
  ['Origin &amp; Ownership', 'Memahami asal-usul masalah dan mengakui tanggung jawab diri.'],
  ['Reach (jangkauan)', 'Membatasi masalah agar tidak menyebar ke area hidup lain.'],
  ['Endurance (daya tahan)', 'Bertahan dan yakin dapat menyelesaikan hambatan.'],
])}
<p><b>Kegunaan:</b> memprediksi siapa yang mampu mengatasi kesulitan, siapa yang mencapai potensi, dan siapa yang bertahan atau menyerah.</p>
<h2>E. Entrepreneur Quotient</h2>
<p>Kecerdasan wirausaha. Emosi utama dalam kesuksesan wirausaha adalah <b>antusiasme</b>; wirausahawan ber-EntQ selalu mengedepankan semangat dan kecerdasan saat menghadapi tantangan (Peristiwo).</p>
${src('Kelompok 10 · Pengembangan IQ dan Etika Tes')}`,

/* ================= BAB 14 ================= */
14: `
<h2>A. Pengertian Etika</h2>
<p>Etika berasal dari bahasa Yunani <b>ethos</b> (tempat tinggal yang biasa, kebiasaan). KBBI: pedoman bertingkah laku untuk membedakan baik dan buruk. <b>Etika profesi</b> adalah karakteristik yang membedakan satu profesi dari profesi lain dan mengatur perilaku anggotanya. Profesi yang melayani masyarakat harus memiliki <b>kode etik</b>, yaitu seperangkat prinsip moral yang mengatur perilaku profesional.</p>
<h2>B. Etika Persiapan Tes (Foxcroft, 2011)</h2>
<ol class="steps">
  <li>Familier dengan tes yang digunakan.</li>
  <li>Mempertimbangkan kapan tepat dan tidak tepat memakai tes.</li>
  <li>Mengikuti aturan perizinan dan persetujuan.</li>
  <li>Mengatur tempat dan waktu tes.</li>
  <li>Memilih tes yang tepat.</li>
  <li>Memperhatikan masalah bahasa dan penerjemahan.</li>
  <li>Memperhatikan bentuk atau tipe tes.</li>
  <li>Menyadari dampak administrator terhadap kinerja dan meminimalkannya.</li>
  <li>Meminta bantuan (pengawas) dalam tes kelompok.</li>
  <li>Instruksi jelas dan contoh praktis.</li>
</ol>
<h2>C. Etika Penggunaan Tes (CGCA, 1982)</h2>
<ul class="bul">
  <li>Mengakui batas kompetensi; tidak memberi layanan tes di luar kompetensinya.</li>
  <li>Menilai cermat validitas, reliabilitas, dan ketepatan tes sebelum memakainya pada klien tertentu.</li>
  <li>Hasil tes hanya salah satu faktor dalam pengambilan keputusan.</li>
  <li>Hasil yang dikomunikasikan ke orang tua/siswa disertai interpretasi atau konseling memadai.</li>
  <li>Skor hanya disampaikan kepada orang yang memenuhi syarat untuk menafsirkannya.</li>
  <li>Pernyataan publik tentang tes harus teliti agar tidak menimbulkan salah paham.</li>
  <li>Tes dilaksanakan sesuai manual.</li>
  <li>Penggunaan tes dibatasi pada orang dengan minat profesional dan kompetensi, agar tes terlindungi.</li>
  <li>Memberi tahu peserta tentang tujuan tes.</li>
  <li>Teliti menilai kelompok minoritas atau orang yang tidak terwakili dalam norma pembakuan.</li>
  <li>Tidak mereproduksi atau memodifikasi tes tanpa izin pengarang, penerbit, dan pemegang hak cipta.</li>
</ul>
<h2>D. Etika Pemberian Hasil Tes</h2>
<div class="grid2">
  <div class="card"><span class="card__k">[interpretasi]</span><p>Norma yang tepat; peka terhadap latar belakang; perhatikan masalah fisik dan dampaknya; beri umpan balik yang bermakna.</p></div>
  <div class="card"><span class="card__k">[kerahasiaan]</span><p>Kerahasiaan dijaga dalam pencatatan, penyimpanan, pemindahan, dan pemusnahan data. Hasil hanya untuk pihak berwenang dan hanya memuat hal yang terkait tujuan pemeriksaan.</p></div>
</div>
<p>Psikolog tidak membuka hasil pemeriksaan untuk penulisan, pengajaran, atau media kecuali ada alasan kuat dan tidak melanggar hukum. Penyebaran informasi tanpa persetujuan dapat dikenai sanksi undang-undang atau kode etik.</p>
${src('Kelompok 10 · Pengembangan IQ dan Etika Tes')}`,
};

/* ---------- soal kuis tambahan dari materi kelas ---------- */
QUIZ[15] = [
  { q: 'TIKI dikembangkan melalui kerja sama antara Fakultas Psikologi UNPAD dengan…', o: ['Universitas Indonesia', 'Vrije Universiteit Amsterdam', 'IPAT Illinois', 'Hogrefe Jerman'], a: 1, why: 'Dengan Department of Industrial and Organizational Psychology and Test Development, Vrije Universiteit Amsterdam.' },
  { q: 'Landasan teori TIKI adalah…', o: ['Teori g Spearman', 'Factor-Model French dkk. dan Structure of Intellect Guilford', 'Teori Gf-Gc Cattell', 'Teori Wechsler'], a: 1, why: 'Drenth & Dengah (1977).' },
  { q: 'TIKI-T ditujukan untuk…', o: ['SD kelas 6 – SMP', 'SMP kelas 3 – SMA', 'Mahasiswa dan dewasa', 'Anak prasekolah'], a: 2, why: 'D = dasar, M = menengah, T = tinggi.' },
  { q: 'Sebagai tes tipe A, interpretasi hasil TIKI hanya boleh diberikan oleh…', o: ['Siapa pun yang punya manual', 'Sarjana psikologi', 'Psikolog atau ilmuwan psikologi', 'Guru BK'], a: 2, why: 'Administrasi–skoring minimal sarjana psikologi; interpretasi oleh psikolog/ilmuwan psikologi.' },
  { q: 'Menurut materi kelas, mean dan SD IQ TIKI adalah…', o: ['100 dan 15', '100 dan 16', '100 dan 10', '50 dan 10'], a: 2, why: 'Mean 100, SD 10.' },
];
const addQ = (n, arr) => { QUIZ[n] = (QUIZ[n] || []).concat(arr); };
addQ(1, [
  { q: 'Dalam pendekatan teori belajar, intelegensi dipandang sebagai…', o: ['Trait kepribadian bawaan', 'Kualitas hasil belajar yang telah terjadi', 'Struktur otak', 'Potensi biologis'], a: 1, why: 'Fokus pada perilaku tampak dan hukum memperoleh perilaku baru.' },
  { q: 'Dua komponen kualitatif intelegensi menurut Spearman adalah…', o: ['Fluid dan crystallized', 'Eduksi relasi dan eduksi korelasi', 'Konvergen dan divergen', 'Intelegensi A dan B'], a: 1, why: 'Menemukan hubungan dasar, lalu menerapkannya pada situasi baru.' },
  { q: 'Pada model Guilford, "produksi divergen" termasuk dimensi…', o: ['Isi', 'Operasi', 'Produk', 'Konteks'], a: 1, why: 'Operasi: kognisi, ingatan, produksi konvergen, produksi divergen, evaluasi.' },
  { q: 'Cyril Burt menyusun faktor kemampuan secara…', o: ['Sejajar', 'Hierarkis: umum, kelompok besar, kelompok kecil, spesifik', 'Triarkis', 'Monogenetik'], a: 1, why: 'Model hierarkis empat tingkat.' },
]);
addQ(2, [
  { q: 'Choi & Proctor menemukan 25 dari 27 mahasiswa pascasarjana melakukan kesalahan serius saat mengadministrasikan…', o: ['WAIS-R', 'Stanford-Binet Edisi IV', 'APM', 'IST'], a: 1, why: 'Kesalahan tersering: tidak menanyakan jawaban ambigu dan memberi poin berlebih.' },
  { q: 'Menurut Anastasi (1976), dalam tes klasikal penyimpangan dari kondisi standar harus…', o: ['Diabaikan', 'Dicatat', 'Diulang dari awal', 'Dihapus dari skor'], a: 1, why: 'Keseragaman kondisi penting untuk membandingkan hasil.' },
  { q: 'Pemalsuan jawaban agar tidak diterima wajib militer termasuk masalah…', o: ['Kecemasan tes', 'Motivasi untuk berbohong', 'Bias ras penguji', 'Kelelahan'], a: 1, why: 'Faking bad; sebaliknya faking good saat seleksi kerja.' },
]);
addQ(3, [
  { q: 'Menurut materi dosen, pola skor P > V dikaitkan dengan…', o: ['Penyakit organis', 'Psikosis', 'Psikopat remaja dan MR ringan', 'Gangguan emosional'], a: 2, why: 'V > P: organis, psikosis, gangguan emosional.' },
  { q: 'Dua subtes pengganti pada WISC-R adalah…', o: ['Informasi dan Coding', 'Rentang angka dan Mazes', 'Kosakata dan Block Design', 'Hitungan dan Picture Completion'], a: 1, why: 'Dipakai bila ada kekeliruan pemakaian subtes lain.' },
  { q: 'Bila usia mental berhenti di 20 tahun, rasio IQ orang berusia 40 tahun menjadi…', o: ['100', '67', '50', '80'], a: 2, why: '240/480 × 100 = 50, padahal kemampuannya tidak turun.' },
  { q: 'General Ability Index (GAI) pada WAIS-IV tersusun dari…', o: ['WMI dan PSI', 'VCI dan PRI', 'VIQ dan PIQ', 'FSIQ dan PSI'], a: 1, why: 'Kurang rentan terhadap gangguan kecepatan pemrosesan dan memori kerja.' },
]);
addQ(4, [
  { q: 'Pada subtes Informasi versi praktikum, tes dimulai dari soal…', o: ['1', '3', '5', '8'], a: 2, why: 'Jika 5 & 6 benar, soal 1–4 dianggap benar.' },
  { q: 'Subtes Rentang Angka dihentikan bila…', o: ['3 gagal berturut-turut', 'Percobaan I dan II pada satu rangkaian gagal', 'Waktu 90 detik habis', '5 gagal berturut-turut'], a: 1, why: 'Percobaan II diberikan bila percobaan I gagal.' },
  { q: 'Menurut catatan papan tulis, bila selisih IQ Verbal dan Performance lebih dari 5, maka…', o: ['Dibuat 1 kurva normal', 'Dibuat 2 kurva (verbal dan performance)', 'Tes diulang', 'Pakai FSIQ saja'], a: 1, why: 'Selisih ≤ 5 → 1 kurva; > 5 → 2 kurva.' },
  { q: 'Subtes yang tidak boleh dihentikan di tengah sesi adalah…', o: ['Informasi, Kosakata, Pengertian', 'Persamaan, Rancangan Balok, Mengatur Gambar', 'Hitungan, Rentang Angka, Simbol', 'Melengkapi Gambar, Merakit Objek'], a: 1, why: 'Item mudah berfungsi sebagai latihan untuk item sulit.' },
  { q: 'Kesalahan mengonversi raw score ke scale score termasuk…', o: ['Error of administration', 'Clerical error', 'Poor reading', 'Halo effect'], a: 1, why: 'Clerical error juga mencakup salah menghitung usia kronologis.' },
  { q: 'Testee yang cemas sebaiknya diawali subtes…', o: ['Hitungan dan Simbol', 'Rancangan Balok', 'Informasi, Perbendaharaan Kata, Pengertian', 'Merakit Objek'], a: 2, why: 'Subtes yang tidak mengancam dan tanpa batas waktu.' },
]);
addQ(5, [
  { q: 'Konvensi koreksi APM di kelas: jawaban salah ditandai dengan…', o: ['Tanda V pena hijau', 'Coretan pena merah', 'Tanda V pena biru', 'Lingkaran pensil'], a: 1, why: 'Kosong = V hijau, salah = coret merah, benar = V biru.' },
  { q: 'Total waktu penyajian APM berwaktu menurut materi kelas adalah…', o: ['30 menit', '40 menit', '50 menit', '60 menit'], a: 2, why: '5 menit petunjuk + 5 menit Set I + 40 menit Set II.' },
  { q: 'Dua komponen faktor g yang ingin diukur SPM adalah…', o: ['Fluid dan crystallized', 'Eductive dan reproductive ability', 'Verbal dan performance', 'Speed dan power'], a: 1, why: 'Raven (2000).' },
  { q: 'Raven merupakan murid dari…', o: ['Binet', 'Spearman', 'Cattell', 'Wechsler'], a: 1, why: 'Karena itu RPM didasarkan pada teori dua faktor Spearman.' },
]);
addQ(6, [
  { q: 'Skor GE + RA yang lebih besar daripada AN + ZR menunjukkan kecenderungan berpikir…', o: ['Flexibilität (non-eksak)', 'Festigung (eksak)', 'Verbal-teoretis', 'Praktis-konkret'], a: 1, why: 'AN + ZR lebih besar → flexibilität.' },
  { q: 'Profil M–W pada IST dibentuk dari subtes…', o: ['RA, ZR, FA, WU', 'SE, WA, AN, GE', 'GE, RA, AN, ZR', 'FA, WU, ME, SE'], a: 1, why: 'Bentuk M → verbal-teoretis; W → praktis-konkret.' },
  { q: 'Menurut norma taraf IST di materi kelas, skor 102 termasuk kategori…', o: ['Sedang', 'Cukup', 'Tinggi', 'Rendah'], a: 1, why: 'Cukup: 100–104.' },
  { q: 'IST pertama kali digunakan di Indonesia oleh…', o: ['UI', 'UNPAD', 'UGM', 'Gunadarma'], a: 1, why: 'Masuk ke Indonesia tahun 1970.' },
]);
addQ(7, [
  { q: 'Dalam menghitung CA, sisa 16 hari diperlakukan…', o: ['Diabaikan', 'Dibulatkan ke atas menjadi 1 bulan', 'Dihitung 0,5 bulan', 'Dicatat sebagai hari'], a: 1, why: '≤ 15 hari diabaikan; ≥ 16 hari dibulatkan ke atas.' },
  { q: 'Form L-M terdiri dari berapa tingkat umur?', o: ['14', '17', '20', '24'], a: 2, why: 'Total 20 tingkat umur dengan 173 soal.' },
  { q: 'Basal 8 tahun dan total kredit 3 tahun 6 bulan menghasilkan MA…', o: ['8 tahun 6 bulan', '11 tahun', '11 tahun 6 bulan', '12 tahun'], a: 2, why: 'MA = basal + total kredit.' },
  { q: 'Saat memberi skor Binet, penguji harus menghindari…', o: ['Inquiry', 'Halo effect', 'Rapport', 'Basal'], a: 1, why: 'Ikuti kunci jawaban dan hindari halo effect.' },
  { q: 'Routing procedure pada SB5 memakai…', o: ['Teori tes klasik saja', 'Teori respons butir modern', 'Rasio IQ', 'Usia mental'], a: 1, why: 'Tes beradaptasi dengan tingkat fungsi peserta (tailored testing).' },
]);
addQ(8, [
  { q: 'CFIT Skala 1 terdiri dari…', o: ['4 subtes', '6 subtes', '8 subtes', '9 subtes'], a: 2, why: 'Skala 1 tidak memiliki Form A/B dan terdiri dari 8 subtes.' },
  { q: 'Untuk kelompok berapa orang CFIT memerlukan pengawas tambahan?', o: ['10 orang atau lebih', '15 orang atau lebih', '25 orang atau lebih', '50 orang atau lebih'], a: 2, why: 'Selain tester, perlu pengawas tambahan.' },
  { q: 'Subtes Klasifikasi CFIT Skala 2/3 mengungkap aspek…', o: ['Sistematika berpikir', 'Ketajaman diferensiasi', 'Asosiasi', 'Pemahaman konsep'], a: 1, why: 'Seri: sistematika; Matriks: asosiasi; Persyaratan: pemahaman konsep.' },
  { q: 'Benar 6, 8, 6, dan 4 pada subtes 1–4 menghasilkan RS…', o: ['20', '24', '28', '48'], a: 1, why: 'RS = jumlah benar × 1.' },
]);
addQ(12, [
  { q: 'Istilah intelligence quotient pertama kali diperkenalkan oleh William Stern pada tahun…', o: ['1905', '1912', '1916', '1939'], a: 1, why: 'Psikolog Jerman William Stern, 1912.' },
  { q: 'Dengan M = 70, Sx = 10, m = 100, s = 15, skor X = 85 menghasilkan IQ…', o: ['115', '122,5', '130', '107,5'], a: 1, why: '100 + 15 × (85 − 70)/10 = 122,5.' },
  { q: 'Gabungan garis kemampuan fluid dan crystallized yang tercermin dalam tes umum disebut…', o: ['Kurva normal', 'Kurva omnibus', 'Kurva Bayley', 'Kurva Flynn'], a: 1, why: 'Kestabilan IQ dipisahkan dari kestabilan kemampuan mental.' },
]);
addQ(13, [
  { q: 'Kesadaran seseorang akan emosinya sendiri disebut…', o: ['Empati', 'Metamood', 'Self-control', 'Endurance'], a: 1, why: 'Dasar aspek mengenali emosi.' },
  { q: 'Menurut Stoltz, orang yang mudah puas dan berhenti setelah mencapai sesuatu termasuk tipe…', o: ['Quitters', 'Campers', 'Climbers', 'Leaders'], a: 1, why: 'Campers = AQ sedang.' },
  { q: 'Definisi kecerdasan spiritual dalam materi kelas dikemukakan oleh…', o: ['Goleman (1995)', 'Agustian (2001)', 'Stoltz (1997)', 'Uno (2010)'], a: 1, why: 'Kecerdasan jiwa untuk membangun diri secara utuh.' },
]);
addQ(14, [
  { q: 'Kata etika berasal dari bahasa Yunani…', o: ['Logos', 'Ethos', 'Pathos', 'Psyche'], a: 1, why: 'Ethos: tempat tinggal yang biasa, kebiasaan.' },
  { q: 'Prinsip etika penggunaan tes psikologis dari CGCA (1982) berjumlah…', o: ['5', '9', '11', '15'], a: 2, why: 'Sebelas prinsip khusus.' },
  { q: 'Mereproduksi atau memodifikasi susunan tes tanpa izin pemegang hak cipta…', o: ['Boleh untuk keperluan belajar', 'Tidak pantas dilakukan psikolog', 'Boleh bila disebut sumbernya', 'Wajib untuk adaptasi'], a: 1, why: 'Prinsip CGCA.' },
]);
