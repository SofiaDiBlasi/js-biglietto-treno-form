
let ticketForm = document.getElementById(`form`);
ticketForm.addEventListener("submit",
    (e) => {
        e.preventDefault();

        let nomeCorretto = false;
        let etaCorretta = false;
        let kmCorretti = false;

        let nome = document.getElementById("nome").value;
        if (nome == null || nome == "") {
            document.getElementById("nome").style.border="2px solid red";
        } else {
            nomeCorretto = true;
            document.getElementById("nome").style.border="2px solid green"
        }
        
        let eta = document.getElementById("eta").value;
        if (eta == null || eta == "" || isNaN(parseInt(eta))) {
            document.getElementById("eta").style.border="2px solid red";
        } else {
            etaCorretta = true;
            document.getElementById("eta").style.border="2px solid green"
        }
        
        let km = document.getElementById("km").value;
        if (km == null || km == "" || isNaN(parseFloat(km))) {
            document.getElementById("km").style.border="2px solid red";
        } else {
            kmCorretti = true;
            document.getElementById("km").style.border="2px solid green"
        }

        if (nomeCorretto && etaCorretta && kmCorretti) {
             let prezzoDelBiglietto = km*0.21
             let promozione = "Biglietto Standard"

            if (eta <= 18){
                prezzoDelBiglietto = prezzoDelBiglietto - ((prezzoDelBiglietto / 100) * 20)
                promozione = "Biglietto under 18"
            } else if (eta >= 65) {
                prezzoDelBiglietto = prezzoDelBiglietto - ((prezzoDelBiglietto / 100) * 40)
                promozione = "Biglietto over 65"
            }

            let risultato = document.getElementById("risultato");

            risultato.innerHTML = "Il biglietto per " + nome + " che ha " + eta + " anni, e deve fare " + km + " chilometri, con promozione: " + promozione + " costerà " + parseInt(prezzoDelBiglietto) + " euro. " ;
        } else {
            let risultato = document.getElementById("risultato");

            risultato.innerHTML = "Mi dispiace, devi compilare tutti i campi per poter procedere."
        }
    }
)