// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!

let sBtn = document.querySelector('#sendBtn');
console.log (sBtn);
sBtn.addEventListener('click', function () {

    let mailUser = document.querySelector('#inMail').value;
    console.log (mailUser);
    let mailList = ['franchinoercriminale@gmail.com', 'cicalonetermini@gmail.com', 'erbrasilianoromasud@gmail.com', 'prettysolero126@gmail.com'];

    let ricercaMail = 'la tua mail non è in lista';

    for (let i = 0; i < mailList.length; i++ ) {
        const thisMail = mailList[i];

        if (mailUser === thisMail) {
            ricercaMail = 'la tua mail è in lista';
        }
        
        let risultatoVer = document.querySelector('#verifica');
        console.log (ricercaMail);
        risultatoVer.innerHTML = ricercaMail;

    }

});