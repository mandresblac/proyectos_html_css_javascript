const boton = document.querySelector('#btn');

boton.addEventListener('click', darkMode);

/* function changeMode() {
    const body = document.querySelector('body');

    if(body.classList = ""){
        body.classList.add("dark-mode")
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    }
} */

function darkMode() {
    document.querySelector('body').classList.add('dark-mode');
    boton.textContent = 'Light';
    boton.onclick = () => lightMode();
};

function lightMode() {
    document.querySelector('body').classList.add('light-mode');
    boton.textContent = 'Dark';
    darkMode();
    document.querySelector('body').classList.remove('dark-mode');
};