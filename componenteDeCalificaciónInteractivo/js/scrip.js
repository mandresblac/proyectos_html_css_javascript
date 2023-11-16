const card1 = document.querySelector("#card__container1");
const card2 = document.querySelector("#card__container2");
const boton = document.querySelector("#boton");
const textSelection = document.querySelector("#card__subtitle");
const btnBack = document.querySelector("#btn-return");

boton.addEventListener("click", (e) => {
  e.preventDefault(); // Previene la recarga automatica del formulario Html

  const inputs = document.getElementsByName("calification"); // inputs tipo radio

  inputs.forEach((input) => {
    if (input.checked) {
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

btnBack.addEventListener("click", () => {
  card2.classList.remove("mostrar-card");
  card1.classList.remove("ocultar-card");
  document.querySelector("#card__container1").reset(); // Resetea el formulario
});
