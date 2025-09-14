# Código Condicional con if

https://video.aprendejs.dev/condicional-if-opt.mp4

El código condicional es un bloque de código que se ejecuta sólo si se cumple una condición. En JavaScript usamos la palabra reservada if para crear un bloque condicional, así:

if (condición) {
  // código que se ejecuta si la condición es verdadera
}
Como ves, ponemos la condición entre paréntesis y el código se ejecuta si la condición entre llaves es true. Si la condición es false, el código no se ejecuta.

Imagina que quieres mostrar un mensaje si la edad de un usuario es mayor o igual a 18 años. Podrías hacerlo así:

const edad = 18

if (edad >= 18) {
  console.log('Eres mayor de edad')
}
else
Es posible utilizar la palabra clave else para ejecutar un bloque de código diferente si la condición es falsa:

const edad = 17

if (edad >= 18) {
  console.log('Eres mayor de edad')
} else {
  console.log('Eres menor de edad')
}
Esto es útil para ejecutar un bloque de código u otro dependiendo de si se cumple o no una condición.

else if
También podemos utilizar la palabra clave else if para comprobar más de una condición:

const edad = 17

if (edad >= 18) {
  console.log('Eres mayor de edad')
} else if (edad >= 16) {
  console.log('Eres casi mayor de edad')
} else {
  console.log('Eres menor de edad')
}
El programa comprueba la primera condición. Si es true, ejecuta el código dentro del bloque if. Si es false, comprueba la siguiente condición. Si es true, ejecuta el código dentro del bloque else if. Si es false, ejecuta el código dentro del bloque else.

Dicho de otra forma, entrará en el primer bloque que cumpla la condición y no entrará en los demás. Si no cumple ninguna, entonces entrará en el bloque else.

Anidación de condicionales
Es posible anidar condicionales dentro de otros condicionales. Por ejemplo:

const edad = 17
const tieneCarnet = true

if (edad >= 18) {
  if (tieneCarnet) {
    console.log('Puedes conducir')
  } else {
    console.log('No puedes conducir')
  }
} else {
  console.log('No puedes conducir')
}
En muchas ocasiones vas a querer evitar la anidación innecesaria de condicionales ya que se hacen difíciles de leer y mantener. En estos casos es mejor utilizar operadores lógicos para crear la condición:

const edad = 17
const tieneCarnet = true

// si es mayor de edad y tiene carnet entonces...
if (edad >= 18 && tieneCarnet) {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
}
Otra técnica muy interesante es la de guardar el resultado de la condición en una variable, para que tus condiciones sean mucho más legibles:

const edad = 17
const tieneCarnet = true
const puedeConducir = edad >= 18 && tieneCarnet

if (puedeConducir) {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
}
¡Wow! ¿Has visto cómo hemos mejorado la legibilidad de nuestro código? ¡Es mucho más fácil de leer y entender! A este tipo de técnica se le llama refactorización y consiste en mejorar el código sin cambiar su comportamiento.

La importancia de las llaves
Es importante que sepas que las llaves {} no siempre son obligatorios. Si el bloque de código sólo tiene una línea, puedes omitir las llaves:

const edad = 17

if (edad >= 18) console.log('Eres mayor de edad')
else console.log('Eres menor de edad')
También lo puedes escribir en la misma línea:

const edad = 18

if (edad >= 18) console.log('Eres mayor de edad')
else console.log('Eres menor de edad')
Sin embargo, te recomiendo que mientras estés aprendiendo siempre escribas las llaves. Esto te ayudará a evitar errores y a que tu código sea más legible.