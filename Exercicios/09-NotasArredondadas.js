function calcularNota(nota) {
    if (nota < 38) {
        return console.log(nota);
    } else {
        var resto = nota % 5;
        if (resto >= 3) {
            return console.log(nota + 5 - resto);;
        } else {
            return console.log(nota);;
        }
    }
}

calcularNota(29)