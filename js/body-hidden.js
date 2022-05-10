
(() => {
  const refs = {
    openModalBtn: document.querySelector("[body-hidden-active]"),
    closeModalBtn: document.querySelector("[body-hidden-disactive]"),
    modal: document.querySelector("[body-hidden]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("body-hidden");
  }
})();