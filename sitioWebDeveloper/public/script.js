const boton = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");
const header = document.querySelector("#header");

boton.addEventListener("click", (e) => {
  menu.classList.toggle("mostrar-menu");
});
