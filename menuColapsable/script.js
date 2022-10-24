let estado = "open";

function showHideSideBar() {
  //Selecciono todos los enlaces de las opciones 
  let links = document.querySelector(".txtLink");

  if (estado === "open") {
    document.querySelector("#sideBar").style.width = "80px";
    document.querySelector("#main").style.marginLeft = "80px";
    document.querySelector("#img-info").style.width = "50px";
    document.querySelector("#texto-info").style.display = "none";

    //Oculto todos los enlaces
    for (let i = links.length - 1; i >= 0; i--) {
      links[i].style.display = "none";      
    }

    estado = "close";
  }
  else if (estado === "close") {
    document.querySelector("#sideBar").style.width = "250px";
    document.querySelector("#main").style.marginLeft = "250px";
    document.querySelector("#img-info").style.width = "112px";
    document.querySelector("#texto-info").style.display = "block";

    //Oculto todos los enlaces
    for (let i = links.length - 1; i >= 0; i--) {
      links[i].style.display = "inline";      
    }

    estado = "open";
  }
}