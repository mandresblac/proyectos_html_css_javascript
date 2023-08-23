const boton = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");
const header = document.querySelector("#header");

boton.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.target.className);

  if (menu.style.display === "none") {
    menu.style.display = "block";
    header.style.display = "flex";
    header.style.flexDirection = "column";
    boton.style.alignSelft = "flex-end";
    menu.style.order = 2;
  } else {
    menu.style.display = "none";
  }
});
