'use strict';

const tabla = document.querySelector('#tbl_centroe_primaria tbody');
const tabla1 = document.querySelector('#tbl_centroe tbody');

let tablerowvalue = '';
const centro_id = '';


let mostrar_datos = () => {
    let usuarios = listar_primaria();
    for (let i = 0; i < 10; i++) {
        let fila = tabla.insertRow(); //Linea crea el tr de la table
        fila.setAttribute('id',usuarios[i]['_id']);
        fila.insertCell().innerHTML = `<img src="${usuarios[i]['foto']}" height="60px" width="60px"> `
        fila.insertCell().innerHTML = usuarios[i]['nombre'];
        fila.insertCell().innerHTML = usuarios[i]['correo_electronico'];
        fila.insertCell().innerHTML = usuarios[i]['telefono'];
        fila.insertCell().innerHTML = usuarios[i]['tipo_centro'];
        fila.insertCell().innerHTML = usuarios[i]['nivel_centro'];
        fila.insertCell().innerHTML = usuarios[i]['provincia'];
        fila.insertCell().innerHTML = usuarios[i]['canton'];

    };
};


let mostrar_datos1 = () => {
    let usuarios = listar_secundaria();
    for (let i = 0; i < 10; i++) {
        let fila = tabla1.insertRow(); //Linea crea el tr de la table
        fila.setAttribute('id',usuarios[i]['_id']);
        fila.insertCell().innerHTML = `<img src="${usuarios[i]['foto']}" height="60px" width="60px"> `
        fila.insertCell().innerHTML = usuarios[i]['nombre'];
        fila.insertCell().innerHTML = usuarios[i]['correo_electronico'];
        fila.insertCell().innerHTML = usuarios[i]['telefono'];
        fila.insertCell().innerHTML = usuarios[i]['tipo_centro'];
        fila.insertCell().innerHTML = usuarios[i]['nivel_centro'];
        fila.insertCell().innerHTML = usuarios[i]['provincia'];
        fila.insertCell().innerHTML = usuarios[i]['canton'];

    };
};



mostrar_datos();
mostrar_datos1();
