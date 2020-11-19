// Write a function that has an event as parameter and shows it using DOM 

function position(event){
    var x = event.clientX;
    var y = event.clientY;
    var mousePositions = document.getElementById('mousePositions');
    mousePositions.innerHTML = 'Coordenada X ' +x+ '<br\>Coordenada Y '+y;
}

/*function main(){
    tabla = "";

    tabla += "<table>";
    
    for (i=0; i<100; i++){

    
        tabla+="<tr>";
        for(j=0; j<100; j++)
        tabla += "<td></td>"

        tala+="</tr>";
    }
    tabla += "</table>";
    document.getElementById('tabla').innerHTML = tabla;
}*/