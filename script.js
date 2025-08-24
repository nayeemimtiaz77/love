document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".primary-nav");
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("menu");

  if (toggle && nav && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.getAttribute("aria-expanded") === "true";
      nav.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });

    menu.querySelectorAll("a[href^='#']").forEach(link => {
      link.addEventListener("click", () => {
        nav.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Dynamic year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});