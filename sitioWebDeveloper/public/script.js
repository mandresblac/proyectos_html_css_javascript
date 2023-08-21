const boton = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

boton.addEventListener("click", (e) => {
  e.preventDefault();

  if (menu.style.display === "none") {
    menu.style.display = "block";
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
