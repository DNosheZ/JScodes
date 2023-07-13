'use strict'
$(document).ready(function(){
    reLoadLinks();//los enlaces existentes en el documento apareceran como indica la funcion postcreada
    $('#paraAgregar').click(function(){//cada que se toque el boton de id "paraAgregar" sucedera
        $('#menuLinks').append('<li><a href="'+$('#aggme').val()+'"</a></li>');//que en orden se agregara el enlace que se introduzca en el input text
        //existen atras metodos para agregar elementos de DOM
        //$('#menuLinks').prepend('<li><a href="'+$('#aggme').val()+'"</a></li>');con este podemos agregar, mas siempre en el primer lugar de la lista
        //$('#menuLinks').before('<li><a href="'+$('#aggme').val()+'"</a></li>');con este se agrega el li antes del ul
        reLoadLinks();//y se hara con este nuevo enlace la que dicta la funcion postcreada
        

    })

});
function reLoadLinks(){//para hacer del enlace el texto que aparecera en el body, creamos esta funcion
    $('a').each(function(index){//para cada a 
        var that=$(this);
        var enlace=that.attr('href');//tomaremos el atributo contenido en href
        that.text(enlace);//y lo agregamos al texto del a
    })
}