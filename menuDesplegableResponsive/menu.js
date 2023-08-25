const btnMenu = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");
const subMenuBtn = document.querySelectorAll(".submenu-btn");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("mostrar");
});

subMenuBtn.forEach((item) => {
  item.addEventListener("click", function () {
    // Caando ancho de la ventana sea menor que 1024
    if (window.innerWidth < 1024) {
      const subMenu = this.nextElementSibling;
      const height = subMenu.scrollHeight;

      if (subMenu.classList.contains("desplegar")) {
        subMenu.classList.remove("desplegar");
        subMenu.removeAttribute("style");
      } else {
        subMenu.classList.add("desplegar");
        subMenu.style.height = height + "px";
      }
    }
  });
});
