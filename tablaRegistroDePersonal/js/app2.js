// --------------------- VARIABLES -----------------------------------
const formulario = document.querySelector("#formulario");
const tabla = document.querySelector("#tabla tbody");
const btnEnviar = document.querySelector("#btn-enviar");
const btnReset = document.querySelector("#btn-reset");
let id = 1;
let personas = [];

// ---------------------- EVENT LISTENERS -----------------------------

function eventListener() {
  //Cuando el usuario agrega una nueva persona
  btnEnviar.addEventListener("click", agregarRegistro);

  //Resetea Formulario
  btnReset.addEventListener("click", resetFormulario);

  //Cuando el documento esta listo
  /* document.addEventListener("DOMContentLoaded", () => {
    //Traemos las personas que están en local storage con formato .JSON y los convertimos a un objeto javascript con JSON.parse() si no hay personas se asigna como una array vació "[]"
    personas = JSON.parse(localStorage.getItem("personas")) || [];

    //crearFila();
  }); */
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

  //Generamos objeto que almacenara los datos de las personas
  const personaObj = {
    id: Date.now(),
    nombres: nombres.value,
    apellidos: apellidos.value,
    telefono: telefono.value,
    direccion: direccion.value,
    edad: edad.value,
    genero: genero.value,
  };

  //Agregamos contenido al arreglo personas
  personas = [...personas, personaObj]; //personaObj es lo que el usuario esta escribiendo

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
  btnEliminar.textContent = "X";
  btnEliminar.classList.add("btn-eliminar"); //Agregamos estilos CSS del archivo custom.css, clase .error
  //Añadimos función para eliminar toda la fila
  btnEliminar.onclick = () => {
    borrarFila(fila);
  };

  //Creamos una celda
  const celda = document.createElement("td");
  //Agregamos botón de eliminar a la celda
  celda.appendChild(btnEliminar);

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

  //Insertamos la celda con el botón eliminar a la fila
  fila.appendChild(celda);
  //Insertamos la fila en la tabla del documento HTML
  document.querySelector("#tabla tbody").appendChild(fila);

  //Llamada a la función  que agrega los tweets al local storage del navegador
  //sincronizarStorage();
}

//Agrega las personas actuales al local storage del navegador
/* function sincronizarStorage() {
  localStorage.setItem("personas", JSON.stringify(personas));
} */

//Resetea Formulario
function resetFormulario(e) {
  e.preventDefault();
  formulario.reset();

  //Establecemos el foco en el elemento textArea con id "tweet"
  document.querySelector("#nombres").focus();
}

//Función que elimina la fila
function borrarFila(fila) {
  fila.textContent = "";
  fila.classList.add("ocultar"); //Oculta la fila
}
