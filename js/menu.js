const btnMenu = document.querySelector(".menu-open-btn");
const btnClouseMenu = document.querySelector(".menu-close-btn");


btnMenu.addEventListener('click', openMenu)
function openMenu() {
btnMenu.classList.toggle('.is-Open')
btnClouseMenu.classList.toggle(".is-Open");
}