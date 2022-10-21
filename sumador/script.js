//Tomamos los elementos del DOM
const cantidad1 = document.querySelector("#cantidad1");
const cantidad2 = document.querySelector("#cantidad2");
const cantidad3 = document.querySelector("#cantidad3");
const resultado = document.querySelector("#resultado");

//Agrego el evento onchange que detecta cuando hay un cambio en el input
cantidad1.onchange = function () {
  //Si el input queda vació le asigno 0
  if (cantidad1.value === "") {
    cantidad1.value = 0;
  }

  //Llamamos a la funcion sumar que suma los tres valores
  sumar();
}

cantidad2.onchange = function () {
  //Si el input queda vació le asigno 0
  if (cantidad2.value === "") {
    cantidad2.value = 0;
  }

  //Llamamos a la funcion sumar que suma los tres valores
  sumar();
}

cantidad3.onchange = function () {
  //Si el input queda vació le asigno 0
  if (cantidad3.value === "") {
    cantidad3.value = 0;
  }

  //Llamamos a la funcion sumar que suma los tres valores
  sumar();
}

//Funcion sumar
function sumar() {
  //Con .value tomo el valor del input
  //parseFloat sirve para convertir el valor a numérico decimal, ya que el input lo guarda como string. Es necesario convertir para poder realizar la suma  
  let total = parseFloat(cantidad1.value) + parseFloat(cantidad2.value) + parseFloat(cantidad3.value);
  resultado.value = total;
};


