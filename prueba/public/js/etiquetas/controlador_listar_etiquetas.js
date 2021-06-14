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
        fila.insertCell().innerHTML ='<button class="btn_editar_noticia" style="border: none; background-color: inherit; margin-left: 200px"><img src="/public/images/edit.png" style="width: 30px; height:30px;"></button>';
        fila.insertCell().innerHTML ='<button class="btn_borrar_noticia" style="border: none; background-color: inherit; margin-left: 70px"><img src="/public/images/garbage.png" style="width: 30px; height:30px; margin-left: 100px"></button>';
        fila.querySelector('button.btn_editar_noticia').setAttribute('id', etiquetas[i]['_id']);
        fila.querySelector('button.btn_borrar_noticia').setAttribute('id', etiquetas[i]['_id']);

    };

};

mostrar_datos();

$('.btn_editar_noticia').click(function () {
    var id_value = $(this).attr('id');
    console.log('Editar' + id_value);
    window.location = `/public/modificar_etiqueta.html?id=${id_value}`;
});

$('.btn_borrar_noticia').click(function () {
    var id_value = $(this).attr('id');
    //console.log('Borar' + id_value);

    Swal.fire({
        title: 'Desea eliminar la etiqueta?',
        text: "Este accion no se puede revertir!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar etiqueta!'
    }).then((result) => {
        if (result.value) {
            eliminar_etiqueta(id_value);
            then(function() {
                window.location = "/public/lista_etiquetas.html";
          
              });
        }
    })

});


