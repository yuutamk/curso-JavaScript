En JavaScript, existen tres formas principales de definir cadenas de texto (strings): con comillas dobles (`"`), comillas simples (`'`), y plantillas literales (backticks, `` ` ``). A continuación, se explican en detalle:

---

### 1. **Comillas Dobles (`"texto"`)**
- Se utilizan para definir cadenas de texto estándar.
- Permiten incluir comillas simples dentro de la cadena sin necesidad de escaparlas.
- Si se necesita incluir comillas dobles dentro de la cadena, deben escaparse con una barra invertida (`\"`).

**Ejemplo:**
```javascript
let saludo = "Hola, ¿cómo estás?";
let frase = "Ella dijo: \"Hola a todos\"";
console.log(saludo); // Hola, ¿cómo estás?
console.log(frase);  // Ella dijo: "Hola a todos"
```

---

### 2. **Comillas Simples (`'texto'`)**
- También se utilizan para definir cadenas de texto estándar.
- Permiten incluir comillas dobles dentro de la cadena sin necesidad de escaparlas.
- Si se necesita incluir comillas simples dentro de la cadena, deben escaparse con una barra invertida (`\'`).

**Ejemplo:**
```javascript
let saludo = 'Hola, ¿cómo estás?';
let frase = 'Ella dijo: "Hola a todos"';
let cita = 'Es un \'buen\' día';
console.log(saludo); // Hola, ¿cómo estás?
console.log(frase);  // Ella dijo: "Hola a todos"
console.log(cita);   // Es un 'buen' día
```

---

### 3. **Plantillas Literales (Backticks, `` `texto` ``)**
- Introducidas en ES6, son más flexibles y potentes que las comillas simples o dobles.
- Permiten interpolación de variables y expresiones mediante la sintaxis `${expresion}`.
- Soportan cadenas multilínea sin necesidad de caracteres especiales como `\n`.

**Ejemplo:**
```javascript
let fruta = "manzana";
let precio = 20;
let mensaje = `La ${fruta} cuesta $${precio} el kilo.`;
console.log(mensaje); // La manzana cuesta $20 el kilo.

// Multilínea
let textoMultilinea = `Esto es
una cadena
multilínea.`;
console.log(textoMultilinea);
// Esto es
// una cadena
// multilínea.
```

---

### Diferencias Clave:
1. **Interpolación de Variables y Expresiones**:
   - Solo las plantillas literales (`` ` ``) permiten interpolar variables y expresiones directamente con `${}`.
   - Con comillas simples o dobles, se debe concatenar manualmente usando el operador `+`.

   **Ejemplo:**
   ```javascript
   let nombre = "Juan";
   console.log("Hola, " + nombre + "!"); // Con comillas dobles
   console.log('Hola, ' + nombre + '!'); // Con comillas simples
   console.log(`Hola, ${nombre}!`);      // Con plantillas literales
   ```

2. **Cadenas Multilínea**:
   - Las plantillas literales permiten escribir cadenas en varias líneas sin usar caracteres especiales.
   - Con comillas simples o dobles, se debe usar `\n` o concatenar líneas.

   **Ejemplo:**
   ```javascript
   // Con comillas dobles
   let texto1 = "Esto es\nuna cadena\nmultilínea.";
   console.log(texto1);

   // Con plantillas literales
   let texto2 = `Esto es
   una cadena
   multilínea.`;
   console.log(texto2);
   ```

3. **Escapado de Caracteres**:
   - En comillas simples y dobles, se deben escapar las comillas internas si coinciden con las externas.
   - En plantillas literales, no es necesario escapar comillas simples o dobles.

   **Ejemplo:**
   ```javascript
   let frase1 = "Ella dijo: \"Hola\""; // Escapado en comillas dobles
   let frase2 = 'Ella dijo: \'Hola\''; // Escapado en comillas simples
   let frase3 = `Ella dijo: "Hola"`;   // Sin necesidad de escapar
   ```

---

### ¿Cuándo usar cada una?
- **Comillas Dobles (`"`)**: Útiles si la cadena contiene comillas simples.
- **Comillas Simples (`'`)**: Útiles si la cadena contiene comillas dobles.
- **Plantillas Literales (`` ` ``)**: Recomendadas para la mayoría de los casos, especialmente si necesitas interpolación de variables o cadenas multilínea.