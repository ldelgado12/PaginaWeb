'use strict';

let userlocal_noticias = localStorage.getItem('centro_id');
//console.log(userlocal_noticias);
let noticias = consultar_noticias(userlocal_noticias);


if(userlocal_noticias==null){
    window.location.href='index.html';
}

let mostrar_noticias_tablero = () => {

    var docFrag = document.createDocumentFragment();

    for (let i = 0; i < noticias.length; i++) {
        let newdate = new Date(noticias[i]['fecha']);
        let month = newdate.getMonth() + 1;
        let day = newdate.getDate();
        let year = newdate.getFullYear();
        let dateformated = month + '-' + day + '-' + year;

        // Agregar datos dinamicos como div
        var template = document.querySelector('#tmpl_news');
        var clone = document.importNode(template.content, true);
        clone.querySelector('#h1_card').innerHTML = noticias[i]['titulo'];
        clone.querySelector('#h2_card').innerHTML = dateformated;
        clone.querySelector('#p_card').innerHTML = noticias[i]['descripcion'];
        docFrag.appendChild(clone);
    }
    document.querySelector('#news_cards').appendChild(docFrag);
    //delete docFrag;

};

if (noticias[0] == null) {
document.getElementById("news_cards").innerHTML = "";
    
} else {
    
mostrar_noticias_tablero();


}



