/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Bonus:
Gestire l'inserimento dei numeri tramite 5 input diversi.
*/

// bottoni presi in pagina
let buttonAvviaEl = document.getElementById ('avvia')
let buttonControllaEl = document.getElementById ('controlla')

// variabili 
let numeriusciti = [] ;
let numeriutente = [] ;
let punteggio = 0 ;
let numeriazzeccati = [] ;

// output della pagina
let outputEl = document.getElementById ('output')

// input della pagina
let inputNum1El = document.getElementById ('num1')
let inputNum2El = document.getElementById ('num2')
let inputNum3El = document.getElementById ('num3')
let inputNum4El = document.getElementById ('num4')
let inputNum5El = document.getElementById ('num5')

// evento click che avvia il giocho facendo comprarire per 10 secondi i numeri da ricordare
buttonAvviaEl.addEventListener ('click' , function(){

    // crea il primo numero random intero che viene visualizzato in pagina tramite il .value
    inputNum1El.value = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    // assegna il primo numero generato random a una variabile (nel caso serva dopo)
    let num1 = inputNum1El.value

    // crea il secondo numero random intero che viene visualizzato in pagina tramite il .value
    inputNum2El.value = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    // assegna il secondo numero generato random a una variabile (nel caso serva dopo)
    let num2 = inputNum2El.value

    // crea il terzo numero random intero che viene visualizzato in pagina tramite il .value
    inputNum3El.value = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    // assegna il terzo numero generato random a una variabile (nel caso serva dopo)
    let num3 = inputNum3El.value

    // crea il quarto numero random intero che viene visualizzato in pagina tramite il .value
    inputNum4El.value = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    // assegna il quarto numero generato random a una variabile (nel caso serva dopo)
    let num4 = inputNum4El.value

    // crea il quinto numero random intero che viene visualizzato in pagina tramite il .value
    inputNum5El.value = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    // assegna il quinto numero generato random a una variabile (nel caso serva dopo)
    let num5 = inputNum5El.value

    // aggiunge i 5 numeri creati prima in un array di numeri
    numeriusciti.push(num1,num2,num3,num4,num5)

    // timer che fa sparire dopo 10 secondi i 5 numeri random generati al click (funzione , tempo)
    setTimeout(stopAlTempo, 10000)
})

// aggiung un evento click al bottone del controllo
// andando poi a prendere a sua volta dagli input i numeri che l'utente tenta di ricordare
buttonControllaEl.addEventListener ('click' , function(){

    // prende il primo numero inserito dall'utente tramite il primo input
    let num1Utente = inputNum1El.value

    // prende il secondo numero inserito dall'utente tramite il secondo imput
    let num2Utente = inputNum2El.value

    // prende il terzo numero inserito dall'utente tramite il terzo imput
    let num3Utente = inputNum3El.value

    // prende il quarto numero inserito dall'utente tramite il quarto imput
    let num4Utente = inputNum4El.value

    // prende il quinto numero inserito dall'utente tramite il quinto imput
    let num5Utente = inputNum5El.value
    
    // inserisce i 5 numeri dell'utente in una lista (numeri utente)
    numeriutente.push( num1Utente,num2Utente,num3Utente,num4Utente,num5Utente)
    
    
    // un ciclo for per controllare i numeri inseriti se combaciano con quelli generati random
    for ( let i = 0 ; i < 5 ; i++) {
        // condizione che controlla se i numeri sono uguali
        if(numeriusciti[i] == numeriutente[i]) {
            // se la condizione è risultata vera il numero in questione viene aggiunto in una lista (numeri azzeccati)
            numeriazzeccati.push(numeriutente[i])
            // incremento di 1 il punteggio/numero dei numeri azzeccati
            punteggio++;
        }
    }
    
    // fa comparire in pagina tramite un 'div'(output) l'esito = numeri che vengono indovinati e quanti sono 
    outputEl.innerText = 'i numeri che hai indovinato sono ' + numeriazzeccati + ' quindi ' + punteggio + ' su 5'
    
})

// function azzera i valori visualizzati per 10 secondi
function stopAlTempo() {
    inputNum1El.value = ''
    inputNum2El.value = ''
    inputNum3El.value = ''
    inputNum4El.value = ''
    inputNum5El.value = ''
}