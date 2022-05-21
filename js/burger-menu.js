(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
      const expanded =
      menuBtnRef.classList.toggle("is-open");
      mobileMenuRef .classList .toggle("is-open");
  });
})();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu-base]");

  menuBtnRef.addEventListener("click", () => {
      const expanded =
      menuBtnRef.classList.toggle("is-open");
      mobileMenuRef .classList .toggle("is-open");
  });
})();