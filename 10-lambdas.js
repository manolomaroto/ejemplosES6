// se puede declara una funcion anónima y colocarla en cualquier ppunto donde se espere un valor

var value = function(){
    return 42
};

// es anónima porque no tienen nombre, en este caso va asociada a una variable
// En este caso podríamos hablar de hoisting

// también podemos declarar funciones con nombre
function value2(){
    return 98;
}

// en este caso se puede unar la funcion antes de declararla porque para las funciones no existe hoisting

var v = foo();
function foo() { return 23};

// el mismo caso asignando una variable a la funcion daría error de indefinido

var v = foo2();
var foo2 = function() { return 43};

// si usamos let para declarar la varuable a la que asignamos la funcion el error es distinto

var w = foo3();
let foo3 = function(){ return 43};


