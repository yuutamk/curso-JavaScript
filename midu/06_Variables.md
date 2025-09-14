# Variables

A la hora de crear programas, es vital poder almacenar la información para poder utilizarla en un futuro. En JavaScript, usamos variables para conseguirlo.

Para crear una variable podemos usar la palabra reservada let y le damos un nombre a la variable. Por ejemplo:

let numero
Tenemos una variable llamada numero pero no le hemos asignado ningún valor. Para asignarle un valor, usamos el operador de asignación =:

let numero = 1
Ahora, podemos referirnos a la variable numero y obtener el valor que le hemos asignado.

numero + 1 // -> 1 + 1
También podemos reasignarle un valor a la variable:

numero = 5
numero + 1 // -> 5 + 1
¡Ojo! Si no guardas el valor de esta nueva operación, el valor de la variable numero seguirá siendo 5.

numero = 5
numero + 1 // -> 5 + 1
numero + 1 // -> 5 + 1
Ten en cuenta que el valor de la variable no tiene porque ser un número. Puede ser cualquier tipo de dato, como un texto o un booleano.

let welcomeText = 'Hola'
let isCool = true

---
Ejercicio interactivo
Crea una variable llamada mensaje y asígnale el valor "Hola JavaScript"

```JavaScript
let mensaje = "Hola JavaScript"
```

Crea una variable llamada resultado y asígnale la suma de 2 y 3

```JavaScript
let resultado = 2 + 3
```
---

Constantes const
Las constantes son variables que no pueden ser reasignadas. Para crear una constante, usamos la palabra reservada const:

const PI = 3.1415
Si intentas reasignar el valor de una constante, obtendrás un error:

PI = 3 // -> TypeError: Assignment to constant variable.
Como no se pueden reasignar, las constantes siempre deben ser inicializadas con algún valor. Esto es otra diferencia respecto a let, que no es necesario inicializarla con un valor.

let numero // ✅
const RADIUS // ❌ SyntaxError: Missing initializer in const declaration
Son muy útiles para almacenar valores que no van a cambiar. Siempre que puedas, procura usar constantes para que tu código sea más predecible.

---
Ejercicio interactivo
Crea una constante llamada IS_DISABLED y asígnale el booleano true

```JavaScript
const IS_DISABLED = true
```

>¿Las constantes son variables? Técnicamente, en JavaScript una constante declarada con const sigue siendo una variable, aunque no pueda reasignarse. La confusión es común, porque la palabra "variable" sugiere que puede variar (cambiar), pero la definición formal de "variable" en programación no depende únicamente de que su valor pueda cambiar. Una variable es un espacio reservado en memoria que almacena un valor asociado a un identificador.

---




Variables var
En JavaScript, también podemos crear variables usando la palabra reservada var. Es la forma más antigua y es normal que encuentres muchos tutoriales que lo usen. Sin embargo, a día de hoy, no es recomendable usar var ya que tiene comportamientos extraños que pueden causar errores en tu código.

En una clase posterior te explicaré cuál es la diferencia entre let, const y var además de por qué, siempre que puedas, deberías evitar var.

El nombre de las variables
En JavaScript, los nombres de las variables pueden contener letras, números y el guión bajo (_). Además, el primer carácter del nombre de la variable no puede ser un número.

Es importante tener en cuenta que los nombres de las variables son sensibles a las mayúsculas y minúsculas, lo que significa que miVariable y mivariable son dos variables diferentes en JavaScript.

let miVariable = 1
let mivariable = 2
miVariable + mivariable // -> 1 + 2
También es importante que los nombres de las variables sean descriptivos. Por ejemplo, si queremos almacenar el nombre de un usuario, podemos llamar a la variable userName. De esta forma, cuando leamos el código, sabremos que la variable contiene el nombre de un usuario.

let n = 'Pepe' // ❌ Mal, no es descriptivo
let userName = 'Juan' // ✅ Bien, se entiende
Convenciones y nomenclaturas
En JavaScript, existen diferentes nomenclaturas para nombrar las variables: camelCase, snake_case y SCREAMING_CASE.

camelCase es la forma más común de nombrar las variables en JavaScript. Consiste en escribir la primera palabra en minúsculas y las siguientes palabras con su primera letra en mayúsculas. Por ejemplo:

let camelCase = 1
let camelCaseIsCool = 2
let userName = 'midudev'
snake_case es una forma de nombrar que consiste en escribir todas las palabras en minúsculas y separarlas con guiones bajos. Por ejemplo:

let snake_case = 1
let snake_case_is_cool = 2
let user_name = 'midudev'
En algunos lenguajes de programación es muy común usar snake_case para nombrar las variables. En JavaScript no lo es tanto, pero todavía puedes encontrar código que lo use.

Lo más habitual, y es buena idea, es usarlo en los nombres de archivos. Por ejemplo, mi_archivo.js. Esto es porque algunos sistemas operativos distinguen entre mayúsculas y minúsculas y, por tanto, mi_archivo.js y Mi_archivo.js son dos archivos diferentes.

También existe kebab-case, que es una forma de nombrar que consiste en escribir todas las palabras en minúsculas y separarlas con guiones. Por ejemplo: mi-archivo.js. Es muy similar a snake_case pero con guiones en vez de guiones bajos. No se puede usar para nombrar variables pero sí es común usarlo en los nombres de archivos.

SCREAMING_CASE es una forma de nombrar que consiste en escribir todas las palabras en mayúsculas y separarlas con guiones bajos. Por ejemplo:

const SCREAMING_CASE = 1
const SCREAMING_CASE_IS_COOL = 2
const USER_NAME = 'midudev'
Para las constantes, con valores que no van a cambiar, es muy común usar SCREAMING_CASE. Así se puede distinguir fácilmente de las variables que sí cambian de valor. Por eso, no debes usarla para nombrar variables con let.