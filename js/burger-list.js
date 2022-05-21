(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[open-menu]");
  
    menuBtnRef.addEventListener("click", () => {
        const expanded =
        menuBtnRef.classList.toggle("is-open");
        mobileMenuRef .classList .toggle("is-open");
    });
  })();