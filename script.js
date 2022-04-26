let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numerosHtml = '';

    for(let i=0; i<etapa.numeros; i++){
        if(i === 0 ) {
            numerosHtml += '<div class="numero pisca"></div>';
        } else {
            numerosHtml += '<div class="numero"></div>';
        }
        
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numerosHtml;

}

function atualizaInterface() {
 alert('finalizou de digitar os numeros!')
}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    console.log(elNumero)
    if(elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `$(numero)$(n)`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null ){
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
    }
}

function branco() {
    alert('clicou em branco!');
}

function corrige(){
    alert('clicou em corrige!');
}

function confirma() {
    alert('clicou em confirma!');
}

comecarEtapa();