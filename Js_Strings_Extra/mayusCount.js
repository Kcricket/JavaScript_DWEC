var contar = 0;
var txt = "txt Numero Uno";
var mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function mayusCount(txt){
    for (var i = 0; i < mayus.length; i++) {
        for (var x = 0; x < txt.length; x++) {
            if(txt[x]==mayus[i]){
            contar+=1;
            }
        }
    }

    console.log("El numero de mayus es: "+contar);

}

mayusCount(txt);

