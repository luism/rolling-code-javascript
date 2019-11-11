var persona = {
    nombre: "fede",
    apellido: "turpo",
    dni: "12354789",
    nacimiento: "24-08-1989",
    domicilio: "gral paz 881",
       
    }

console.log (persona.dni)

var products = [
    { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
    { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
    { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
  ];
  
  for (var i=0; i < products.length; i++) {
    var product = products[i];
    console.log(product.name);
    console.log("  Id: " + product.id);
    console.log("  Precio: " + product.price);
    console.log("  Categorías: " + product.categories.join(", "));
  }

    var clase = function () {
        this.name = "paulo";
        //  metodo
        this.setName = function (nombre) {
            this.name = nombre;
        }
        this.getName = function () {
            return this.name;
            
        }
        
    }

    // instaciar objetos
var obj1 = new clase ();
var obj2 = new clase();

obj2.setName ("cesar");

document.write (obj1.getName()+ '<br>')
document.write (obj2.getName())





