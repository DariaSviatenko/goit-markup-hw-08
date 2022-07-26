(() => {
  const headerBtnRef = document.querySelector("[data-header__button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  headerBtnRef.addEventListener("click", () => {
    const expanded = 
    headerBtnRef.getAttribute ("aria-expanded") === "true" || false;
    headerBtnRef.classList.toggle("is-open");
    headerBtnRef.setAttribute ("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
})();
