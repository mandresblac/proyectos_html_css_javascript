const boton = document.querySelector("#btn");

boton.addEventListener("click", darkMode);

//mouseover y mouseout
/* boton.addEventListener("mouseover", (event) => {
  event.target.style.color = "grey";
}); */

function darkMode() {
  let body = document.querySelector("body");

  if (body.classList.toggle("dark-mode")) {
    document.querySelector(".fa-sun").style = "display:block";
    document.querySelector(".fa-moon").style = "display:none";
    document.querySelector("#btn").style.background = "white";
  } else {
    document.querySelector(".fa-sun").style = "display:none";
    document.querySelector(".fa-moon").style = "display:block";
    document.querySelector("#btn").style.background = "black";
  }
}
