//variables que almacenaran los dos números de la multiplicación
let num1, num2;

//variable para guardar el resultado de la multiplicación
let respuesta;

//variable donde se carga la opción correcta
let indiceOpcionCorrecta;

//Tomo los elementos del HTML que voy a manipular con Javascript
let txtMultiplica = document.querySelector("#multiplicacion");
let op1 = document.querySelector("#op1");
let op2 = document.querySelector("#op2");
let op3 = document.querySelector("#op3");
let txtMsj = document.querySelector("#msj");
let txtResultado = document.querySelector("#resultado");

function comenzar() {
    //Cada vez que inicie limpio los campos
    txtResultado.innerHTML = "?";
    txtMsj.innerHTML = "";

    //genero la multiplicación aleatoria entre 0 y 9
    num1 = Math.round(Math.random() * 9);
    num2 = Math.round(Math.random() * 9);
    respuesta = num1 * num2;

    //Asignamos la multiplicación para que se visualice
    txtMultiplica.innerHTML = `${num1} x ${num2} =`;

    //Genero un número aleatorio entre 0 y 2 para colocar la opción correcta
    indiceOpcionCorrecta = Math.round(Math.random() * 2);
    if (indiceOpcionCorrecta === 0) { //Ponemos la opción correcta en la primera posición
        op1.innerHTML = respuesta;
        //Al resto le doy números cercanos a la respuesta correcta
        op2.innerHTML = respuesta + 1;
        op3.innerHTML = respuesta - 1;
    }
    if (indiceOpcionCorrecta === 1) { //Ponemos la opción correcta en la segunda posición
        op2.innerHTML = respuesta;
        //Al resto le doy números cercanos a la respuesta correcta
        op1.innerHTML = respuesta + 2;
        op3.innerHTML = respuesta - 1;
    }
    if (indiceOpcionCorrecta === 2) { //Ponemos la opción correcta en la tercera posición
        op3.innerHTML = respuesta;
        //Al resto le doy números cercanos a la respuesta correcta
        op1.innerHTML = respuesta + 1;
        op2.innerHTML = respuesta - 1;
    }
}

//Funcion para chequear la respuesta elegida del usuario
function controlarRespuesta(opcionElegida) {
    //Cargamos la respuesta elegida en la operación
    txtResultado.innerHTML = opcionElegida.innerHTML;

    //Controlamos si esta bien
    if (respuesta == opcionElegida.innerHTML) {
        txtMsj.innerHTML = "EXCELENTE!!!";
        txtMsj.style.color = "green";
        //Esperamos 2 segundos y volvemos a llamar a la función comenzar
        setTimeout(comenzar, 2000);
    }
    else{
        txtMsj.innerHTML = "INTENTA DE NUEVO!!!";
        txtMsj.style.color = "red";
        //Esperamos 2 segundos y limpiamos los campos
        setTimeout(limpiar, 2000);
    }
}

function limpiar() {
    txtResultado.innerHTML = "?";
    txtMsj.innerHTML = "";
}

comenzar();


