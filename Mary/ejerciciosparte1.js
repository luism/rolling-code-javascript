//Ejercisios con bucles
// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

var nombre;
nombre = prompt("Ingrese su nombre");
var edad;
edad = prompt("Ingrese su edad");

if( edad >= 18) {
    document.write (nombre + " " + "ya puede conducir.");
} else if( edad < 18) {
    document.write (nombre + " " + "no puedes conducir.");
} else {
    document.write ( nombre + " " + "no ingresaste un dato valido." );
} 
console.log ("Fin del programa.")


//  Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar a calificación en un alert según los siguientes rangos de nota:

var nota;
nota = prompt("Ingrese su nota");

if( nota <= 2 ) {
    alert ( "Muy deficiente.");
} else if( nota <= 4) {
    alert ("Insuficiente.");
} else if( nota <= 6) {
    alert("Suficiente.");
} else if( nota == 7) {
    alert("Bien.");
}  else if( nota <= 9 ) {
    alert("Notable.");
} else if( nota == 10) {
    alert("Sobresaliente.");
} else if( nota > 10) {
    alert("Número erróneo");
} else {
    alert("Introduce un numero valido.")
}
console.log("Fin del programa.")

