// Blocoo 2 - snack 3
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// Array di numeri interi
var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Funzione per calcolare i numeri dispari
function calcolaSommaPosizioneDispari() {
    var somma = 0;

    for (var i = 0; i < numeri.length; i++) {

        // Verifica se l'indice è dispari
        if (i % 2 === 1) {
            somma += numeri[i - 1];
        }
    }

    // Aggiorna il contenuto della <div> con l'id "risultato"
    document.getElementById("risultato").innerHTML = "Somma degli elementi in posizione dispari: " + somma;
}
// Terminato esercizio