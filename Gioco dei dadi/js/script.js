// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const generateBtn = document.querySelector('#playGames');
generateBtn.addEventListener('click', function() {
    let numCasual = [1, 2, 3, 4, 5, 6];
    numCasual = Math.floor(Math.random() * numCasual.length);
    let txtUser = ' è il tuo numero';
    let printResultuman = numCasual + txtUser;
    console.log (printResultuman)
    
    let pointUman = document.querySelector('#punteggio');
    pointUman.innerHTML = printResultuman;


    let pcNum = [1, 2, 3, 4, 5, 6];
    pcNum = Math.floor(Math.random() * pcNum.length);
    let txtPc = ' è il numero del computer';
    let printResultpc = pcNum + txtPc;
    console.log (printResultpc);

    let pointPc = document.querySelector('#pointInpc');
    pointPc.innerHTML = printResultpc;

    let risultaoLancio;

    if (numCasual === pcNum) {
        risultaoLancio = 'Hai pareggiato';
    } else if (numCasual > pcNum) {
        risultaoLancio = 'Hai vinto';
    } else {
        risultaoLancio = 'Hai perso';
    }

    console.log (risultaoLancio);

    // seleziono tramite una variabile l'elemento html dove voglio stampare il risultato
    // successivamente gli riscrivo la variabile con inner ed il contenuto che voglio mostrare

    let risultatoFinale = document.querySelector('#risultatoLa');
    risultatoFinale.innerHTML = risultaoLancio;

});

   