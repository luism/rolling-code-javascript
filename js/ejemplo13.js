let numero1 = 3;
let numero2 = 4;

var miFuncion = function(num1, num2){
    return num1 * num2;
}

var funcionCuadrado = function(numero){
    let potencia = 2;
    return numero ** potencia;
}

var funcionCubo = function(numero){
    let potencia = 3;
    return numero ** potencia;
}
console.log(miFuncion(numero1, numero2));
console.log(funcionCuadrado(numero1));
console.log(funcionCubo(numero1));

