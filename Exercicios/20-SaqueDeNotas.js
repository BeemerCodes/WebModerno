function calcularNotas(valor) {
    let notas = [100, 50, 10, 5, 1];
    let quantidadeNotas = [0, 0, 0, 0, 0];

    for(let i = 0; i < notas.length; i++) {
        if(valor >= notas[i]) {
            quantidadeNotas[i] = Math.floor(valor / notas[i]);
            valor -= quantidadeNotas[i] * notas[i];
        }
    }

    for(let i = 0; i < notas.length; i++) {
        if(quantidadeNotas[i] > 0) {
            console.log(quantidadeNotas[i] + " nota(s) de R$ " + notas[i]);
        }
    }
}

calcularNotas(4);
