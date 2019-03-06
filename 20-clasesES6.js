/**
 * Clases en ES6
 * 
 * No añaden nada nuevo al lenguaje porque sigue siendo dinámico y la herencia sigue siendo
 * entre objetos y basada en prototipos
 * 
 * Su ventaja es que permiterealizar tareas que no estaban organizadas
 */

 /**
  * Herencia por prototipos
  * 
  * En javascript la herencia es una relacion entre objetos
  * En los lenguajes orientados a objetos es entre clases
  * 
  * Cadena de prototipos: todo objeto en javascript tiene un prototipo asignado
  */

  /**
   * Herencia en funciones constructoras
   * 
   * Un objeto construido a través de una funcion constructora tiene como prototipo al objeto
   * funcionConstructora.prototype.
   * 
   * Se pueden  añadir propiedades incluso despues de haber creado objetos
   */

   const Animal = function(name){
       this.name = name;
   }

   let perro = new Animal('Santa');

   Animal.prototype.correr = function(){
       console.log(this.name + " está corriendo.")
   }

   perro.correr();

   /**
    *  Dada una funcion constructora Animal, la propiedad Animal.prototype es asignable
    * Podemos crear un objeto y hacer que sea el prototipo de todos los objetos creados mediante
    * una funcion constructora, permitiendo jerarquias de funciones y simular la herencia
    * de los lenguajes basados en clases
    */

    const Persona = function(name){
        this.name = name;
    }

    Persona.prototype.correr = function(){
        console.log(this.name + " está corriendo");
    }

    const Sueco = function(name){
        this.name = name;
    }

    Sueco.prototype = new Persona();
    let johanson = new Sueco('johanson');

    johanson.correr();

    /**
     * Definicion sencilla de una clase
     */

     class Foo{} // declara una clase foo vacía

     // para crear objetos de una clase debemos usar el operador new

     var foo = new Foo();

     // vemos que por debajo está la herencia por prototipo clásica

     console.log(foo.__proto__ === Foo.prototype);

     console.log(typeof(Foo)); // debe devolver function. No existen clases en ejecución
     console.log(typeof(foo)); // debe devolver object. No hay tipo Foo en ejecucion

     /**
      * Constructores
      * Las clases definen la pseudo-funcion constructor que es ejecutada al crear un 
      * objeto nuevo con new.
      * Es equivalente a la funcion constructora, la diferencia es que el constructor lo usamos solo
      * para inicializar las propiedades. Las funciones se declaran dentro de la clase.
      */

      // ejemplo con funcion constructora

      let Square = function(r){
          this.size = r;
          this.area = function(){
              return this.size * this.size;
          }
      }

      let sq = new Square(5);
      let are = sq.area();

      // Ejemplo con clases

      class Square2{
          constructor(r){
            this.size = r;
          }
          area() {
              return this.size * this.size;
          }
      }

      let sq2 = new Square2(4);
      console.log(sq2.size);
      console.log(sq2.area());