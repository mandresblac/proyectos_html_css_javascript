let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;

  animado.forEach((elemento) => {
    let alturaAnimado = elemento.offsetTop;
    if (alturaAnimado - 400 < scrollTop) {
      elemento.style.opacity = 1;
      elemento.classList.add("mostrarArriba");
    }
  });
}

window.addEventListener("scroll", mostrarScroll);
