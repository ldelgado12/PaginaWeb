'use strict';

let userlocal_actividad = localStorage.getItem('centro_id');
//console.log(userlocal_noticias);
let actividad = consultar_actividad(userlocal_actividad);

if(userlocal_actividad==null){
    window.location.href='index.html';
}

let mostrar_actividad_tablero = () => {

    var docFrag = document.createDocumentFragment();

    for (let i = 0; i < actividad.length; i++) {
        // Agregar datos dinamicos como div
        var template = document.querySelector('#tmpl_actividad');
        var clone = document.importNode(template.content, true);
        clone.querySelector('#titulo_card').innerHTML = actividad[i]['titulo'];
        clone.querySelector('#parrafo_card').innerHTML = actividad[i]['actividad'];
        clone.querySelector('#imagen_actividad').innerHTML = `<img src="${actividad[i]['foto']}" height="110px" width="110px"> `;
        docFrag.appendChild(clone);
    }
    document.querySelector('#tmpl_actividad').appendChild(docFrag);
    //delete docFrag;

};

mostrar_actividad_tablero();




