sommaCifre();

function sommaCifre(){
let numero = parseInt(prompt("inserire numero a 4 cifre"));
    somma = 0;

while (numero) {
    somma += numero % 10;
    numero = Math.floor(numero / 10);
}

console.log(somma);
alert(somma);
}