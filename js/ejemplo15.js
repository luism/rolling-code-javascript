var auto = {
	"color": "verde",
	marca: "fiat",
	modelo: "bravo",
	año: 2008,
	potencia: "130bhp"
}

var juan = {
    nombre: "Juan",
    email: "juan@gmail.com"
}

var maria = {
    nombre: "maria",
    email: "maria@gmail.com"
}

var alumnos = [juan, maria]

var comision1b = {
    turno: "mañana",
    dias: ["lunes, miercoles"],
    alumnos: [juan, maria]
}

for(var alumno in alumnos) {
    console.log("Alumno", alumnos[alumno]);
}

for(var atributo in comision1b){
    if(comision1b.hasOwnProperty(atributo)){
        console.log("El valor de " + atributo + " es " + comision1b[atributo]);
    }
}