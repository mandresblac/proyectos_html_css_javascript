//Estructura que mantiene las palabras del juego
let bd = new Array(3);
bd[0] = ["PERA", "BANANA", "NARANJA", "MELON", "SANDIA", "MANDARINA", "KIWI"];
bd[1] = [
  "PIANO",
  "GUITARRA",
  "VIOLIN",
  "BAJO",
  "TROMPETA",
  "SAXOFON",
  "BATERIA",
];
bd[2] = [
  "LEON",
  "GALLINA",
  "PERRO",
  "LEOPARDO",
  "MURCIELAGO",
  "MONO",
  "ELEFANTE",
];
bd[3] = [
  "ARGENTINA",
  "PERU",
  "CHILE",
  "COLOMBIA",
  "ESPAÑA",
  "MEXICO",
  "ECUADOR",
];

//CATEGORÍAS
let categorias = ["FRUTAS", "MUSICA", "ANIMALES", "PAISES"];

//Cantidad de palabras con las que se jugará cada categoría
const cantidadPalabras = 5;

//Este arreglo guarda las 5 palabras para jugar
let palabras = [];

//Este arreglo guarda las palabras desordenadas del arreglo palabras
let desordenadas = [];

//Mantengo el nivel actual
let pos = 0;

//Tomo una categoría y selecciono 5 palabras random para jugar
function agregarPalabras(categoria) {
  for (let i = 0; i < cantidadPalabras; i++) {
    let x = Math.floor(Math.random() * categoria.length);
    palabras.push(categoria[x]);

    //Elimino del arreglo categoría para que la proxima ya no este para elegir
    categoria.splice(x, 1);
  }
}

//La primera vez le envió la categoría frutas
agregarPalabras(bd[pos]);

//Funcion para desordenar las palabras. Quedaran guardadas en el arreglo desordenadas
function desordenarPalabras() {
  for (let i = 0; i < palabras.length; i++) {
    //Convertimos en un arreglo
    let palabra = palabras[i];
    palabra = palabra.split("");

    let palabraDesordenada;
    palabraDesordenada = palabra.sort(function () {
      return Math.random() - 0.5;
    });

    //Convertimos el arreglo a string (ya que nos quedo letra y coma)
    palabraDesordenada = palabraDesordenada.toString();
    //Quitamos las comas
    palabraDesordenada = palabraDesordenada.replace(/,/g, "");

    //Controlamos que la palabra desordenada no haya quedado igual que la ordenada
    if (palabraDesordenada == palabras[i]) {
      i = i - 1;
    } else {
      //Guardamos la palabra desordenada
      desordenadas.push(palabraDesordenada);
    }
  }
}

//Funcion para agregar la palabra y el input
function agregarPalabra() {
  //Agregamos el titulo
  let h2 = document.createElement("h2");
  h2.textContent = categorias[pos];
  document.querySelector("#contenedor").appendChild(h2);
  for (var i = 0; i < desordenadas.length; i++) {
    let div = document.createElement("div");
    div.className = "fila";
    let palabra = document.createElement("div");
    palabra.textContent = desordenadas[i];
    palabra.className = "palabra";
    div.appendChild(palabra);
    let input = document.createElement("input");
    input.id = i;
    //Al input se le agrega el evento onkeyup para detectar cuando se presiona una tecla
    input.setAttribute("onkeyup", "corregir(" + i + ")");
    div.appendChild(input);
    document.querySelector("#contenedor").appendChild(div);
  }
}

desordenarPalabras();
agregarPalabra();

//Funcion para corregir la palabra hasta el momento ingresada
function corregir(i) {
  p = document.getElementById(i).value;
  //Caso que no haya ingresado nada
  if (p == "") {
    return;
  }
  if (p == palabras[i]) {
    //Caso que coincida
    document.getElementById(i).className = "correcta";
    //Controlamos si termino
    controlarFin();
  } else {
    document.getElementById(i).className = "";
  }
}

let btnCreado = false;
function controlarFin() {
  //Obtengo la cantidad de clases 'correcta' que hay hasta el momento
  let total = document.getElementsByClassName("correcta").length;
  if (total == cantidadPalabras && btnCreado == false) {
    //Se completaron las palabras
    let button = document.createElement("button");
    button.textContent = "Siguiente";
    button.setAttribute("onclick", "siguiente()");
    document.querySelector("#contenedor").appendChild(button);
    btnCreado = true;

    //Desbloqueamos el nivel
    let niveles = document.getElementsByClassName("nivel");
    niveles[pos].classList = "nivel completado";
  }
}

function siguiente() {
  //Asi limpio los arreglos palabras y desordenadas, para cargarlos con las nuevas palabras
  palabras.length = 0;
  desordenadas.length = 0;
  document.querySelector("#contenedor").textContent = "";
  pos++;
  //Controlo si se termino el juego
  if (pos < bd.length) {
    //No termino
    btnCreado = false;
    agregarPalabras(bd[pos]);
    desordenarPalabras();
    agregarPalabra();
  } else {
    //Termino
    let h2 = document.createElement("h2");
    h2.textContent = "JUEGO FINALIZADO! MUY BIEN!!";
    document.querySelector("#contenedor").appendChild(h2);
  }
}
