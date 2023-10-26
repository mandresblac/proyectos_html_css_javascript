// Array de peliculas
const listaPeliculas = [
  {
    nombre: "Harry Potter",
    imagen:
      "https://hips.hearstapps.com/hmg-prod/images/harry-potter-y-la-piedra-filosofal-1549965998.jpg",
    url: "https://www.youtube.com/embed/WE4AJuIvG1Y?si=PuhSezD6QwQy8urw",
  },
  {
    nombre: "Barbie",
    imagen:
      "https://elcomercio.pe/resizer/sjdQp0NvLtsRndrAP2Ec05gQcho=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WZTVEL3PIBA4JPH4XZMIVP2EUM.jpg",
    url: "https://www.youtube.com/embed/pBk4NYhWNMM?si=eVOL7brRuoPl-GCN",
  },
  {
    nombre: "Star Wars",
    imagen:
      "https://hips.hearstapps.com/hmg-prod/images/la-amenaza-fantasma-1575448990.jpg",
    url: "https://www.youtube.com/embed/n1CUHjrc9Sc?si=xLS_V59Q5tCLx_a5",
  },
  {
    nombre: "El señor de los anillos",
    imagen: "https://es.web.img3.acsta.net/pictures/22/10/04/16/26/1929878.jpg",
    url: "https://www.youtube.com/embed/19nt1L8nLrA?si=aSRWS0-l_I18WHKY",
  },
  {
    nombre: "Volver al futuro",
    imagen: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/638724.jpg",
    url: "https://www.youtube.com/embed/GM6_MHRc4Xo?si=oVkkCH4XHK2LIkm8",
  },
  {
    nombre: "Forrest Gump",
    imagen: "https://pics.filmaffinity.com/Forrest_Gump-212765827-large.jpg",
    url: "https://www.youtube.com/embed/bLvqoHBptjg?si=I2RvQsMtzGeEWbJG",
  },
  {
    nombre: "Titanic",
    imagen:
      "https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fs1.abcstatics.com%2Fmedia%2Fpeliculas%2F000%2F044%2F428%2Ftitanic-1.jpg",
    url: "https://www.youtube.com/embed/CHekzSiZjrY?si=USo1dtghWp1bRnAn",
  },
  {
    nombre: "The incredibles",
    imagen: "https://pics.filmaffinity.com/Los_Increaibles-939387273-large.jpg",
    url: "https://www.youtube.com/embed/-UaGUdNJdRQ?si=gkD_JdbNXY-0n3YX",
  },
  {
    nombre: "Top Gun: Maverick",
    imagen:
      "https://pics.filmaffinity.com/Top_Gun_Maverick-733802541-large.jpg",
    url: "https://www.youtube.com/embed/qSqVVswa420?si=UcTt_-k2HPW7AMpu",
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
  // enlace.href = pelicula.url;
  enlace.setAttribute("href", `${pelicula.url}`);
  enlace.target = "_blank";

  // Agregamos elemento a al contenedor en ele HTML
  document.querySelector("#contenedor").appendChild(enlace);
});
