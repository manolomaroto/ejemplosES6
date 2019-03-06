// Se muestra como then devuelve siempre una promise

/* var pr = new Promise(function(r,j){
    r(()=>{console.log('Dentro de la promesa')});
});
var p1 = pr.then(function() {
    console.log('promise resolved');
}); */

// en este ejemplo al lanzar una excepción la promesa está en error

/* var pr = new Promise(function(r,j){ r(); j(console.log('Falloo'))});
var p2 = pr.then(function(){
    throw('Some error!');
}); */

// En este ejemplo se resuelve la primera promesa cuando se resuelve la segunda

var pr = new Promise((r,j) => {r()});
var p1 = pr.then(function(){
    return new Promise(function(r,j){
        global.setTimeout(function(){
            console.log('Promesa dentro de then resuelta');
            r();
        },5000);
    })

});

var p2=p1.then(function() { console.log('p1 resolved too');})

