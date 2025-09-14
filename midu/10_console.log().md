# console.log()

console.log() es una función integrada en JavaScript que se utiliza para imprimir mensajes en la consola del navegador o del editor de código. Se utiliza principalmente para depurar el código y para imprimir valores de variables y mensajes para ayudar en el proceso de desarrollo.

En programación, una función es un conjunto de instrucciones que se pueden usar una y otra vez para hacer una tarea específica. Muchas veces, las funciones se utilizan para evitar repetir código y son parametrizables. Más adelante tendremos una sección sólo para ellas.

Sintaxis
Para poder mostrar estos mensajes en consola, debes escribir console.log() y dentro de los paréntesis, el mensaje que quieres mostrar.

console.log('Hola, JavaScript')
// -> 'Hola, JavaScript'
También puedes averiguar el valor de una variable, escribiendo el nombre de la variable dentro de los paréntesis.

const nombre = 'JavaScript'
console.log(nombre)
// -> 'JavaScript'
Como ya sabes concatenar cadenas de texto, puedes mostrar un mensaje y el valor de una variable en el mismo console.log().

const nombre = 'JavaScript'
console.log('Hola, ' + nombre)
// -> 'Hola, JavaScript'
Además, puedes mostrar varios mensajes y valores de variables en el mismo console.log() separándolos por comas.

const nombre = 'JavaScript'
const version = 2023
console.log(nombre, version)
// -> 'JavaScript 2023'
Más métodos de console
Además de console.log(), existen otros métodos que puedes utilizar para imprimir mensajes en la consola. Algunos de ellos son:

console.error(): Imprime un mensaje de error en la consola.
console.warn(): Imprime un mensaje de advertencia en la consola.
console.info(): Imprime un mensaje de información en la consola.
Como ves, la sintaxis es la misma que console.log(), sólo cambia el nombre del método.

Aunque puedes usar console.log() para imprimir cualquier tipo de mensaje, es recomendable utilizar los métodos que acabamos de ver para imprimir mensajes de error, advertencia e información ya que tienen un formato especial que los hace más fáciles de identificar.

console.error('Error')
// ❌ Error
console.warn('Advertencia')
// ⚠️ Advertencia
console.info('Información')
// ℹ️ Información
Prueba estos métodos en la consola del navegador y observa los resultados.

