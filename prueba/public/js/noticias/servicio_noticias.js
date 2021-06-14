
// Validar informacion de campos de formulario

let registrar_noticias = (puserid, ptitulo, pdescripcion, pfecha) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_noticias",
        method: "POST",
        data: {
            userid: puserid,
            titulo: ptitulo,
            descripcion: pdescripcion,
            fecha: pfecha
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'La noticia fue registrada',
            text: 'Gracias por registrar una actividad'
        }).then(function () {
            window.location = "listar_noticias.html";
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La noticia no fue registrada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    });
};

let consultar_noticias = (pId) => {

    let consultar_noticia = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_noticias",
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
            consultar_noticia = response.noticias;
        } else {
            consultar_noticia = response.noticias;
            swal.fire({
                type: 'error',
                title: 'Error',
                text: response.msj
            });
        }

    });

    return consultar_noticia;

};

let eliminar_noticia = (pId) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/eliminar_noticia",
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
            title: 'Noticia eliminada',
            text: `Gracias, la noticia fue eliminada correctamente`
        }).then(function () {
            window.location = "/public/padrefamilia/listar_citas_pf.html";
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La noticia no fue eliminada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    });

};

let buscarnoticia_noticiaid = (noticia_id) => {

    let noticia = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_noticia/" + noticia_id,
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        noticia = res.noticias;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return noticia;

};

let actualizar_noticia = (pId, pTitulo, pDescripcion, pFecha) => {

    var now = new Date(pFecha);
    var isoString = now.toISOString();

    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_noticia",
        method: "POST",
        data: {
            _id: pId,
            titulo: pTitulo,
            descripcion: pDescripcion,
            fecha: isoString
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'La noticia fue modificada',
            text: `Gracias por modificar la noticia. Titulo: ${pTitulo}`
        }).then(function () {
            window.location = "/public/listar_noticias.html";
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La noticia no fue modificada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    });

};

