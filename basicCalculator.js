'use strict'
var num1=parseInt(prompt('ingrese el primer numero',''));
var num2=parseInt(prompt('ingrese el segundo numero',''));
while(num1<0||num2<0||isNaN(num1)||isNaN(num2)){//if one of the variables aren't positive integer numbers, we ask again till get well inputed
    var num1=parseInt(prompt('ingrese el primer numero',''));
    var num2=parseInt(prompt('ingrese el segundo numero',''))
};
var res1='La suma entre '+num1+' y '+num2+' es: '+(num1+num2)+'<br/>'+/*thi's the message for the body of the index HTML page with the 
variables sum, substract, product & division*/
        'La resta entre '+num1+' y '+num2+' es: '+(num1-num2)+'<br/>'+
        'La multiplicacion entre '+num1+' y '+num2+' es: '+(num1*num2)+'<br/>'+
        'La division entre '+num1+' y '+num2+' es: '+(num1/num2)+'<br/>';
var res='La suma entre '+num1+' y '+num2+' es: '+(num1+num2)+'\n'+/*and thi's the console and alert message with the 
variables sum, substract, product & division*/
        'La resta entre '+num1+' y '+num2+' es: '+(num1-num2)+'\n'+
        'La multiplicacion entre '+num1+' y '+num2+' es: '+(num1*num2)+'\n'+
        'La division entre '+num1+' y '+num2+' es: '+(num1/num2)+'\n';
console.log(res);//showing in console
alert(res);//showing in alert
document.write('<h3>'+res1+'</h3>');//showing in documents body
