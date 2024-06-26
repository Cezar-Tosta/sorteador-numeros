function sortear(){
    //Recuperar os três campos da página pelo 'id' no index.html
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate || quantidade > ate - de + 1){
        alert('Reveja os números digitados');
        return; // Faz com que a função seja interrompida nesse ponto
    }

    let sorteados = [];
    let numero;

    for (let i = 1; i <= quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }; // includes devolve um booleano
        sorteados.push(numero);
    };

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
};

function obterNumeroAleatorio(min, max){
    //Informação extraída da documentação MDN
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
};

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
};
