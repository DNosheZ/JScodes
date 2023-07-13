'use strict'
function salir(dinero,direccion,compania,riesgos){
    if(dinero>50){
        var m1='si aguanta salir';
    }else{
        var m1='ojala ponga lks';
    };
    if(direccion=='Bello'){
        var m2=' pero el parche va a ser suave';
    }else{
        var m2='la aventura nos llamo hoy';
        var m2plus=' ya que ';
    };
    if(compania=='femenina'){
        var m3='añañay';
        var m3plus='; van a haber hembritas pa, '
    }else{
        var m3='parche de chirreo';
        var m3plus='que pereza, es '
    };
    console.log(m1+m2+m3plus+m3+'; ten en cuenta que:');
    riesgos('gastar de mas');
};
var mon=parseInt(prompt('Con cuanto dinero va a salir?',''));
var sitio=prompt('Y para dondo va?','');
var compa=prompt('Que tipo de compañia vas a tener en el parche?','');

salir(mon,sitio,compa,function(dato){
    if(dato=='tombos'){
        console.log('hay que respetar a los tombos');
    }else if(dato=='llegar tarde'){
        console.log('consigase donde dormir despues de las 9pm');
    }else if(dato=='sustancias de por medio'){
        console.log('no se ponga a consumir lo que no sabe, y sea mesurado, con poquito ya se parcha'); 
    }else if(dato=='gastar de mas'){
        console.log('podrias quedar pelado mañana, entonces cuide su capital'); 
    }else{
        console.log('parchese ñero, todo va a estar bajo control previo');
    };
});