function contarNumerosNoIntervalo(vetor) {
    let dentroDoIntervalo = 0;
    let foraDoIntervalo = 0;
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20) {
            dentroDoIntervalo++;
        } else {
            foraDoIntervalo++;
        }
    }
    console.log(`Dentro do intervalo: ${dentroDoIntervalo}`);
    console.log(`Fora do intervalo: ${foraDoIntervalo}`);
}

let vetor = [1, 11, 14, 22, 5, 16];
contarNumerosNoIntervalo(vetor);
