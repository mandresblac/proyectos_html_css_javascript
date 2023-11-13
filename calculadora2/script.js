const display1 = document.querySelector("#calculator__display1");
const display2 = document.querySelector("#calculator__display2");
const keys = document.querySelectorAll("#key");
const btnIgual = document.querySelector("#igual");

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    e.preventDefault();
    display1.textContent += key.textContent;
    btnIgual.onclick = () => mostrarResultado(key);
  });
});

function mostrarResultado(key) {
  display2.textContent += key.textContent;
  // console.log(key);
}
