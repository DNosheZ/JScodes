'use strict'
$(document).ready(function(){
    /*$('#cajeta').mouseover(function(){
        $(this).css('background','red')
        $(this).css('color','green')
    });
    $('#cajeta').mouseout(function(){//posicionando el mouse sobre un elemento podria causar efectos dinamicos
        $(this).css('background','yellow');
        $(this).css('color','green')
    });*/
    function cambioRojo(){
        $(this).css('background','red')
               .css('color','blue')
    };
    function cambiaAmarillo(){
        $(this).css('background','yellow')
               .css('color','green');
    };
    function clicked(){
        $(this).css('background','blue')
               .css('color','red');
    };
    function dbclicked(){
        $(this).css('background','cian')
               .css('background','orange');
    };
    
    $('#cajeta').hover(cambioRojo,cambiaAmarillo);//si definimos funciones para cambion de css, podemos hacer que iteren al posar sobre el elemento
    //con la etiqueta hover->al posarse toma la primer funcion, la salir toma la segunda funcion
    $('#cajeta').click(clicked);//evento de un click sobre un elemento
    $('#cajeta').dblclick(dbclicked);//evento de doble click soble un elemento
    var ingreso=$('#nombrame');//tomamos un input con este id
    ingreso.focus(function(){//cuando se ingresa en el input, damos este estilo
        $(this).css('border','2px solid');
    });
    ingreso.blur(function(){//al salir cambiamos el estilo y mostramos lo que hay en el input de arriba
        $(this).css('border','2px dashed green');
        $('#teSapeo').text($(this).val()).show();//el .val() es para extraer el valor del input, y el .show() para mostrar en el elemento con id "teSapeo"
    });
    ingreso.mousedown(function(){//si mantengo hundido el mouse en este elemento, cambiara el background
        $(this).css('background','red');
    });
    ingreso.mouseup(function(){//si dejo du hundirlo sucedera lo mismo
        $(this).css('background','yellow');
    });
    $(document).mousemove(function(event){//en toda la extension de la pagina tendremos en cuenta el movimiento del mouse
        $('#seguidor').css('top',event.clientY);//en eje Y
        $('#seguidor').css('left',event.clientX);//en eje X
        $('body').css('cursor','none');//y el cursor no se vera
    });//el elemento seguidor es un id que seguira al evento
    
})
