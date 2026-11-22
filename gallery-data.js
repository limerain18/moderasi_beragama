/* ============================================================
   Data galeri kampanye
   Ganti isi daftar ini dengan karya kelompok kalian.

   Field:
   - type  : "poster" | "infografis" | "meme" | "video" | "audio"
   - title : judul karya
   - desc  : keterangan satu atau dua kalimat
   - src   : lokasi file
               poster/infografis/meme -> "assets/poster/nama-file.jpg"
               video -> "assets/video/nama.mp4" atau tautan embed YouTube,
                        contoh "https://www.youtube.com/embed/ID_VIDEO"
               audio -> "assets/audio/nama.mp3"
   - thumb : (opsional) gambar sampul untuk video atau audio

   Kalau src dikosongkan, kartu tetap tampil dengan sampul polos dan
   lightbox akan menampilkan pesan bahwa file belum diunggah.
   Judul di bawah ini hanya contoh; ganti dengan karya kalian.
   ============================================================ */

const GALLERY_DATA = [
  {
    type: "poster",
    title: "Saring Sebelum Sharing",
    desc: "Poster ajakan memeriksa sumber sebelum meneruskan pesan di grup.",
    src: ""
  },
  {
    type: "poster",
    title: "Boleh Beda, Nada Tetap Sopan",
    desc: "Poster tentang etika berkomentar saat tidak sependapat.",
    src: ""
  },
  {
    type: "infografis",
    title: "Empat Indikator dalam Satu Gambar",
    desc: "Ringkasan visual komitmen kebangsaan, toleransi, anti-kekerasan, dan akomodatif terhadap budaya lokal.",
    src: ""
  },
  {
    type: "infografis",
    title: "Alur Cek Hoaks Bernuansa SARA",
    desc: "Langkah-langkah memeriksa pesan provokatif sebelum dibagikan.",
    src: ""
  },
  {
    type: "meme",
    title: "Grup Keluarga Jam 2 Pagi",
    desc: "Meme tentang pesan berantai yang tidak pernah dicek siapa pun.",
    src: ""
  },
  {
    type: "meme",
    title: "Kolom Komentar vs Kenyataan",
    desc: "Meme tentang orang yang berani di komentar tetapi diam saat bertemu langsung.",
    src: ""
  },
  {
    type: "video",
    title: "Satu Menit: Kalau Ada Ejekan di Komentar",
    desc: "Video pendek berisi tiga pilihan sikap dan akibat masing-masing.",
    src: ""
  },
  {
    type: "audio",
    title: "Podcast: Ngobrol Santai soal Beda Keyakinan",
    desc: "Obrolan anggota kelompok tentang pengalaman menghadapi perbedaan di media sosial.",
    src: ""
  }
];
