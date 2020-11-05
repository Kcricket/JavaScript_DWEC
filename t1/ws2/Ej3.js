/*
3. The Geometrizer

Calculate properties of a circle, searching the internet for definitions if not remember.

    Store a radius into a variable.
    Calculate the circumference based on the radius, and output "The circumference is NN".
    Calculate the area based on the radius, and output "The area is NN".
*/

function circumference(rad) {
    var resultado = Math.PI*2*rad;
    document.write("<p> The CIRCUMF is: " +resultado+ "<p>");
}

function area(rad) {
   var resultadoA =Math.PI*Math.pow(rad, 2);
   document.write("<p> The area is: "+resultadoA+"<p>");
}

var radius = prompt("Introduzce el valor del radio");

circumference(radius);
area(radius);
console.log(Math.PI);


