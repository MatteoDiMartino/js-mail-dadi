// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

            let numCasual = [1, 2, 3, 4, 5, 6];
            numCasual = Math.floor(Math.random() * numCasual.length);
            console.log (numCasual);

            let pcNum = [1, 2, 3, 4, 5, 6];
            pcNum = Math.floor(Math.random() * pcNum.length);
            console.log (pcNum);

            let risultaoLancio;

            if (numCasual === pcNum) {
                risultaoLancio = 'Hai pareggiato';
            } else if (numCasual > pcNum) {
                risultaoLancio = 'Hai vinto';
            } else {
                risultaoLancio = 'Hai perso';
            }

            console.log (risultaoLancio);
