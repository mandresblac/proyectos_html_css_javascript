//Almacenamos una referencia al elemento con id "boton" dentro de una constante llamada btn usando  Document.querySelector()
const btn = document.querySelector("#boton");

//Definimos una función que devuelve un número aleatorio.
function random(number) {
  return Math.floor(Math.random() * (number + 1));
};

/* Definimos y registramos el controlador de eventos.
Llamamos al método addEventListener() del boton, pasando:
- La cadena 'click', para indicar que queremos escuchar el evento click
- Una función flecha para llamar cuando ocurre el evento. En nuestro caso, la función 
  genera un color RGB aleatorio y establece la página igual a ese color.<body> 
  background-color*/
btn.addEventListener("click", () => {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
});

