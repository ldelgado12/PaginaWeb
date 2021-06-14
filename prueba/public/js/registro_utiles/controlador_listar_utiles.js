'use strict';

let utiles = consultar_utiles(userid);
let user_local_utiles = localStorage.getItem('usuario_en_sesion');

if (user_local_utiles == null) {
    window.location.href = 'index.html';
}

let mostrar_datos = () => {

    let tabla = document.querySelector('.tabla_info tbody');
    tabla.innerHTML = '';
        for (let i = 0; i < utiles.length; i++) {
            let fila = tabla.insertRow(); // Crea tr de la tabla
            fila.insertCell().innerHTML = utiles[i]['nombre'];
            fila.insertCell().innerHTML = utiles[i]['tipo'];
            fila.insertCell().innerHTML = utiles[i]['ciclo'];
            fila.insertCell().innerHTML = utiles[i]['nivel'];
            fila.insertCell().innerHTML = utiles[i]['anho'];
            fila.insertCell().innerHTML = utiles[i]['util'];
            fila.insertCell().innerHTML = utiles[i]['cantidad'];


            let celda_configuracion = fila.insertCell();

            //creacion del boton de editar
            let boton_editar = document.createElement('a');
            boton_editar.textContent = 'Editar ';
            boton_editar.href = `actualizar_utiles.html?id_util=${utiles[i]['_id']}`;

/*
            if(utiles[i]['estado'] == 'activo'){    
                //creacion boton de desactivar
            let boton_desactivar = document.createElement('a');
            boton_desactivar.textContent = 'Desactivar';
            boton_desactivar.dataset.id_utiles = utiles[i]['_id'];
            boton_desactivar.href = '#';

            celda_configuracion.appendChild(boton_desactivar);

            boton_desactivar.addEventListener('click', function(){
                desactivar(this.dataset.id_utiles);
            });
            }else{
                
            //creacion boton de activar
            let boton_activar = document.createElement('a');
            boton_activar.textContent = 'activar';
            boton_activar.dataset.id_utiles = utiles[i]['_id'];
            boton_activar.href = '#';

            celda_configuracion.appendChild(boton_activar);

            boton_activar.addEventListener('click', function(){
                activar(this.dataset.id_utiles);
                window.location.href = 'listar_utiles.html';
            });
            }

            
*/

            //creacion boton de eliminar
            let boton_eliminar = document.createElement('a');
            boton_eliminar.textContent = ' Eliminar';
            boton_eliminar.dataset.id_utiles = utiles[i]['_id'];
            boton_eliminar.href = '#';
            

            boton_eliminar.addEventListener('click', function(){
                eliminar(this.dataset.id_utiles);
                window.location.href = 'listar_utiles.html';
            });

            celda_configuracion.appendChild(boton_editar);
            
            
            celda_configuracion.appendChild(boton_eliminar);

        }
};

if (utiles[0] == null) {
    swal.fire({
        type: 'error',
        title: 'No hay útiles registrados',
        text: 'Por favor registre uno'
    }).then(function () {
        window.location = "/public/registrar_utiles.html";
    });
} else {
mostrar_datos();
    
}



