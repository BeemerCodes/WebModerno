function calcularValorPlano(idade) {
    var valorBase = 100;
    var adicional;

    if (idade < 10) {
        adicional = 80;
    } else if (idade >= 10 && idade <= 30) {
        adicional = 50;
    } else if (idade > 30 && idade <= 60) {
        adicional = 95;
    } else {
        adicional = 130;
    }

    return valorBase + adicional;
}

// Exemplo de uso:
console.log(calcularValorPlano(25)); // Deve imprimir 150 (100 + 50)
