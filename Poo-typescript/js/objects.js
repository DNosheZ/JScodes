var Perro = /** @class */ (function () {
    function Perro(nombre, raza, color, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
        this.edad = edad;
    }
    return Perro;
}());
;
var Ramon = new Perro('Ramon', 'Pinscher', 'negro', 6);
console.log(Ramon);
