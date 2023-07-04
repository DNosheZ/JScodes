//we'll input two number and compare them, they'll never be negative but can be float
var num1=parseFloat(prompt('Ingrese el primer numero',''));//inputing the first number
var num2=parseFloat(prompt('Ingrese el segundo numero',''));//inputing the second number
while(num1<0 || num2<0){
    var num1=parseFloat(prompt('Ingrese el primer numero',''));
    var num2=parseFloat(prompt('Ingrese el segundo numero',''));
};//if you inputed negative numbers, we'll ask you the numbers till they are positive
console.log(num1,num2)//showing them
if(num1>num2){//comparing them
        console.log("El mayor es "+num1);//the first is bigger than seconds
}else if (num1<num2){
        console.log('El mayor es: '+num2)//the second is bigger than first
}else if(num1==num2){
        console.log('Ingresaste los mismos numeros')//inputed the same numbers
};