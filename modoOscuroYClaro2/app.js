const switcher = document.querySelector(".btn");

switcher.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");

  // Para cambiar el texto del boton
  const className = document.body.className;
  if (className === "light-theme") {
    this.textContent = "Dark";
  } else {
    this.textContent = "Light";
  }

  console.log("current class name: " + className);
});