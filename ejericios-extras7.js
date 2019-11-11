class Movimiento {
    constructor(cuenta, monto, fecha) {
        this.cuenta = cuenta;
        this.monto = monto;
        this.fecha = fecha;
    }

    saldo(){
        
    }
}

// Harcodeamos (Significa que este codigo esta fijo y no es dinamico)
var movimiento1 = {
    fecha: "10/11/2019",
    monto: 5000,
    numeroDeCuenta: "0000123"
}

var movimient2 = {
    fecha: "11/11/2019",
    monto: -1500,
    numeroDeCuenta: "0000123"
}


var cuentaBancaria1 = {
    titular: "Juan Perez",
    numeroDeCuenta: "0000123",
    movimientos: [movimiento1, movimiento2]
}