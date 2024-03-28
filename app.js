function sortear(){
    //Recuperar os três campos da página pelo 'id' no index.html
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 1; i <= quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }

    alert(sorteados)

}

function obterNumeroAleatorio(min, max){
    //Informação extraída da documentação MDN
    return Math.floor(Math.random() * (max - min + 1)) + min;
}