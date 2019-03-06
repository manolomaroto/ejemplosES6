// se produce cuando el valor de this dentro de una funcion anónima no es el mismo que el valor de 
// this dentro de la funcion que la contiene

// el siguinet código no funciona correctamente

/* var obj = {
    values: [1,2,3,4,5,6,7],
    filter: function(v) { return v % 2 == 0 || v == 23},
    getValues: function() { return this.values},
    getFilteredValues: function(cb) {
        return this.values.filter(function(v){
            return this.filter(v);
        });
    }
}

console.log(obj.getFilteredValues()); */

// sep puede solucionar asignando el valor de this a una variable

var obj2 = {
    values: [1,2,3,4,5,6,7],
    filter: function(v) { return v % 2 == 0 || v == 23},
    getValues: function() { return this.values},
    getFilteredValues: function(cb) {
        var self = this;
        return self.values.filter(function(v){
            return self.filter(v);
        });
    }
}

console.log(obj2.getFilteredValues());

// también se puede bindear el valor de this

var obj3 = {
    values: [1,2,3,4,5,6,7],
    filter: function(v) { return v % 2 == 0 || v == 23},
    getValues: function() { return this.values},
    getFilteredValues: function(cb) {
        return this.values.filter(function(v){
            return this.filter(v);
        }.bind(this));
    }
}

console.log(obj3.getFilteredValues());

// así sí lo hace con el operador flecha

var obj4 = {
    values: [1,2,3,4,5,6,7],
    filter: function(v) { return v % 2 == 0 || v == 23},
    getValues: function() { return this.values},
    getFilteredValues: function(cb) {
        return this.values.filter((v)=>{
            return this.filter(v);
        });
    }
}

console.log(obj2.getFilteredValues());