function calculadoraBasica(valor1, valor2, operacao) {
    switch (operacao) {
        case 'soma':
            console.log(valor1 + valor2);
            break;
        case 'subtracao':
            console.log(valor1 - valor2);
            break;
        case 'multiplicacao':
            console.log(valor1 * valor2);
            break;
        case 'divisao':
            if (valor2 != 0) {
                console.log(valor1 / valor2);
            } else {
                console.log("Erro: Divisão por zero não é permitida");
            }
            break;
        default:
            console.log("Operação inválida");
    }
}

calculadoraBasica(5, 3, 'soma');
