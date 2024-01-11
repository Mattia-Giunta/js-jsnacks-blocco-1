

// Blocco 2 - snack 2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.




// Array di 10 nomi
let nomi = ["Marco", "Anna", "Luca", "Giulia", "Simone", "Elena", "Giovanni", "Laura", "Francesco", "Martina"];

// Array di 10 cognomi
let cognomi = ["Rossi", "Bianchi", "Verdi", "Russo", "Ferrari", "Esposito", "Gallo", "Conti", "Marino", "De Luca"];

// Array per memorizzare i nomi generati
let nomiGenerati = [];


// Funzione per generare e aggiungere un nome e un cognome casuali
function generaNomeCognome() {
    var nomeCasuale = nomi[Math.floor(Math.random() * nomi.length)];
    var cognomeCasuale = cognomi[Math.floor(Math.random() * cognomi.length)];

    console.log("Nome casuale: " + nomeCasuale);
    console.log("Cognome casuale: " + cognomeCasuale);

    // Aggiungi il nome e cognome generato all'array
    nomiGenerati.push(" " + nomeCasuale + " " + cognomeCasuale);

    // Aggiorna il contenuto del <div>
    document.getElementById("container").innerHTML = `<h2>  ${nomiGenerati}  </h2> `
}

// Terminato esercizio  


