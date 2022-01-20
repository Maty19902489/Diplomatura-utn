const menu = document.querySelector(".header__menu");
const openMenuBoton = document.querySelector(".open__menu");
const closeMenuBoton = document.querySelector(".close__menu");

function toggleMenu () {
    menu.classList.toggle("menu_opened")
}

openMenuBoton.addEventListener("click", toggleMenu);
closeMenuBoton.addEventListener("click", toggleMenu);
