/* ============================================================
   Bank soal kuis
   - tag     : label kecil di atas soal
   - q       : teks soal
   - options : daftar pilihan (2 sampai 5)
   - answer  : nomor pilihan yang benar, dihitung dari 0
   - explain : penjelasan yang muncul setelah menjawab
   Tambah atau ganti soal dengan menyalin salah satu blok di bawah.
   ============================================================ */

const QUIZ_DATA = [
  {
    tag: "Grup keluarga",
    q: "Di grup keluarga beredar pesan berantai: \"Rumah ibadah di kota kita akan diserang malam ini. Sebarkan ke semua kontak!\" Tidak ada sumber yang disebutkan. Apa langkah yang paling tepat?",
    options: [
      "Teruskan ke semua kontak supaya semua orang waspada",
      "Balas di grup dengan nada marah supaya yang lain ikut peduli",
      "Jangan teruskan. Cek ke pihak berwenang atau media yang kredibel, dan minta pengirim menyebutkan sumbernya",
      "Simpan pesannya dan percaya saja dalam hati"
    ],
    answer: 2,
    explain: "Pesan yang menekan pembaca untuk segera menyebarkan adalah ciri khas hoaks. Kalau diteruskan tanpa dicek, pesan semacam ini bisa memicu kepanikan dan tindakan di lapangan."
  },
  {
    tag: "Indikator",
    q: "Manakah yang BUKAN termasuk empat indikator moderasi beragama menurut Kementerian Agama?",
    options: [
      "Komitmen kebangsaan",
      "Toleransi",
      "Anti-kekerasan",
      "Keseragaman cara beribadah bagi semua orang"
    ],
    answer: 3,
    explain: "Empat indikatornya adalah komitmen kebangsaan, toleransi, anti-kekerasan, dan akomodatif terhadap budaya lokal. Moderasi tidak menuntut penyeragaman praktik ibadah."
  },
  {
    tag: "Kolom komentar",
    q: "Temanmu mengunggah ucapan selamat hari raya agamanya, lalu beberapa akun menulis ejekan di kolom komentar. Apa yang sebaiknya kamu lakukan?",
    options: [
      "Membalas dengan ejekan yang lebih tajam",
      "Melaporkan komentar yang melanggar aturan platform, lalu mengirim pesan pribadi ke temanmu",
      "Menyukai komentar ejekan itu supaya ramai",
      "Membuat unggahan sindiran tentang agama si pengejek"
    ],
    answer: 1,
    explain: "Membalas ejekan dengan ejekan hanya memperpanjang keributan. Melaporkan komentar dan menghubungi teman secara pribadi menjaga suasana tanpa ikut menyerang."
  },
  {
    tag: "Benar atau keliru",
    q: "\"Judul berhuruf kapital, penuh tanda seru, dan mendesak untuk segera disebar pasti berarti beritanya benar, karena situasinya genting.\"",
    options: ["Benar", "Keliru"],
    answer: 1,
    explain: "Gaya penulisan seperti itu justru sering dipakai untuk memancing emosi supaya orang menyebarkan tanpa berpikir. Nada mendesak tidak menjamin isinya benar."
  },
  {
    tag: "Kritik atau kebencian",
    q: "Manakah yang termasuk ujaran kebencian?",
    options: [
      "Menyebut seluruh pemeluk agama tertentu sebagai ancaman bagi negara",
      "Mengkritik kebijakan perizinan rumah ibadah dengan menyertakan data",
      "Mempertanyakan isi sebuah ceramah dengan sopan sambil menyebut bagian yang dimaksud",
      "Meminta penyelenggara acara keagamaan mengklarifikasi pernyataan yang mereka buat"
    ],
    answer: 0,
    explain: "Ujaran kebencian menyerang orang karena identitasnya, misalnya agamanya. Kritik menyasar kebijakan atau pernyataan tertentu dan bisa dijawab dengan data atau klarifikasi."
  },
  {
    tag: "Algoritma",
    q: "Linimasamu terasa penuh dengan orang yang sepemikiran. Penjelasan dan langkah mana yang paling masuk akal?",
    options: [
      "Itu tandanya semua orang memang sependapat denganmu",
      "Itu bug aplikasi dan akan hilang sendiri",
      "Algoritma cenderung menampilkan konten yang mirip dengan yang sering kamu buka, jadi coba ikuti sumber kredibel yang sudut pandangnya berbeda",
      "Satu-satunya jalan adalah berhenti memakai media sosial"
    ],
    answer: 2,
    explain: "Platform umumnya menyodorkan konten yang mirip dengan yang sering kita buka, sehingga pandangan lain jarang terlihat. Mengikuti beberapa sumber tepercaya dengan sudut pandang berbeda membantu menyeimbangkannya."
  },
  {
    tag: "Debat online",
    q: "Debat soal tafsir ajaran dengan akun anonim di kolom komentar makin panas. Sikap mana yang paling sehat?",
    options: [
      "Mencari identitas asli akun itu lalu menyebarkannya",
      "Berhenti membalas ketika sudah tidak ada pertukaran gagasan, dan tidak menyerang pribadi",
      "Mengajak teman-teman untuk menyerbu akun itu",
      "Membalas terus sampai lawan bicara kehabisan kata"
    ],
    answer: 1,
    explain: "Membongkar identitas seseorang (doxing) dan mengerahkan massa termasuk kekerasan verbal. Berhenti saat diskusi tidak lagi bertukar gagasan adalah pilihan yang sah dan aman."
  },
  {
    tag: "Benar atau keliru",
    q: "\"Seseorang bisa teguh pada keyakinannya sendiri dan tetap bersikap moderat terhadap orang yang berbeda keyakinan.\"",
    options: ["Benar", "Keliru"],
    answer: 0,
    explain: "Moderasi beragama mengatur sikap terhadap orang lain, bukan kadar keyakinan pribadi. Orang yang moderat tidak harus mengurangi ketaatannya."
  }
];
