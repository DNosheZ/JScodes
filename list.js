'use strict'
var lstNums=[];
var decidingNums=parseInt(prompt('Cuantos numeros desea ingresar a la lista?',))//selecting the quantity of number that'll live in the list
for(var i=0;i<decidingNums;i++){
    lstNums[i]=parseInt(prompt('Ingrese un numero',));//indexing numbers in lis
};
console.log('la lista posee '+lstNums.length+' elementos');
document.write('<h3>la lista posee '+lstNums.length+' elementos</h3>');
function mostrar(list,mensaje=''){//function to show numbers in HTML body & in console
    document.write('<h3>mostrando la lista '+mensaje+'</h3>');
    console.log('mostrando la lista '+mensaje);
    document.write('<ul>');
    list.forEach((numero)=>{
        console.log(numero);
        document.write('<li>'+numero+'</li>')
    });
    document.write('</ul>');
    document.write('<h3>-----------------</h3>')
};
mostrar(lstNums, 'original');//showing the original list
var ordenado=lstNums.sort(function(a,b){return a-b;});
mostrar(ordenado,'en orden ascendente');//showing the list in ascendent order
var reverso=lstNums.reverse();
mostrar(reverso,'en orden descendente');//showing the list in descendent order
var searchng=parseInt(prompt('que numero deseas buscar?',))//lookng for a number in the list?
var poston=lstNums.findIndex(number=>number==searchng);
if(poston && poston!=-1){//there is it, with it index in the last ordered list
    document.write(`<h3>el número ${searchng}, se encuentra en la posición: ${lstNums.indexOf(searchng)} </h3>`);
}else{
    document.write(`<h3> el número ${searchng} no esta en la lista de numeros ingresados</h3>`)
};
