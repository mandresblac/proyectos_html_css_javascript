// ------------------ VARIABLES Y SELECTORES ------------------ //
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const yellow = document.querySelector("#yellow");
const orange = document.querySelector("#orange");
const red = document.querySelector("#red");

const cuadro = document.querySelector("#square");

// ------------------------- EVENTOS ------------------------- //
blue.addEventListener("mouseover", () => agregarColorYMensaje("blue", "Blue"));
blue.addEventListener("mouseout", () => quitarColorYMensaje("white"));

green.addEventListener("mouseover", () =>
  agregarColorYMensaje("green", "Green")
);
green.addEventListener("mouseout", () => quitarColorYMensaje("white"));

yellow.addEventListener("mouseover", () =>
  agregarColorYMensaje("yellow", "Yellow")
);
yellow.addEventListener("mouseout", () => quitarColorYMensaje("white"));

orange.addEventListener("mouseover", () =>
  agregarColorYMensaje("orange", "Orange")
);
orange.addEventListener("mouseout", () => quitarColorYMensaje("white"));

red.addEventListener("mouseover", () => agregarColorYMensaje("red", "Red"));
red.addEventListener("mouseout", () => quitarColorYMensaje("white"));

// ------------------------ FUNCIONES ------------------------ //
function agregarColorYMensaje(color, mensaje) {
  //Agregamos color
  cuadro.style.background = `${color}`;

  //Agregamos una transición de 0.3 segundos
  cuadro.style.transition = "0.4s";

  //Agregamos el mensaje
  const parrafo = document.createElement("p");
  parrafo.textContent = `${mensaje}`;
  parrafo.classList.add("parrafo");
  cuadro.appendChild(parrafo);
}

function quitarColorYMensaje(color) {
  cuadro.style.background = `${color}`;
  cuadro.textContent = "";
}
