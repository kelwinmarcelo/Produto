//MENU hamburguer
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".listaMenu");
const hamburguer= document.querySelector(".hamburguer");
const fecharIcone= document.querySelector(".fecharIcone");
const menuIcone = document.querySelector(".menuIcone");

function toggleMenu() {
  if (menu.classList.contains("mostrarMenu")) {
    menu.classList.remove("mostrarMenu");
    fecharIcone.style.display = "none";
    menuIcone.style.display = "block";
  } else {
    menu.classList.add("mostrarMenu");
    fecharIcone.style.display = "block";
    menuIcone.style.display = "none";
  }
}

hamburguer.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(listaMenu) { 
    listaMenu.addEventListener("click", toggleMenu);
  }
)