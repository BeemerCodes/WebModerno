function calcularMedia(vetor) {
    let soma = 0;
    for(let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    let media = soma / vetor.length;
    console.log(`Média: ${media}`);
}

let vetor = [1, 2, 3, 4, 5];
calcularMedia(vetor);
