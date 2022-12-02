// principales operaciones aritmeticas
// representacion de numeros en strings
// redondeo de decimales

let a = 3.5;
let b = 4.8;
// suma
console.log(a+b);
// resta
console.log(a-b);
// multiplicación
console.log(a*b);
// división
console.log(a/b);

// representación de los numeros en strings
// pasar a string

console.log(typeof(a));
let aStr = a.toString();
console.log(aStr);
console.log(typeof(aStr));

// redondeo de numeros decimales

let c = 3.3;
let d = c * 3;

console.log(d);

// to fixed y to precision

// .toFixed() {convierte en string por mas que el original sea number y en el parentesis va la cantidad de float numbers}
console.log(d.toFixed(1));
console.log(typeof d.toFixed());

        // tambien agrega decimales a los numeros que no tienen si le ponemos

        let e = 1839.3948123891237;
        let f = 2812;

        console.log(f.toFixed(2));

// .toPrecision() {limita lo que se llaman CIFRAS SIGNIFICATIVAS} {tambien devuelve string}

        console.log(f.toPrecision(1));
        console.log(f.toPrecision(2));
        console.log(f.toPrecision(3));
        console.log(f.toPrecision(4));




