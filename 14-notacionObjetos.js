// En javascript las funciones constructores son funciones normales, salvo que usamos new para invocarlas.
/*
    New hace 3 cosas. Pongamos que tenemos una función Foo y la invocamos con new
        1. Crea un objeto nuevo vacío y le asigna como prototipo el objeto Foo.prototype
        2. Invoca la funcion que se le indica con el contexto (el valor de this) establecido
           a ese nuevo objeto.
        3. Si y solo si, la funcion devuelve undefined, entonces devuelve el objeto creado.
*/

// Otra manera de crear objetos es usando object notation

var foo = {value:32};

// No usar nuca eval para transformar una cadena JSON en un objeto javascript
// En su lugar usar JSON.parse. Para pasar un objeto javascript a notación JSON usa JSON.stringify

/** Prototipos */

// Javascript es un lenguaje orientado a objetos basado en prototipos
// La herencia funciona a través de la cadena de prototipos
// Cada objeto tiene asociado un prototipo y hereda todas las propiedades y métodos que existan en el prototipo
// La cadena de prototipos termina en Object.prototype

/**
 * Ecmascript 5 el prototipo de un objeto se define en su creación. Hay 3 posibilidades
 *  1. Si creamos el objeto con una función constructora el prototipo del objeto
 *     creado será nombreObjeto.prototype
 *  2. Si creamos el objeto con notación de objeto el prototipo será Object.prototype
 *  3. Si usamos la funcion Object.create, el prototipo del objeto es el objeto que pasemos
 *     como primer parámetro
 */

 // Cadena estática de prototipos.
 // No se puede cambiar la cadena de prototipos
 // Sin embargo si cambiamos un prototipo los objetos creados antes del cambio no tendran este cambio

 var Foo2 = function(){};
 var f1 = new Foo2();
 Foo2.prototype = {
     name: 'test'
 }

 var f2 = new Foo2();

 console.log(f1.name); // será undefined
 console.log(f2.name); // será test

 // La propiedad __proto__
 // Apunta en odo momento al prototipo del objeto

 var Foo3 = function(){};
 var f3 = new Foo3();
 console.log(f3.__proto__ === Foo2.prototype); // imprime true

 // __proto__ no es oficial por lo que puede cambiar según la implementación. 
 // No se recomienda cambiar el prototipo de un objeto una vez creado

 /**
  * Prototipos en EcmaScript 6
  * 
  * Soporta oficialmente la propiedad __proto__ aunque la declara obsoleta
  * La convierte en obsoleta porque incorpora sus propios mecanismos para obtener y establecer el prototipo de un 
  * objeto una vez creado.
  */

  // para obtener el prototipo de un objeto podemos usar Object.getProtottypeOf o Reflect.getPrototypeOf

  var Foo4 = function(){};
  var f4 = new Foo4();
  console.log(Object.getPrototypeOf(f4) === Foo4.prototype);
  console.log(Reflect.getPrototypeOf(f4) === Foo4.prototype);

  // para establecer el prototipo de un objeto se puede usar Object.setPrototypeOf o Reflect.setPrototypeOf

  var obj = Object.create({name: 'juan'});
  console.log(obj.name);
  Reflect.setPrototypeOf(obj, {age:32});
  console.log(obj.name); // undefined, porque el prototipo ha cambiado
  console.log(obj.age); 

  // establecer el prototipo en notacion de objeto

  // es6 permite establecer el prototipo de un objeto creado con notación de objeto
  // declaramos una propiedad __proto__ en el momento en que declaramos el objeto

  var a = {answer:382};
  var obj={
      question: 'Una o dos',
      __proto__: a
  }

  console.log(obj.answer, obj.question);

  /**
   * Propiedades con nombre dinámico
   * Siempre se ha podido construir objetos con el nombre creado dinámicamente
   */

   var b = {};
   b["t_"+ new Date().getMonth() + 1] = 10;
    console.log(b);
   console.log(b.t_21);
   console.log(b["t_21"]);

   // en ES6 se puede también declarar propiedades utilizando notación de objeto

   var c = {
       ["t_" + new Date().getMonth() + 1]:10
   }

   // los nombres de propiedades repetidos en ES6 no generan error, en lugar de eso la última que 
   // aparece sobreescribe la primera

   var c = {p: 20, p: 124};
   console.log(c.p);

   /**
    * Métodos y propiedades simplificadas
    * Creamos un objeto hello y le añadimos un método greetings
    */

    var hello = {
        greetings: function(name) {
            return "hello " + name;
        }
    }

    // ahora quedaría así

    var hello2 = {
        greetings(name) {
            return 'hello ' + name;
        }
    }

    console.log(hello.greetings('juan'));
    console.log(hello2.greetings('luis'));

    // también en getters y setters

    var hello3 = {
        get salute() {return "hello"}
    }
    console.log(hello3.salute);

    // Ejemplo donde muestra un getter y un setter simulando una variable privada

    var hello4 = (()=> {
        var _private = 42;
        return {
            get value() {return _private},
            set value(v){
                if (v > 0) {
                    _private = v;
                }
                return _private;
            }
        }
    });
    
    console.log(hello4.value);