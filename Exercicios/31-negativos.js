function contarNegativos(vetor) {
    let negativos = 0;
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            negativos++;
        }
    }
    console.log(`Quantidade de números negativos: ${negativos}`);
}

let vetor = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
contarNegativos(vetor);
