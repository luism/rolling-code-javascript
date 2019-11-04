
let lista = ["juan", 3, true, 1.5];
console.log("Se creo la variable lista con los elementos", lista);
//para acceder uso un indice que empieza en cero.

let mensaje = "hola"
let i = 5;
console.log("La longitud del array es",  lista.length);
console.log("El primer elemento es", lista[0]);
console.log("El ultimo elemento es", lista[lista.length-1])

if(true) {
    lista = [1,2,3,4,5];
    console.log("Esta lista dentro del if tiene esto",lista);
}

for(let i = 0; i < lista.length; i++) {
    console.log("El valor del elemento " + i + " es " + lista[i]);
}

console.log(i+1);

function miFuncion(){
    console.log("Se ejecutó la funcion");
    document.write("Se ejecuto la función");
    return true;
}

var miOtraFuncion = function(){
    console.log("Se ejecutó la otra funcion");
    document.write("Se ejecuto la otra función");
};

var nuevaFuncion = function(){return false;};
