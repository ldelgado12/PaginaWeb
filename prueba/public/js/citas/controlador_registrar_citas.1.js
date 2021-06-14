'use strict';

const userPadre_citas = localStorage.getItem('usuario_en_sesion');
const userCentro_citas = localStorage.getItem('centro_id');
const input_fecha = document.querySelector('#datepicker-13');
const input_hora = document.querySelector('#slct_hora');
const boton_registrar = document.querySelector('#btn_registrar');


let validar = () => {
    let error = false;

    if (input_fecha.value == '') {
        error = true;
        input_fecha.classList.add('error_input');
    } else {
        input_fecha.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let userLoggeado = userPadre_citas;
        let userCentro = userCentro_citas;
        let fecha = input_fecha.value;
        let hora = input_hora.value;

        registrar_citas(userLoggeado, userCentro, fecha, hora);


    } else {
        swal.fire({
            type: 'warning',
            title: 'La cita no pudo ser registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

boton_registrar.addEventListener('click', obtener_datos);

let citas_programadas = () => {
    let citas = consultar_citas(userCentro_citas);
    let listacitas = [];
    for (let i = 0; i < citas.length; i++) {
        let newdate = new Date(citas[i]['fecha']);
        let month = newdate.getMonth() + 1;
        let day = newdate.getDate();
        let year = newdate.getFullYear();
        let dateformated = month + '-' + day + '-' + year;
        //console.log(month+'-'+day+'-'+year);

        listacitas.push(dateformated);
        //console.log(listacitas);
    }
    return listacitas;
};

/* Días a deshabilitar en el calendario de citas mediante un arreglo */
//var disableddates = ["3-20-2019", "3-21-2019"];
var disableddates = citas_programadas();

function DisableSpecificDates(date) {

    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();

    // First convert the date in to the mm-dd-yyyy format 
    // Take note that we will increment the month count by 1 
    var currentdate = (m + 1) + '-' + d + '-' + y;

    // We will now check if the date belongs to disableddates array 
    for (var i = 0; i < disableddates.length; i++) {

        // Now check if the current date is in disabled dates array. 
        if ($.inArray(currentdate, disableddates) != -1) {
            return [false, 'highlight_citas'];
        }
    }

    // In case the date is not present in disabled array, we will now check if it is a weekend. 
    // We will use the noWeekends function
    var weekenddate = $.datepicker.noWeekends(date);
    return weekenddate;

}

// Function to show datepicker

$(function () {
    $("#datepicker").datepicker({
        beforeShowDay: DisableSpecificDates
    });
});

// Function to show limited datepicker dates

$(function () {
    $("#datepicker-13").datepicker({ dateFormat: 'mm-dd-yy', maxDate: '+20', minDate: '0', beforeShowDay: DisableSpecificDates /* $.datepicker.noWeekends */ });
    //$("#datepicker-13").datepicker("show");
});
