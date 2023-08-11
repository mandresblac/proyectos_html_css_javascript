let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");

add.addEventListener("click", () => addAndSubtract("+"));
subtract.addEventListener("click", () => addAndSubtract("-"));

function addAndSubtract(operador) {
  let output = document.querySelector("#output");

  if (operador === "+") {
    let result = Number(output.innerText) + 1;
    if (result > 10) return (result = 0);
    return (output.innerText = result);
  }

  let result = Number(output.innerText) - 1;
  if (result < 0) result = 0;
  return (output.innerText = result);
}
