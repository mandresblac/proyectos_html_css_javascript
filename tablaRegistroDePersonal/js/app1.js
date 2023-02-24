//Capturamos elementos HTML
const formulario = document.querySelector("#formulario");
const btnEnviar = document.querySelector("#btn-enviar");
const tabla = document.querySelector("#tabla tbody");
let id = 1;

//Desestructuramos el elemento formulario
const { nombres, apellidos, telefono, direccion, edad, genero } = formulario;

//Evento
btnEnviar.addEventListener("click", (e) => {
  e.preventDefault(); // Prevenimos la acción por default
  validar();

  setTimeout(() => {
    formulario.reset(); //resetea formulario
  }, 3000);
});

function generarTabla() {
  const fila = document.createElement("tr");
  fila.innerHTML = `
  <td>${id++}</td>
  <td>${nombres.value}</td>
  <td>${apellidos.value}</td>
  <td>${telefono.value}</td>
  <td>${direccion.value}</td>
  <td>${edad.value}</td>
  <td>${genero.value}</td>
  <td>
    <button type="reset">❌</button>
  </td>
  `;

  return tabla.appendChild(fila);
}

function validar() {
  if (
    nombres.value.trim() === "" ||
    apellidos.value.trim() === "" ||
    telefono.value.trim() === "" ||
    direccion.value.trim() === "" ||
    edad.value.trim() === "" ||
    genero.value.trim() === ""
  ) {
    mostrarAlerta();
  } else {
    generarTabla();
  }
}

//Muestra una alerta si el usuario comete un error
function mostrarAlerta() {
  const error = document.createElement("p");
  error.textContent = "Todos los campos son obligatorios";
  error.id = "alerta";

  //Agregamos clases el elemento error
  error.style.background = "red";
  error.style.color = "white";
  error.style.textAlign = "center";
  error.style.fontSize = "1.3rem";
  error.style.width = "100%";
  error.style.height = "35px";
  error.style.lineHeight = "35px";
  error.style.borderRadius = "3px";

  //Agregamos el elemento error al formulario
  formulario.appendChild(error);

  // Removemos la alerta después de 2 segundos
  setTimeout(() => {
    error.remove();
  }, 2000);
}
