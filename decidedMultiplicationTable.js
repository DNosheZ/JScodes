'use strict'
var num=parseInt(prompt('Ingresa el numero al que le sacaremos tabla',''));//decide by input the table we'll generate
for(var i=1;i<=10;i++){//generate the table from 1 to 10
    document.write('<h3>'+num+'x'+i+'='+parseInt(num*i)+'<h3>')  
};
