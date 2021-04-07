function esPalindromo(cadena) {
    let palindromo = true;
    let i = 0;
    //Separar cadena
    cadena = cadena.replace(/\s+/g, "").toLowerCase();
    // I hasta la mitad
    while (palindromo && i <= cadena.length/2) {
        //Comparado con (cadena.length-1-i)
        if (cadena.charAt(i) != cadena.charAt(cadena.length-1-i)) {
            palindromo = false;
        }
        ++i;
    }
    return palindromo;
}

console.log(esPalindromo("ana"))