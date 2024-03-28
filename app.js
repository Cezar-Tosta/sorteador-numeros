function sortear(){
    //Recuperar os três campos da página pelo 'id' no index.html
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

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

}

function obterNumeroAleatorio(min, max){
    //Informação extraída da documentação MDN
    return Math.floor(Math.random() * (max - min + 1)) + min;
}