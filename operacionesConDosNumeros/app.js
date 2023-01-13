function sumar (){
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;
  //La función global isNaN (is Not a Number) verifica si el valor que le pasamos no es un número válido, osea que es un strig o cualquier otro tipo de dato diferente a un número
  //Controla si el usuario ingresa un valor que no sea número en cualquiera de las dos casilla
  if(isNaN(num1) || isNaN(num2)) {
    document.querySelector("#result-suma").innerHTML = "Uno de los valores ingresados no es un número";
    document.querySelector("#result-suma").style.color = "red";
  }
  else if(num1 === "" || num2 === "") {//Controla si el usuario no ingresa ningun dato en las dos casillas
    document.querySelector("#result-suma").innerHTML = "No ingresaste ningun número";
    document.querySelector("#result-suma").style.color = "red";
  }
  else{
    //Suma
    let resultado = parseFloat(num1) + parseFloat(num2);
    document.querySelector("#result-suma").innerHTML = resultado;
    document.querySelector("#result-suma").style.color = "black";
  };
};

function restar (){
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;

  //La función global isNaN (is Not a Number) verifica si el valor que le pasamos no es un número válido, osea que es un strig o caulaquir otro tipod e dato diferente a un número
  //Controla si el usuario ingrea un valor que no sea número en cualquiera de las dos casilla
  if(isNaN(num1) || isNaN(num2)) {
    document.querySelector("#result-resta").innerHTML = "Uno de los valores ingresados no es un número";
    document.querySelector("#result-resta").style.color = "red";
  }
  else if(num1 === "" || num2 === "") {//Controla si el usuario no ingresa ningun dato en las dos casillas
    document.querySelector("#result-resta").innerHTML = "No ingresaste ningun número";
    document.querySelector("#result-resta").style.color = "red";
  }
  else{
    //Suma
    let resultado = parseFloat(num1) - parseFloat(num2);
    document.querySelector("#result-resta").innerHTML = resultado;
    document.querySelector("#result-resta").style.color = "black";
  };
};

function multiplicar (){
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;

  //La función global isNaN (is Not a Number) verifica si el valor que le pasamos no es un número válido, osea que es un strig o caulaquir otro tipod e dato diferente a un número
  //Controla si el usuario ingrea un valor que no sea número en cualquiera de las dos casilla
  if(isNaN(num1) || isNaN(num2)) {
    document.querySelector("#result-multiplicar").innerHTML = "Uno de los valores ingresados no es un número";
    document.querySelector("#result-multiplicar").style.color = "red";
  }
  else if(num1 === "" || num2 === "") {//Controla si el usuario no ingresa ningun dato en las dos casillas
    document.querySelector("#result-multiplicar").innerHTML = "No ingresaste ningun número";
    document.querySelector("#result-multiplicar").style.color = "red";
  }
  else{
    //Suma
    let resultado = parseFloat(num1) * parseFloat(num2);
    document.querySelector("#result-multiplicar").innerHTML = resultado;
    document.querySelector("#result-multiplicar").style.color = "black";
  };
};

function dividir (){
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;

  //La función global isNaN (is Not a Number) verifica si el valor que le pasamos no es un número válido, osea que es un strig o caulaquir otro tipod e dato diferente a un número
  //Controla si el usuario ingrea un valor que no sea número en cualquiera de las dos casilla
  if(isNaN(num1) || isNaN(num2)) {
    document.querySelector("#result-dividir").innerHTML = "Uno de los valores ingresados no es un número";
    document.querySelector("#result-dividir").style.color = "red";
  }
  else if(num1 === "" || num2 === "") {//Controla si el usuario no ingresa ningun dato en las dos casillas
    document.querySelector("#result-dividir").innerHTML = "No ingresaste ningun número";
    document.querySelector("#result-dividir").style.color = "red";
  }
  else{
    //Suma
    let resultado = parseFloat(num1) / parseFloat(num2);
    document.querySelector("#result-dividir").innerHTML = resultado;
    document.querySelector("#result-dividir").style.color = "black";
  };
};

//Eventos
document.querySelector("#btn-sumar").addEventListener("click", () => {
  //Desaparece el boton sumar
  document.querySelector("#btn-sumar").style.display = "none";
  //Llamada a la funcion sumar
  sumar();
  setTimeout(() => {
    //Para limpiar los elementos inputs con id num1 y num2
    document.querySelector("#num1").value = "";
    document.querySelector("#num1").focus();
    document.querySelector("#num2").value = "";
    //Para limpiar el elemento p con id result-suma
    document.querySelector("#result-suma").innerHTML = "";
    //Aparece el boton sumar despues de 4 segundos
    document.querySelector("#btn-sumar").style.display = "block";
  }, 4000)
});

document.querySelector("#btn-restar").addEventListener("click", () => {
  //Desaparece el boton sumar
  document.querySelector("#btn-restar").style.display = "none";
  //Llamada a la cuncion restar
  restar();
  setTimeout(() => {
    //Para limpiar los elementos inputs con id num1 y num2
    document.querySelector("#num1").value = "";
    document.querySelector("#num1").focus();
    document.querySelector("#num2").value = "";
    //Para limpiar el elemento p con id result-suma
    document.querySelector("#result-resta").innerHTML = "";
    //Aparece el boton restar despues de 4 segundos
    document.querySelector("#btn-restar").style.display = "block";
  }, 4000)
});

document.querySelector("#btn-multiplicar").addEventListener("click", () => {
  //Desaparece el boton muliplicar
  document.querySelector("#btn-multiplicar").style.display = "none";
  //Llamada a la cuncion restar
  multiplicar();
  setTimeout(() => {
    //Para limpiar los elementos inputs con id num1 y num2
    document.querySelector("#num1").value = "";
    document.querySelector("#num1").focus();
    document.querySelector("#num2").value = "";
    //Para limpiar el elemento p con id result-suma
    document.querySelector("#result-multiplicar").innerHTML = "";
    //Aparece el boton multiplicar despues de 4 segundos
    document.querySelector("#btn-multiplicar").style.display = "block";
  }, 4000)
});

document.querySelector("#btn-dividir").addEventListener("click", () => {
  //Desaparece el boton dividir
  document.querySelector("#btn-dividir").style.display = "none";
  //Llamada a la cuncion restar
  dividir();
  setTimeout(() => {
    //Para limpiar los elementos inputs con id num1 y num2
    document.querySelector("#num1").value = "";
    document.querySelector("#num1").focus();
    document.querySelector("#num2").value = "";
    //Para limpiar el elemento p con id result-suma
    document.querySelector("#result-dividir").innerHTML = "";
    //Aparece el boton dividir despues de 4 segundos
    document.querySelector("#btn-dividir").style.display = "block";
  }, 4000)
});