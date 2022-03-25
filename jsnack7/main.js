let contenitoreCubi = [];
let numero1 = parseInt(prompt("inserisci il numero fino a cui sei interessato fare il cubo"));
let cubo = numero(numero1);
alert("il cubi dei primi numeri"+ contenitoreCubi);

function numero(cubo1){
    for(let i=1; i<=cubo1; i++){
    let cubo=i**3;
    contenitoreCubi.push(cubo)
    
    }
}