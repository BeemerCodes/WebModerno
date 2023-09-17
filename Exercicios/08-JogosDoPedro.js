function recordes(pontuacoes) {
    
    var pontuacao = pontuacoes.split(" ");
    var maior = parseInt(pontuacao[0]);
    var menor = parseInt(pontuacao[0]);
    var recorde = 0;
    var piorJogo = 1;

    for (var i = 1; i < pontuacao.length; i++) {
        if (parseInt(pontuacao[i]) > maior) {
            maior = parseInt(pontuacao[i]);
            recorde++;
        } else if (parseInt(pontuacao[i]) < menor) {
            menor = parseInt(pontuacao[i]);
            piorJogo = i + 1;
        }
    }

    return console.log([recorde, piorJogo]);;
}

recordes("10 20 20 8 25 3 0 30 1")