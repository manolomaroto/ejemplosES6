// las variables no se ven afectadas por el hoisting
// las variables tienen ámbito de bloque

/* var g = 10;
var f = function() {
    console.log(g);
    let g = 20;
}

f(); */

// este código da ReferenceError al acceder a g antes de su declaración
// es porque la variable decalrada con let está en deadzone, no es accesible pero tampoco deja acceder
// a la declarada con var

/* 'use strict'
function foo() {
    var sum = 0;
    for(let i = 0; i < 10; i++){
        sum += i;
    }
    console.log('iters ->' + i + ' result ' + sum); //error de referencia porque i ya no existe aquí
}

foo(); */

// el siguiente código también da error

/* console.log(v);
let v = 10; */

// let no permite declarar una variable dos veces. El siguiente código no da error
/* function foo() {
    var a = 10;
    var a = 20;
    console.log(a);
} */

// sin embargo con let no funciona, incluso antes de ejecutarse la función

function foo(){
    let a = 10;
    let a = 20;
    console.log(a);
}
foo();



