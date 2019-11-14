var titulo = document.createElement('h1');
var divContador = document.createElement('div');
var contador = 0;
var maximo = 10;

titulo.innerHTML = "Contador";

document.body.appendChild(titulo);

document.body.appendChild(divContador);

function actualizarContador() {
    if(contador >= maximo) {
        clearInterval(contando);
    } else {
        var div = document.getElementsByTagName('div');
        div[0].innerHTML = contador;
        contador ++;
    }
}

var contando = setInterval("actualizarContador()", 1000)

