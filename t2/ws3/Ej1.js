

function invierteCadena(cad_arg){
    let cadenaInvertida ="";
    for (let index = cad_arg.length-1; index >= 0; index--) {
     cadenaInvertida += cad_arg.charAt(index);       
    }
    return cadenaInvertida;
}

document.write("CAdena Invertida: "+invierteCadena("Mi carro me lo robé"));