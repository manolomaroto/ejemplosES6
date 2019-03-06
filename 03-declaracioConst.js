// const permite definir constantes. Es necesario declararla con un valor

const PI = 3.14159;

// no¿? da error si asignamos varas veces una constante. Sin embargo mantiene el valor original

/* const a = 10;
a = 20;
console.log(a); */

// si una constante tiene un objeto asignado se pueden modificar las propiedades del objeto
// parecido ocurre con un array

/* const c = {value: 42};
c.value = 20;
console.log(c.value); */

// Simular constantes en Ecmascript 5
// definimos una variable Answer y comprobamos cual es el objeto global
// se declara como no configurable
// así podemos declarar constantes globales

Object.defineProperty(typeof global === "object" ? global: window, "Answer", {
    value:  42,
    enumerable: true,
    writable: false
});
delete Answer;
console.log(Answer)