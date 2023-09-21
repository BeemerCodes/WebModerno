function fatorial(n) {
    var resultado = 1;
    for (var i = 2; i <= n; i++) {
        resultado *= i;
    }
    return console.log(resultado);;
}

fatorial(4)