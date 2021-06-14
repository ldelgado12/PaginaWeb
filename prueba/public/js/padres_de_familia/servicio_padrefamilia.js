'use strict';


let registrar_pf = (pCorreo, pNombre, pSegundoNombre, pApellido, pSegundoApellido, pIdentificacion, pTelefono, pProvincia, pCanton, pDistrito, pDireccion, pCantHijos, pFoto, pTipoId) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_pf",
        method: "POST",
        data: {
            nombre : pNombre,
            segundo_nombre: pSegundoNombre,
            papellido : pApellido,
            sapellido : pSegundoApellido,
            identificacion : pIdentificacion,
            cantidad_hijos : pCantHijos,
            correo_electronico : pCorreo,
            telefono : pTelefono,
            provincia : pProvincia,
            canton : pCanton,
            distrito: pDistrito,
            direccion: pDireccion,
            foto: pFoto,
            tipo_usuario : 'PF',
            estado : 'activo',
            tipo_id: pTipoId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    let estado = 'Fallido';

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'El padre de familia ha sido registrado.',
            text: 'Se le estará comunicando la decisión por correo. Recibirá un correo con su clave temporal.',
        }).then(function() {
            window.location = "index.html";
            let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
          registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "Registrar padre de familia", "Exitoso");    
        });
      });

    request.fail(function (jqXHR, textStatus) {
        swal({
            title: 'El padre de familia no pudo registrado',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo',
            icon: 'error',
        });
        let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
        registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "Registrar padre de familia", "Fallida");
    });
};


let modificar_pf = (pCorreo, pNombre, pSegundoNombre, pApellido, pSegundoApellido, pIdentificacion, pTelefono, pProvincia, pCanton, pDistrito, pDireccion, pCantHijos, pFoto, pTipoId, _id) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/modificar_pf",
        method: "POST",
        data: {
            nombre : pNombre,
            segundo_nombre: pSegundoNombre,
            papellido : pApellido,
            sapellido : pSegundoApellido,
            identificacion : pIdentificacion,
            cantidad_hijos : pCantHijos,
            correo_electronico : pCorreo,
            telefono : pTelefono,
            provincia : pProvincia,
            canton : pCanton,
            distrito: pDistrito,
            direccion: pDireccion,
            foto: pFoto,
            tipo_id: pTipoId,
            _id: _id
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    let estado = 'Fallido';

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'El padre de familia ha modificado.',
            text: 'La información se actualizará en su perfil.'

        }).then(function() {
            let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
            registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "modificar padre de familia", "Exitoso");
            window.location = "/public/padrefamilia/perfil_padre_familia.html";
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal({
            title: 'El padre de familia no pudo ser modificado',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo',
            icon: 'error',
        });
        let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
        registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "modificar padre de familia", "Fallida");
    });
};


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





