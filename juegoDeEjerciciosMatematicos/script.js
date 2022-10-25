//Seleccionamos los elementos del DOM
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion = document.querySelector("#msj_correccion");
let operacion = document.querySelector("#operacion");
let operacion_actual;

//En n1 y n2 guardamos los números aleatorios de cada operación 
let n1, n2;

//Funcion suma
function btnSumar() {
  //Limpiamos el div contenedor de las correcciones
  msj_correccion.innerHTML = "";

  //Agregamos la clase activa al boton suma y la quitamos del resto
  activarBoton("suma");
  operacion_actual = "+";

  //Asignamos la operación suma a etiqueta
  operacion.innerHTML = " + ";

  //Generamos los números aleatorios de la suma
  nuevaSuma();
}

function nuevaSuma() {
  //Generamos dos números aleatorios entre 0 y 9
  n1 = parseInt(Math.random() * 10);
  n2 = parseInt(Math.random() * 10);

  //Asignamos los números a las etiquetas 
  num1.innerHTML = n1;
  num2.innerHTML = n2;

  //Colocamos el cursor en el input
  respuesta_usuario.focus();
}

//Funcion producto
function btnProducto() {
  //Limpiamos el div contenedor de las correcciones
  msj_correccion.innerHTML = "";

  //Agregamos la clase activa al boton producto y la quitamos del resto
  activarBoton("producto");
  operacion_actual = "*";

  //Asignamos la operación suma a etiqueta
  operacion.innerHTML = " X ";

  //Generamos los números aleatorios de la suma
  nuevoProducto();
}

function nuevoProducto() {
  //Generamos dos números aleatorios entre 0 y 9
  n1 = parseInt(Math.random() * 10);
  n2 = parseInt(Math.random() * 10);

  //Asignamos los números a las etiquetas 
  num1.innerHTML = n1;
  num2.innerHTML = n2;

  //Colocamos el cursor en el input
  respuesta_usuario.focus();
}

//Funcion resta
function btnResta() {
  //Limpiamos el div contenedor de las correcciones
  msj_correccion.innerHTML = "";

  //Agregamos la clase activa al boton suma y la quitamos del resto
  activarBoton("resta");
  operacion_actual = "-";

  //Asignamos la operación suma a etiqueta
  operacion.innerHTML = " - ";

  //Generamos los números aleatorios de la suma
  nuevaResta();
}

function nuevaResta() {
  //Generamos un número aleatorios entre 5 y 10
  n1 = parseInt(Math.random() * 5 * 5);
  //Generamos un número aleatorios entre 0 y 5
  n2 = parseInt(Math.random() * 5);

  //Asignamos los números a las etiquetas 
  num1.innerHTML = n1;
  num2.innerHTML = n2;

  //Colocamos el cursor en el input
  respuesta_usuario.focus();
}

//Funcion division
function btnDivision() {
  //Limpiamos el div contenedor de las correcciones
  msj_correccion.innerHTML = "";

  //Agregamos la clase activa al boton suma y la quitamos del resto
  activarBoton("division");
  operacion_actual = "/";

  //Asignamos la operación suma a etiqueta
  operacion.innerHTML = " / ";

  //Generamos los números aleatorios de la suma
  nuevaDivision();
}

function nuevaDivision(){
  //Aquí guardamos los divisores del número a dividir
  let divisores = [];

  //Generamos un número aleatorio entre 1 y 10
  n1 = parseInt(Math.random() * 9 + 1);

  //Encontramos los divisores del número generado y lo guardamos en el arreglo 
  for(let i= 1; i <= n1; i++){
    if(n1 % i === 0){//Es divisor
      divisores.push(i);
    }
  }

  //Seleccionamos una posición aleatoria de los números que son divisores
  let pos = parseInt(Math.random() * (divisores.length));
  
  n2 = divisores[pos];
  num1.innerHTML = n1;
  num2.innerHTML = n2;
  respuesta_usuario.focus();
}

//Funcion que controla si la respuesta es correcta
function corregir() {
  //Si el usuario no ha ingresado nada no continuo
  if(respuesta_usuario.value === "") {
    return;
  }

  let solucion;

  //Armo la operacion que se genera en una variable y veo cual es su resultado
  //En este caso el operador + es para concatenar las cadenas
  let operacion = n1 + operacion_actual +n2;
  solucion = eval(operacion);

  //Creo un elemento i para agregar el icono de correccion o incorreccion
  let i = document.createElement("i");

  //Controlo si coincide lo que el usuario respondió con la solución
  if(respuesta_usuario.value === solucion){
    i.className = "fa-regular fa-face-grin";
  }
  else{
    i.className = "fa-regular fa-face-frown";
  }

  //Agrego el elemento al contenedor de las correcciones
  msj_correccion.appendChild(i);

  //Controlo que tipo de operacion estoy para generar una nueva operacion
  
}


//Esta funcion la creamos luego, cuando tengamos listos los estilos
function activarBoton(idBoton) {
  
}
