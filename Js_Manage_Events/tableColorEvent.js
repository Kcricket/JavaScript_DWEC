var cambiarCelda = (i) =>{
    var colorCell = document.getElementsByClassName("td")[i].style.backgroundColor;
    var cuerpo = document.body;
    cuerpo.style.backgroundColor = colorCell;

};
