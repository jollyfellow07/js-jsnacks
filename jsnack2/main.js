let stringa1 = prompt("inserisci la prima parola");
let stringa2 = prompt("inserisci la seconda parola");
if(stringa1<stringa2){

    alert("la stringa più corta è:" + stringa1);
    alert("la stringa più lunga è:" + stringa2);

    }else if(stringa2<stringa1){

        alert("la stringa più corta è:" + stringa2);
        alert("la stringa più lunga è:" + stringa1);
       
    }else{
            alert(stringa1 + " e " + stringa2 + " sono di lunghezza uguale!")
    }