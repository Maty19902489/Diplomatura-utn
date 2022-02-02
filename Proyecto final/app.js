const menu = document.querySelector(".header__menu");
const openMenuBoton = document.querySelector(".open__menu");
const closeMenuBoton = document.querySelector(".close__menu");
const formularioBoton = document.querySelector("main__exchange-formulario");

function toggleMenu () {
    menu.classList.toggle("menu_opened")
}

openMenuBoton.addEventListener("click", toggleMenu);
closeMenuBoton.addEventListener("click", toggleMenu);
ocultarMenu.addEventListener("click", toggleMenu);


/* var openMenuBoton = document.getElementById("header__menu");
    closeMenuBoton = document.getElementById("close__menu");
     openMenuBoton = document.getElementById("open__menu");
     formularioBoton = document.getElementById("main__exchange-formulario");

     function ocultar(){
         header__menu.addEventListener("click", toggleMenus);
         close__menu.addEventListener("click", toggleMenu);
         open__menu.addEventListener("click", toggleMenu);
         main__exchange-formulario.addEventListener("click", toggleMenu);
     }
    
     header__menu.addEventListener("click",ocultar) */