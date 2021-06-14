'use strict';
const input_busqueda = document.querySelector('#buscar_transacción');


let mostrarTransacciones = () => {

    let transacciones = obtenerTransacciones();

    let busqueda = '';
    if (input_busqueda.value !== null){
        busqueda = input_busqueda.value;
    }
    let resultado =[];

    resultado = transacciones.filter(transaccion => (
            busqueda.length > 0 ? transaccion.correo_electronico.toLowerCase().trim().includes(
                busqueda.toLowerCase().trim()
            ) : transaccion
        )
    );

    let cuerpoTabla = document.querySelector('#tblTransacciones tbody');
    cuerpoTabla.innerHTML = '';

    for(let i = 0; i < resultado.length; i++){
        // creacion de la fila e incertandola en cuepo tabla
        let fila = cuerpoTabla.insertRow();
        fila.className = 'fila';

        // creacion de las celdas y poniendolas en la fila

        let celdaFechaHora = fila.insertCell();
        let celdaTransaccion = fila.insertCell();
        let celdaUsuario = fila.insertCell();
        let celdaTipoUsuario = fila.insertCell();
        let celdaEstatus = fila.insertCell();


         celdaFechaHora.classList.add('column1');
         celdaTransaccion.classList.add('column2');
         celdaUsuario.classList.add('column3');
         celdaTipoUsuario.classList.add('column4');
         celdaEstatus.classList.add('column5');


        //agregando texto a las celdas

        celdaFechaHora.innerHTML = resultado[i]['fechaHora'];
        celdaTransaccion.innerHTML = resultado[i]['transaccion'];
        celdaUsuario.innerHTML = resultado[i]['usuario'];

        let tipo_usuario = resultado[i]['tipoUsuario'];
        switch (tipo_usuario) {
            case 'AD':
                celdaTipoUsuario.innerHTML = 'Administrador';
                break;
            case 'PF':
                celdaTipoUsuario.innerHTML = 'Padre de familia';
                break;
            case 'CE':
                celdaTipoUsuario.innerHTML = 'Centro educativo';
                break;
        }

        celdaEstatus.innerHTML = resultado[i]['estatus'];
    }
};

mostrarTransacciones();
input_busqueda.addEventListener('keyup', mostrarTransacciones);