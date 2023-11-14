const display1 = document.querySelector("#calculator__display1");
const display2 = document.querySelector("#calculator__display2");
const buttons = document.querySelectorAll("button");

buttons.forEach((boton) => {
  boton.addEventListener("click", () => {
    const btnApretado = boton.textContent;

    /* Para que el boton C ponga pantalla en blanco */
    if (boton.id === "btnC") {
      display1.textContent = "0";
      display2.textContent = "";
      return;
    }

    /* Para que el boton "DEL" borre el ultimo número */
    if (boton.id === "btnDel") {
      // Si hay un solo caracter en la pantalla vuelve el display a cero
      if (
        display1.textContent.length === 1 ||
        display1.textContent === "Error!"
      ) {
        display1.textContent = "0";
        display2.textContent = "";
      } else {
        // slice -1 para que elimine ultima posicion
        display1.textContent = display1.textContent.slice(0, -1);
        display2.textContent = "";
      }
      return;
    }

    /* Para que boton "igual" resuelva la operacion */
    if (boton.id === "btnIgual") {
      try {
        let operacion = eval(display1.textContent);
        display2.textContent = operacion;
      } catch {
        display1.textContent = "Error!";
      }
      return;
    }

    /* Para reemplazar el número cero */
    if (display1.textContent === "0" || display1.textContent === "Error!") {
      display1.textContent = btnApretado;
    } else {
      display1.textContent += btnApretado;
    }
  });
});
