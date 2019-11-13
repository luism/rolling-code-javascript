class Movimiento {
    constructor(cuenta, monto, fecha) {
        this.cuenta = cuenta;
        this.monto = monto;
        this.fecha = fecha;
    }
}

class CuentaBancaria {
    constructor(numeroDeCuenta, titular, movimientos) {
        this.numeroDeCuenta = numeroDeCuenta;
        this.titular = titular;
        this.movimientos = movimientos;
    }

    saldo() {
        // Recorrer el array y sumar todos sus elementos.
    }

    otroMetodo(var1) {
        console.log("Se ejecuto el metodo `otroMetodo`");
        console.log("var1 es:", var1);
        return true;
    }

    metodoSinRetorno() {
        console.log("Se ejecuto `metodoSinRetorno`")
    }

    set setNumeroDeCuenta(numero){
        this.numeroDeCuenta = numero;
    }

    get getNumeroDeCuenta(){
        return this.numeroDeCuenta;
    }
}

// Harcodeamos (Significa que este codigo esta fijo y no es dinamico)
var movimiento1 = new Movimiento("0000123", 5000, "10/11/2019")
var movimiento2 = new Movimiento("0000123", -1500, "11/11/2019")
// Con Date.now() obtenemos la fecha actual automaticamente
var movimiento3 = new Movimiento("0000123", 500, Date.now())

var movimientos = [movimiento1, movimiento2, movimiento3]

var cuentaBancaria1 = new CuentaBancaria("0000123", "Juan Perez", movimientos);

console.log(cuentaBancaria1);
cuentaBancaria1.otroMetodo("123");
cuentaBancaria1.metodoSinRetorno()