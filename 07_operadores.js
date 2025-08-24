/* operadores de comparacion */

/*
* ==  : igualdad (compara valores, ignora el tipo)
* === : igualdad estricta (compara valores y tipos)
* !=  : desigualdad (compara valores, ignora el tipo)
* !== : desigualdad estricta (compara valores y tipos)
* >   : mayor que
* <   : menor que
* >=  : mayor o igual que
* <=  : menor o igual que
*/

let a = 10;
let b = 5;
let c = "10";

console.log(a == c);  // true, compara valores (ignora el tipo)
console.log(a === c); // false, compara valores y tipos
console.log(a != b);  // true, compara valores (ignora el tipo)
console.log(a !== c); // true, compara valores y tipos
console.log(a > b);   // true, mayor que
console.log(a < b);   // false, menor que
console.log(a >= c);  // true, mayor o igual que
console.log(a <= b);  // false, menor o igual que

// operadores lógicos
/*
* && : AND (y)
* || : OR (o)
* !  : NOT (no)
*/

let x = 10;
let y = 5;
let z = "15";

console.log(x == y && a === z); 
console.log(x != y || a === z);  
console.log(!(x === z));     