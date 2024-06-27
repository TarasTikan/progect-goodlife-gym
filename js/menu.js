(() => {
  const btnOpenMenu = document.querySelector(".menu-open-btn");
  const btnClouseMenu = document.querySelector(".menu-close-btn");
  const mobMenu = document.querySelector(".mob-menu");
  const body = document.querySelector("body");

  btnOpenMenu.addEventListener("click", toggleMenu);
  btnClouseMenu.addEventListener("click", toggleMenu);

  function toggleMenu() {
    mobMenu.classList.toggle("visually-hidden");
    body.classList.toggle("no-scroll");
  }
})();
