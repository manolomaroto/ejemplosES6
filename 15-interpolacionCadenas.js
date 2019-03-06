// interpolar cadenas consiste en un mecanismo que permite pasar una cadena que contiene on conjubto de comidines
// con unos datos

// ejemplo en ES5 añadiendo un método en el prototipo de string
String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number){
        return typeof args[number] != 'undefined' ? args[number] : match;
    })
}

var str = "{0} {1}, pero {0} {2} todavía más".format('Ecmascript','5','2015');
console.log(str);

// ES6 tiene la interpolación de serie
// usa la ` como delimitador de cadenas y ${expr} para indicar un comodín

var a = 10;
var b = 43;
var str2 = `El resultado de sumar ${a} y ${b} es ${a + b} `

console.log(str2);