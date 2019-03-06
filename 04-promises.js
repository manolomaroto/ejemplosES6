// representan una tarea realizada, realizándose o por realizar

//Piramide de callbacks
 navigator.geolocation.getCurrentPosition(function(c) {
     console.log(c);
     // el problema comienza cuando dentro de una funcion de callback llamamos a otra
     window.setTimeout( function(){
         navigator.geolocation.getCurrentPosition( function(c2){
             console.log(c2);
         })
     }, 2000);
    }
);

// desmontando la pirámide de callbacks

// suponemos que existe el método getCurrentPositionPromise()
var pr = navigator.geolocation.getCurrentPositionPromise();

// la promesa puede estar pendiente -pending-, completada -fullfilled- o en error -rejected-
// usamos los métodos then y catch
// then recibe como parámetro una funcion que se ejecuta cuando la tarea es completada

// seguimos el código con promesas

pr.then(function(coords){
    console.log(coords);
    var pr2 = setIntervalPromises(2000);
    pr2.then(function(){
        var pr3 = navigator.getCurrentPositionPromise();
        pr3.then(function(coords2) {
            console.log(coords2);
        })
    })
});

// el código anterior no es correcto puesto que crea una pirámide de then

// para corregirlo separamos las tareas

// Tarea 1. Obtener la posicion e imprimirla en consola
var task1= function() {
    var pr = navigator.geolocation.getCurrentPositionPromise();
    pr.then(function(c){
        console.log('1ª coordenada: ',c);
    });
    return pr;
}

// Tarea 2: esperar 2000ms e imprimir por consola una vez han pasado

var task2 = function() {
    var pr = setIntervalPromises(2000);
    pr.then(function(){
        console.log("2000 ms de espera");
    });
    return pr;
}

// Tarea 3: obtener la posicion e imprimirla por consola

var task3 = function(){
    var pr = navigator.getCurrentPositionPromise();
    pr.then(function(c2){
        console.log("2ª coordenada: ", c2);
    });
    return pr;
}

// los encadenamos

task1().then(task2).then(task3).then(function(){console.log('Todas las promesas resueltas')});