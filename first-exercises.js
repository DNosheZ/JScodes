'use strict'
/*var tag=document.getElementById("azul");
tag.style.background='blue';*/
var todosLosdivs=document.getElementsByTagName('h2');
var divInteres=todosLosdivs[1]
function redirect(url){//llamanola nos redddiirecciionara a la url escrita
    window.location.href(url);

};
function openWindow(url){
    window.open(url,'','width=400,heigth=300');
};
window.addEventListener('load', ()=>{//unicamente se ejecutara la siguiente cuando se cargue la pagina
    var ingreso=document.querySelector('#campo_texto');/*todod lo que se ingrese en el form input quedara grabado en 
un console.log*/
    ingreso.addEventListener('focus',function(){//evento de estar en el input 
        console.log('estas en el campo' );
    });
    ingreso.addEventListener('blur',function(){//evento de salir del input
        console.log('te saliste del campo');
    });
    ingreso.addEventListener('keydown',function(event){//evento de mostrar que tecla se ingreso al input
        console.log('pulsando la tecla '+String.fromCharCode(event.keyCode));
    });
    ingreso.addEventListener('keypress',function(event){//evento de mostrar que tecla se presiono en el input
        console.log('pulsando la tecla '+String.fromCharCode(event.keyCode));
    });
    ingreso.addEventListener('keydown',function(event){//evento de mostrar que tecla se solto despues de ingresar en el input
        console.log('pulsando la tecla '+String.fromCharCode(event.keyCode));
    });
    var tiempo=setInterval(()=>{
        var tiitle=document.querySelector("h2");
        if(tiitle.style.color=="antiquewhite"){
            tiitle.style.color="blue";
        }else if(tiitle.style.color=="blue"){
            tiitle.style.color=="antiquewhite";
        }

    }, 200);//each 2secs, we change (iterating between blue & antiquewhite) the <h2> font color
})