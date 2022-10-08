/* Establecemos las variables donde se almacenaran los elementos del documento HTML en Javascript */
const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const botonEnter = document.querySelector("#boton-enter");
const check = "fa-check-circle";
const uncheck = "fa-circle";
const lineThrough = "line-through";
let id;
let LIST;


//Funcion que toma la fecha que nos da el navegador y va a actualizar automáticamente dependiendo del dia
//El objeto Date() permite trabajar con la fecha y hora actual
const fechaActualizada = new Date()
fecha.innerHTML = fechaActualizada.toLocaleDateString("es-CO", {weekday: "long", month: "long", day: "numeric", year: 'numeric'})//Con la propiedad .innerHTML accedemos al texto del elemento HTML almacenado en la variable fecha, el método toLocaleDateString() acepta 2 parámetros, el primero es el lenguaje y el segundo el formato de fecha


//Funcion que agrega una nueva tarea
function agregarTarea(tarea, id, realizado, eliminado) {

  if(eliminado) {return}

  const REALIZADO = realizado ? check :  uncheck;//Operador ternario
  const LINE = realizado ?  lineThrough :  "";//Operador ternario

  const elemento = `<li id="elemento">
                    <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                    <p class="text ${LINE}">${tarea}</p>
                    <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
                    </li>`;

  /* Con el método .insertAdjacentHTML() se inserta dinamicamente desde javascript el contenido de la variable elemento en el documento HTML antes del final (beforeend) del elemento ul, es decir, el ultimo elemento ingresado se ubicara de ultimo */
  lista.insertAdjacentHTML("beforeend", elemento);
}


//Creamos un boton para poder llamar la funcion agregarTarea()
//A traves del evento click del método .addEventListener() cuando hagan un click se va a ejecutar el código que esta dentro de la función flecha o arrow function
botonEnter.addEventListener("click", () => {
  //Con input.value puedo saber que valor tiene el input en ese momento y se asigna a la constante tarea
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea, id, false, false);
    //Con el método .push() agregamos elementos al array vació llamado LIST
    LIST.push({
      nombre: tarea,
      id: id,
      realizado: false,
      eliminado: false
    });
  }

  //Uso del localStorage del navegador para guardar información y allí almacenar las tareas que agreguemos
  //El localStorage del navegador almacena la información aunque el navegador se cierre
  //setItem() del localStorage crea un elemento y tiene dos parámetros: el primero el nombre que le voy a asignar que puede ser cualquiera, en este caso se llama TODO y el segundo, el elemento que quiero guardar, en este caso el array LIST que lo guardamos convertido a formato JSON con la funcion JSON.stringify()
  localStorage.setItem("TODO", JSON.stringify(LIST));

  //El string vació "" le indica a javascript que borre todos los strings
  input.value = "";

  id++;
});


//Para que se active presiona y suelta la tecla Enter utilizamos la propiedad keyup del método addEventListener()
document.addEventListener("keyup", function (event) {
  //Event.key lee cualquier tecla del teclado, en este caso lee la tecla "Enter"
  if (event.key ===  "Enter") {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea, id, false, false);
      //Con el método .push() agregamos elementos al array vació llamado LIST
      LIST.push({
        nombre: tarea,
        id: id,
        realizado: false,
        eliminado: false
      });
    }

  //Uso del localStorage del navegador para guardar información y allí almacenar las tareas que agreguemos
  //El localStorage del navegador almacena la información aunque el navegador se cierre
  //setItem() del localStorage crea un elemento y tiene dos parámetros: el primero el nombre que le voy a asignar que puede ser cualquiera, en este caso se llama TODO y el segundo, el elemento que quiero guardar, en este caso el array LIST que lo guardamos convertido a formato JSON con la funcion JSON.stringify()
  localStorage.setItem("TODO", JSON.stringify(LIST));

  //El string vació "" le indica a javascript que borre todos los strings
  input.value = "";

  id++;
  }
});


lista.addEventListener("click", function(event){
  const element = event.target;
  const elementData = element.attributes.data.value;
  if (elementData === "realizado") {
    tareaRealizada(element);
  }
  else if (elementData === "eliminado") {
    tareaEliminada(element);
  }

  //Uso del localStorage del navegador para guardar información y allí almacenar las tareas que agreguemos
  //El localStorage del navegador almacena la información aunque el navegador se cierre
  //setItem() del localStorage crea un elemento y tiene dos parámetros: el primero el nombre que le voy a asignar que puede ser cualquiera, en este caso se llama TODO y el segundo, el elemento que quiero guardar, en este caso el array LIST que lo guardamos convertido a formato JSON con la funcion JSON.stringify()
  localStorage.setItem("TODO", JSON.stringify(LIST));
});


//Funcion de tarea realizada
function tareaRealizada(element) {
  //El método toogle() se va a encargar de agregar(activar) o quitar(desactivar) una clase dependiendo de lo que se necesite 
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  
  //parentNode identifica los elementos hijo
  element.parentNode.querySelector(".text").classList.toggle(lineThrough);
  
  LIST[element.id].realizado = LIST[element.id].realizado ? false:true;
};

//Funcion de tarea eliminada
function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);//El método removeChild() remueve el hijo
    LIST[element.id].eliminado = true;
};


//getItem() del localStorage manda a llamar a un elemento
let data = localStorage.getItem("TODO");
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  cargarLista(LIST);
}else {
  LIST = [];
  id = 0;
}


function cargarLista(DATA) {
  DATA.forEach( i => {
    agregarTarea(i.nombre, i.id, i.realizado, i.eliminado);
  });
}


