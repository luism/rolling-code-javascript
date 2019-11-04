// ES6 (EcmaScript 6)
// Definimos la clase
class Persona {
    constructor(nombre,apellido,edad) {
      this.nombre= nombre;
      this.apellido = apellido;
      this.edad = edad;
    }
    
    //Definimos un método
    comer(){
      alert('comiendo');
    }
}

var persona1 = new Persona("Juan", "Mendoza", 20);
var persona2 = new Persona("Carlos","Gardel", 24);

console.log(persona1.nombre + ' - ' +  persona1.apellido);
console.log(persona2.nombre + ' - ' +  persona2.apellido);

// en el navegador visualizaremos
// $ Juan Mendoza 
// $ Carlos Gardel


// Javacript viejo
function PersonaOld(nombre,apellido,edad) {
    this.nombre= nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.comer = function() {
        alert("Comiendo");
    }
}

var persona3 = new PersonaOld("Pedro", "Mendoza", 20);
console.log(persona3.nombre + ' - ' +  persona3.apellido);
