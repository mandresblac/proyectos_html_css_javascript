const menu = document.querySelector("#menu");
const altura = menu.offsetTop; // offsetTop calcula distancia desde el inicio del Viewport (Parte supedior) hasta el inicio del elemento menu

// window es para cuando se haga scroll en la pagina
window.addEventListener("scroll", function () {
  // scrollY calcula distancia de cuanto scroll se ha hecho en la pagina
  if (window.scrollY > altura) {
    menu.classList.add("fixed");
  } else {
    menu.classList.remove("fixed");
  }
});
