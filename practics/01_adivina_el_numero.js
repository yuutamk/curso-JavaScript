const entrada = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// juego adivina el numero secreto

const numeroSecreto = Math.floor(Math.random() * 10 + 1);

entrada.question("Adivina el número secreto entre el 1 al 10: ", (respuesta) => {
    const numeroJugador = parseInt(respuesta);

    console.log(`Este es el número con el que juegas: ${numeroJugador}`);

    if (numeroJugador === numeroSecreto) {
        console.log("¡Felicidades, adivinaste el número secreto!");
    } else if (numeroJugador < numeroSecreto) {
        console.log("El número es demasiado bajo, intenta de nuevo");
    } else {
        console.log("El número es muy alto, intenta de nuevo");
    }

    entrada.close();
});


/*
// Versión usando prompt (solo funciona en navegadores)

const numeroSecreto = Math.floor(Math.random() * 10 + 1);
const respuesta = prompt("Adivina el número secreto entre el 1 al 10:");
const numeroJugador = parseInt(respuesta);

console.log(`Este es el número con el que juegas: ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
    console.log("¡Felicidades, adivinaste el número secreto!");
} else if (numeroJugador < numeroSecreto) {
    console.log("El número es demasiado bajo, intenta de nuevo");
} else {
    console.log("El número es muy alto, intenta de nuevo");
}
*/