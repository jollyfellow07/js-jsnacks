let contenitoreNumeri = [10,12,34,56,78,43,2,3,1,34];
sommaNumeri(contenitoreNumeri);



/*****LE MIE FUNZIONI*****/
function sommaNumeri (num){

let somma = 0;
for (let i = 0; i < num.length; i++) {
    somma += num[i]; 
} 
console.log(somma);
alert("la somma dei numeri digitati è : " + somma); 
}