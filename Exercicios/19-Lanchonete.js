function calcularPreco(codigo, quantidade) {
    let preco;

    switch(codigo) {
        case 100:
            preco = 3.00;
            break;
        case 200:
            preco = 4.00;
            break;
        case 300:
            preco = 5.50;
            break;
        case 400:
            preco = 7.50;
            break;
        case 500:
            preco = 3.50;
            break;
        case 600:
            preco = 2.80;
            break;
        default:
            return 'Produto não existente.';
    }

    return console.log('O valor a ser pago é: R$ ' + (preco * quantidade).toFixed(2));;
}

calcularPreco(100, 3)