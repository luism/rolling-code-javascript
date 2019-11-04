let numero = prompt("Ingrese el numero de dia:");
// El valor devuelto por la funcion prompt() 
// SIEMPRE es un string.

switch (numero) {
    case "1":
        alert("Lunes");
        break;
    case "2":
        alert("Martes");
        break;

    case "3":
        alert("Miércoles");
        break;

    case "4":
        alert("Jueves");
        break;

    case "5":
        alert("Viernes");
        break;

    case "6":
        alert("Sábado");

        break;
    case "7":
        alert("Domingo");
        break;
    default:
        alert("No existe ese dia.")
        break;
}

console.log("Fin del programa.");