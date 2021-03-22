//Mismo de antes pero con un array de numeros 

var numbers = [2, 1, 3];
document.write("Array Unsorted: "+numbers)
function sorter(){
    numbers.sort(function(a, b){return a - b});

    document.write("Array Sorted: "+numbers);
}

