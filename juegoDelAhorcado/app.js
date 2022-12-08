let canvas = document.querySelector("#canvas");
let pincel = canvas.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400); //.fillRect() dibuja un rectángulo relleno.
pincel.strokeRect(0, 0, 600, 400); // .strokeRect() dibuja el contorno delrectángulao.
