'use strict';

let id_centro_actividad = localStorage.getItem('centro_id');
let actividad = consultar_actividad_usuario(id_centro_actividad);

if(id_centro_actividad==null){
    window.location.href='index.html';
}

let mostrar_lista_actividades = () =>{

    var docFrag = document.createDocumentFragment();

    for (let i = 0; i < actividad.length; i++) {

        // Agregar datos dinamicos como div
        var template = document.querySelector('#tmpl_actividades');
        var clone = document.importNode(template.content, true);
        clone.querySelector('#h1_actividad').innerHTML = actividad[i]['titulo'];
        clone.querySelector('#p_actividad').innerHTML = actividad[i]['actividad'];
        clone.querySelector('#img_actividad').setAttribute('src', actividad[i]['foto']);
        docFrag.appendChild(clone);
    }
    document.querySelector('#actividades_cards').appendChild(docFrag);
    //delete docFrag;

};

if (actividad[0] == null) {
    document.getElementById("actividades_cards").innerHTML = "";
        
    } else {
        
        mostrar_lista_actividades();
    
    
    }

