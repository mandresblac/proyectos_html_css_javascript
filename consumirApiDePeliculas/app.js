const btnAnterior = document.querySelector("#btnAnterior");
const btnSiguiente = document.querySelector("#btnSiguiente");
let pagina = 1; // Para la iniciar la paginación en 1

btnSiguiente.addEventListener("click", () => {
  if (pagina < 1000) {
    pagina += 1;
    cargarPeliculas();
  }
});

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1;
    cargarPeliculas();
  }
});

// Funcion para cargar las peliculas
const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=8d6d2c65ac6a26c3ee949e0a8ec15f06&language=es-MX&page=${pagina}`
    );

    // Verificamos el codigo de respuesta HTTP de la Petición
    // Comprobamos si la respuesta es correcta (codigo 200)
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas += `
          <div class="pelicula">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
            <h3 class="titulo">${pelicula.title}</h3>
          </div>
        `;
      });

      document.querySelector("#contenedor").innerHTML = peliculas;
    } else if (respuesta.status === 401) {
      // Comprobamos si la respuesta arroja error (codigo 401)
      console.log("Pusiste la llave mal");
    } else if (respuesta.status === 404) {
      // Comprobamos si la respuesta arroja error (codigo 404)
      console.log("La pelicula que buscas no existe");
    } else {
      console.log("Hubo un error y no sabemos que paso");
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();
