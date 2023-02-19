//Capturamos elementos HTML
const formulario = document.querySelector("#formulario");
const btnEnviar = document.querySelector("#btn-enviar");
const tabla = document.querySelector("#tabla tbody");
let id = 1;

//Desestructuramos el elemento formulario
const { nombre1, nombre2, apellido1, apellido2, edad, genero } = formulario;

//Evento
btnEnviar.addEventListener("click", (e) => {
  e.preventDefault(); // Prevenimos la acción por default
  validar();
  formulario.reset(); //resetea formulario
});

function generarTabla() {
  const fila = document.createElement("tr");
  fila.innerHTML = `
  <td>${id++}</td>
  <td>${nombre1.value}</td>
  <td>${nombre2.value}</td>
  <td>${apellido1.value}</td>
  <td>${apellido2.value}</td>
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
    nombre1.value.trim() === "" ||
    nombre2.value.trim() === "" ||
    apellido1.value.trim() === "" ||
    apellido2.value.trim() === "" ||
    edad.value.trim() === "" ||
    genero.value.trim() === ""
  ) {
    alert("Todos los campos son obligatorios");
    return false;
  } else {
    generarTabla();
  }
}

function eliminarFila() {
  fila.innerHTML = "";
}
