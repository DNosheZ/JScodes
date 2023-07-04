'use strict'
var num1=parseInt(prompt('Ingrese el menor de los numeros',''));//inputing the start number
var num2=parseInt(prompt('Ingrese el mayor de los numeros',''));//inputing the finish number
var cont=0
document.write('<h1>De '+num1+' a '+num2+' hay '+(num2-num1)+' numeros y son:</h1>');//
for(var i=num1;i<num2;i++){
    document.write(i+'<br/>');//showing in vertical list the numbers between the inputed, counting the first & the last
};