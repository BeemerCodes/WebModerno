function calcularAnuidade(mes, valor) {
    if(mes > 0 && mes < 13) {
        atraso = mes - 1;
        return (valor * ((1 + (5/100))**atraso)).toFixed(2);
    } else {
        return 'Mês inválido.';
    }
}

// Exemplo de uso:
console.log(calcularAnuidade(4, 100)); // Deve imprimir o valor da anuidade com juros até o mês 4
