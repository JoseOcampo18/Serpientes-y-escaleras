export default class Tablero{

    constructor(){
        this._tablero = new Array();
        for (let i = 0; i <= 105; i++){
            this._tablero[i] = i;
        }
        this.escaleras();
        this.serpientes();
    }

    _getPosicion(x){
        return this._tablero[x];
    }

    serpientes(){
        this._tablero[99] = this._tablero[2];
        this._tablero[70] = this._tablero[65];
        this._tablero[50] = this._tablero[25];
        this._tablero[67] = this._tablero[51];
        this._tablero[48] = this._tablero[10];
        this._tablero[30] = this._tablero[5];
        this._tablero[36] = this._tablero[21];
        this._tablero[15] = this._tablero[7];
        this._tablero[12] = this._tablero[1];
    }

    escaleras(){
        this._tablero[4] = this._tablero[19];
        this._tablero[28] = this._tablero[33];
        this._tablero[39] = this._tablero[74];
        this._tablero[44] = this._tablero[59];
        this._tablero[53] = this._tablero[84];
        this._tablero[63] = this._tablero[79];
        this._tablero[72] = this._tablero[96];
        this._tablero[87] = this._tablero[92];
    }
}