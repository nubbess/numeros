// operador .valueOf() para obtener valores numéricos a partir de literales

let a = 2;

let b = new Number(3); //casting (rara vez)

console.log(a);

console.log(b);

console.log(a+b);

console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf()); /*para obtener los valores primitivos 
de una variable declarada*/

// (también aplicable a strings)

let str = new String ("hola soy un string");

console.log(str);

console.log(str.valueOf());

// NaN (which means, Not a Number) - Infinity

let n = Number("adios");

console.log(n);

console.log(isNaN(n));

/*----------------------------------------------------------------------------*/

let numerador = 19;

let divisor = 0;

console.log(numerador / divisor);

// infinity puede dar dividiendo por 0

let divisor2 = null;
 
console.log(numerador / divisor2);

// con null lo mismo

/*----------------------------------------------------------------------------*/

// convertir strings a valores numericos con Number, parseInt y parseFloat

let numero = '5.89';

let numero2 = 17.2;

console.log(numero + numero2); //concatena porque toma a '5.89' como un str y le pega el otro al lado

console.log(Number(numero) + numero2);

// parseInt parseFloat

console.log(parseInt(numero));

console.log(parseFloat(numero));

let num3 = 4;

console.log(parseInt(num3));

console.log(parseFloat(num3)); //teoría de computos: no le pone los float

// numeros hexadecimales (base 16)

let numHex = '0x3a5b7'

console.log(parseInt(numHex, 16));

// obtener max y min en JS

let minPrecision = Number.EPSILON;

let minValorJs = Number.MIN_VALUE;

let maxValorJs = Number.MAX_VALUE;


console.log(minPrecision);

console.log(minValorJs);

console.log(maxValorJs);

