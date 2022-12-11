//Arreglos de temas
const animales = ["perro", "gato", "vaca", "elefante", "leon"];
const paises = ["españa", "alemania", "colombia", "argentina", "mexico"];
const frutas = ["manzana", "naranja", "banano", "piña", "cereza"];
const colores = ["azul", "rojo", "verde", "blanco", "amarillo"];

//Botones de temas
const btnAnimales = document.querySelector("#animales");
const btnCiudades = document.querySelector("#paises");
const btnFrutas = document.querySelector("#frutas");
const btnColores = document.querySelector("#colores");
const btnComprobar = document.querySelector("#btn");

//Palabras
let palabraOculta = ""; //Palabra oculta
let palabraAdivinar = ""; //Palabra que va adivinando el usuario

//Vidas
let vidas = 4; //Número de vidas

//Funcion que inicia el programa
function inicio(array) {
  //Aquí se recibe por parámetro un array (puede ser animales, países, frutas, colores) y devuelve aleatoriamente cualquier elemento dentro del array
  palabraOculta = array[Math.floor(Math.random() * array.length)];
  console.log(palabraOculta);

  //Aquí se muestra los guiones bajos que va a tener la palabra que se va a adivinar
  for (let i = 0; i < palabraOculta.length; i++) {
    palabraAdivinar += "_ ";
  }
  document.querySelector("#frase").innerHTML = palabraAdivinar;
}

//Funcion para comprobar
function comprobar() {
  let letra = document.querySelector("#letra").value.toLowerCase();
  palabraOculta = palabraOculta.toLowerCase();
  let nuevo = "";
  for (let i = 0; i < palabraOculta.length; i++) {
    if (letra == palabraOculta[i]) {
      nuevo += letra + " ";
    } else {
      nuevo += palabraAdivinar[i * 2] + " ";
    }
  }
  if (nuevo == palabraAdivinar) {
    vidas--;
    document.querySelector("#vida").innerHTML = `Te quedan ${vidas} vidas`;
  }
  palabraAdivinar = nuevo;
  document.querySelector("#frase").innerHTML = palabraAdivinar;

  if (vidas == 0) {
    document.querySelector("#mensaje").innerHTML = "¡Perdiste! 😔";
    document.querySelector("#mensaje").style.color = "red";
  }

  if (palabraAdivinar.search("_") == -1) {
    document.querySelector("#mensaje").innerHTML = "¡Ganaste! 😊";
    document.querySelector("#mensaje").style.color = "green";
  }

  //Para limpiar la caja de las letras automáticamente
  document.querySelector("#letra").value = "";
  document.querySelector("#letra").focus();

  //Se llama a la funcion que dibuja el muñeco con canvas
  dibujar();
}

//Eventos
btnAnimales.addEventListener("click", () => {
  inicio(animales);
});

btnCiudades.addEventListener("click", () => {
  inicio(paises);
});

btnFrutas.addEventListener("click", () => {
  inicio(frutas);
});

btnColores.addEventListener("click", () => {
  inicio(colores);
});

btnComprobar.addEventListener("click", () => {
  comprobar();
  setTimeout(() => {
    document.querySelector("#mensaje").innerHTML = " ";
  }, 7000);
});

//funcion que dibuja en el canvas
function dibujar() {
  let canvas = document.querySelector("#canvas");
  if (canvas.getContext) {
    let pincel = canvas.getContext("2d");
    pincel.lineWidth = 2; //Grosor de la línea del dibujo
    pincel.strokeStyle = "orangered"; //Color de la línea

    //Esto dibuja la base del ahorcado
    pincel.beginPath();
    pincel.moveTo(30, 200);
    pincel.lineTo(30, 5);
    pincel.lineTo(150, 5);
    pincel.lineTo(150, 10);
    pincel.stroke();

    if (vidas <= 3) {
      //Dibujo de la cabeza
      pincel.beginPath(); //para comenzar una nueva figura
      pincel.arc(150, 30, 20, 0, Math.PI * 2); //para crear el circulo de la cabeza
      pincel.stroke(); //Para dibujar el circulo
    }

    if (vidas <= 2) {
      //Dibujo del cuerpo
      pincel.beginPath();
      pincel.moveTo(150, 50); //Punto inicial de la línea
      pincel.lineTo(150, 100); //Dirección donde termina la línea
      pincel.stroke();
    }

    if (vidas <= 1) {
      //Dibujo brazo izquierdo
      pincel.beginPath();
      pincel.moveTo(150, 50); //Punto inicial de la línea
      pincel.lineTo(120, 90); //Dirección donde termina la línea
      pincel.stroke();

      //Dibujo brazo derecho
      pincel.beginPath();
      pincel.moveTo(150, 50); //Punto inicial de la línea
      pincel.lineTo(180, 90); //Dirección donde termina la línea
      pincel.stroke();
    }

    if (vidas == 0) {
      //Dibujo pierna izquierda
      pincel.beginPath();
      pincel.moveTo(150, 100); //Punto inicial de la línea
      pincel.lineTo(120, 140); //Dirección donde termina la línea
      pincel.stroke();

      //Dibujo pierna derecha
      pincel.beginPath();
      pincel.moveTo(150, 100); //Punto inicial de la línea
      pincel.lineTo(175, 140); //Dirección donde termina la línea
      pincel.stroke();
    }
  }
}
