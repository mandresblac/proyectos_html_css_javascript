function promedio() {
      const n1 = document.querySelector("#nota1").value;
      const n2 = document.querySelector("#nota2").value;
      const n3 = document.querySelector("#nota3").value;
      const n4 = document.querySelector("#nota4").value;
      let prom = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4;
      
      if (prom <= 3) {
        document.querySelector("#resultado").innerHTML = `Nota Final: ${prom.toFixed(1)} <br> REPROBADO`;
        document.querySelector("#resultado").style.color = "red";
      }else if (prom >= 3.1 && prom <= 5) {
        document.querySelector("#resultado").innerHTML = `Nota Final: ${prom.toFixed(1)} <br> APROBADO`;
        document.querySelector("#resultado").style.color = "green";
      } else {
        document.querySelector("#resultado").innerHTML = `Rango fuera de valor`;
        document.querySelector("#resultado").style.color = "blue";
      }
    };
    
    //Traemos del documento HTML a Javascript el elemento con id "btn" que es el input "Calcular", luego a través de addEventListener() capturamos cuando el usuario de clic sobre ese input o boton con el evento "click" como primer parámetro del método addEventListener() y como segundo parámetro pasamos una funcion flecha que ejecuta la funcion promedio() y luego resetea el formulario después de hacer click en el boton "Calcular"
    document.querySelector("#btn").addEventListener("click", ()=>{
      //Llamamos a la función promedio
      promedio();
      //Traemos del documento HTML a javascript el formulario completo para después resetearlo 
      const form = document.querySelector("#formulario");
      form.reset(); //Utilizamos .reset() para resetear toda la información del formulario (volverlo a su estado inicial vació) después de hacer click en el boton "Calcular"
    });
    
