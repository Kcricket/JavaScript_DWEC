function suma (...numeros){
    let total= 0;
    for (const numero of numeros){
        total += numero;
    }
    return total;
}
console.log("La suma es igual a:"+suma(2,4,8));

// function that will only sum the numeric parameters of the funtion 

function addOnlyNums (...somethinAndNums){
    let total = 0;
    for ( const numero of somethinAndNums){
        if (typeof(numero)== "number"){
            total += parseInt(numero);

        }
    }
    return total;
}
console.log("Suma solo números " +addOnlyNums(1, "gato montés ", 3, 4, " 5 ", 6, " 7 ")); 
// 8
// 7 Write a function called combineAllArrays that takes in any number of arrays as arguments and combines all of them into one array.

function combineAllArrays(...vectores){
    let aResultado = [];
    for(i=0; i<vectores.length; i++){
        for(const element of vectores[i]){
            aResultado.push(element)
        }
    }
    return aResultado;
}

var mostrarRes= combineAllArrays([0,1,2,3], [2,3,4,6,8], [4,5,6,7,8]);

console.log("El aarry combinado final es: "+mostrarRes);

//8 Write a function called squareAndSum that takes in any number of arguments, squares them, then sums all of the squares.

function squareAndSum(...arg) {
    let argSumadoCuadrado = 0;
    for (let index = 0; index < arg.length; index++) {
        cuadrado = arg[i]**2;
        argSumadoCuadrado= argSumadoCuadrado+cuadrado;
        // argSumadroCuadrado += arg[i]**2
    }
    return argSumadoCuadrado;
}