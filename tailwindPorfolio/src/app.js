/* ------------ VARIABLES ------------ */
const header = document.querySelector("#header");
const btnDarkTheme = document.querySelector("#dark-theme");
const btnLightTheme = document.querySelector("#light-theme");
const btnMenu = document.querySelector("#btn-menu");
const btnClose = document.querySelector("#btn-cancel");
const nav = document.querySelector("#nav");

/* -------- MOSTRAR Y OCULTAR MENU DE NAVEGACIÓN -------- */
btnMenu.addEventListener("click", () => {
  nav.classList.remove("-top-64");
  nav.classList.add("top-20");
  btnMenu.classList.add("invisible");
  btnClose.classList.remove("invisible");
});

btnClose.addEventListener("click", () => {
  if (nav.classList.contains("top-20")) {
    nav.classList.remove("top-20");
    nav.classList.add("-top-64");
    btnClose.classList.add("invisible");
    btnMenu.classList.remove("invisible");
  }
});

/* -------- CAMBIAR TEMA DE CLARO A OSCURO -------- */

btnDarkTheme.addEventListener("click", () => {
  document.body.classList.add("bg-black", "text-white");
  header.classList.remove("bg-white"); // Modifica el header
  header.classList.add("bg-black", "text-white", "border-b"); // Modificar el header
  document.querySelector("h1").classList.add("text-white"); // Modifica el h1
  document.querySelector("h1 span").classList.add("text-white"); // Modifica el span dentro del h1

  // Para cambiar el icono del boton
  if (document.body.classList.contains("bg-black")) {
    btnDarkTheme.classList.add("invisible");
    btnLightTheme.classList.remove("invisible");
  }
});

btnLightTheme.addEventListener("click", () => {
  document.body.classList.remove("bg-black", "text-white");
  header.classList.remove("bg-black", "text-white", "border-b"); // Modifica el header
  header.classList.add("bg-white"); // Modifica el header
  document.querySelector("h1").classList.remove("text-white"); // Modifica el h1
  document.querySelector("h1 span").classList.remove("text-white"); // Modifica el span dentro del h1

  // Para cambiar el icono del boton
  if (!document.body.classList.contains("bg-black")) {
    btnDarkTheme.classList.remove("invisible");
    btnLightTheme.classList.add("invisible");
  }
});
