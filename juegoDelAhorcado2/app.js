// Contiene la lista de palabras para elegir
const words = [
  "JAVASCRIPT",
  "HTML",
  "CSS",
  "NODE",
  "REACT",
  "ANGULAR",
  "JQUERY",
  "VUE",
];

// Indica el número máximo de letras incorrectas permitidas antes de que termine el juego
const maxWrongGuesses = 6;

// Mantiene palabra aleatoria que el jugador necesita adivinar.
let wordToGuess = "";

// Array de guiones bajos que representan las letras no adivinadas de la palabra
let guessedLetters = [];

// Hace seguimiento de la cantidad de letras incorrectas que ha hecho el jugador.
let wrongGuesses = 0;

// Determina qué imagen de Melting Snowman mostrar.
let imageCount = 1;

// Selecciona una palabra aleatoria de la matriz words
function selectRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Función que inicializa el juego.
function initializeGame() {
  wordToGuess = selectRandomWord();
  guessedLetters = Array(wordToGuess.length).fill("_");
  wrongGuesses = 0;

  // Actualiza la visualización de palabras
  updateWordDisplay();

  updateMeltingSnowmanGraphic();

  // Eliminar cualquier botón generado previamente
  const lettersContainer = document.querySelector(".letters");
  while (lettersContainer.firstChild) {
    lettersContainer.removeChild(lettersContainer.firstChild);
  }

  // Genera los botones de letras.
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    const button = document.createElement("button");
    button.innerText = letter;
    button.addEventListener("click", function () {
      handleGuess(letter);
    });
    lettersContainer.appendChild(button);
  }

  // Borrr cualquier mensaje anterior de ganar/perder
  const messageContainer = document.querySelector(".message");
  messageContainer.innerText = "";
}

// Actualiza la visualización de palabras
function updateWordDisplay() {
  const wordContainer = document.querySelector(".word");
  wordContainer.innerText = guessedLetters.join(" ");
}

// Manejador para adivinar letras
function handleGuess(letter) {
  // Si ya has adivinado la letra, no hagas nada.
  if (guessedLetters.includes(letter)) {
    return;
  }

  // Añade la letra a la lista de letras adivinadas.
  guessedLetters.forEach((guessedLetter, index) => {
    if (wordToGuess[index] === letter) {
      guessedLetters[index] = letter;
    }
  });

  // Si la letra no está en la palabra oculta, incremente el recuento de conjeturas incorrectas y actualice el gráfico del muñeco de nieve derritiéndose.
  if (!wordToGuess.includes(letter)) {
    wrongGuesses++;
    updateMeltingSnowmanGraphic();
  }

  // Actualizar la visualización de palabras
  updateWordDisplay();

  // Comprueba si el juego se ha ganado o perdido
  checkWinOrLose();
}

// Actualiza el gráfico del muñeco de nieve derritiéndose
function updateMeltingSnowmanGraphic() {
  const meltingSnowmanContainer = document.querySelector(".melting-snowman");
  meltingSnowmanContainer.innerHTML = `<img src="./img/MeltingSnowman${imageCount}.png" alt="MeltingSnowman ${imageCount}">`;
  imageCount++;
}

// Verifica si el juego se ha ganado o perdido al comparar la matriz guessedLetters con la variable wordToGuess y comprueba si wrongGuesses es mayor o igual a maxWrongGuesses.
function checkWinOrLose() {
  if (guessedLetters.join("") === wordToGuess) {
    const messageContainer = document.querySelector(".message");
    messageContainer.innerText = "You win!";
    const letterButtons = document.querySelectorAll(".letters button");
    letterButtons.forEach((button) => {
      button.disabled = true;
      button.removeEventListener("click", handleGuess);
    });
  } else if (wrongGuesses >= maxWrongGuesses) {
    const messageContainer = document.querySelector(".message");
    messageContainer.innerText = `You lose! The word was "${wordToGuess}".`;
    const meltingSnowmanContainer = document.querySelector(".MeltingSnowman");
    meltingSnowmanContainer.innerHTML = `<img src="images/gameover.png" alt="gameover">`;
    const letterButtons = document.querySelectorAll(".letters button");
    letterButtons.forEach((button) => {
      button.disabled = true;
      button.removeEventListener("click", handleGuess);
    });
  }
}

// Inicializa el juego cuando se carga la página.
window.addEventListener("load", initializeGame);
