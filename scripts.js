ncartas = prompt("Qual o numero de cartas?");

if(ncartas%2 !== 0){
    validNcartas();
}

function validNcartas(){
    do{
        ncartas = prompt("Escolha um numero par de cartas");
    }while(ncartas%2 !== 0);
}

