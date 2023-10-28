function progressaoAritmetica(n, a1, r) {
    let termos = [];
    let soma = 0;
    for(let i = 0; i < n; i++) {
        let termo = a1 + i * r;
        termos.push(termo);
        soma += termo;
    }
    console.log(`Termos: ${termos}`);
    console.log(`Soma: ${soma}`);
}

function progressaoGeometrica(n, a1, r) {
    let termos = [];
    let soma = 0;
    for(let i = 0; i < n; i++) {
        let termo = a1 * Math.pow(r, i);
        termos.push(termo);
        soma += termo;
    }
    console.log(`Termos: ${termos}`);
    console.log(`Soma: ${soma}`);
}

progressaoAritmetica(5, 1, 2);
progressaoGeometrica(5, 1, 2);
