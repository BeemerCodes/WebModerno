function encontrarMaiorMenor(vetor) {
    let maior = vetor[0];
    let menor = vetor[0];
    for(let i = 1; i < vetor.length; i++) {
        if(vetor[i] > maior) {
            maior = vetor[i];
        }
        if(vetor[i] < menor) {
            menor = vetor[i];
        }
    }
    console.log(`Maior: ${maior}`);
    console.log(`Menor: ${menor}`);
}

let vetor = [10, 5, 7, 3, 8, 1, 9, 6, 2, 4];
encontrarMaiorMenor(vetor);
