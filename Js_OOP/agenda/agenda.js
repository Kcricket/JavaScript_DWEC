


class contacto{
    constructor(nombre, direccion, telefono, email){
        this.nombre=nombre;
        this.direccion=direccion;
        this.telefono=telefono;
        this.email=email;
    }
}


class agenda{



    constructor(){
        this.registro=[];
     }
    introducirContacto(nombre, direccion, telefono, email){
        
        var contacto1 = new contacto(nombre, direccion, telefono, email);
        contacto1.nombre = nombre;
        contacto1.direccion = direccion;
        contacto1.telefono = telefono;
        contacto1.email = email;
        this.registro.push(contacto1);
        console.log('New contact: '+contacto1.nombre+','+contacto1.direccion+',' +contacto1.telefono+','+contacto1.email);
        

    }
    mostrarContacto(nombre){
        var encontrado = false;

        for(var i=0; i < this.registro.length && !encontrado ; i++){
            if (nombre == this.registro[i].nombre ){
                console.log(this.registro[i]);
                encontrado = true;
            }
        }
    }
    mostrarTodos() {
         for(var i =0; i < this.registro.length; i++){
             console.log( this.registro[i]);
         }
    }
    
}

var ag1 = new agenda();
ag1.introducirContacto("alvaro", "c1", "666", "pdofkvdp");
ag1.introducirContacto("Mario", "c2", "576", "pdofkvgp");
ag1.introducirContacto("Tamara", "c3", "667", "pdofkvdrf");
ag1.mostrarTodos();
ag1.mostrarContacto('Mario');
