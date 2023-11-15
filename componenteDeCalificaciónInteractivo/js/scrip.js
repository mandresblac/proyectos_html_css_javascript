// const card = document.querySelector("#card");
const card1 = document.querySelector("#card__container1");
const card2 = document.querySelector("#card__container2");
const boton = document.querySelector("#boton");
// const

boton.addEventListener("click", (e) => {
  e.preventDefault(); // Previene la recarga automatica del forulario Html
  const input = document.getElementsByName("calification"); // inputs tipo radio
  let seleccionado = false;

  input.forEach((element) => {
    if (element.checked) {
      seleccionado = true;
      card1.classList.toggle("ocultar-card");
      card2.classList.toggle("mostrar-card");
    }
  });
});
