const GUION = ':';
const ACEPTAR = true;

var cadenasIngresadas = "";
var resp;
/* 3- Realiza un script que pida cadenas de texto
 * hasta que se pulse “cancelar”. Al salir con “cancelar”
 * deben mostrarse todas las cadenas concatenadas con un guión -.
 */

do {
  cadenasIngresadas += prompt("Ingre una cadena de texto");
  resp = confirm("Desea continuar?");

  if(resp == ACEPTAR) {
    cadenasIngresadas += guion;
  }

} while(resp == ACEPTAR)

alert(cadenasIngresadas);

console.log("Fin de programa")