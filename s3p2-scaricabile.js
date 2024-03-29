// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

// standard background color
let stdBgColor = "white"
// toggle variable to revert link class with a second click on the button
let toggleLinkColor = false
// toggle to revert image visibility
let toggleImgVisibility = false

function changeH1Text(){
    let actualH1 = document.getElementsByTagName("h1")[0]
    const oldH1 = 'Il Paradiso Della Brugola'
    const newH1 = 'La Brugola in Paradiso'
    actualH1.textContent = actualH1.textContent === oldH1 ? newH1 : oldH1 
}

function changeBgColor(){
    let bd = document.getElementsByTagName("body")[0]
    // check also if the background color is set, otherwise the first click will not work
    bd.style.backgroundColor = bd.style.backgroundColor === stdBgColor || !bd.style.backgroundColor ? "pink" : stdBgColor
}

function changeFooterAddress(){
    let actualFooter = document.getElementsByTagName("footer")[0]
    const oldFooter = 'Il Paradiso Della Brugola s.r.l. - Via di qui 45, Torino (TO), 10123, Italia'
    const newFooter = 'La Brugola in Paradiso s.r.l. - Piazza la Bomba e Scappa 93, Milano (MI), 12345, Italia'
    actualFooter.textContent = actualFooter.textContent === oldFooter ? newFooter : oldFooter 
}

function addClassToLink(){
    let links = document.getElementsByTagName("a")    
    let extraClass = 'linkExtraClass'
    if (!toggleLinkColor){
        toggleLinkColor = !toggleLinkColor
        for (let l of links){
            l.className = extraClass
        }
    }
    else{
        toggleLinkColor = !toggleLinkColor
        for (let l of links){
            l.className = ''
        }
    }
}

function toggleImgs(){
    let imgs = document.getElementsByTagName("img")    
    let extraClass = 'imgExtraClass'
    if (!toggleImgVisibility){
        toggleImgVisibility = !toggleImgVisibility
        for (let i of imgs){
            i.className = extraClass
        }
    }
    else{
        toggleImgVisibility = !toggleImgVisibility
        for (let i of imgs){
            i.className = ''
        }
    }
}

function changePricesColor(){
    let prices = document.getElementsByClassName("price")
    
    for (let p of prices){
        // grabbed this from the internet, i suppose it randomize a number between 0 and 1, and the multiplication convert it to a valid number 
        // that the toString function convert to be postponed to the #
        var randomColor = Math.floor(Math.random()*16777215).toString(16);    
        p.style.color = "#" + randomColor
        console.log(p.style.color)
    }
}