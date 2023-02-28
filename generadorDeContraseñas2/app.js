/* ------------------------ VARIABLES -------------------------- */
const resultado = document.querySelector("#result");
const inputLongitud = document.querySelector("#length");
const inputMinusculas = document.querySelector("#lowercase");
const inputMayusculas = document.querySelector("#uppercase");
const inputNumeros = document.querySelector("#numbers");
const inputSimbolos = document.querySelector("#symbols");
const btnGenerar = document.querySelector("#generate");

const objetoAleatorio = {
  minusculas: minusculasAleatorio(),
  mayusculas: mayusculasAleatorio(),
  numeros: numerosAleatorio(),
  simbolos: simbolosAleatorio()
}

/* ------------------------ EVENT LISTENER -------------------------- */

function eventListener() {
  btnGenerar.addEventListener("click", obtenerValores);
}

// Llamamos la función que ejecuta todos los event listeners
eventListener();

/* ------------------------ FUNCIONES -------------------------- */

//Función para mostrar un elemento aleatorio de un array
function mostrarValorAleatorio(arreglo) {
  let aleatorio = Math.floor(Math.random() * arreglo.length);
  let valorAleatorio = arreglo[aleatorio];

  return valorAleatorio;
}

function obtenerValores(e) {
  e.preventDefault();

  const longitud = inputLongitud.value;
  const obtenerMinusculas = inputMinusculas.checked;
  const obtenerMayusculas = inputMayusculas.checked;
  const obtenerNumeros = inputNumeros.checked;
  const obtenerSimbolos = inputSimbolos.checked;

  resultado.innerHTML = generarPassword(
    obtenerMinusculas,
    obtenerMayusculas,
    obtenerNumeros,
    obtenerSimbolos,
    longitud
  );
}

function generarPassword(minusculas, mayusculas, numeros, simbolos, longitud) {
  const passwordGenerado = "";
  const cuentaTipos = minusculas + mayusculas + numeros + simbolos;
  const arrayTipos = [{minusculas}, {mayusculas}, {numeros}, {simbolos}].filter(
    (item) => Object.values(item)[0]);

  if (cuentaTipos === 0) {
    return "";
  }

  for (let i = 0; i < length; i += cuentaTipos) {
    arrayTipos.forEach((type) => {
      const funcName = Object.keys(type)[0];
      passwordGenerado += objetoAleatorio[funcName]();
    });
  }

  const passwordFinal = passwordGenerado.slice(0, longitud);

  return passwordFinal;
}

function minusculasAleatorio() {
  const stringMinusculas = "abcdefghijklmnopqrstuvwxyz";
  //Convertimos stringMinusculas a un array con el spread operator [...minúsculas]
  const arrayMinusculas = [...stringMinusculas];

  return mostrarValorAleatorio(arrayMinusculas);
}

function mayusculasAleatorio() {
  const stringMayusculas = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
  const arrayMayusculas = stringMayusculas.split(",");//Otra forma de convertir el stringMayusculas a un array es con el método .split() de los string, pero el string debe llevar comas "," para pasárselo como parámetro separador al método .split(",")

  return mostrarValorAleatorio(arrayMayusculas);
}

function numerosAleatorio() {
  const stringNumeros = "1,2,3,4,5,6,7,8,9,0";
  //Convertimos el stringNumeros a un array con el spread operator [...minúsculas]
  const arrayNumeros = stringNumeros.split(",");

  return mostrarValorAleatorio(arrayNumeros);
}

function simbolosAleatorio() {
  const stringSimbolos = "!@#$%^&*(){}[]=<>/,.:;?¿";
  const arraySimbolos = [...stringSimbolos];

  return mostrarValorAleatorio(arraySimbolos);
}