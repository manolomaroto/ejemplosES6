// La función constructora Promise acepta un solo parámetro, la función ejecutora
// El código de la funcion ejecutora se ejecuta inmediatamente

/* var p = new Promise(function(){
    console.log('Hello promises');
}); */

// Para rechazar o resolver una promesa se hace desde dentro de la función ejecutora

/* var p = new Promise(function(resolve, reject){
    console.log('Hello promises');
    resolve();
}); */

// en este caso tenemos una promesa en estado completado
// prodríamos tener una función foo que permita obtener promises

var foo = function(){
    var p = new Promise(function(resolve, reject){
        console.log('Hello promises');
        resolve();
    });
    return p;
}

// podemos hacer el siguiente código que no aporta nada en principio porque se ejecuta inmediatamente.
// lo interesante es cuando espera un callback

foo().then(function(){ console.log('Hello after promises')});