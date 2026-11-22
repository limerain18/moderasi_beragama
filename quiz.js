/* Kuis interaktif. Soal diambil dari QUIZ_DATA (js/quiz-data.js). */
(function () {
  "use strict";

  var root = document.getElementById("quiz");
  if (!root || typeof QUIZ_DATA === "undefined" || !QUIZ_DATA.length) return;

  var total = QUIZ_DATA.length;
  var order, pos, score, log;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function start(moveFocus) {
    order = shuffle(QUIZ_DATA.map(function (_, i) { return i; }));
    pos = 0;
    score = 0;
    log = [];
    renderQuestion(moveFocus);
  }

  function renderQuestion(moveFocus) {
    var item = QUIZ_DATA[order[pos]];
    root.replaceChildren();

    var head = el("div", "quiz-head");
    head.appendChild(el("span", "", "Soal " + (pos + 1) + " dari " + total));
    head.appendChild(el("span", "", "Skor: " + score));
    root.appendChild(head);

    var bar = el("div", "quiz-bar");
    var fill = el("span");
    fill.style.width = (pos / total) * 100 + "%";
    bar.appendChild(fill);
    root.appendChild(bar);

    root.appendChild(el("span", "quiz-tag", item.tag));

    var q = el("p", "quiz-question", item.q);
    q.tabIndex = -1;
    root.appendChild(q);

    var list = el("ul", "quiz-options");
    var buttons = [];
    var answered = false;
    var feedbackBox = el("div");

    item.options.forEach(function (label, i) {
      var li = el("li");
      var btn = el("button", "quiz-opt", label);
      btn.type = "button";
      btn.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        choose(i, item, buttons, feedbackBox);
      });
      buttons.push(btn);
      li.appendChild(btn);
      list.appendChild(li);
    });

    root.appendChild(list);
    root.appendChild(feedbackBox);

    if (moveFocus) q.focus();
  }

  function choose(picked, item, buttons, feedbackBox) {
    var right = picked === item.answer;
    if (right) score++;
    log.push({ q: item.q, right: right });

    buttons.forEach(function (btn, i) {
      btn.disabled = true;
      if (i === item.answer) btn.classList.add("is-correct");
      else if (i === picked) btn.classList.add("is-wrong");
      else btn.classList.add("is-dim");
    });

    var fb = el("div", "quiz-feedback " + (right ? "ok" : "no"));
    fb.setAttribute("role", "status");
    var p = el("p");
    p.appendChild(el("strong", "", right ? "Jawabanmu tepat." : "Belum tepat."));
    p.appendChild(document.createTextNode(item.explain));
    fb.appendChild(p);
    feedbackBox.appendChild(fb);

    var actions = el("div", "quiz-actions");
    var last = pos === total - 1;
    var next = el("button", "btn btn-solid", last ? "Lihat hasil" : "Soal berikutnya");
    next.type = "button";
    next.addEventListener("click", function () {
      pos++;
      if (pos < total) renderQuestion(true);
      else renderResult();
    });
    actions.appendChild(next);
    feedbackBox.appendChild(actions);
    next.focus();
  }

  function resultMessage() {
    var ratio = score / total;
    if (ratio >= 0.85) return "Kamu sudah terbiasa menyaring informasi dan menahan diri di kolom komentar. Coba ajak temanmu memainkan kuis ini juga.";
    if (ratio >= 0.5) return "Dasarnya sudah ada. Baca ulang penjelasan soal yang terlewat, lalu coba lagi.";
    return "Tidak masalah. Baca bagian materi dulu, kemudian ulangi kuisnya.";
  }

  function renderResult() {
    root.replaceChildren();
    var box = el("div", "quiz-result");

    var title = el("h3", "", "Hasil kuis");
    title.tabIndex = -1;
    box.appendChild(title);
    box.appendChild(el("div", "score", score + " / " + total));
    box.appendChild(el("p", "", resultMessage()));

    var review = el("ul", "review-list");
    log.forEach(function (row) {
      var li = el("li");
      li.appendChild(el("span", "mark " + (row.right ? "ok" : "no"), row.right ? "Tepat" : "Keliru"));
      li.appendChild(document.createTextNode(row.q));
      review.appendChild(li);
    });
    box.appendChild(review);

    var actions = el("div", "quiz-actions");
    var again = el("button", "btn btn-solid", "Ulangi kuis");
    again.type = "button";
    again.addEventListener("click", function () { start(true); });
    var toMateri = el("a", "btn btn-outline", "Kembali ke materi");
    toMateri.href = "#materi";
    actions.appendChild(again);
    actions.appendChild(toMateri);
    box.appendChild(actions);

    root.appendChild(box);
    title.focus();
  }

  start(false);
})();
