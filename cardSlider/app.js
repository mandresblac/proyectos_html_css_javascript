//Datos guardados en una estructura JSON
const datos = [
  {
    id:1,
    nombre: "Sofía Gauna",
    puesto: "Diseñadora Gráfica",
    img: "img/persona1.jpg",
    texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur harum saepe vitae iure minima eveniet enim totam excepturi, incidunt iusto repellendus nostrum placeat dolorum adipisci repellat quae in sequi rerum?"
  },
  {
    id:2,
    nombre: "Ian Peterson",
    puesto: "Ingeniero",
    img: "img/persona2.jpg",
    texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur harum saepe vitae iure minima eveniet enim totam excepturi, incidunt iusto repellendus nostrum placeat dolorum adipisci repellat quae in sequi rerum?"
  },
  {
    id:3,
    nombre: "Anna Anderson",
    puesto: "Supervisora principal",
    img: "img/persona3.jpg",
    texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur harum saepe vitae iure minima eveniet enim totam excepturi, incidunt iusto repellendus nostrum placeat dolorum adipisci repellat quae in sequi rerum?"
  },
  {
    id:4,
    nombre: "Isaac Jacob",
    puesto: "Licenciado",
    img: "img/persona4.jpg",
    texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur harum saepe vitae iure minima eveniet enim totam excepturi, incidunt iusto repellendus nostrum placeat dolorum adipisci repellat quae in sequi rerum?"
  }
];

//Selecciono los items
const img = document.querySelector("#img-persona");
const nombre = document.querySelector("#nombre");
const puesto = document.querySelector("#puesto");
const info = document.querySelector("#info");

const atrasBtn = document.querySelector(".atras-btn");
const siguienteBtn = document.querySelector(".siguiente-btn");

//Seteo el item actual
let itemActual = 0;

//cargo el item inicial
window.addEventListener("DOMContentLoaded", function(){
  const item = datos[itemActual];
  img.src = item.img;
  nombre.textContent = item.nombre;
  puesto.textContent = item.puesto;
  info.textContent = item.texto;
});

//Muestro la persona en base al número de item
function mostrarPersona(persona){
  const item = datos[persona];
  img.src = item.img;
  nombre.textContent = item.nombre;
  puesto.textContent = item.puesto;
  info.textContent = item.texto;
};

//Muestro la siguiente persona
siguienteBtn.addEventListener("click", function(){
  itemActual++;
  if (itemActual > datos.length - 1) {
    itemActual = 0;
  }
  mostrarPersona(itemActual);
});

//Muestro la anterior persona
atrasBtn.addEventListener("click", function(){
  itemActual--;
  if (itemActual < 0) {
    itemActual = datos.length - 1;
  }
  mostrarPersona(itemActual);
});

