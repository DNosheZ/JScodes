'use strict'
var perro={
    nombre:'Ramon',
    raza:'pinscher',
    color:'negro',
    contextura:'trozo',
    edad:6,
    pasaElTiempo:function(nuevaEdad){
        this.edad=nuevaEdad;
        console.log(this);
    },
};
