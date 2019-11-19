//Ejercisios extras//

class Movimiento {
    constructor(cuenta, monto, fecha){
        this.cuenta = cuenta;
        this.monto = monto;
        this.fecha = fecha;
    }
}

class CuentaBancaria {
    constructor(titular, numeroDeCuenta, movimiento){
        this.titular = titular;
        this.numeroDeCuenta = numeroDeCuenta;
        this.movimiento = movimiento;
        
    }
}

var persona= {
    nombre:"Juan",
    apellido: "Perez",
    dni: "30547358",
    fechaDeNacimiento:"10/05/1986",
    domicilio:"25 de mayo 396",
}

var movimiento1 = {
    fecha: "08/09/2019",
    monto: 5000,
    numeroDeCuenta: "002347865",

}

var movimiento2 = {
    fecha: "10/10/2019",
    monto: -2380,
    numeroDeCuenta: "002347865",
}

var cuentaBancaria1 = {
    titular:"Juan",
    numeroDeCuenta:"002347865",
    movimientos:[movimiento1, movimiento2]
}