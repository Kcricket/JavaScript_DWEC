// Triple imput calculator. First you imput a name, then the second and third ones show that number x2 and squared.

function multiTwo() {
  var x = document.getElementById("input").value;
  //ERR faltaba value 
  var y = document.getElementById("input2").value;
  y =  x*2;
  document.getElementById("input2").value= y;
  square();

}

function square(){
  var x = document.getElementById("input").value;
  var y = document.getElementById("input3").value;
   y= x*x;
  document.getElementById("input3").value= y;

}

