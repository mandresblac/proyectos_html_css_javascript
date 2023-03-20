// ------------------ VARIABLES Y SELECTORES ------------------ //
const btnMenu1 = document.querySelector("#btn-menu");
const btnMenu2 = document.querySelector("#btn-menu2");
const menu = document.querySelector("#menu");

// ------------------------- EVENTOS ------------------------- //
function eventListeners() {
  btnMenu1.addEventListener("click", mostrarMenu);
  btnMenu1.addEventListener("mouseover", () => ponerFondo("lightgray"));
  btnMenu1.addEventListener("mouseout", () => quitarFondo("white"));

  btnMenu2.addEventListener("click", ocultarMenu);
}

eventListeners();

// ------------------------ FUNCIONES ------------------------ //
function mostrarMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    btnMenu1.style.display = "none";
    document.querySelector(".text-menu").style.display = "none";
  } else {
    menu.style.display = "none";
    document.querySelector(".text-menu").style.display = "block";
  }
}

function ocultarMenu() {
  if(menu.style.display === "block") {
    menu.style.display = "none";
    btnMenu1.style.display = "block";
    document.querySelector(".text-menu").style.display = "block";
    btnMenu2.onmouseover = () => ponerFondo("lightgray");
    btnMenu2.onmouseout = () => quitarFondo("white");
    document.querySelector("#btn-menu2 i").style.color = "black";
  } else {
    menu.style.display = "block";
    document.querySelector(".text-menu").style.display = "none";
    btnMenu1.onmouseover = () => ponerFondo("lightgray");
    btnMenu1.onmouseout = () => quitarFondo("white");
  }
}

function ponerFondo(color) {
  btnMenu1.style.background = `${color}`;
  btnMenu2.style.background = `${color}`;
  btnMenu1.style.borderRadius = "50%";
  btnMenu2.style.borderRadius = "50%";
}

function quitarFondo(color) {
  btnMenu1.style.background = `${color}`;
  btnMenu2.style.background = `${color}`;
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
