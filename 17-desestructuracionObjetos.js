/**
 * También se puede usar en objetos
 */

 var obj = {a: 10, b:42};

 var {a:x, b: y} = obj;

 console.log(x);

 // Se puede combinar

 var data = {a:10, b:[1,2,3, {c: 40, d: 50}]};
 var {b: [,,,{c:y}]} = data;
 console.log(y);

 // Desestructuracion en parámetros

 // Usamos una funcion con params

 var foo = function(params) {
     var uri = params.uri;
     var method = params.method || 'GET';
     var contentType = params.contentType || 'applications/json';
     // hacer la peticion a la uri indicada con el método y content-type indicados
 }

 // uso de la funcion;
 foo({uri:'http://pepe.pep'});
 foo({uri:'http:asd.asd', contentType:'text/html', method: 'GET'});

 // podemos usar la desestructuracion a la hora de definir la funcion

 var foo = function({uri:uri,method:method,contentType:contentType}){};

 // que se puede simplificar al ser ambos terminos iguales

 var foo = function({uri,method,contentType}){};

 // también se podría poner valores por defecto

 var foo = function({uri,method: method='GET', contentType: ctype='application/json'}){};