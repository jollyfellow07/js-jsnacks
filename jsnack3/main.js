let contenitoreNumeri = [];
parseInt(contenitoreNumeri);
alert("inserisci 10 numeri");
for(let i = 0; i < 10;i++){
    let numero =parseInt(prompt("inserisci il numero"));
    contenitoreNumeri.push(numero);

}
let somma = 0;
for (let i = 0; i < contenitoreNumeri.length; i++) {
    somma += contenitoreNumeri[i];
}
console.log(somma);
alert("la somma dei numeri digitati è : " + somma);