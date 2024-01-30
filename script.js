const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const tituloCapitulo = document.getElementById('capitulo');
const barraProgresso = document.getElementById('barra-progresso');
const progressoAtual = document.getElementById('progresso-atual');

const numeroDeCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle')
    botaoPlayPause.classList.add('bi-pause-circle')
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle')
    botaoPlayPause.classList.add('bi-play-circle')

}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function proximaFaixa() {
    if (capituloAtual === numeroDeCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual += 1;
    }


    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    trocarNomeFaixa();

}

function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = numeroDeCapitulos;
    } else {
        capituloAtual -= 1;
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    trocarNomeFaixa();
}

function trocarNomeFaixa() {
    tituloCapitulo.innerText = 'Capitulo ' + capituloAtual;
}

function atualizarBarraProgresso() {
    const percentualConcluido = (audioCapitulo.currentTime / audioCapitulo.duration) * 100;
    progressoAtual.style.width = percentualConcluido + '%';
}

function resetarBarraProgresso() {
    progressoAtual.style.width = '0%';
}


botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
audioCapitulo.addEventListener('timeupdate', atualizarBarraProgresso);
audioCapitulo.addEventListener('ended', resetarBarraProgresso);