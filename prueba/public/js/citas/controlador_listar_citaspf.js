'use strict';

let citas = consultar_citas_pf(userPadreFamilia);
const tabla = document.querySelector('.tabla_info tbody');

let mostrar_lista_citas = () => {

    tabla.innerHTML = '';

    if (citas.success = true) {
        for (let i = 0; i < citas.length; i++) {
            let newdate = new Date(citas[i]['fecha']);
            let month = newdate.getMonth() + 1;
            let day = newdate.getDate();
            let year = newdate.getFullYear();
            let dateformated = month + '-' + day + '-' + year;
            let cita_userid = obtener_usuario_por_id_avatar(citas[i]['userid']);
            let cita_centroid = obtener_usuario_por_id_centro(citas[i]['centroid']);
            //let idcita = citas[i]['_id'];
            //console.log(month+'-'+day+'-'+year);

            let fila = tabla.insertRow(); // Crea tr de la tabla
            //fila.setAttribute('id', idcita);
            fila.insertCell().innerHTML = cita_userid.nombre + ' ' + cita_userid.papellido;
            fila.insertCell().innerHTML = cita_centroid.nombre;
            //fila.insertCell().innerHTML = citas[i]['fecha'];
            fila.insertCell().innerHTML = citas[i]['razon'];
            fila.insertCell().innerHTML = dateformated;
            fila.insertCell().innerHTML = citas[i]['hora'];
            fila.insertCell().innerHTML = '<button class="btn_editar_cita" style="border: none; background-color: inherit;"><img src="/public/images/edit.png" style="width: 20px; height:20px;"></button>' + ' ' + '<button class="btn_borrar_cita" style="border: none; background-color: inherit;"><img src="/public/images/garbage.png" style="width: 20px; height:20px;"></button>';
            fila.querySelector('button.btn_editar_cita').setAttribute('id', citas[i]['_id']);
            fila.querySelector('button.btn_borrar_cita').setAttribute('id', citas[i]['_id']);
        }
    }
};

mostrar_lista_citas();

$('.btn_editar_cita').click(function () {
    var id_value = $(this).attr('id');
    console.log('Editar' + id_value);
    window.location = `/public/centroeducativo/modificar_citas_pf.html?id=${id_value}`;
});

$('.btn_borrar_cita').click(function () {
    var id_value = $(this).attr('id');
    //console.log('Borar' + id_value);

    Swal.fire({
        title: 'Desea eliminar la cita?',
        text: "Este accion no puede ser reversada!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar cita!'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Eliminado!',
                'La cita fue eliminada.',
                'success'
            )
            eliminar_cita(id_value);
            window.location = "/public/padrefamilia/listar_citas_pf.html";
        }
    })

});










