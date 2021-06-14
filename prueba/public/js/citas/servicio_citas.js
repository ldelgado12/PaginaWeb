
// Validar informacion de campos de formulario

let registrar_citas = (puserId, puserCentro,pRazon, pFecha, pHora) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_citas",
        method: "POST",
        data: {
            userid: puserId,
            centroid: puserCentro,
            razon: pRazon,
            fecha: pFecha,
            hora: pHora
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'La cita fue registrada',
            text: `Gracias por registrar una cita con el centro. Fecha: ${pFecha} Hora: ${pHora}`
        }).then(function() {
            window.location = "/public/padrefamilia/listar_citas_pf.html";
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La cita no fue registrada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    });
};


let consultar_citas = (pCentroID) => {

    let consultar_cita = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_citas",
        method: "POST",
        data: {
            centroid : pCentroID
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        consultar_cita = res.citas;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return consultar_cita;

};

let consultar_citas_pf = (pUserPF) => {

    let consultar_cita = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_citas_pf",
        method: "POST",
        data: {
            userid : pUserPF
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        consultar_cita = res.citas;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return consultar_cita;

};

let buscarcita_citaid = (cita_id) => {

    let cita = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_cita/"+cita_id,
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        cita = res.citas;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return cita;

};

let actualizar_cita = (pId,puserId, puserCentro,pRazon, pFecha, pHora) =>{
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_cita",
        method: "POST",
        data: {
            _id: pId,
            userid: puserId,
            centroid: puserCentro,
            razon: pRazon,
            fecha: pFecha,
            hora: pHora
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'La cita fue registrada',
            text: `Gracias por registrar una cita con el centro. Fecha: ${pFecha} Hora: ${pHora}`
        }).then(function() {
            window.location = "/public/padrefamilia/listar_citas_pf.html";
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La cita no fue registrada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    }); 

};

let actualizar_cita_ce = (pId,puserId, puserCentro,pRazon, pFecha, pHora) =>{
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_cita",
        method: "POST",
        data: {
            _id: pId,
            userid: puserId,
            centroid: puserCentro,
            razon: pRazon,
            fecha: pFecha,
            hora: pHora
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'La cita fue registrada',
            text: `Gracias por registrar una cita con el centro. Fecha: ${pFecha} Hora: ${pHora}`
        }).then(function() {
            window.location = "/public/listar_citas.html";
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La cita no fue registrada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    }); 

};

let eliminar_cita = (pId) =>{
    let request = $.ajax({
        url: "http://localhost:4000/api/eliminar_cita",
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
            title: 'La cita fue registrada',
            text: `Gracias por registrar una cita con el centro. Fecha: ${pFecha} Hora: ${pHora}`
        }).then(function() {
            window.location = "/public/padrefamilia/listar_citas_pf.html";
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La cita no fue registrada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    }); 

};


let consultar_citas_ce = (pUserCE) => {

    let consultar_cita = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_citas_ce",
        method: "POST",
        data: {
            centroid : pUserCE
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        consultar_cita = res.citas;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return consultar_cita;

};


