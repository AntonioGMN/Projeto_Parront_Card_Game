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

function CartasOriginais(num){
    fotos.sort(comparador);
     main = document.querySelector("main");
     main.innerHTML = main.innerHTML + `
     <article class="carta" data-identifier="card" onclick="girar(this)">
     <div class="front-face face" data-identifier="back-face">
         <img src="imagens/front.png">
     </div>
     <div class="back-face face" data-identifier="front-face">
         ${fotos[num]}
     </div>
     </article>`;
}

let cont = 0;

while(cont < ncartas/2){
    CartasOriginais(cont);
    cont++;
}


let copia = [];

let cont2 = 0;

while(cont2 < ncartas/2){
    copia.push(fotos[cont2]);
    cont2++;
}


function CartasCopiadas(num){
    copia.sort(comparador);
     main = document.querySelector("main");
     main.innerHTML = main.innerHTML + `
     <article class="carta" data-identifier="card" onclick="girar(this)">
     <div class="front-face face" data-identifier="back-face">
         <img src="imagens/front.png">
     </div>
     <div class="back-face face" data-identifier="front-face">
         ${copia[num]}
     </div>
     </article>`;
}

let cont3 = 0;

while(cont3 < ncartas/2){
    CartasCopiadas(cont3);
    cont3++;
}

function girar(sele){
    sele.classList.add("girar");
}

function comparador() { 
	return Math.random() - 0.5; 
}