'use strict';

let userlocal = localStorage.getItem('usuario_en_sesion');
//console.log(userlocal);
let noticias = consultar_noticias(userlocal);

if (userlocal == null) {
    window.location.href = 'index.html';
}

let mostrar_datos = () => {

    let tabla = document.querySelector('.tabla_info tbody');
    tabla.innerHTML = '';

    for (let i = 0; i < noticias.length; i++) {
        let newdate = new Date(noticias[i]['fecha']);
        //Align to server date
        newdate.setHours(newdate.getHours() + 6);

        let month = newdate.getMonth() + 1;
        let day = newdate.getDate();
        let year = newdate.getFullYear();
        let dateformated = month + '-' + day + '-' + year;

        // Server time date
        //var d2ISO = newdate.toISOString(); 

        let fila = tabla.insertRow(); // Crea tr de la tabla
        fila.insertCell().innerHTML = noticias[i]['titulo'];
        fila.insertCell().innerHTML = noticias[i]['descripcion'];
        fila.insertCell().innerHTML = dateformated;
        fila.insertCell().innerHTML = '<button class="btn_editar_noticia" style="border: none; background-color: inherit;"><img src="/public/images/edit.png" style="width: 20px; height:20px;"></button>' + ' ' + '<button class="btn_borrar_noticia" style="border: none; background-color: inherit;"><img src="/public/images/garbage.png" style="width: 20px; height:20px;"></button>';
        fila.querySelector('button.btn_editar_noticia').setAttribute('id', noticias[i]['_id']);
        fila.querySelector('button.btn_borrar_noticia').setAttribute('id', noticias[i]['_id']);
    }

};


if (noticias[0] == null) {
    swal.fire({
        type: 'error',
        title: 'No hay noticias registradas',
        text: 'Por favor registre una'
    }).then(function () {
        window.location = "/public/registro_noticias.html";
    });

} else {
mostrar_datos();
    
}



$('.btn_editar_noticia').click(function () {
    var id_value = $(this).attr('id');
    console.log('Editar' + id_value);
    window.location = `/public/modificar_noticias.html?id=${id_value}`;
});


$('.btn_borrar_noticia').click(function () {
    var id_value = $(this).attr('id');
    //console.log('Borar' + id_value);

    Swal.fire({
        title: 'Desea eliminar la noticia?',
        text: "Este accion no se puede revertir!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar noticia!'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Eliminado!',
                'La noticia fue eliminada.',
                'success'
            )
            eliminar_noticia(id_value);
            window.location = "/public/listar_noticias.html";
        }
    })

});