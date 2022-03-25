let contenitoreNumeri = [];
alert("inserisci 10 numeri");
//compongo il mio array
for(let i = 0; i < 10;i++){
    let numero =parseInt(prompt("inserisci il numero"));
    contenitoreNumeri.push(numero);
}
let media = mediaAritmetica(contenitoreNumeri);
alert("la media aritmetica dei numeri è: " + media); 


/*****LE MIE FUNZIONI*****/
function mediaAritmetica (calcolo){

//sommo i numeri del mio array
let somma = 0;
for (let i = 0; i < calcolo.length; i++) {
    somma += calcolo[i];
}
console.log(somma);
let media = somma/10;
return media;
}