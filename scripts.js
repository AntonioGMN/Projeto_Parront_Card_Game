let jogadas = 0;
let final = 0;

let ncartas = prompt("Qual o numero de cartas?");

let segundos, minutos, idIntervalo;
minutos = 0;
segundos = 0;

while(ncartas<4 || ncartas>14 || ncartas%2 !== 0){
    ncartas = prompt("Escolha um numero valido de cartas");
}

let fotos = [];
fotos.push("<img src='imagens/unicornparrot.gif'>");
fotos.push("<img src='imagens/bobrossparrot.gif'>");
fotos.push("<img src='imagens/explodyparrot.gif'>");
fotos.push("<img src='imagens/fiestaparrot.gif'>");
fotos.push("<img src='imagens/metalparrot.gif'>");
fotos.push("<img src='imagens/revertitparrot.gif'>");
fotos.push("<img src='imagens/tripletsparrot.gif'>");

let copia = [];

function AdicionarCarta(array=[]){
    array.sort(comparador);
    let cont = 0;                       
    do{
        main = document.querySelector("main");
        main.innerHTML = main.innerHTML + `
        <article class="carta" data-identifier="card" onclick="girar(this)">
        <div class="front-face face" data-identifier="front-face">
            <img src="imagens/front.png">
        </div>
        <div class="back-face face" data-identifier="back-face">
            ${array[cont]}
        </div>
        </article>`;

        copia.push(array[cont]);

        cont++;
    }while(cont < ncartas/2);
}

AdicionarCarta(fotos);
AdicionarCarta(copia);

function girar(sele){
    sele.classList.add("girar");
    jogadas++;
    let primeiraCarta = document.querySelector(".carta.primeiraCarta");
   
    if(primeiraCarta == null){
        sele.classList.add("primeiraCarta");
    }else{
        sele.classList.add("segundaCarta");
        setTimeout(compararCartas, 1000);
    }
}

function compararCartas(){
    let primeiraCarta = document.querySelector(".carta.primeiraCarta");
    let segundaCarta = document.querySelector(".carta.segundaCarta");
    
    if(primeiraCarta !== null && segundaCarta !== null){
        let img1 = document.querySelector(".carta.primeiraCarta .back-face")
        let img2 = document.querySelector(".carta.segundaCarta .back-face")       
        
        if(img1.innerHTML !== img2.innerHTML){
            primeiraCarta.classList.remove("girar");
            segundaCarta.classList.remove("girar");
        }else{
            final++;
        }
    }
    
    primeiraCarta.classList.remove("primeiraCarta");
    segundaCarta.classList.remove("segundaCarta");
    
    
    if(final == ncartas/2){
        clearInterval(idIntervalo);
        alert("Você ganhou com o tempo de "+minutos+" minutos e "+segundos+" segundos em "+ jogadas+ " jogadas!");
        novoJogo = prompt("Você quer jogar de novo?");
        if(novoJogo == "sim" || novoJogo == "Sim"){
            document.location.reload(true);
        }
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}


function contar(){
    idIntervalo = setInterval(passaTempo,1000);
}

function passaTempo(){
    let relogio = document.querySelector(".relogio")
    relogio.innerHTML = minutos+":"+segundos;
    segundos++;
    if(segundos === 60){
        minutos++;
        segundos = 0;
    };
}

function checartermino(){
    if(final == ncartas/2){
        clearInterval(idIntervalo);
        alert("Você ganhou com o tempo de "+minutos+" minutos e "+segundos+" segundos em "+ jogadas+ " jogadas!");
    }
}

contar();
