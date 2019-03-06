// promesas compuestas son cuando tenemos una promesa que solo se resuelve cuando todas las promesas que la componen
// se resuelven o entra en error si una de ellas falla

// suponemos que hay una funcion xhrget que recibe un parámetro, una URL, y que hace una llamada y devuelve
// una promesa que s resuelve cuando la peticion AJAX está realizada

/* var pxhr = xhrget('http://www.google.es');
pxhr.then(function(req){
    console.log(req.responseText);
}); */

// usamos el método promise.all al que se le pasa un iterable de promesas para devolver la promesa compuesta

// creamos las promesas que incluiremos en el promise.all

/* var p1 = xhrget('http://www.uno.dos');
var p2 = xhrget('http://www.tres.cuatro');
var p3 = xhrget('http://www.cinco.seis');
var pall = Promise.all([p1,p2,p3]);
pall.then(function(){
    // aquí las tres estarían resueltas
}); */

// como tratar los resultados que devuelven las promesas compuestas

var pr1 = new Promise(function(r,j){ r('one')});
var pr2 = new Promise((r,j)=> r(42));
var pr3 = new Promise((r,j)=> r({foo:'bar'}));
Promise.all([pr1, pr2, pr3]).then(function(values){
    console.log(values);
});