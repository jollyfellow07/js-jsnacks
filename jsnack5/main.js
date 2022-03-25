let contenitoreNumeri = [];
alert("inserisci 6 numeri");
//compongo il mio array
for(let i = 0; i < 6;i++){

    let numero =parseInt(prompt("inserisci il numero"));

    //compongo l'array solo di numeri dispari
        if(numero%2!=0){
            contenitoreNumeri.push(numero);
        }
}

//stampo numeri array
alert("i numeri dispari che hai inserito sono " + contenitoreNumeri);
