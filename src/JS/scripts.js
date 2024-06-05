document.addEventListener('DOMContentLoaded', function () {
    const btnVoltar = document.getElementById('btn-voltar');
    const btnAvancar = document.getElementById('btn-avancar');
    const listaPersonagens = document.querySelector('.lista-personagens');
    const cartoes = document.querySelectorAll('.cartao');

    let indiceAtual = 0;

    btnVoltar.addEventListener('click', function () {
        indiceAtual = (indiceAtual - 1 + cartoes.length) % cartoes.length;
        atualizarSlider();
    });

    btnAvancar.addEventListener('click', function () {
        indiceAtual = (indiceAtual + 1) % cartoes.length;
        atualizarSlider();
    });

    function atualizarSlider() {
        const larguraCartao = cartoes[0].offsetWidth;
        const deslocamento = -larguraCartao * indiceAtual;
        listaPersonagens.style.transform = `translateX(${deslocamento}px)`;

        cartoes.forEach((cartao, index) => {
            if (index === indiceAtual) {
                cartao.classList.add('selecionado');
            } else {
                cartao.classList.remove('selecionado');
            }
        });
    }
});
