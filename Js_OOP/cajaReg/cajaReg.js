class Caja {
    constructor(identification =[], cuenta =[]){
        this.identification= identification;
        this.cuenta=cuenta;

    }
    identificarEmpleado(nombre, dni, contraseña){
        var emp1 = new Empleado(),
        nombreE= nombre,
        dniE = dni, 
        contraseñaE= contraseña;
        this.identification.push(emp1);
        console.log(this.identification);
    }
   
}


class Empleado {
    constructor(nombreE, dniE, contraseñaE){
        this.nombreE=nombreE;
        this.dniE=dniE;
        this.contraseñaE=contraseñaE;

        
    }
}

 
identificarEmpleado(juan, 123 , asdf)
