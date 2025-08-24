// estructura for

let lista = ["comer", "dormir", "programar", "repetir"];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// for...of (para arreglos)

let canasta = ["manzana", "banana", "cereza", "durazno", "uva"];
for (let fruta of canasta) {
    console.log(fruta);
}

// for...of con cadenas
let palabra = "JavaScript";
for (let letra of palabra) {
    console.log(letra);
}

// for...in (para objetos)

let listaDeCompras = {
    fruta: "manzana",
    verdura: "lechuga",
    bebida: "agua"
};

for (fruta in listaDeCompras) {
    console.log(fruta)
}

for (let fruta in listaDeCompras) {
    console.log(`${fruta}: ${listaDeCompras[fruta]}`);
}




// for...in (para objetos)
let persona = {
    nombre: "Ana",
    edad: 25,
    profesion: "Desarrolladora"
};
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}
// forEach (método de arreglos)
let actividades = ["leer", "escribir", "dibujar"];
actividades.forEach(function(actividad, indice) {
    console.log(`${indice + 1}. ${actividad}`);
});

// forEach con funciones flecha
actividades.forEach((actividad, indice) => {
    console.log(`${indice + 1}. ${actividad}`);
});