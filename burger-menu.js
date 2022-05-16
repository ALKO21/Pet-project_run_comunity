
(() => {
  const refs = {
    openModalBtn: document.querySelector("[burger-active]"),
    closeModalBtn: document.querySelector("[burger-disactive]"),
    modal: document.querySelector("[burger-active"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();

(() => {
  const menuBtnRef = document.querySelector("[burger-active]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
      const expanded =
          menuBtnRef.getAttribute("aria-expanded") === true || false;
      
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);

      mobileMenuRef .classList .toggle("is-open");
  
  });
})();