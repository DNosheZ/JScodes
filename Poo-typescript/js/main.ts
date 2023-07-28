//interface: usado para dar mayor rigurosidad al codigo, 
interface CamisaBase{//seteamos los metodos obligatorios de esta interface
    setColor(color);
    getColor();
};
function dueno(duenoA:string){
    return function(target:Function){
        target.prototype.Dueno = function():void{
            console.log('Este ser es propiedod de: '+duenoA)
        }
    }
};
@dueno("Don Tito")//anotaciones con el decorador @dueno  
class Ser implements CamisaBase{/*antepongo que se implementara esta interface 
en esta clase, la cual tendra obligatoriamente los metodos mencionados*/
    private raza:string;
    private color:string;
    private reino:string;
    private edad:number;
    private procedencia:string;
    private extinto:boolean;
    private alimentacion:string;
    constructor(raza,color,reino,edad,procedencia,extinto,alimentacion){
        this.raza=raza;
        this.color=color;
        this.reino=reino;
        this.edad=edad;
        this.procedencia=procedencia;
        this.extinto=extinto;
        this.alimentacion=alimentacion;
    };
    public setColor(color1){
        this.color=color1;
    };
    public getColor() {
        return this.color
    };
};
class Antepasado extends Ser{//con este extends, damos instruccion de que esta clase sere hija de Ser
    public nombre:string;
    public periodoExtincion:string;
    public direct:boolean;
    public setAntepasado(nombre,periodoExtincion,direct){
        this.nombre=nombre;
        this.periodoExtincion=periodoExtincion
        this.direct=direct
    };
    public getAntepasado(){
        return this.direct
    };
};
var zebra=new Ser('Zebra','Blanca con negro','animal',12,'africana',false,'herbivora');
zebra.Dueno();
console.log(zebra);
var anteZebra=new Antepasado('Zebra','Blanca con negro','animal',12,'africana',false,'herbivora');
anteZebra.setAntepasado('Zebricarius Monoitica','Cretasico',true);
console.log(anteZebra)