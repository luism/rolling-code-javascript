// variable de referencia del objeto persona1
var persona1 = {nombre: "Juan"};

// variable de referencia del objeto persona2
var persona2 = {nombre: "Juan"};

persona1 == persona2 // retorna false
persona1 === persona2 // retorna false

// variable de referencia del objeto persona1
var persona3 = {nombre: "Juliana"};

// variable de referencia del objeto persona2
var persona4 = persona3; // asignamos la referencia del objeto persona a la variable de referencia del objeto persona2

// aquí persona3 y persona4 apuntan al mismo objeto llamado persona1
persona3 == persona4 // retorna true

// aquí persona3 y persona4 apuntan al mismo objeto llamado persona3
persona3 === persona4 // retorna true




