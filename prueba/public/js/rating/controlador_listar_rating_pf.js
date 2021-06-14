
'use strict';

const tabla = document.querySelector('#tbl_ratings tbody');
let id_padrefamilia_evaluacion = localStorage.getItem('usuario_en_sesion');

if(id_padrefamilia_evaluacion==null){
    window.location.href='index.html';
}

let ratings = consultar_ratings_pf(id_padrefamilia_evaluacion);


let mostrar_listar_ratings = () =>{
    console.log(ratings);
    for(let i = 0; i < ratings.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla
        let usuario = obtener_usuario_por_id(ratings[i]['centroid']);
        let newdate = new Date(ratings[i]['fecha']);
        let month = newdate.getMonth() + 1;
        let day = newdate.getDate();
        let year = newdate.getFullYear();
        let dateformated = month + '-' + day + '-' + year;

        fila.insertCell().innerHTML = usuario.nombre;
        fila.insertCell().innerHTML = ratings[i]['comentario'];
        fila.insertCell().innerHTML = ratings[i]['rating'];
        fila.insertCell().innerHTML = dateformated;
        fila.insertCell().innerHTML = '<button class="btn_editar_noticia" style="border: none; background-color: inherit;"><img src="/public/images/edit.png" style="width: 20px; height:20px;"></button>' + ' ' + '<button class="btn_borrar_noticia" style="border: none; background-color: inherit;"><img src="/public/images/garbage.png" style="width: 20px; height:20px;"></button>';
        fila.querySelector('button.btn_editar_noticia').setAttribute('id', ratings[i]['_id']);
        fila.querySelector('button.btn_borrar_noticia').setAttribute('id', ratings[i]['_id']);
        
    }; 

};

if (ratings[0] == null) {
    swal.fire({
        type: 'error',
        title: 'No hay evaluaciones registradas',
        text: 'Por favor registre una'
    }).then(function () {
        window.location = "/public/padrefamilia/perfil_padre_familia.html";
    });
} else {
 
mostrar_listar_ratings();
}

$('.btn_editar_noticia').click(function () {
    var id_value = $(this).attr('id');
    console.log('Editar' + id_value);
    window.location = `/public/centroeducativo/modificar_evaluacion.html?id=${id_value}`;
});

$('.btn_borrar_noticia').click(function () {
    var id_value = $(this).attr('id');
    //console.log('Borar' + id_value);

    Swal.fire({
        title: 'Desea eliminar la evaluacion?',
        text: "Este accion no se puede revertir!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar elavuacion!'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Eliminado!',
                'La evaluacion fue eliminada.',
                'success'
            )
            eliminar_evaluacion(id_value);
            window.location = "/public/padrefamilia/listar_evaluaciones.html";
        }
    })

});

