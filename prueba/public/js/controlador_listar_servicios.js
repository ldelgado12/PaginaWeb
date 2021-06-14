'use strict';

const tabla = document.querySelector('#tbl_etiquetas tbody');

let userlocal = localStorage.getItem('usuario_en_sesion');

if(userlocal==null){
    window.location.href='index.html';
}

let servicios = consultar_servicios(userlocal);


let mostrar_datos = () =>{
    for(let i =0; i < servicios.length; i++){
        let fila = tabla.insertRow(); //Linea crea el tr de la table
        fila.insertCell().innerHTML = servicios[i]['titulo'];
        fila.insertCell().innerHTML = servicios[i]['descripcion'];
        fila.insertCell().innerHTML ='<button class="btn_editar_noticia" style="border: none; background-color: inherit; margin-left: 3px"><img src="/public/images/edit.png" style="width: 30px; height:30px;"></button>';
        fila.insertCell().innerHTML ='<button class="btn_borrar_noticia" style="border: none; background-color: inherit; margin-left: 3px"><img src="/public/images/garbage.png" style="width: 30px; height:30px;"></button>';
        fila.querySelector('button.btn_editar_noticia').setAttribute('id', servicios[i]['_id']);
        fila.querySelector('button.btn_borrar_noticia').setAttribute('id', servicios[i]['_id']);

    };

};

if(servicios [0] == null){
    swal.fire({
        type: 'error',
        title: 'No hay servicios registrados',
        text: 'Por favor registre uno'
    }).then(function () {
        window.location = "/public/registrar_servicios.html";
    });

}
else{
    mostrar_datos();

}

$('.btn_editar_noticia').click(function () {
    var id_value = $(this).attr('id');
    console.log('Editar' + id_value);
    window.location = `/public/modificar_servicios.html?id=${id_value}`;
});

$('.btn_borrar_noticia').click(function () {
    var id_value = $(this).attr('id');
    //console.log('Borar' + id_value);

    Swal.fire({
        title: 'Desea eliminar el servicio?',
        text: "Este accion no se puede revertir!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar servicio!'
    }).then((result) => {
        if (result.value) {
            eliminar_servicio(id_value);
            then(function() {
                window.location = "/public/listar_servicios.html";
          
              });
        }
    })

});


