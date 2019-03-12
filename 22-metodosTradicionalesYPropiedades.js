class Square {
    constructor(r){
        this.size = r;
    }
    area() {
        return this.size * this.size;
    }
}

/**
 * En elcódigo anterios size se define en el objeto asignando la propiedad a this
 * area sin embargo se define Square.prototype. Esto es así porque no hace falta que 
 * cada instancia de square contenga una copia del método area
 * 
 * El siqguiente código sería equivalente al uso de class
 */

 let Square02 = function(r) {
     this.size = r;
     Square.prototype.area = function() {
         return this.size * this.size;
     }
 }

