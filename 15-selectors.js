'use strict'
//selectoreso
$(document).ready(()=>{
    $('#titulo').css('background','blue')//el evento css cambia las propiedades css del objeto conid titulo
    //$es la notaon de jQuery
    //lo que esta edntro del prmer () es el objeto selecciiionaddo
    //lo que le sigue al punto es un evento
    $('.botoncito').click(()=>{//cuando se clickea cambia el color de fondo del boton can id botoncito
        console.log('clickeado')
        $('.botoncito').css('background','red');
    });
    var lH4=$('h4');//podemos seleccionar etiquetas simples
    lH4.click(()=>{
        
        if(!lH4.hasClass('grande')){
            lH4.addClass('grande');
        }else{
            lH4.removeClass('grande');
        }
    });
    $('[title="auAuAu"]').css('background','white');//seleccionamos elementos por sus atributos, en este caso por el title
    $('[title="brr"]').css('background','antiquewhite');
})