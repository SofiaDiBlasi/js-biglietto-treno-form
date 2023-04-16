//iniziamo chiedendo il nome all'utente in quanto il biglietto sarà presumibilmente nominativo
let nome = prompt ("Inserisci il tuo nome e cognome completo. Attenzione, usare il nome di chi usufruirà del biglietto, in quanto sarà nominativo")

//alert di errore nel caso il nome sia errato
if (nome == null || nome == "") {
    alert("Non hai inserito un nomimativo per il biglietto");
} 

//chiediamo in seguito l'età per poter calcolare lo sconto (20% per gli under 18 e 40% per gli over 65)
let eta = prompt ("Quanti anni hai? La nostra compagnia offre sconti e vantaggi in base all'età !")

//alert di errore nel caso l'età sia errata
if (eta == null || eta == "" || isNaN(parseInt(eta))) {
    alert("Non hai inserito la tua età per approfittare dei nostri sconti !");
} 

//chiediamo i km che si desiderano percorrere come ultimo dato per poter calcolare il costo finale del nostro biglietto (ogni km ha il valore di 0,21)
let chilometri = prompt ("Vuoi percorrere 5, 10 o più km? Inserisci il numero di km che desideri")

//alert di errore nel caso i KM siano errati
if (chilometri == null || chilometri == "" || isNaN(parseFloat(chilometri))) {
    alert("Non hai inserito un quantitativo minimo di km, dove vorresti andare così?!");
} 

//calcoliamo dunque il prezzo del biglietto

let prezzoDelBiglietto = chilometri*0.21

if (eta <= 18){
    prezzoDelBiglietto = prezzoDelBiglietto - ((prezzoDelBiglietto / 100) * 20)
} else if (eta >= 65) {
    prezzoDelBiglietto = prezzoDelBiglietto - ((prezzoDelBiglietto / 100) * 40)
}

document.getElementById("prezzoDelBiglietto").innerText = "Il prezzo del biglietto per " + nome + " è " + prezzoDelBiglietto