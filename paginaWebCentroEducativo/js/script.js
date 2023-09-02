const btnMenu = document.querySelector("#btn-menu");
const btnClose = document.querySelector("#btn-close");
const nav = document.querySelector("#nav");

btnMenu.addEventListener("click", () => {
  if (nav.classList.toggle("mostrar-nav")) {
    btnMenu.classList.toggle("ocultar-btn-menu");
    btnClose.classList.toggle("mostrar-btn-menu");
  }
});

btnClose.addEventListener("click", () => {
  if (nav.classList.toggle("mostrar-nav")) {
    btnClose.classList.toggle("mostrar-btn-menu");
    btnMenu.classList.toggle("ocultar-btn-menu");
  } else {
    btnClose.classList.toggle("mostrar-btn-menu");
    btnMenu.classList.toggle("ocultar-btn-menu");
  }
});
