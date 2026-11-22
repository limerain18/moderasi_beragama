/* Navigasi, kartu indikator, penanda menu aktif, animasi masuk */
(function () {
  "use strict";

  // ----- Menu mobile -----
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  function setNav(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setNav(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") setNav(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setNav(false);
  });

  // ----- Kartu indikator (buka/tutup) -----
  document.querySelectorAll(".card-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var body = document.getElementById(btn.getAttribute("aria-controls"));
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      body.hidden = open;
    });
  });

  // ----- Menu aktif sesuai posisi scroll -----
  var links = {};
  nav.querySelectorAll("a").forEach(function (a) {
    links[a.getAttribute("href").slice(1)] = a;
  });

  // "pengertian" tidak punya tautan sendiri, jadi dihitung sebagai beranda
  var alias = { pengertian: "beranda" };

  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = alias[entry.target.id] || entry.target.id;
        Object.keys(links).forEach(function (key) {
          links[key].classList.toggle("is-active", key === id);
          if (key === id) links[key].setAttribute("aria-current", "true");
          else links[key].removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    document.querySelectorAll("main section[id]").forEach(function (s) {
      spy.observe(s);
    });

    // ----- Animasi masuk untuk elemen statis -----
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".card, .member, .callout, .checklist-box").forEach(function (el) {
      el.classList.add("reveal");
      reveal.observe(el);
    });
  }
})();
