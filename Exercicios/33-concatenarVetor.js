let vetorInteiro = [1, 2, 3, 4];['3'][3]
let vetorString = ['um', 'dois', 'três', 'quatro'];
let vetorDouble = [1.1, 2.2, 3.3, 4.4];

let vetorConcatenado1 = vetorInteiro.concat(vetorString, vetorDouble);
console.log(vetorConcatenado1);

let vetorConcatenado2 = [].concat(vetorInteiro, vetorString, vetorDouble);
console.log(vetorConcatenado2);
