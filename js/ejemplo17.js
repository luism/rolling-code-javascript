function Vehiculo(marca, anio) {
    this.marca = marca
    this.anio = anio
}

var vehiculo = new Vehiculo("Algo");

// Literal
var auto = {
    marca: "Fiat",
    color: "Rojo",
    anio: "2010"
}

var moto = {};
moto.marca = "Honda";
console.log(moto.cilindrada);

console.log(auto);
// Usando una funcion contructora.
function Auto(marca, color, anio){
    this.marca = marca;
    this.color = color;
    this.anio = anio;
}

var nuevoAuto = new Auto('Ford', 'verde', "2019");
console.log(nuevoAuto);

// Usando el contructor Object.
var otroAuto = new Object();
otroAuto.marca = "Fiat";
otroAuto.color = "Azul";
otroAuto.anio = "2015";
console.log(otroAuto);

var bicicleta = new Object();
console.log(bicicleta);

// Utlizando Object.create
var auto2 = Object.create(vehiculo);
auto2.anio = "2015";
auto2.color = "Blanco";
auto2.puertas = 5;
console.log(auto2); 
console.log(auto2.color); 
console.log(auto2.anio); 




