//Arreglo que contiene las respuestas correctas
let correctas = [3, 1, 3, 2, 3];

//Arreglo donde se guardan las respuestas del usuario
let opcionElegida = [];

let cantidadCorrectas = 0;

//Funcion que toma el numero de pregunta y el input elegido de esa pregunta
function respuesta(numeroPregunta, seleccionada) {
  //Guardo la respuesta elegida
  opcionElegida[numeroPregunta] = seleccionada.value;

  //El siguiente código es para poner en color blanco el fondo de los inputs para cuando elige otra opcion
  //Armo el id para seleccionar el section correspondiente
  id = "p" + numeroPregunta;

  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "white";
  labels[5].style.backgroundColor = "white";
  labels[7].style.backgroundColor = "white";

  //Doy el color al label seleccionado
  seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

//Funcion que compara los arreglos para saber cuantas estuvieron correctas
function corregir() {
  cantidadCorrectas = 0;
  for (let i = 0; i < correctas.length; i++) {
    if (correctas[i] == opcionElegida[i]) {
      cantidadCorrectas++;
    }
  }
  document.getElementById("resultado").innerHTML = cantidadCorrectas;
}

