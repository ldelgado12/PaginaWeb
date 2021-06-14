
// Validar informacion de campos de formulario

let registrar_servicios = (puserid, ptitulo, pdescripcion) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_servicios",
        method: "POST",
        data: {
            userid: puserid,
            titulo: ptitulo,
            descripcion: pdescripcion,
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'El servicio fue registrado',
            text: 'Gracias por registrar un servicio'
        }).then(function () {
            window.location = "listar_servicios.html";
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'El servicio no fue registrado',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    });
};

let consultar_servicios = (pId) => {

    let consultar_servicio = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_servicios",
        method: 'POST',
        async: false,
        data: {
            userid: pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function (response) {

        if (response.success) {
            consultar_servicio = response.servicio;
        } else {
            consultar_servicio = response.servicio;
            swal.fire({
                type: 'error',
                title: 'Error',
                text: response.msj
            });
        }

    });

    return consultar_servicio;

};

let eliminar_servicio = (pId) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/eliminar_servicio",
        method: "POST",
        data: {
            _id: pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'Servicio eliminado',
            text: `Gracias, el servicio fue eliminado correctamente`
        }).then(function () {
            window.location = "/public/listar_servicios.html";
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'El servicio no fue eliminado',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    });

};


let actualizar_servicio = (pId, pTitulo, pDescripcion) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_servicio",
        method: "POST",
        data: {
            _id: pId,
            titulo: pTitulo,
            descripcion: pDescripcion,
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'El servicio fue modificado',
            text: `Gracias por modificar el servicio`
        }).then(function () {
            window.location = "/public/listar_servicios.html";
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La servicio no fue modificado',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    });

};

let buscar_servicio = (pId) => {

    let traer_servicio = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_servicio",
        method: 'POST',
        async: false,
        data: {
            _id: pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function (response) {

        if (response.success) {
            traer_servicio = response.servicio;
        } else {
            traer_servicio = response.servicio;
            swal.fire({
                type: 'error',
                title: 'Error',
                text: response.msj
            });
        }

    });

    return traer_servicio;

};