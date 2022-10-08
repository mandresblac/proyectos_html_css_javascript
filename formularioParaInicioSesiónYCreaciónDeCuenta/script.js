let entrar = 1;

function cambiar(link) {
    if (entrar === 0) {
        document.querySelector("#sign-in").className = "sign-in salir";
        document.querySelector("#sign-up").className = "sign-up mostrar";
        entrar = 1;
        link.innerHTML = "Iniciar Sesión";
    }
    else{
        document.querySelector("#sign-in").className = "sign-in mostrar";
        document.querySelector("#sign-up").className = "sign-up salir";
        entrar = 0;
        link.innerHTML = "Crear Cuenta";
    }
}