
const inputFiltro = document.querySelector('#txtFiltro');
const usuarioSesion= localStorage.getItem('usuario_en_sesion');

if(usuarioSesion==null){
    window.location.href='index.html';
}

let usuarios = listar_centroe();

let mostrar_datos_filtrados = () => {

    let tabla = document.querySelector('#tbl_centroe tbody');
    let filtro = inputFiltro.value;

    tabla.innerHTML = '';

    for (let i = 0; i < usuarios.length; i++) {
        if (
        (usuarios[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()))
        || (usuarios[i]['correo_electronico'].toLowerCase().includes(filtro.toLowerCase()))
        || (usuarios[i]['telefono'].toLowerCase().includes(filtro.toLowerCase()))
        || (usuarios[i]['tipo_centro'].toLowerCase().includes(filtro.toLowerCase()))
        || (usuarios[i]['nivel_centro'].toLowerCase().includes(filtro.toLowerCase()))
        || (usuarios[i]['provincia'].toLowerCase().includes(filtro.toLowerCase()))
        || (usuarios[i]['canton'].toLowerCase().includes(filtro.toLowerCase()))

        ) {
            let fila = tabla.insertRow(); // Crea tr de la tabla
            fila.setAttribute('id',usuarios[i]['_id']);
            fila.insertCell().innerHTML = `<img src="${usuarios[i]['foto']}" height="60px" width="60px"> `
            fila.insertCell().innerHTML = usuarios[i]['nombre'];
            fila.insertCell().innerHTML = usuarios[i]['correo_electronico'];
            fila.insertCell().innerHTML = usuarios[i]['telefono'];
            fila.insertCell().innerHTML = usuarios[i]['tipo_centro'];
            fila.insertCell().innerHTML = usuarios[i]['nivel_centro'];
            fila.insertCell().innerHTML = usuarios[i]['provincia'];
            fila.insertCell().innerHTML = usuarios[i]['canton'];

        }
    }

};
mostrar_datos_filtrados();


if (usuarioSesion == null) {
    
} else {
inputFiltro.addEventListener('keyup', mostrar_datos_filtrados);

$("#tbl_centroe tbody").on("click", "tr", function () {
    let nombre_centro = $(this).find('td:first').text();
    let id_centro_row = $(this).closest('tr').attr('id');
    //alert(nombre_centro);
    //alert(id_centro_row);
    window.localStorage.setItem('centro_id',id_centro_row);
    window.location.href='tablero_centroeducativo.html';
});
}

