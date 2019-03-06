/* La declaración de la variable se mueve al principio del ámbito */
/* 'use strict'

var n = 'loquesea';

function foo() {
    n = 'otracosa';
    var n = null;
    for ( var i = 0; i < 10; i++){
        n = 'iter ' + i;
    }
}
foo();
console.log(n); */

// n vale 'loquesea' por el hoisting. El siguiente codigo lo muestra:

'use strict'

var n = 'loquesea';
function foo() {
    var n;
    n = 'otracosa';
    n= null;
    for(var i = 0; i<10; i++) {
        n = 'iter ' + i;
    }
}

foo();
console.log(n);