export default class Jugador{

    constructor(){
        this._posicion = 0;
    }

    _setPosicion(x){
        this._posicion = x;
    }

    _getPosicion(){
        return this._posicion;
    }

    avanzar(dado){
        this._posicion = this._posicion + dado;
    }

}