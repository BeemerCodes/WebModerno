function calcularAumento(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.10;
        case 'B':
            return salarioAtual * 1.15;
        case 'C':
            return salarioAtual * 1.20;
        default:
            console.log("Plano inválido");
            return salarioAtual;
    }
}

var novoSalario = calcularAumento('A', 1000);
console.log(novoSalario);
