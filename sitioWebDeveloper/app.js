const express = require("express");
const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static("public"));

// Escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
