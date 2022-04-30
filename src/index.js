const express = require('express');
const app = express();

// Variables
let secs = 5; // How many seconds do you want to wait to stop the process?
let idCache = 0, idPrincipal = 0;
let memoriaCache = [[idCache, 1234, 0000, 4321]], memoriaPrincipal = [[idPrincipal, 0000, 1010, 1234]];

// Configuration - Main Execution
app.listen('3000', () => {
    console.log('Iniciando memorias caché y principal...');
    imprimirTablas(memoriaCache, memoriaPrincipal);
    llenar();
    setTimeout(() => {
        imprimirTablas(memoriaCache, memoriaPrincipal);
        console.log('Tomando SS. \nTerminando proceso...')
    }, secs * 1000);
});

// Methods
let generarDato = (min, max) => Math.floor((Math.random() * (max - min)) + min);

let generarRegistro = (tabla, id) => {
    let w = ++id;
    let x = generarDato(1000, 9999);
    let y = generarDato(1000, 9999);
    let z = generarDato(1000, 9999);
    let aux = [w, x, y, z];
    tabla.push(aux);
};

let llenar = () => {
    setInterval(() => {
        generarRegistro(memoriaCache, idCache);
        generarRegistro(memoriaPrincipal, idPrincipal);
    }, 500);
};

let imprimirTablas = (tabla1, tabla2) => {
    console.log(`\nMemoria Caché:`);
    console.table(tabla1);
    console.log(`\nMemoria Principal:`);
    console.table(tabla2);
}