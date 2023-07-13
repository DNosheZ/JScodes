'use strict'
window.addEventListener('load', ()=>{//unicamente se ejecutara la siguiente cuando se cargue la pagina
    var heading = document.querySelector('h1');//seleccionamos el primer h1 del HTML
    function intervalo(){
        
        var tiempo=setInterval(() => {
            if (heading.style.color == 'antiquewhite') {
              heading.style.color = 'blue';
            } else {
              heading.style.color = 'antiquewhite';
            }
            
          }, 1000)
        return tiempo
    };
    var tuempo =intervalo();
    //cada segundo cambiara de antiquewhite a azul
    var stoping=document.querySelector('#stop');
    stoping.addEventListener('click',()=>{//si toco el boton de stop, dejara de cambiar colores
        alert('has parado el bucle');
        clearInterval(tuempo);
    });
    var startig=document.querySelector('#start');
    startig.addEventListener('click', ()=>{
        alert('has iniciado el bucle');
        intervalo();
    })

});