const btnMenu = document.querySelector("#btn-menu");
const btnClose = document.querySelector("#btn-cancel");
const nav = document.querySelector("#nav");
const btnDarkTheme = document.querySelector("#btn-dark-theme");
const btnlightTheme = document.querySelector("#btn-light-theme");

/* Eventos para mostrar menu de na vegacion */
btnMenu.addEventListener("click", () => {
  if (nav.classList.toggle("mostrar-nav")) {
    btnMenu.classList.toggle("ocultar-btn");
    btnClose.classList.toggle("mostrar-btn");
  }
});

btnClose.addEventListener("click", () => {
  if (nav.classList.toggle("mostrar-nav")) {
    btnClose.classList.toggle("mostrar-btn");
    btnMenu.classList.toggle("ocultar-btn");
  } else {
    btnClose.classList.toggle("mostrar-btn");
    btnMenu.classList.toggle("ocultar-btn");
  }
});

/* Evento para cambiar de modo claro a oscuro */
btnDarkTheme.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");

  // Para cambiar el icono del boton
  const className = document.body.className;
  if (className === "light-theme") {
    // btnDarkTheme.classList.toggle("mostrar-btn-light");
    btnlightTheme.classList.toggle("ocultar-btn");
  } else {
    btnlightTheme.classList.toggle("mostrar-btn-light");
    btnDarkTheme.classList.toggle("ocultar-btn");
  }
});

btnlightTheme.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");

  const className = document.body.className;
  if (className === "dark-theme") {
    btnDarkTheme.classList.toggle("ocultar-btn");
  } else {
    btnlightTheme.classList.toggle("mostrar-btn-light");
    btnDarkTheme.classList.toggle("ocultar-btn");
  }
});
