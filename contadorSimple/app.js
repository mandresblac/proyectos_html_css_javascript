let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");

add.addEventListener("click", () => {
  let output = document.querySelector("#output");
  let result = addAndSubtract(Number(output.innerText), 1, "+");

  if (result > 10) result = 0;
  output.innerText = result;
});

subtract.addEventListener("click", () => {
  let output = document.querySelector("#output");
  let result = addAndSubtract(Number(output.innerText), 1, "-");

  if (result < 0) result = 0;
  output.innerText = result;
});

function addAndSubtract(a, b, operador) {
  if (operador === "+") return a + b;
  return a - b;
}
