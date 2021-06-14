'use strict';


let listar_usuarios = () => {

    let listar_usuarios = [];

    let request = $.ajax({

        url: "http://localhost:4000/api/listar_todos",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
    });

    request.done(function (res) {
        listar_usuarios = res.usuarios;
    });

    request.fail(function (jqXHR, textStatus) {
    });
    return listar_usuarios;

};


let deshabilitar = (pId) =>{

    let request = $.ajax({
        url: "http://localhost:4000/api/deshabilitar_usuario",
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
            swal({
                title: 'El usuario se deshabilito con éxito',
                icon: 'success',
            });

            let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
            registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "Deshabilitar usuario", "Exitoso");
        }else{
            swal({
                title: 'El usuario no se pudo deshabilitar',
                text: 'Ocurrió un error inesperado, por favor intente de nuevo',
                icon: 'error',
            });
            let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
            registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "Deshabilitar usuario", "Fallida");
        }

    });

    request.fail(function (jqXHR, textStatus) {
        swal({
            title: 'El usuario no se pudo deshabilitar',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo',
            icon: 'error',
        });

        let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
        registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "Deshabilitar usuario", "Fallida");
    });
};

let habilitar = (pId) =>{

    let request = $.ajax({
        url: "http://localhost:4000/api/habilitar_usuario",
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
            swal({
                title: 'El usuario se habilito con éxito',
                icon: 'success',
            });

            let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
            registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "Habilitar usuario", "Exitoso");
        }else{
            swal({
                title: 'El usuario no se pudo habilitar',
                text: 'Ocurrió un error inesperado, por favor intente de nuevo',
                icon: 'error',
            });
            let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
            registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "Habilitar usuario", "Fallida");
        }

    });
    request.fail(function (jqXHR, textStatus) {
        swal({
            title: 'El usuario no se pudo deshabilitar',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo',
            icon: 'error',
        });
        let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
        registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "Habilitar usuario", "Fallida");
    });
};

let borrar = (pId) =>{

    swal({
        title: "¿Estás seguro?",
        text: "Una vez borrado, la información de la cuenta no podrá ser recuperada!",
        icon: "warning",
        buttons: ['No, cancelar', 'Si, estoy seguro'],
        dangerMode: true,
        closeOnConfirm : false
    }).then((isConfirm) => {
        if (isConfirm){
            let request = $.ajax({
                url: "http://localhost:4000/api/borrar_usuario",
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
                    swal({
                        title: 'El usuario se borró con éxito',
                        text: 'Ocurrió un error inesperado, por favor intente de nuevo',
                        icon: 'success',
                    }, function () {
                        let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
                        registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "Borrar usuario", "Exitoso");
                        window.location.href = 'listar_usuarios.html';
                    });

                }else{
                    swal({
                        title: 'El usuario no se pudo ser borrado',
                        text: 'Ocurrió un error inesperado, por favor intente de nuevo',
                        icon: 'error',
                    });
                    let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
                    registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "Borrar usuario", "Fallida");
                }

            });

            request.fail(function (jqXHR, textStatus) {
                swal({
                    title: 'El usuario no se pudo deshabilitar',
                    text: 'Ocurrió un error inesperado, por favor intente de nuevo',
                    icon: 'error',
                });
                let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
                registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "Borrar usuario", "Fallida");
            });
        }else{
            swal({
                title: 'El usuario no fue borrado'
            });
            let usuario = obtener_usuario_por_id(localStorage.usuario_en_sesion);
            registrar_transaccion(usuario.correo_electronico, usuario.tipo_usuario, "Borrar usuario", "Fallida");
        }


    });



};

