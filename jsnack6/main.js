let condizione = false; 
alert("prova la sorte e scrivi un numero, se il numero è uguale a quello che ha scelto il pc avrai vinto")
while(condizione==false){

    let numeroPc = Math.round(Math.random()*10);
    //immetiamo il numero per controllare
    let numeroUtente = parseInt(prompt("inserisci un numero da 0 a 10"));
    alert(numeroPc);
        if (numeroPc==numeroUtente){ //confronto numeri
            alert("hai vinto, avete scelto lo stesso numero!");
            condizione=true;
        }else{
            alert("hai perso, riprova");
        }

}
        
