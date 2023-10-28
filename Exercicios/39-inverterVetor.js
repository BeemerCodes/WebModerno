function trocarElementos(vetorA, vetorB) {
    if(vetorA.length !== vetorB.length) {
        console.log('Os vetores precisam ter o mesmo tamanho.');
        return;
    }
    for(let i = 0; i < vetorA.length; i++) {
        vetorA[i] = vetorA[i] + vetorB[i];
        vetorB[i] = vetorA[i] - vetorB[i];
        vetorA[i] = vetorA[i] - vetorB[i];
    }
    console.log('Vetor A: ', vetorA);
    console.log('Vetor B: ', vetorB);
}

let vetorA = [1, 2, 3, 4, 5];
let vetorB = [6, 7, 8, 9, 10];
trocarElementos(vetorA, vetorB);

