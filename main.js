
// Array

var cognomi = ['rossi', 'biondi', 'tozzi', 'stella'];

console.log('array originario: ' + cognomi);

// input aggiunta valore nell' array

var utente = prompt('Inserisci il tuo cognome');
 cognomi.push(utente);
console.log('array con aggiunta utente: ' + cognomi);

// Ordinamento

for (var i = 0; i < cognomi.length ; i++){

  for (var j = i+1; j < cognomi.length; j++){

    if (cognomi[i] > cognomi[j]){

    var temp = cognomi[i];
        cognomi[i] = cognomi[j];
        cognomi[j] = temp;
    }

}

}

console.log('array ordinato: ' + cognomi);

// Ricerca

var index = 0;

for (var index = 0; index < cognomi.length ; index++){

    if (utente == cognomi[index]) {

        var posizione = index + 1;
        console.log('Il tuo cognome è nella posizione: ' + posizione);
    }

}
