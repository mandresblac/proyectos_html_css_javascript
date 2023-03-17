// ------------------ VARIABLES Y SELECTORES ------------------ //
const btnMenu = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

// ------------------------- EVENTOS ------------------------- //
function eventListeners() {
  btnMenu.addEventListener("click", mostrarMenu);
  btnMenu.addEventListener("mouseover", () => ponerFondo("lightgray"));
  btnMenu.addEventListener("mouseout", () => quitarFondo("white"));
}

eventListeners();

// ------------------------ FUNCIONES ------------------------ //
function mostrarMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    /* btnMenu.style.display = "none"; */
    document.querySelector(".text-menu").style.display = "none";
    /* botonMenu(); */
  } else {
    menu.style.display = "none";
    document.querySelector(".text-menu").style.display = "block";
  }
}

function ponerFondo(color) {
  btnMenu.style.background = `${color}`;
  btnMenu.style.border = "none";
  btnMenu.style.borderRadius = "50%";
}

function quitarFondo(color) {
  btnMenu.style.background = `${color}`;
}

/* function botonMenu() {
  const boton = document.createElement("button");
  boton.innerHTML = "Hola";
  boton.style.color = "white";
  boton.classList.toggle("button");
  menu.insertBefore(boton, document.querySelector("#nav"));
  menu.appendChild(boton);
}
 */
