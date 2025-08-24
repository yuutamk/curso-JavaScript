// Tipo de dato String

let string1 = 'Hola, mundo';
let string2 = "JavaScript es genial";
let string3 = `Usando template literals`;
let string4 = `${string1} y ${string2}`;
let string5 = string1 + ' ' + string2;


console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);
console.log(string5);

// funciones de cadena
let frase = 'JavaScript es un lenguaje de programación versátil';
console.log(frase.length);
console.log(frase.toUpperCase()); // Convierte a mayúsculas
console.log(frase.toLowerCase()); // Convierte a minúsculas
console.log(frase.substring(0, 10)); // Extrae una subcadena
console.log(frase.indexOf('lenguaje')); // Encuentra la posición de una palabra
console.log(frase.lastIndexOf('de')); // Encuentra la última posición de una palabra
console.log(frase.includes('programación')); // Verifica si contiene una palabra
console.log(frase.replace('versátil', 'increíble')); // Reemplaza una palabra
console.log(frase.split(' ')); // Divide la cadena en un arreglo de palabras
console.log(frase.trim()); // Elimina espacios al inicio y al final
console.log(frase.startsWith('JavaScript')); // Verifica si inicia con una palabra
console.log(frase.endsWith('versátil')); // Verifica si termina con una palabra
console.log(frase.charAt(0)); // Primera letra
console.log(frase.charAt(frase.length - 1)); // Última letra
console.log(frase.slice(0, 10)); // Extrae una subcadena
console.log(frase.concat(' ¡Es increíble!')); // Concatena cadenas
console.log(frase.split(' ').join('-')); // Reemplaza espacios por guiones
console.log(frase.repeat(2)); // Repite la cadena

