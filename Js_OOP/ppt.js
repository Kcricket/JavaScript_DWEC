class Jugador {
    constructor(jugador1, jugador2){
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
    }
    preparando(){
        // 0 piedra 1 papel 2 tijera
        jugador1 = 0;
        jugador2 = 0;

    }
}

class juego{
    //X es la eleccion del j1, la del j2 la generará una máquina aleatoria
    constructor(x){
        this.x=x;

    }
    startGame(x){
        jugador1 = x;
        jugador2 = Math.floor(Math.random()*(3-0));
        console.log(jugador1+jugador2)
    }
}

var juego1 = new juego();
