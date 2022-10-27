//URL del video en youtube https://www.youtube.com/watch?v=s3pC93LgP18&t=73s

const formulario = document.querySelector("#formulario")
const inputs = document.querySelectorAll("#formulario input");

//Objeto con las expresiones regulares para hacer las validaciones
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

//Objeto con todos los valores en false
const campos = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "usuario":
      validarCampo(expresiones.usuario, e.target, "usuario");
      break;
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");    
      break;
    case "password":
      validarCampo(expresiones.password, e.target, "password");
      validarPassword2();
      break;
    case "password2":
      validarPassword2();
      break;
    case "correo":
      validarCampo(expresiones.correo, e.target, "correo");
      break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, "telefono");
      break;
  }
};

//Funcion para validar campos
const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {//Con .test probamos que se cumpla la expresion regular
    document.querySelector(`#grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
    document.querySelector(`#grupo__${campo}`).classList.add("formulario__grupo-correcto");
    //Agregamos el icono de correcto, check o palomita
    document.querySelector(`#grupo__${campo} i`).classList.add("fa-circle-check");
    //Eliminamos el icono de error
    document.querySelector(`#grupo__${campo} i`).classList.remove("fa-circle-xmark");

    //Para no mostrar mensaje de explicación si el usuario llena correctamente el campo
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
    campos[campo] = true;
  }
  else {
    document.querySelector(`#grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
    document.querySelector(`#grupo__${campo}`).classList.remove("formulario__grupo-correcto");
    //Agregamos el icono de error
    document.querySelector(`#grupo__${campo} i`).classList.add("fa-circle-xmark");
    //Eliminamos el icono de correcto, check o palomita
    document.querySelector(`#grupo__${campo} i`).classList.remove("fa-circle-check");

    //Para mostrar mensaje de explicación si el usuario llena incorrectamente el campo
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
    campos[campo] = false;
  }
};

//Funcion para validar password
const validarPassword2 = () => {
  //Accedemos a los dos input de password en el documento HTML y los traemos a javascript
  const inputPassword1 = document.querySelector("#password");
  const inputPassword2 = document.querySelector("#password2");

  //Condicional para preguntar si la contraseña no es igual
  if (inputPassword1.value !== inputPassword2.value) {
    document.querySelector(`#grupo__password2`).classList.add("formulario__grupo-incorrecto");
    document.querySelector(`#grupo__password2`).classList.remove("formulario__grupo-correcto");
    //Agregamos el icono de error
    document.querySelector(`#grupo__password2 i`).classList.add("fa-circle-xmark");
    //Eliminamos el icono de correcto, check o palomita
    document.querySelector(`#grupo__password2 i`).classList.remove("fa-circle-check");

    //Para mostrar mensaje de explicación si el usuario llena incorrectamente el campo
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
    campos["password"] = false;
  }
  else {
    document.querySelector(`#grupo__password2`).classList.remove("formulario__grupo-incorrecto");
    document.querySelector(`#grupo__password2`).classList.add("formulario__grupo-correcto");
    //Agregamos el icono de error
    document.querySelector(`#grupo__password2 i`).classList.remove("fa-circle-xmark");
    //Eliminamos el icono de correcto, check o palomita
    document.querySelector(`#grupo__password2 i`).classList.add("fa-circle-check");

    //Para mostrar mensaje de explicación si el usuario llena incorrectamente el campo
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove("formulario__input-error-activo");
    campos["password"] = true;
  }
};


inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario); //Evento keyup para cuando levanten la tecla que presionaron 
  input.addEventListener("blur", validarFormulario); //Evento blur para que cuando den click fuera de input tambien ejecute la comprobacion
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  
  //Para validar términos y condiciones
  const terminos = document.querySelector("#terminos");

  //Condicional
  if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked) {
    formulario.reset()//Con .reset() reinicio todos los campos del formulario

    document.querySelector(".formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
    setTimeout(() => {
      document.querySelector(".formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
    }, 4000);

    //Para quitar todos los iconos
    document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) => {
      icono.classList.remove("formulario__grupo-correcto")
    });
  }
  else {
    document.querySelector("#formulario__mensaje").classList.add("formulario__mensaje-activo");
  }
});






