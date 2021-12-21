export class Propietario {
    constructor (nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario() {
        return `El nombre del propietario es ${this.nombre}, su dirección es ${this.direccion}, y su teléfono es ${this.telefono}`
    };
};

