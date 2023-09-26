/* ------------ VARIABLES ------------ */
const header = document.querySelector("#header");
const btnDarkTheme = document.querySelector("#dark-theme");
const btnLightTheme = document.querySelector("#light-theme");
const btnMenu = document.querySelector("#btn-menu");
const btnClose = document.querySelector("#btn-cancel");
const nav = document.querySelector("#nav");

/* -------- MOSTRAR Y OCULTAR MENU DE NAVEGACIÓN -------- */
btnMenu.addEventListener("click", () => {
  nav.classList.remove("-top-60");
  nav.classList.add("top-20");
  btnMenu.classList.add("invisible");
  btnClose.classList.remove("invisible");
});

btnClose.addEventListener("click", () => {
  if (nav.classList.contains("top-20")) {
    nav.classList.remove("top-20");
    nav.classList.add("-top-60");
    btnClose.classList.add("invisible");
    btnMenu.classList.remove("invisible");
  }
});

/* -------- CAMBIAR TEMA DE CLARO A OSCURO -------- */

btnDarkTheme.addEventListener("click", () => {
  document.body.classList.add("bg-black", "text-white");
  header.classList.add("bg-black", "text-white", "border-b"); // Para modificar el header

  // Para cambiar el icono del boton
  if (document.body.classList.contains("bg-black")) {
    btnDarkTheme.classList.add("invisible");
    btnLightTheme.classList.remove("invisible");
  }
});

btnLightTheme.addEventListener("click", () => {
  document.body.classList.remove("bg-black", "text-white");
  header.classList.remove("bg-black", "text-white", "shadow-white");

  // Para cambiar el icono del boton
  if (!document.body.classList.contains("bg-black")) {
    btnDarkTheme.classList.remove("invisible");
    btnLightTheme.classList.add("invisible");
  }
});
