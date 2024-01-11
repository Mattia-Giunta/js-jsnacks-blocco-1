// Blocco 1 - snake 6
// -Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.


// prompt per un numero
let numeroInserito = prompt("Inserisci un numero:");

// Converte l'input da stringa a numero
let numero = Number(numeroInserito);

// Verifica se l'input è un numero valido
if (!isNaN(numero)) {

    // Ciclo for per calcolare il cubo di ogni numero da 1 a numero
    for (let i = 1; i <= numero; i++) {

        let cubo = i * i * i;

        document.write("<h2>Il cubo di " + i + " è: " + cubo + "</h2>");
        console.log("Il cubo di " + i + " è: " + cubo);
    }

} else {

    document.write("<h2>Inserisci un numero valido </h2>");
    console.log("Inserisci un numero valido.");
}
// Terminato esercizio