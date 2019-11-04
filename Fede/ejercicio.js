var auto = {
    color: "rojo",
    marca: "fiat",
    modelo: "bravo",
    año: 2008,
    encender: function () { alert('auto encendido');
       
    }

}

// console.log (auto.color)


var cuenta = {
    titular: 'alex',
    saldo: 200,
    ingresa: function (monto) {this.saldo += monto
    },
    extraer: function (monto) {this.saldo -= monto},
    informar: function(){console.log("ud cuenta con un saldo de", this.saldo)}
}

console.log ("el titular de la cuenta es", cuenta.titular);
console.log ("el saldo ingresado es", cuenta.saldo )
console.log ("extraiste", cuenta.extraer)