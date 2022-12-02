let estaturaCm = 186;

let estaturaMt = 1.86;

let pesoKg = 75.5;

let estaturaRed = estaturaMt.toFixed(1);

let redondeoKg = Math.floor(pesoKg);

console.log(estaturaRed);

console.log(redondeoKg);

// What d'y mean? está confusa la consigna del último punto, pero aquí van varias cosas que entendí:

/*Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" 
es igual al máximo valor que se puede obtener en Javascript */

let maxval = Number.MAX_VALUE;

let esIgual = maxval + 1 === maxval;

console.log(esIgual);

// o, agregando, porque la consigna dice si...

if (maxval + 1 === maxval) {
  console.log("es igual")
};
