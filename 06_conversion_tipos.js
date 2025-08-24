// explicit type casting

// Convertir String a Number
let numeroString = "123";
let numero = Number(numeroString);
console.log(numero); // 123
console.log(typeof numero); // "number"

let numeroDecimalString = "123.45";
let numeroDecimal = parseFloat(numeroDecimalString);
console.log(numeroDecimal); // 123.45
console.log(typeof numeroDecimal); // "number"

// convertir binario a decimal
let binarioString = "1010";
let binarioDecimal = parseInt(binarioString, 2);
console.log(binarioDecimal); // 10
console.log(typeof binarioDecimal); // "number"


// implicit type casting

let suma = "5" + 3; // "53" (concatenación)
console.log(suma); // "53"
console.log(typeof suma); // "string"

let sumWhithBoolean = "5" + true; // "5true" (concatenación)
console.log(sumWhithBoolean); // "5true"
console.log(typeof sumWhithBoolean); // "string"

let sumWhithNumber = 2 + true; // 3 (true se convierte a 1)
console.log(sumWhithNumber); // 3
console.log(typeof sumWhithNumber); // "number"


// suma de tipos diferentes
let stringValue = '10';
let numberValue = 10;
let booleanValue = true;
console.log('-----------------------------------');
console.log(stringValue + stringValue);
console.log(stringValue + numberValue); 
console.log(stringValue + booleanValue); 
console.log('-----------------------------------');
console.log(numberValue + stringValue);
console.log(numberValue + numberValue);
console.log(numberValue + booleanValue);
console.log('-----------------------------------');
console.log(booleanValue + stringValue);
console.log(booleanValue + numberValue);
console.log(booleanValue + booleanValue);
console.log('-----------------------------------');
