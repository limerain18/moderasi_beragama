/* Galeri dengan filter kategori dan lightbox. Data dari GALLERY_DATA. */
(function () {
  "use strict";

  var grid = document.getElementById("gallery");
  var filterBar = document.getElementById("galleryFilters");
  var box = document.getElementById("lightbox");
  if (!grid || !filterBar || !box || typeof GALLERY_DATA === "undefined") return;

  var media = document.getElementById("lbMedia");
  var caption = document.getElementById("lbCaption");
  var btnClose = document.getElementById("lbClose");
  var btnPrev = document.getElementById("lbPrev");
  var btnNext = document.getElementById("lbNext");

  var LABELS = {
    poster: "Poster",
    infografis: "Infografis",
    meme: "Meme",
    video: "Video",
    audio: "Podcast"
  };
  var GLYPH = { video: "▶", audio: "♪" };
  var IMAGE_TYPES = ["poster", "infografis", "meme"];
  var EMBED = /(youtube\.com\/embed|youtube-nocookie\.com\/embed|player\.vimeo\.com)/;

  var activeFilter = "semua";
  var visible = [];       // item yang sedang tampil sesuai filter
  var current = 0;        // posisi di dalam visible
  var opener = null;      // tombol yang membuka lightbox

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function label(type) { return LABELS[type] || type; }

  // ----- Filter -----
  function buildFilters() {
    var types = [];
    GALLERY_DATA.forEach(function (it) {
      if (types.indexOf(it.type) === -1) types.push(it.type);
    });

    [{ key: "semua", text: "Semua" }].concat(
      types.map(function (t) { return { key: t, text: label(t) }; })
    ).forEach(function (f) {
      var b = el("button", "filter-btn", f.text);
      b.type = "button";
      b.dataset.filter = f.key;
      b.setAttribute("aria-pressed", String(f.key === activeFilter));
      b.addEventListener("click", function () { setFilter(f.key); });
      filterBar.appendChild(b);
    });
  }

  function setFilter(key) {
    activeFilter = key;
    filterBar.querySelectorAll(".filter-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.filter === key));
    });
    grid.querySelectorAll(".gallery-item").forEach(function (card) {
      card.hidden = !(key === "semua" || card.dataset.type === key);
    });
    visible = GALLERY_DATA.filter(function (it) {
      return key === "semua" || it.type === key;
    });
  }

  // ----- Kartu -----
  function buildCard(item, index) {
    var card = el("button", "gallery-item");
    card.type = "button";
    card.dataset.type = item.type;
    card.dataset.index = String(index);
    card.setAttribute("aria-label", label(item.type) + ": " + item.title);

    var thumb = el("div", "thumb");
    thumb.dataset.type = item.type;

    var cover = item.thumb || (IMAGE_TYPES.indexOf(item.type) !== -1 ? item.src : "");
    if (cover) {
      var img = el("img");
      img.src = cover;
      img.alt = "";
      img.loading = "lazy";
      thumb.appendChild(img);
    } else {
      thumb.appendChild(el("span", "ph", GLYPH[item.type] || label(item.type)));
    }
    thumb.appendChild(el("span", "badge", label(item.type)));
    card.appendChild(thumb);

    var meta = el("div", "gallery-meta");
    meta.appendChild(el("h3", "", item.title));
    meta.appendChild(el("p", "", item.desc));
    card.appendChild(meta);

    card.addEventListener("click", function () {
      opener = card;
      open(item);
    });
    return card;
  }

  function buildGrid() {
    GALLERY_DATA.forEach(function (item, i) {
      grid.appendChild(buildCard(item, i));
    });
    visible = GALLERY_DATA.slice();
  }

  // ----- Lightbox -----
  function renderMedia(item) {
    media.replaceChildren();

    if (!item.src) {
      media.appendChild(el("p", "lb-missing", "File karya ini belum diunggah. Isi kolom src di js/gallery-data.js."));
      return;
    }

    if (IMAGE_TYPES.indexOf(item.type) !== -1) {
      var img = el("img");
      img.src = item.src;
      img.alt = item.title;
      media.appendChild(img);
    } else if (item.type === "video") {
      if (EMBED.test(item.src)) {
        var frame = el("iframe");
        frame.src = item.src;
        frame.title = item.title;
        frame.allowFullscreen = true;
        frame.setAttribute("allow", "accelerometer; encrypted-media; picture-in-picture; fullscreen");
        media.appendChild(frame);
      } else {
        var vid = el("video");
        vid.src = item.src;
        vid.controls = true;
        vid.preload = "metadata";
        if (item.thumb) vid.poster = item.thumb;
        media.appendChild(vid);
      }
    } else if (item.type === "audio") {
      var aud = el("audio");
      aud.src = item.src;
      aud.controls = true;
      aud.preload = "metadata";
      media.appendChild(aud);
    }
  }

  function show(item) {
    renderMedia(item);
    caption.replaceChildren();
    caption.appendChild(el("strong", "", item.title));
    caption.appendChild(el("span", "", label(item.type) + ". " + item.desc));
    var many = visible.length > 1;
    btnPrev.hidden = !many;
    btnNext.hidden = !many;
  }

  function open(item) {
    current = Math.max(0, visible.indexOf(item));
    show(visible[current]);
    if (typeof box.showModal === "function") box.showModal();
    else box.setAttribute("open", "");
  }

  function step(dir) {
    if (visible.length < 2) return;
    current = (current + dir + visible.length) % visible.length;
    show(visible[current]);
  }

  function close() {
    if (typeof box.close === "function") box.close();
    else box.removeAttribute("open");
  }

  box.addEventListener("close", function () {
    media.replaceChildren();   // hentikan video atau audio yang sedang jalan
    if (opener) opener.focus();
  });

  btnClose.addEventListener("click", close);
  btnPrev.addEventListener("click", function () { step(-1); });
  btnNext.addEventListener("click", function () { step(1); });

  // Klik di luar kotak (area backdrop) menutup lightbox
  box.addEventListener("click", function (e) {
    if (e.target === box) close();
  });

  box.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  buildFilters();
  buildGrid();
})();
