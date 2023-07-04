var suma=0;
var cont=0;
do{
    var num=parseInt(prompt('Ingresa un numero',''));
    if(isNaN(num)){
        num=0
    }else if(num>=0){
        suma+=num;//if the number is positive, we sum it to the total inputed numbers sum
        cont++;//each time we input a positive number !=0, we count another number to do the mean of the sum
    }
}while(num>=0);//while we input positive numbers, we keep asking for more numbers
console.log('Lo suma de las numeros ingresados es '+suma+' y su media es '+parseFloat(suma/cont))/*showing the sum & the
mean*/