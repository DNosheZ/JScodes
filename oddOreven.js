'use strict'
var num=parseInt(prompt('Ingrese el numero a analizar',''));
document.write('<h1>El numero a evaluar es: '+num+'</h1>')
if(isNaN(num)){
    alert('Lo que has ingresado no puede ser analizado');//in case that we doesn't inputed a number, we advise it 
    }else if(num%2==0){//in case the number can be divided by 2, is even
        document.write('<h4>'+num+' es un numero par</h4>');
        
    }else{//in other case, is odd
        document.write('<h4>'+num+' es un numero impar</h4>');
}
