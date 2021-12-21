import { Mascota } from './mascota.js';

$("#formulario_mascota").submit(function (ev){
    ev.preventDefault();

    let nombre = $("#propietario").val();
    let telefono = $("#telefono").val();
    let direccion = $("#direccion").val();
    let nombre_mascota = $("#nombreMascota").val();
    let tipo = $("#tipo").val();
    let enfermedad = $("#enfermedad").val();

    let nuevamascota = new Mascota(nombre, direccion, telefono, tipo, nombre_mascota, enfermedad); 

    $("#resultado").html(`
    <li>${nuevamascota.datosPropietario()}</li>
    <li>${nuevamascota.tipo}, mientras que el nombre de la mascota es ${nuevamascota.nombre_mascota} y su enfermedad es ${nuevamascota.enfermedad}</li>    
    `);
});