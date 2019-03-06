/**
 * Métodos estáticos
 * Son métodos que pertenecen a la clase y no a un objeto en particular.
 * Se pueden ejecutar sin necesidad de tener ninguna instancia de la clase y 
 * no pueden acceder a ningun método o propiedad que no sea estático
 * 
 * En javascript los metodos estaticos funcionan de manera distinta a como lo hacen
 * en otros lenguajes
 * 
 * 
 */

// definimos un método estático

 class Square{
     static Dump() { console.log("I am a Square")};
 }

// Como se llama al método.

// creando un objeto Square no funciona

/* let sqr = new Square();
sqr.Dump(); */

// Se llaman directamente a través de la clase

Square.Dump();

// funciona porque el objeto que contiene a la funcion estática es la propia funcion constructora definida por la clase
// Las funciones en javascript son objetos

/** 
 * this en métodos estáticos
 * 
 * dentro de una metodo normal de una clse el valor de this es el propio objeto
 * el valor de this dentro de un metodo estatico es la propia funcion constructora 
 * generada por la clase
 * 
 */
