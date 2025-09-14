# Operador typeof

El operador typeof devuelve una cadena de texto que indica el tipo de un operando. Puede ser usado con cualquier tipo de operando, incluyendo variables y literales.

const MAGIC_NUMBER = 7
typeof MAGIC_NUMBER // "number"
También puedes usarlo directamente con los valores que quieras comprobar:

typeof undefined // "undefined"
typeof true // "boolean"
typeof 42 // "number"
typeof 'Hola mundo' // "string"

---
Ejercicios de código interactivos
Tengo una variable llamada userName. Escribe el código necesario para ver su tipo.
typeof userName

---

Existe, sin embargo, un valor especial en JavaScript, null, que es considerado un bug en el lenguaje. El operador typeof devuelve "object" cuando se usa con null:

typeof null // "object"
Lo correcto sería que typeof null devolviera "null", pero es un error histórico que no se puede corregir sin romper el código existente.

Por eso, si quieres comprobar si una variable es null, debes usar la comparación estricta ===:

const foo = null
foo === null // true
Otra pregunta es... ¿Qué es ese object? Es un tipo de dato que está en el centro de JavaScript y que veremos en detalle más adelante.

Usando con operadores de comparación
El operador typeof es muy útil cuando se usa con operadores de comparación. Por ejemplo, para comprobar si una variable es del tipo que esperamos:

const age = 42
typeof age === 'number' // true
Una vez que tenemos expresiones lógicas, podemos empezar a encadenar operadores lógicos para comprobar múltiples condiciones:

const age = 42
typeof age === 'number' && age > 18 // true

---
Ejercicios de código interactivos
Tengo una variable llamada dogId pero no tengo claro si es una cadena de texto. Escribe el código necesario para asegurarte.
typeof dogId === "string"

---