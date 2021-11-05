let ncartas = prompt("Qual o numero de cartas?");

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
        <div class="front-face face" data-identifier="back-face">
            <img src="imagens/front.png">
        </div>
        <div class="back-face face" data-identifier="front-face">
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
}

function comparador() { 
	return Math.random() - 0.5; 
}