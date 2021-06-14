'use strict';

const tabla = document.querySelector('#tbl_tabla tbody');

let mostrar_datos = () =>{
    let utiles = lista_utiles();
    for(let i = 0; i < utiles.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        fila.insertCell().innerHTML = utiles[i]['utiles'];
        fila.insertCell().innerHTML = utiles[i]['cantidad']
       
    }; 

};


mostrar_datos();