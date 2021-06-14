'use strict';

const tabla = document.querySelector('#tbl_etiquetas tbody');

let userlocal = localStorage.getItem('usuario_en_sesion');

if(userlocal==null){
    window.location.href='index.html';
}

let mostrar_datos = () =>{
    let etiquetas = listado_etiquetas();
    for(let i =0; i < etiquetas.length; i++){
        let fila = tabla.insertRow(); //Linea crea el tr de la table
        fila.insertCell().innerHTML = etiquetas[i]['nombre'];
        fila.insertCell().innerHTML ='<button class="btn_editar_noticia" style="border: none; background-color: inherit; margin-left: 3px"><img src="/public/images/edit.png" style="width: 30px; height:30px;"></button>';
        fila.insertCell().innerHTML ='<button class="btn_borrar_noticia" style="border: none; background-color: inherit; margin-left: 3px"><img src="/public/images/garbage.png" style="width: 30px; height:30px;"></button>';
    };

};



mostrar_datos();

$('.btn_editar_noticia').click(function () {
    swal.fire({
        type: 'error',
        title: 'Las etiquetas se encuentran bajo mantenimiento',
        text: 'Por favor intente luego'
    }).then(function () {
        window.location = "/public/perfil_centroedu.html";
    });
});

$('.btn_borrar_noticia').click(function () {
    swal.fire({
        type: 'error',
        title: 'Las etiquetas se encuentran bajo mantenimiento',
        text: 'Por favor intente luego'
    }).then(function () {
        window.location = "/public/perfil_centroedu.html";
    });
});
