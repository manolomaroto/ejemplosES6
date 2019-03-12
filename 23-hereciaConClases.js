/**
 * Las clases incorporan la herencia dentro del lenguaje
 */

 class Square {
     constructor(r){
         this.size = r;
     }
     area() {
         return this.size * this.size;
     }
 }

 class PaintedSquare extends Square{

 }

 /**
  * Usamos la palabra clave extends
  * 
  * El prototipo de un objeto creado con new PaintedSquare es el objeto PaintedSquare
  * El prototipo de PaintedSquare.prototype es el objeto Square.prototype
  */

  /**
   * Llamamos cadena de constructores al hecho de que una clase derivada llame al constructor de su clase base
   */

   /**  
    * Si en una clase derivada no definimos constructor, la llamada al constructor de la 
    * clase base es automatica
    * Sería como hacer algo así:
    *   constructor(...args){
    *       super(...args);
    *   }
    * 
    *   En el caso de que que definamos un constructor en la clase derivada
    * la llamada al constructor de la clase base la tenemos que hacer nosotros
    */

    class PaintedSquare02 extends Square {
        constructor(r, color){
            super(r);
            this.color = color;
        }
    }