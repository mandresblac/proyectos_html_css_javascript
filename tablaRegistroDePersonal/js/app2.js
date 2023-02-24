// --------------------- VARIABLES -----------------------------------
const formulario = document.querySelector("#formulario");
const tabla = document.querySelector("#tabla tbody");
const btnEnviar = document.querySelector("#btn-enviar");
const btnReset = document.querySelector("#btn-reset");
let id = 1;

// ---------------------- EVENT LISTENERS -----------------------------

function eventListener() {
  btnEnviar.addEventListener("click", agregarRegistro);

  //Resetea Formulario
  btnReset.addEventListener("click", resetFormulario);
}

// Llamamos la función que ejecuta todos los event listeners
eventListener();

// ---------------------- FUNCIONES -----------------------------------

function agregarRegistro(e) {
  e.preventDefault(); // Prevenimos la acción por defecto

  //Desestructuramos el formulario
  const { nombres, apellidos, telefono, direccion, edad, genero } = formulario;

  //Realizamos validaciones de todos los campos
  if (
    nombres.value.trim() === "" ||
    apellidos.value.trim() === "" ||
    telefono.value.trim() === "" ||
    isNaN(telefono.value) || //isNaN() valida si la entrada de teléfono.value es un número válido
    direccion.value.trim() === "" ||
    edad.value.trim() === "" ||
    genero.value.trim() === ""
  ) {
    mostrarError("Todos los campos son obligatorios");
    return; //return evita que se ejecuten mas lineas de código, es decir, sale de función agregarRegistro()
  }

  // LLamamos a la función que crea la fila en el documento HTML
  crearFila();

  //Establecemos el foco en el elemento textArea con id "tweet"
  document.querySelector("#nombres").focus();
}

// Mostrar mensaje de error
function mostrarError(error) {
  //Generamos código HTML
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  //Agregamos estilos CSS del archivo styles.css, clase .error
  mensajeError.classList.add("error");

  //Agregamos el elemento mensajeError al formulario
  formulario.appendChild(mensajeError);

  //Después de 3 segundos eliminamos o removemos el mensaje de error con el temporizador setTimeout()
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

// Creamos una fila el documento HTML
function crearFila() {
  //Creamos botón para eliminar una fila
  const btnEliminar = document.createElement("a");
  //Agregamos texto
  btnEliminar.textContent = "❌";
  btnEliminar.classList.add("btn-eliminar"); //Agregamos estilos CSS del archivo custom.css, clase .error
  //Añadimos función para eliminar toda la fila
  btnEliminar.onclick = () => {
    borrarFila();
  };

  // Creamos fila en HTML
  const fila = document.createElement("tr");
  fila.innerHTML = `
  <td>${id++}</td>
  <td>${nombres.value}</td>
  <td>${apellidos.value}</td>
  <td>${telefono.value}</td>
  <td>${direccion.value}</td>
  <td>${edad.value}</td>
  <td>${genero.value}</td>
  `;

  //Insertamos el botón eliminar a la fila
  fila.appendChild(btnEliminar);
  //Insertamos la fila en la tabla del documento HTML
  return document.querySelector("#tabla tbody").appendChild(fila);
}

//Resetea Formulario
function resetFormulario(e) {
  e.preventDefault();
  formulario.reset();
}

//Función que elimina la fila
function borrarFila() {}
