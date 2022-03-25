let contenitoreNumeri = [];
let somma = addizione(contenitoreNumeri);
let media = mediaAritmetica(somma);
alert("la media aritmetica dei numeri è: " + media); 



/***********************************************************/

/*****LE MIE FUNZIONI*****/
function addizione(calcolo) {
//sommo i numeri del mio array
alert("inserisci 10 numeri");
//compongo il mio array
for(let i = 0; i < 10;i++){
    let numero = parseInt(prompt("inserisci il numero"));
    contenitoreNumeri.push(numero);
}
let somma = 0;
for (let i = 0; i < calcolo.length; i++) {
    somma += calcolo[i];
    }

console.log(calcolo);
return somma;
}

function mediaAritmetica (addizione1){
console.log(addizione1);
let media = addizione1/10;
return media;
}
