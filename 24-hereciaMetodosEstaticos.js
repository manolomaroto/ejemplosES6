/** Herencia de métodos estáticos
 * 
 * Los métodos estáticos también se heredan:
 * 
 * Son métodos que se agregan directamente a la función constructora, aquí Square, a diferencia de los 
 * métodos no estáticos que se agregan al prototipo de la función
 * 
 * En este caso para que la herencia de métodos estáticos funcione es necesario que la función square 
 * sea el prototipo  de la función PaintedSquare
 */

 class Square {
     constructor(r) {
         this.size = r;
     }
     area() {
         return this.size * this.size;
     }
     static WhoAmI() {
         console.log("I´m a Square");
     }
 }

 class PaintedSquare extends Square {
     constructor(r, color){
         super(r);
         this.color = color;
     }
 }

 PaintedSquare.WhoAmI();