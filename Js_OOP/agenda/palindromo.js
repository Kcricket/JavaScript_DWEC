function esPalindromo(cad){
   for (i=0, j=cad.length-1; i<j;i++, j++){
       if (cad[i] != cad[j]){
       return false;
       }
   } 
}

console.log(esPalindromo("ana"));