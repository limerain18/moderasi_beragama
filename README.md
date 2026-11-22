# Moderasi Beragama di Era Digital

Website statis (HTML, CSS, JavaScript) untuk tugas kelompok. Tidak perlu install apa pun: buka `index.html` di browser, atau pakai ekstensi Live Server di VS Code supaya halaman ter-refresh otomatis saat file diubah.

## Struktur folder

```
moderasi-digital/
├── index.html            struktur semua bagian (beranda, materi, kuis, galeri, tentang)
├── css/style.css         seluruh tampilan; warna ada di variabel :root paling atas
├── js/
│   ├── main.js           menu mobile, kartu indikator, penanda menu aktif
│   ├── quiz-data.js      bank soal kuis (edit di sini)
│   ├── quiz.js           mesin kuis
│   ├── gallery-data.js   daftar karya galeri (edit di sini)
│   └── gallery.js        filter dan lightbox
└── assets/
    ├── poster/           gambar poster, infografis, meme
    ├── video/            video pendek
    └── audio/            podcast
```

## Yang wajib diganti sebelum dikumpulkan

Semua teks yang masih harus diisi diberi latar kuning (kelas `fill`). Cari `class="fill"` di `index.html`, isi, lalu hapus kelasnya supaya latar kuningnya hilang.

- Nama mata kuliah, kampus, dosen (bagian Tentang dan footer)
- Nama, NIM, dan peran tiap anggota (salin blok `<article class="member">` kalau anggotanya lebih dari lima)
- Daftar referensi: tiga yang ada baru titik awal. Tambahkan jurnal atau buku yang benar-benar kalian baca, dengan format sitasi yang diminta dosen.
- Karya galeri: judul di `gallery-data.js` hanya contoh.

## Memeriksa isi materi

Definisi moderasi beragama dan empat indikatornya mengikuti rumusan Kementerian Agama (buku *Moderasi Beragama*, 2019), tetapi ditulis ulang dengan kata-kata sendiri. Cocokkan dengan bukunya dan tambahkan nomor halaman di referensi. Contoh kasus di tiap indikator adalah ilustrasi buatan, bukan kejadian nyata. Kalau kalian ingin memakai kasus nyata, cantumkan sumbernya.

## Mengubah konten

**Soal kuis.** Buka `js/quiz-data.js`, salin satu blok soal, lalu ubah `q`, `options`, `answer` (nomor pilihan benar, mulai dari 0), dan `explain`. Jumlah soal otomatis menyesuaikan.

**Karya galeri.** Taruh file di folder `assets/`, lalu isi `src` di `js/gallery-data.js`.
- Poster, infografis, meme: `src: "assets/poster/nama-file.jpg"`
- Video: file lokal, atau tautan embed YouTube seperti `https://www.youtube.com/embed/ID_VIDEO`
- Audio: `src: "assets/audio/podcast-1.mp3"`

Disarankan mengunggah video ke YouTube lalu memakai tautan embed, karena GitHub membatasi ukuran file dan video besar membuat situs lambat dibuka.

**Warna.** Ubah variabel di bagian `:root` pada `css/style.css`.

## Pembagian file supaya tidak bentrok di Git

Kalau tiap orang mengedit file yang berbeda, konflik hampir tidak terjadi. Usulan:

| Peran | File yang dipegang |
|---|---|
| Frontend lead | `index.html` (kerangka), `css/style.css` |
| JavaScript | `js/main.js`, `js/quiz.js`, `js/gallery.js` |
| Penulis materi | isi bagian `#materi` di `index.html`, `js/quiz-data.js` |
| Desain visual | `assets/poster/`, entri poster, infografis, dan meme di `gallery-data.js` |
| Video dan podcast | `assets/video/`, `assets/audio/`, entri video dan audio di `gallery-data.js` |

Satu orang membuat repositori di GitHub, yang lain membuat branch masing-masing dan mengirim pull request ke `main`.

## Menayangkan gratis (GitHub Pages)

1. Unggah folder ini ke repositori GitHub.
2. Buka Settings, lalu Pages.
3. Pada Source pilih branch `main` dan folder `/ (root)`, lalu simpan.
4. Setelah beberapa menit, situs bisa dibuka di `https://<username>.github.io/<nama-repo>/`.

Netlify juga bisa: seret folder ini ke netlify.com/drop.

## Daftar cek sebelum dikumpulkan

- Buka di HP dan laptop; menu, kuis, dan lightbox harus bisa dipakai di keduanya.
- Semua tulisan berlatar kuning sudah diganti.
- Setiap `src` di `gallery-data.js` mengarah ke file yang ada.
- Gambar dikompres (di bawah 500 KB per gambar sudah cukup).
- Referensi lengkap dan konsisten formatnya.
