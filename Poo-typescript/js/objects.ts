class Perro{
    private nombre:string;
    private raza:string;
    private color:string;
    private edad:number;
    public constructor(nombre,raza,color,edad){
        this.nombre=nombre;
        this.raza=raza;
        this.color=color;
        this.edad=edad;  
    } 
};
var Ramon=new Perro('Ramon','Pinscher','negro',6);
console.log(Ramon);