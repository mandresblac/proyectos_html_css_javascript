const item = document.querySelector("#todo-item");
const resultado = document.querySelector("#resultado");

//Función que nos crea la tarea
const crearTarea = () => {
  //Creamos elemento "li" de Html con nombre tarea
  const tarea = document.createElement("li");

  //Agregamos a la tarea el valor insertado en "item" con la propiedad textContent
  tarea.textContent = item.value;

  //Al resultado le agregamos la tarea y la retornamos
  return resultado.appendChild(tarea);
};

document.querySelector("#btn").addEventListener("click", (event) => {
  //console.log(event);
  //Para prevenir la acción por defecto del formulario que sera procesarse, para que yo pueda controlar el evento
  event.preventDefault();

  //Para controlar si el usuario hace click sobre el botón sin haber insertado ningún valor en el input con id "item"
  if (item.value === "") return false;
  //if (item.value === "") return (resultado.innerHTML = "");

  //Llamamos la función crearTarea
  crearTarea();

  //Limpiamos el input de entrada
  item.value = "";
  //Pone el cursor nuevamente sobe el input con id input
  item.focus();
});
