let imagenes = document.querySelectorAll(".gallery__img");
let modal = document.querySelector("#modal");
let img = document.querySelector("#modal__img");
let boton = document.querySelector("#modal__boton");

imagenes.forEach((imagen) =>
  imagen.addEventListener("click", (e) => {
    modal.classList.toggle("modal--open"); // Agrega la clase "modal--open"
    let src = e.target.src; // Obtenemos la ruta de la imagen a la que le hemos dado click
    img.setAttribute("src", src);
  })
);

boton.addEventListener("click", () => {
  modal.classList.toggle("modal--open"); // Elimina la clase "modal--open" al dar click en el boton
});
