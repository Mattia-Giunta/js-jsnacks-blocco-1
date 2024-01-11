// Blocco 1 - JSnack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Array per memorizzare i numeri inseriti dall'utente
let numeriUtente = [];

// chiedere di inserire un numero per 10 volte
for (let i = 0; i < 10; i++) {
    
    // prompt per ottenere i numeri
    let inputUtente = prompt("Inserisci un numero:");

    // Converte l'input da stringa a numero e lo aggiunge all'array
    numeriUtente.push(Number(inputUtente));

}

// Stampare l'array contenente i numeri inseriti dall'utente
console.log("Numeri inseriti dall'utente:", numeriUtente);

// somma dei numeri nell'array
let somma = numeriUtente.reduce(function(acc, num) {
    return acc + num;
}, 0);

// Stampa della somma in pagina
document.write("<h2>Somma dei numeri inseriti: " + somma + "</h2>");

// terminato esercizio