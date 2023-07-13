'use strict'
var novias=['Maria Jose','Brisa','Lorena','Maye','Michel','Valentina','Daniela','Madison','Andrea'];
document.write('<h1>Top de chicas con las que minimamente me he besado</h1>');//actualizare esto de vez en cuando jsjsjs
document.write('<ul>');
novias.forEach((novia,puesto)=>{
    document.write('<li>'+(puesto+1)+' '+novia+'</li>');
});
document.write('</ul>');