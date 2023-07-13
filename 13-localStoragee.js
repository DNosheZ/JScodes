'use strict'
if(typeof(Storage)!==undefined){//comprobar disponibilidad de local storage
    console.log('Compatible con local storage');
}else{
    console.log('Compatible con local storage');
};
//guardando datos
localStorage.setItem('titulo','Primer item guardado'/*key,value*/);
var msg_local=localStorage.getItem('titulo');/*extraer value con key*/
//guardar JSON's
var menucito ={
    comida:'pez',
    bebida:['cerveza','jugo'],
    postre:'de frambuesa'
};
localStorage.setItem('menu',JSON.stringify(menucito)/*notacion para convertir en JSON string object*/);
//recovering object
console.log(JSON.parse(localStorage.getItem('menu')));//recover with localStorage key
console.log(JSON.parse(localStorage.getItem('menu')).bebida[0]);//here I recover a element that lives inside a object's element