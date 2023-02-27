const minusculas = "abcdefghijklmnopqrstuvwxyz";
const mayusculas = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
const numeros = "1,2,3,4,5,6,7,8,9,0";

//Convertimos el string minusculas a un array von el spread operatos [...minusculas]
const arrayMinusculas = [...minusculas];

//Otra forma de convertir el string minúsculas a un array es con el método .split() de los string, pero el string debe llevar comas "," para pasárselo como parámetro separador al método .split(",")
const arrayMayusculas = mayusculas.split(",");

const arrayNumeros = numeros.split(",");

/* ------------------------ FUNCIONES -------------------------- */

//Función para mostrar un elemento aleatorio de un array
function mostrarValorAleatorio(arreglo) {
  let aleatorio = Math.floor(Math.random() * arreglo.length);
  let valorAleatorio = arreglo[aleatorio];

  return valorAleatorio;
}

console.log(mostrarValorAleatorio(arrayMinusculas));
console.log(mostrarValorAleatorio(arrayMayusculas));
console.log(mostrarValorAleatorio(arrayNumeros));
