import { Animal } from './animal.js';

export class Mascota extends Animal {
    constructor (nombre, direccion, telefono, tipo, nombre_mascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombre_mascota = nombre_mascota;
        this._enfermedad = enfermedad;
    };

    get nombre_mascota() {
        return this._nombre_mascota;
    };

    set nombre_mascota(nombre_mascota) {
        this._nombre_mascota = nombre_mascota;
    };

    get enfermedad() {
        return this._enfermedad;
    };

    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    };
};