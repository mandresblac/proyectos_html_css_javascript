const formulario = document.querySelector("#formulario");
const input = document.querySelector("#input-tarea");
const btn = document.querySelector("#btn");
const resultado = document.querySelector(".tareas-agregadas #resultado");

const tareas = [];

btn.addEventListener("click", validaciones);

function validaciones(e) {
    e.preventDefault();

    if(input.value === ""){
        imprimirAlerta("Campo obligatorio")
    }else{
        crearTarea();
    }
}

function crearTarea() {
    const tareaAgregada = {
        id: Date.now(),
        nombre: input.value
    };

    tareas.push(tareaAgregada);
    console.log(tareas)

    //Creamos elemento "li" de Html con nombre tarea
    const tarea = document.createElement("li");
    tarea.classList.add("tarea");

    // Creamos boton tipo checkbox
    const btnCheck = document.createElement("input");
    btnCheck.type = "checkbox";

    //Creamos un elemento "p" para el texto
    const parrafo = document.createElement("p")
    parrafo.textContent = input.value;


    // Creamos el boton de eliminar la tarea
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.classList.add("btn-eliminar");

    // Funcionalidad del boton par eliminar tarea
    btnEliminar.onclick = () => eliminarTarea();

    tarea.appendChild(btnCheck);
    tarea.appendChild(parrafo);
    tarea.appendChild(btnEliminar);

    resultado.appendChild(tarea);

    setTimeout(() => {
        formulario.reset();
        input.focus();
    }, 3000);
}

function imprimirAlerta(mensaje) {
    const existeAlerta = document.querySelector(".alerta")

    if (!existeAlerta) {
        //Creamos un p de alerta
        const alerta = document.createElement("p");
        alerta.classList.add("alerta"); //Agregamos estilos del archivo style.css

        //Agregamos mensaje
        alerta.textContent = mensaje;

        //Insertamos mensaje en el documento HTML
        formulario.appendChild(alerta);

        //Quitamos el mensaje del HTML después de 2 segundos y ponemos el foco en el input estatura
        setTimeout(() => {
            alerta.remove();
        }, 2000);
    }


}