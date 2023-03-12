// ------------------ VARIABLES Y SELECTORES ------------------ //
const boton = document.querySelector("#btn");

// ------------------------- EVENTOS ------------------------- //
function eventListeners() {
  boton.addEventListener("click", darkMode);
  //mouseover para que al pasar el puntero del ratón sobre el botón este cambie de color
  boton.addEventListener("mouseover", () => ponerFondo("grey"));
  //mouseout para que al quitar el puntero del ratón este cambie a otro color distinto al de mouseover
  boton.addEventListener("mouseout", () => quitarFondo("black"));
}

//Llamamos la función eventListeners()
eventListeners();

// ------------------------ FUNCIONES ------------------------ //

function darkMode() {
  let body = document.querySelector("body");

  if (body.classList.toggle("dark-mode")) {
    document.querySelector(".fa-sun").style = "display:block";
    document.querySelector(".fa-moon").style = "display:none";

    //onmouseover para que al pasar puntero del ratón sobre el botón cambie a color gris claro
    boton.onmouseover = () => ponerFondo("lightgrey");

    //onmouseout para que al quitar el puntero del ratón cambie a color blanco
    boton.onmouseout = () => quitarFondo("white");
  } else {
    document.querySelector(".fa-sun").style = "display:none";
    document.querySelector(".fa-moon").style = "display:block";

    //onmouseover para que al pasar puntero del ratón sobre el boton cambie a color gris claro
    boton.onmouseover = () => ponerFondo("grey");

    //onmouseout para que al quitar el puntero del ratón cambie a color negro
    boton.onmouseout = () => quitarFondo("black");
  }
}

function ponerFondo(color) {
  boton.style.background = `${color}`;
  boton.style.border = "none";
}

function quitarFondo(color) {
  boton.style.background = `${color}`;
}
