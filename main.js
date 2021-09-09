import Jugador from "./jugador.js";
import Dado from "./dado.js";
import Tablero from "./tablero.js";

let t = new Tablero();
let d = new Dado();

let j1 = new Jugador();
let j2 = new Jugador();

while (j1._getPosicion() < 100 && j2._getPosicion() < 100) {
    j1.avanzar(d.lanzar());
    j2.avanzar(d.lanzar());

    j1._setPosicion(t._tablero[j1._getPosicion()]);
    j2._setPosicion(t._tablero[j2._getPosicion()]);
    
    console.log(`La posición del corredor uno es ${j1._getPosicion()}`);
    console.log(`La posición del corredor dos es ${j2._getPosicion()}`);
}

if(j1._getPosicion() > 99 && j2._getPosicion() < 100){
    console.log(`El ganador es el corredor 1`);
}
else {
    console.log(`El ganador es el corredor 2`);
}

