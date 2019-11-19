/*Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/


 var resultado = "";

 do {
     var cadena = prompt("Introduce una cadena");

     if (resultado == "") {
         resultado = resultado + cadena;
     }
     else {
         resultado = resultado + "-" + cadena;
    }
 } while (confirm("Desea seguir?"));
 document.write(resultado);
















// var suma = 0;
// do {
//     var numero = prompt ("Ingrese sus numeros");
// }

// if (Number (numero) == numero) {
//     numero = Number (numero);
//     suma = suma + numero;
// } else {
//     if (numero != undefined) {
//         alert (numero + "No es un numero");
//     }
// } while (numero != undefined);
//     document.write(suma)