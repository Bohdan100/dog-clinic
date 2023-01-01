(() => {
  const refs = {
    mobMenuBtn: document.querySelector(
      "[data-menu-button]"
    ),
    mobMenuHeader: document.querySelector(
      "[data-menu-header]"
    ),
    mobMenu: document.querySelector(
      "[data-menu]"
    ),
  };

  refs.mobMenuBtn.addEventListener(
    "click",
    toggleMenu
  );
  refs.mobMenu.addEventListener(
    "click",
    onMenuClick
  );

  function toggleMenu() {
    refs.mobMenu.classList.toggle("is-open");
    refs.mobMenuBtn.classList.toggle("is-open");
    refs.mobMenuHeader.classList.toggle(
      "is-open"
    );
    document.body.classList.toggle("modal-open");
  }

  function onMenuClick(event) {
    event.preventDefault();

    if (event.target === event.currentTarget) {
      refs.mobMenu.classList.toggle("is-open");
    }
  }
})();
