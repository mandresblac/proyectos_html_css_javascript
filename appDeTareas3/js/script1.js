// ------------------ VARIABLES Y SELECTORES ------------------ //
const formulario = document.querySelector("#formulario");
const input = document.querySelector("#input-tarea");
const btn = document.querySelector("#btn");
const resultado = document.querySelector(".tareas-agregadas #resultado");

// Array vacio donde se almacenaran las tareas
const tareas = [];

// ------------------------- EVENTOS ------------------------- //

btn.addEventListener("click", validaciones);


// ------------------------ FUNCIONES ------------------------ //

function validaciones(e) {
    e.preventDefault();

    if(input.value === ""){
        imprimirAlerta("Campo obligatorio")
    }else{
        crearTarea();
    }

}

function crearTarea() {
    //Objeto que contendra las tareas agregadas por el usuario
    const tareaAgregada = {
        id: Date.now(),
        nombre: input.value
    };

    // Despues que el usuario agrega las tareas y estas se almacenan en el objeto "tareaAgregada", procedemos a insertar este objeto en el array "tareas" que esta vacio
    tareas.push(tareaAgregada);
    console.log(tareas)

    //Creamos elemento "li" de Html con nombre tarea
    const tarea = document.createElement("li");
    tarea.classList.add("tarea");

    // Creamos boton tipo checkbox
    const btnCheck = document.createElement("input");
    btnCheck.id = "checkbox";
    btnCheck.type = "checkbox";

    //Creamos un elemento "p" para el texto
    const parrafo = document.createElement("p")
    parrafo.textContent = input.value;

    // Creamos el boton de eliminar la tarea
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.classList.add("btn-eliminar");

    // Funcionalidad del boton para eliminar tarea
    btnEliminar.onclick = () => eliminarTarea(tarea);;

    // Agregamos todos los elementos a la terea
    tarea.appendChild(btnCheck);
    tarea.appendChild(parrafo);
    tarea.appendChild(btnEliminar);

    //Insertamos la tarea en el documento HTML
    resultado.appendChild(tarea);

    // Reseteamos el ormulario despues de 3 segundos ponemos el foco en el input
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

function eliminarTarea(tarea) {
    tarea.classList.add("ocultar"); //Oculta la Tarea
}
