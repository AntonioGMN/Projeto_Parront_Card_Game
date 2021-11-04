const ncartas = prompt("Qual o numero de cartas?");

function validNcartas(){
    if(ncartas%2 !== 0){
        do{
            ncartas = prompt("Escolha um numero par de cartas");
        }while(ncartas%2 !== 0);
    }
}

do{ validNcartas()}while(validNcartas());

function adicionarCarta(){
    main = document.querySelector("main");
    main.innerHTML = main.innerHTML + `
    <article class="carta" data-identifier="card" onclick="girar(this)">
    <div class="front-face face" data-identifier="back-face">
        <img src="imagens/front.png">
    </div>
    <div class="back-face face" data-identifier="front-face">
        <img src="imagens/bobrossparrot.gif" alt="não deu certo">
    </div>
    </article>`; 
}

let cont=0;

while(cont < ncartas){
    adicionarCarta();
    cont++;
}


function girar(sele){
    sele.classList.add("girar");
}