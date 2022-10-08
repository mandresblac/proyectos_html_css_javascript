//URL video en Youtube https://www.youtube.com/watch?v=-V643EmQnCM

//Con el método querySelectorAll le estamos diciendo a javasScript que vaya al documento html y traiga todos los elementos que tienen data-numero
//querySelectorAll = Si son mas de un elemento
//querySelector = Si es solo un elemento
const botonNumero = document.querySelectorAll("[data-numero]");
const botonOperador = document.querySelectorAll("[data-operador]");
const botonIgual = document.querySelector('[data-igual]');
const botonBorrarTodo = document.querySelector('[data-borrar-todo]');
const botonBorrar = document.querySelector('[data-borrar]');
const textoValorSuperior = document.querySelector('[data-valor-superior]');
const textoValorInferior = document.querySelector('[data-valor-inferior]');


//Creamos la clase Calculadora
class Calculadora {
    //Método constructor
    constructor(textoValorInferior, textoValorSuperior){
        this.textoValorInferior = textoValorInferior;
        this.textoValorSuperior = textoValorSuperior;
        this.valorInferior = "";
        this.valorSuperior = "";
        this.operador = undefined;
    }

    //Método agregar número
    agregarNumero(numero){
        if(numero === "." && this.valorInferior.includes(".")) return;
        this.valorInferior = this.valorInferior + numero;
    }

    //Método imprimir display
    imprimirDisplay(){
        this.textoValorInferior.innerText = this.valorInferior;
        this.textoValorSuperior.innerText = this.valorSuperior;
    }

    //Método para borrar
    borrar(){
        this.valorInferior = this.valorInferior.slice( 0, -1)//El método slice() retorna una posición dentro de un string, y recibe 2 valores, el primero es la posición y el segundo hmmmmm???
    }

    //Método para elegir operación
    elegirOperacion(operador){
        if(this.valorInferior === "") return;
        if(this.valorSuperior != ""){
            this.realizarCalculo();
        }
        this.operador = operador;
        this.valorSuperior = this.valorInferior;
        this.valorInferior = "";
    }

    //Método para realizar los cálculos
    realizarCalculo(){
        //La variable resultado almacena los parámetros
        let resultado;
        //La variable conversionValorSuperior almacena el valor-superior del documento html que es un string y lo castea (o lo convierte de un tipo de dato a otro) en este caso lo convierte a un numero flotante con la función parseFloat()
        let conversionValorSuperior = parseFloat(this.valorSuperior);
        let conversionValorInferior = parseFloat(this.valorInferior);

        if(isNaN(conversionValorSuperior) || isNaN(conversionValorInferior)) return;

        //Sentencia switch que se encarga de realizar las operaciones suma, resta, multiplicación y división
        switch(this.operador) {
            case "+":
                resultado = conversionValorSuperior + conversionValorInferior;
                break;
            case "-":
                resultado = conversionValorSuperior - conversionValorInferior;
                break;
            case "*":
                resultado = conversionValorSuperior * conversionValorInferior;
                break;
            case "/":
                resultado = conversionValorSuperior / conversionValorInferior;
                break;
            default:
                return;
        }
        
        this.valorInferior = resultado;
        this.operador = undefined;
        this.valorSuperior = "";        
    }

    //Método para limpiar la pantalla
    limpiarPantalla(){
        this.valorInferior = "";
        this.valorSuperior = "";
        this.operador = undefined;
    }

}


const calculadora = new Calculadora(textoValorInferior ,textoValorSuperior);


botonNumero.forEach(boton => {
    boton.addEventListener("click", () => {
        calculadora.agregarNumero(boton.innerText);
        calculadora.imprimirDisplay();
    })
})

//Función para el boto borrar (DEL)
botonBorrar.addEventListener("click", () => {
    calculadora.borrar();
    calculadora.imprimirDisplay();
})


//Función para los operadores
botonOperador.forEach(boton => {
    boton.addEventListener("click", () => {
        calculadora.elegirOperacion(boton.innerText);
        calculadora.imprimirDisplay();
    })
})

//Función para el boton igual
botonIgual.addEventListener("click", () => {
    calculadora.realizarCalculo();
    calculadora.imprimirDisplay();
})

//Función para el boton AC que borra todo
botonBorrarTodo.addEventListener("click", () => {
    calculadora.limpiarPantalla();
    calculadora.imprimirDisplay();
})