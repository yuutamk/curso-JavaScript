// Tipo entero y decimal

let entero = 42;
let decimal = 3.14;
console.log(typeof entero, typeof decimal); // "number"


// notacion cientifica

let grande = 1.5e6; // 1.5 * 10^6
let pequeno = 2.5e-4; // 2.5 * 10^-4
console.log(grande); // 1500000
console.log(pequeno); // 0.00025

// infinito y NaN

let infinito = Infinity;
let noEsNumero = NaN;
console.log(infinito); // Infinity
console.log(noEsNumero); // NaN


// operaciones aritméticas

// suma
let suma = 5 + 3; // 8
// resta
let resta = 10 - 4; // 6
// multiplicación
let multiplicacion = 6 * 7; // 42
// división
let division = 20 / 5; // 4
// módulo
let modulo = 10 % 3; // 1
// incremento
let incremento = 5;
incremento++; // 6
// decremento
let decremento = 5;
decremento--; // 4
// exponenciación
let exponente = 2 ** 3; // 8


// presicion de punto flotante
let presicion = 0.1 + 0.2; // 0.30000000000000004
console.log(presicion); // 0.30000000000000004
console.log(presicion.toFixed(2)); // "0.30"
console.log(Number((0.1 + 0.2).toFixed(2))); // 0.3
// comparaciones de tipo y valor
console.log(presicion === 0.3); // false


// operaciones avanzadas

console.log(Math.sqrt(16)); // raiz cuadrada, 4
console.log(Math.pow(2, 4)); // potencia 2^4 = 16
console.log(Math.abs(-7)); // valor absoluto 7
console.log(Math.min(3, 1, 4, 1, 5, 9)); // minimo 1
console.log(Math.max(3, 1, 4, 1, 5, 9)); // maximo 9
console.log(Math.random()); // número aleatorio entre 0 y 1
console.log(Math.floor(4.7)); // redondeo hacia abajo 4
console.log(Math.ceil(4.3)); // redondeo hacia arriba 5
console.log(Math.round(4.5)); // redondeo al entero más cercano 5
console.log(Math.trunc(4.9)); // trunca la parte decimal 4

