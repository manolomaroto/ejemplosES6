/**
 * El operador spread permite que se puedan pasar varios valores en situaciones en las que se espera uno
 * 
 */

 // ejemplo combinado con la desestructuración

 var [a,b,...c] = [1,2,3,4,5,6];

 // en este caso convertimos la variable c en un array con los valores del 3 en adelante
 // usado de este modo sólo puede aparecer una vez y en último lugar

 console.log(c[1]);

 // se puede usar llamando a funciones con N parámetros a partir de un array con N valores

 var foo = function(a,b){
     console.log(a,b);
 }

 foo(...[10,20]);

 // Lo que hace es pasar cada valor del array a cada parámetro

 // parámtros rest. Es cuando aplicamos el operador spread al último parámetro de una función.
// de este modo todos los pa´ramtros que no sean convencionales se agrupan en un array

var foo = function(a,b,...c){

}

foo(10,20,30); // c vale [30]
foo(10,20,30,40); // c vale [30,40]
foo(10,20); // c es un array vacío

// se usa en lugar de arguments porque arguments no es un array, es un array-like object
// con lo que no tiene las funciones que sí tienen los array
