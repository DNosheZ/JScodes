'use strict'
var fecha = new Date();//obtenemos la fecha actual
var year=fecha.getFullYear();
var month=parseInt(fecha.getMonth())+1;/*dado que JS empieza a contar los meses desde 0, 
tenemos que sumar 1*/
var day=fecha.getDate();
console.log(fecha);
console.log(year,month,day);