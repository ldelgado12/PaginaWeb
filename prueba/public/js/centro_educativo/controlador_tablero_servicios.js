const tabla = document.querySelector('#tbl_etiquetas tbody');

let userlocal = localStorage.getItem('centro_id');

if(userlocal==null){
    window.location.href='index.html';
}


let servicios = consultar_servicios(userlocal);


let mostrar_datos = () =>{
    for(let i =0; i < servicios.length; i++){
        let fila = tabla.insertRow(); //Linea crea el tr de la table
        fila.insertCell().innerHTML = servicios[i]['titulo'];
        fila.insertCell().innerHTML = servicios[i]['descripcion'];

    };

};

if(servicios [0] == null){
    swal.fire({
        type: 'error',
        title: 'No hay servicios registrados',
    }).then(function () {
        window.location = "/public/padrefamilia/tablero_centroeducativo.html";
    });

}
else{
    mostrar_datos();

}

