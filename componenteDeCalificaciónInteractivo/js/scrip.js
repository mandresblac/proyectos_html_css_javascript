// const card = document.querySelector("#card");
const card1 = document.querySelector("#card__container1");
const card2 = document.querySelector("#card__container2");
const boton = document.querySelector("#boton");
const textSelection = document.querySelector("#card__subtitle");

boton.addEventListener("click", (e) => {
  e.preventDefault(); // Previene la recarga automatica del forulario Html

  const inputs = document.getElementsByName("calification"); // inputs tipo radio
  let seleccionado = false;

  inputs.forEach((input) => {
    if (input.checked) {
      seleccionado = true;
      card1.classList.toggle("ocultar-card");
      card2.classList.toggle("mostrar-card");

      // Muestra el input de tipo radio seleccionado por el usuario
      textSelection.textContent = `You selected ${input.value} out of 5`;
    } else {
      boton.value = "Choose a number";

      // Despues de 1.5 segundos vuelve el texto "SUBMIT"
      setTimeout(() => {
        boton.value = "SUBMIT";
      }, 1500);
    }
  });
});
