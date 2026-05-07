(() => {
  const header = document.querySelector(".site-header");
  if (header) {
    const setHeaderState = () => {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    setHeaderState();
    window.addEventListener("scroll", setHeaderState, { passive: true });
  }

  const faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".faq-item");
      const content = item ? item.querySelector(".faq-content") : null;
      if (!item || !content) return;

      const isOpen = item.classList.toggle("open");
      content.style.maxHeight = isOpen ? `${content.scrollHeight}px` : "0px";
    });
  });
})();
