/**
 * La desestructuración permite extrar elementos de arrays y objetos y asignarlos a variables
 */

 var [a,b] = [1,2];

 // extraccion de datos 

 var data = [4,5,3,6,7,8];

 // Sin desestructuracion
 var first = data[0];
 var second = data[1];
 var fourth = data[3];

 // con desestructuracion

 var [primero, segundo,,cuarto] = data;

 // las dos comas seguidos permiten slatarse un elemento del array

 // si el array tiene menos eleementos de los que queremos desestructurar devolverá undefined