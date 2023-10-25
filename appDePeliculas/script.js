// Array de peliculas
const listaPeliculas = [
  {
    nombre: "Harry Potter",
    imagen:
      "https://hips.hearstapps.com/hmg-prod/images/harry-potter-y-la-piedra-filosofal-1549965998.jpg",
    url: "https://www.google.com",
  },
  {
    nombre: "Barbie",
    imagen:
      "https://elcomercio.pe/resizer/sjdQp0NvLtsRndrAP2Ec05gQcho=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WZTVEL3PIBA4JPH4XZMIVP2EUM.jpg",
    url: "https://www.google.com",
  },
  {
    nombre: "Star Wars",
    imagen:
      "https://hips.hearstapps.com/hmg-prod/images/la-amenaza-fantasma-1575448990.jpg",
    url: "https://www.google.com",
  },
  {
    nombre: "El señor de los anillos",
    imagen: "https://es.web.img3.acsta.net/pictures/22/10/04/16/26/1929878.jpg",
    url: "https://www.google.com",
  },
  {
    nombre: "Volver al futuro",
    imagen: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/638724.jpg",
    url: "https://www.google.com",
  },
  {
    nombre: "Forrest Gump",
    imagen: "https://pics.filmaffinity.com/Forrest_Gump-212765827-large.jpg",
    url: "https://www.google.com",
  },
];

listaPeliculas.forEach((pelicula) => {
  // Creamos elemento img
  let imagen = document.createElement("img");
  imagen.src = pelicula.imagen;
  imagen.classList.add("img");

  // Creamos elemento figcaption para titulo de la imagen
  let titulo = document.createElement("figcaption");
  titulo.textContent = pelicula.nombre;
  titulo.classList.add("titulo");

  // Creamos elemento figure
  let figure = document.createElement("figure");

  // Agregamos elementos al figure
  figure.appendChild(titulo);
  figure.appendChild(imagen);

  // Creamos un elemeto ancore o link
  let enlace = document.createElement("a");

  // Agregamos el elemento figure al elemento a
  enlace.appendChild(figure);
  enlace.classList.add("enlace");
  enlace.href = listaPeliculas.url;
  enlace.target = "_blank";

  // Agregamos elemento a al contenedor en ele HTML
  document.querySelector("#contenedor").appendChild(enlace);
});
