
// Validar informacion de campos de formulario

let obtener_usuario_por_id = (pId) =>{
    let usuario=[];
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_usuario",
        method: 'POST',
        async: false,
        data: {
            _id : pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function (response) {

    	if (response.success){
    		usuario = response.usuario;
		}else{
            usuario = response;
            swal({
                type: 'error',
                title: 'Error',
                text: response.msj
            });
		}

    });

    return  usuario;
};


let obtener_usuario_por_id_avatar = (pId) =>{
    let usuario=[];
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_usuario",
        method: 'POST',
        async: false,
        data: {
            _id : pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function (response) {

    	if (response.success){
    		usuario = response.usuario;
		}else{
            usuario = response;
            swal({
                type: 'error',
                title: 'Error',
                text: response.msj
            });
		}

    });

    return  usuario;
};



