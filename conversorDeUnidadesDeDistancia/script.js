let valor = document.querySelector("#valor");
let txtResultado = document.querySelector("#resultado");
let unidad1 = document.querySelector("#unidad1");
let unidad2 = document.querySelector("#unidad2");

//Detecto el evento cuando se escribe el número y llamo a la función convertir
//El evento "keyup" es iniciado cuando la tecla es soltada.
valor.addEventListener("keyup", convertir);

//Detecto el evento cuando se selecciona una unidad
unidad1.addEventListener("change", convertir);

//Detecto el evento cuando se selecciona una unidad
unidad2.addEventListener("change", convertir);

//Variable donde se calculara el resultado
let resultado;

//Funcion que realiza el calculo
function convertir() {
    //Caso de que no haya nada en el input
    if (valor.value == "") {
        return;
    }

    //Tomo el número del input y lo convierto a numerico
    numero = valor.value;
    numero = parseFloat(numero);

    //Kilometros
    if (unidad1.value == "kilometro" && unidad2.value == "kilometro") {
        resultado = numero * 1;
        txtResultado.innerHTML = `${numero} Kilometro/s <br> equivalen a <br> ${resultado} Kilometro/s`;
    }

    if (unidad1.value == "kilometro" && unidad2.value == "metro") {
        resultado = numero * 1000;
        txtResultado.innerHTML = `${numero} Kilometro/s <br> equivalen a <br> ${resultado} Metro/s`;
    }

    if (unidad1.value == "kilometro" && unidad2.value == "centimetro") {
        resultado = numero * 100000;
        txtResultado.innerHTML = `${numero} Kilometro/s <br> equivalen a <br> ${resultado} Centimetro/s`;
    }


    //Metros
    if (unidad1.value == "metro" && unidad2.value == "kilometro") {
        resultado = numero / 1000   ;
        txtResultado.innerHTML = `${numero} Metro/s <br> equivalen a <br> ${resultado} Kilometro/s`;
    }

    if (unidad1.value == "metro" && unidad2.value == "metro") {
        resultado = numero * 1;
        txtResultado.innerHTML = `${numero} Metro/s <br> equivalen a <br> ${resultado} Metro/s`;
    }

    if (unidad1.value == "metro" && unidad2.value == "centimetro") {
        resultado = numero * 100;
        txtResultado.innerHTML = `${numero} Metro/s <br> equivalen a <br> ${resultado} Centimetro/s`;
    }


    //Centimetros
    if (unidad1.value == "centimetro" && unidad2.value == "kilometro") {
        resultado = numero / 100000;
        txtResultado.innerHTML = `${numero} Centimetro/s <br> equivalen a <br> ${resultado} Kilometro/s`;
    }

    if (unidad1.value == "centimetro" && unidad2.value == "metro") {
        resultado = numero / 100;
        txtResultado.innerHTML = `${numero} Centimetro/s <br> equivalen a <br> ${resultado} Metro/s`;
    }

    if (unidad1.value == "centimetro" && unidad2.value == "centimetro") {
        resultado = numero * 1;
        txtResultado.innerHTML = `${numero} Centimetro/s <br> equivalen a <br> ${resultado} Centimetro/s`;
    }
};

