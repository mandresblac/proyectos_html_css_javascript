const inputs = document.querySelectorAll(".formulario__input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function () {
    // Si la cantidad de texto es mayor o igual 1, es decir, si el input al menos tiene una letra
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add("fijar"); // Selecciona al siguiente elemento
    } else {
      this.nextElementSibling.classList.remove("fijar");
    }
  });
}
