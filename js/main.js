(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const toast = document.getElementById("toast");
  let toastTimer;

  function showToast(label) {
    if (!toast) return;
    const name = label || "This";
    toast.textContent = `${name} — dropping soon`;
    toast.hidden = false;
    // force reflow so transition runs
    void toast.offsetWidth;
    toast.classList.add("is-visible");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("is-visible");
      setTimeout(() => {
        toast.hidden = true;
      }, 350);
    }, 2200);
  }

  document.querySelectorAll(".coming-soon-trigger").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      showToast(el.dataset.label);
    });
  });

  // Soft header shadow after scroll
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.style.borderBottom =
        window.scrollY > 40 ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
