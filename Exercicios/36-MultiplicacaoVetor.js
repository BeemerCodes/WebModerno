function multiplicarElementos(vetor, numero) {
    let resultado = [];
    for(let i = 0; i < vetor.length; i++) {
        resultado.push(vetor[i] * numero);
    }
    return resultado;
}

function multiplicarElementosMaioresQue5(vetor, numero) {
    let resultado = [];
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] > 5) {
            resultado.push(vetor[i] * numero);
        }
    }
    return resultado;
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(multiplicarElementos(vetor, 2));
console.log(multiplicarElementosMaioresQue5(vetor, 2));
