var auto = {
    color: "rojo",
    marca: "bmw",
    modelo: "terra",
    encender: function (){
        console.log("encendido");
    }

}


var cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function(monto){
        this.saldo += monto;
    },
    extraer: function(monto){
        this.saldo -= monto;
    },
    informar: function(){
        console.log("Su saldo es de", + this.saldo);
    }
}

console.log ("El titular de la cuenta es", cuenta.titular);

li>Crear un objeto Persona que contenga los siguientes atributos: nombre, apellido, dni, fecha de nacimiento y domicilio.</li>


var Persona = new Object ();
   Persona.nombre ="";
   Persona.apellido ="";
   Persona.dni ="";
   Persona.fechadenacimiento ="";
   Persona.domicilio ="";

   






    

