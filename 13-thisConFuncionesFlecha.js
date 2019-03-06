// el siguiente código falla

var obj = {
    nick: 'pepe',
    getUrl: () => 'http://wwwwtwitter.com/' + this.nick
}

console.log(obj.getUrl());

// si usamos una funcion anónima a la manera tradicional funciona

var obj2 = {
    nick:'juan',
    getUrl: function(){ return 'http://wwwtwitter.com/' + this.nick}
}

console.log(obj2.getUrl());

// no funciona porque se captura el valor de this que existe en ese punto que es el contexto global
// NO USAR EL OPERADOR FLECHA PARA DEFINIR LAS FUNCIONES DE UN OBJETO

// Que pasa si usamos bind sobre una funcion flecha

var demo = (() => this.nick).bind({nick:'pepe'});
var nick = demo();

// este caso no funciona porque la función flecha captura el contexto y no se puede cambiar una vez establecido

