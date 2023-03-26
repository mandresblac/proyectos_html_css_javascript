// ------------------ VARIABLES Y SELECTORES ------------------ //
const estatura = document.querySelector("#estatura");
const peso = document.querySelector("#peso");
const btnCalcular = document.querySelector("#btn-calcular");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

// ------------------------- EVENTOS ------------------------- //
btnCalcular.addEventListener("click", validaciones);

// ------------------------ FUNCIONES ------------------------ //
function validaciones(e) {
  e.preventDefault();

  limpiarHtml();
  /* mostrarSpinner(); */

  if (estatura.value === "" || peso.value == "") {
    //Validamos que el usuario llene ambos campos
    imprimirAlerta("Ambos campos son obligatorios");
    return; //return para que no se ejecuten las siguientes líneas de código y salga
  } else if (estatura.value <= 0 || peso.value <= 0) {
    //Validamos que los números insertados por el usuario no sean menores o iguales a cero
    imprimirAlerta("Error, numeros no validos");
    return; //return para que no se ejecuten las siguientes líneas de código y salga
  } else if (isNaN(estatura.value) || isNaN(peso.value)) {
    //isNaN() valida que los datos insertados por el usuario sean números no letras
    imprimirAlerta("Error, insertaste letras o caracteres no validos");
  } else {
    indiceMasaCorporal();
  }
}

function limpiarHtml() {
  // Forma lenta de eliminar código HTML
  //resultado.innerHTML = "";

  //Forma rápida de eliminar código HTML
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function imprimirAlerta(mensaje) {
  //Creamos un p de alerta
  const alerta = document.createElement("p");
  alerta.classList.add("alerta"); //Agregamos estilos del archivo style.css

  //Agregamos mensaje
  alerta.textContent = mensaje;

  //Insertamos mensaje en el documento HTML
  resultado.appendChild(alerta);

  //Quitamos el mensaje del HTML después de 2 segundos y ponemos el foco en el input estatura
  setTimeout(() => {
    alerta.remove();
    estatura.focus();
  }, 2000);
}

function indiceMasaCorporal() {
  const valorEstatura = Number(estatura.value);
  const valorPeso = Number(peso.value);

  const imc = (valorPeso / valorEstatura ** 2).toFixed(2);

  if (imc < 18.5) {
    mostrarImc(`Imc: ${imc}`, "Bajo de peso");
  } else if (imc >= 18.5 && imc <= 24.9) {
    mostrarImc(`Imc: ${imc}`, "Peso normal");
  } else if (imc >= 25 && imc <= 29.9) {
    mostrarImc(`Imc: ${imc}`, "Sobrepeso");
  } else if (imc >= 30 && imc <= 34.9) {
    mostrarImc(`Imc: ${imc}`, "Obesidad grado I");
  } else if (imc >= 35 && imc <= 39.9) {
    mostrarImc(`Imc: ${imc}`, "Obesidad grado II");
  } else if (imc >= 40 && imc <= 49.9) {
    mostrarImc(`Imc: ${imc}`, "Obesidad grado III");
  } else {
    mostrarImc(`Imc: ${imc}`, "Obesidad grado IV");
  }
}

function mostrarImc(valor, mensaje) {
  //Creamos un elemento "p" para mostrar el valor del imc
  const valorImc = document.createElement("span");
  valorImc.classList.add("mostrar-imc"); //Agregamos estilos del archivo style.css

  //Creamos otro elemento "p" para mostrar el mensaje de imc
  const mensajeImc = document.createElement("span");
  mensajeImc.classList.add("mostrar-imc"); //Agregamos estilos del archivo style.css

  //Agregamos el valor del imc
  valorImc.textContent = valor;

  //Agregamos mensaje del imc
  mensajeImc.textContent = mensaje;

  //Insertamos mensaje en el documento HTML
  resultado.appendChild(valorImc);
  resultado.appendChild(mensajeImc);

  //Después de 4 segundos quitamos el mensaje del HTML , reseteamos todo el formulario ponemos y el foco en el input estatura
  setTimeout(() => {
    limpiarHtml();
    formulario.reset(); //Reseteamos formulario
    estatura.focus();
  }, 4000);
}

function mostrarSpinner() {
  /* limpiarHTML(); */

  const spinner = document.createElement('div');
  spinner.classList.add('sk-chase');

  spinner.innerHTML = `
    <div class="sk-chase">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
    </div>
  `;

  resultado.appendChild(spinner);

  //Quitamos el spinner despues de 2 segundos
  setTimeout(() => {
    spinner.remove();
  }, 2000);
}