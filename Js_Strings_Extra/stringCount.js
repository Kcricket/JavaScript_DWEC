

var txt = "Hola soy olivia";
var xchar = "o";

function xcharCount(txt){
    
    var contar = 0;
    for (var i = 0; i < xchar.length; i++) {
        for (var x = 0; x < txt.length; x++) {
            if(txt[x] === xchar[i]){
            contar+=1;
            }
        }
    }
    return contar;

}

console.log(xcharCount(txt));

