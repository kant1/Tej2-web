/* ===== TEJ'2 — site institutionnel ===== */

// 👉 URL de l'application TEJ'2
const APP_URL = "https://app.tej2.com";

(function () {
  "use strict";

  // Année dans le footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Liens "Lancer / Ouvrir l'application"
  document.querySelectorAll("#launchApp, .nav-cta").forEach(function (el) {
    el.addEventListener("click", function (e) {
      if (APP_URL && APP_URL !== "#") {
        e.preventDefault();
        window.open(APP_URL, "_blank", "noopener");
      }
    });
  });

  // Header : ombre/opacité au scroll
  const header = document.getElementById("header");
  const onScroll = function () {
    header.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Menu mobile
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Animations d'apparition au scroll
  const revealTargets = document.querySelectorAll(
    ".card, .step, .plan, .section-head, .split-text, .split-visual, .cta-inner"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("in"); });
  }
})();
