// creamos la funcion que usamos anteriormente para obtener la posicion actual

navigator.geolocation.getCurrentPositionPromise = function() {
    var pr = new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(function(c){
            resolve(c); // resolvemos la promesa
        },
        function(e){
            console.log("Error getting position -> ", e);
            reject();
        });
    });
    return pr;
}

// envolvemos la funcion nativa getCurrentPosition con una promesa

var task = navigator.geolocation.getCurrentPositionPromise();
task.then(function(c) {
    console.log("Done -> ", c);
});