'use strict';

const tabla = document.querySelector('#tbl_etiquetas tbody');

if(user_admin==null){
    window.location.href='index.html';
}

let mostrar_datos = () =>{
    let usuarios = listar_solicitudes();
    for(let i =0; i < usuarios.length; i++){
        let fila = tabla.insertRow(); //Linea crea el tr de la table
        fila.insertCell().innerHTML = usuarios[i]['nombre'];
        fila.insertCell().innerHTML = usuarios[i]['correo_electronico'];
        fila.insertCell().innerHTML = usuarios[i]['telefono'];
        fila.insertCell().innerHTML = usuarios[i]['fecha_registro'];
        
        fila.insertCell().innerHTML = `<a href="${usuarios[i]['adjuntar_documentos']}" download><img src="https://img.icons8.com/ios/38/000000/download.png" style="width: 35px; height:40px; margin-left: 70px" ></a>`;
        fila.insertCell().innerHTML ='<button class="btn_editar_noticia" style="border: none; background-color: inherit; margin-left: 70px;"><img src="https://img.icons8.com/ios/30/000000/checked.png" style="width: 35px; height:35px;"></button>';
        
        fila.insertCell().innerHTML ='<button class="btn_borrar_noticia" style="border: none; background-color: inherit; margin-left: 70px;"><img src="/public/images/garbage.png" style="width: 30px; height:30px;"></button>';

        fila.querySelector('button.btn_editar_noticia').setAttribute('id', usuarios[i]['_id']);
        fila.querySelector('button.btn_editar_noticia').setAttribute('correo', usuarios[i]['correo_electronico']);
        fila.querySelector('button.btn_editar_noticia').setAttribute('clave', usuarios[i]['clave']);


        fila.querySelector('button.btn_borrar_noticia').setAttribute('id', usuarios[i]['_id']);

    };

    
};


mostrar_datos();

$('.btn_borrar_noticia').click(function () {
    var id_value = $(this).attr('id');
    //console.log('Borar' + id_value);

    Swal.fire({
        title: 'Desea eliminar la solicitud?',
        text: "Esta accion no se puede revertir!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar solicitud!'
    }).then((result) => {
        if (result.value) {
            eliminar_solicitud(id_value);
            then(function() {
                window.location = "/public/listar_solicitudes.html";
          
              });
        }
    })

});

$('.btn_editar_noticia').click(function () {
    var id_value = $(this).attr('id');
    var correo = $(this).attr('correo');
    var clave = $(this).attr('clave');

    //console.log('Borar' + id_value);

    Swal.fire({
        title: 'Desea aprobar la solicitud?',
        text: "Esta accion no se puede revertir!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, aprobar solicitud!'
    }).then((result) => {
        if (result.value) {
            habilitar(id_value, correo, clave);
            then(function() {
                window.location = "/public/listar_solicitudes.html";
          
              });
        }
    })

});