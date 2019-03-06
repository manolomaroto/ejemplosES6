// simplifica la forma de declarar una funcion anónima

// funciones que solo devuelven una expresion

let foo = () => 32;

// con un argumento

let foo2 = x => 42;

// con más de un argumento

let foo3 = (a,b) => a + b;

// ejemplo de función normal

[1,2,3,4].filter(function(el){
    return el % 2 ==0;
})

// la misma funcion con sintaxis arrow

[1,2,3,4].filter( el => el % 2 == 0);

// Si la función devuelve un objeto hay que ponerlo entre paréntesis

let foo4 = () => ({uno:2, dos: 3});

// funciones con varias sentencias. En este caso usamos llaves y hace falta utilizar el return

let foo5 = () => {
    console.log('foo!');
    return 67;
}



