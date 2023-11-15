const btnRating = document.querySelectorAll("#card__calification");
// console.log(btnRating);

btnRating.forEach((boton) => {
  boton.addEventListener("click", () => {
    // boton.classList.toggle("fondo_gris");
    // console.log(boton);

    if (boton.classList.contains("fondo_gris")) {
      let botonActivo = boton.includes(boton.classList.contains("fondo_gris"));
      console.log(botonActivo);

      // boton.classList.toggle("fondo_gris");
      // console.log(boton);
      // boton.classList.remove("fondo_gris");
    } else {
      boton.classList.remove("fondo_gris");
      // return;
    }
  });
});

/* btnRating.some((boton) => {
  boton === boton.classList.contains("fondo_gris");
}); */
