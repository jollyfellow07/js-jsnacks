let invitati = ["simone","giovanni","francesco", "roberto", "anna", "cinzia"]; //lista invitati
let nome = prompt("inserisci il tuo nome"); //nome comunicato
let accettato = false;  
for(let i = 0; i < invitati.length; i++){
                //controllo lista
     if(nome==invitati[i]){
        accettato=true;
        alert("sei il benvenuto");
        break;
  }
}
if(accettato==false){
    alert("mi dispiace non puoi entrare!");
}