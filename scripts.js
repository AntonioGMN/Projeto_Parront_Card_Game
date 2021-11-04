ncartas = prompt("Qual o numero de cartas?");

function validNcartas(){
    if(ncartas%2 !== 0){
        do{
            ncartas = prompt("Escolha um numero par de cartas");
        }while(ncartas%2 !== 0);
    }
}

do{ validNcartas()}while(validNcartas())

 
function girar(sele){
    sele.classList.add("girar");
}