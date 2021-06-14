'use strict';


let registrar_evaluacion = (pstar1, pstar2, pstar3, pstar4, pstar5) =>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_evaluacion",
        method: "POST",
        data: {
            star1 : pstar1,
            star2 : pstar2,
            star3 : pstar3,
            star4 : pstar4, 
            star5 : pstar5
         },
        dataType: "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8'
      });
       
      request.done(function( msg ) {
        swal.fire({
            type: 'succes',
            title: 'La calificacion ya fue agregada',
            text: 'Muchas Gracias'
        })
      });
       
      request.fail(function( jqXHR, textStatus ) {
        swal.fire({
            type: 'fail',
            title: 'La calificacion no a sido agregada',
            text: 'Por favor agragar la evaluacion'
        })
    });

};
