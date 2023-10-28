function atribuirConceito(notas) {
    for(let i = 0; i < notas.length; i++) {
        let nota = notas[i];
        let conceito;
        if(nota >= 0 && nota <= 4.9) {
            conceito = 'D';
        } else if(nota >= 5.0 && nota <= 6.9) {
            conceito = 'C';
        } else if(nota >= 7.0 && nota <= 8.9) {
            conceito = 'B';
        } else if(nota >= 9.0 && nota <= 10.0) {
            conceito = 'A';
        } else {
            conceito = 'Nota inválida';
        }
        console.log(`Nota: ${nota}, Conceito: ${conceito}`);
    }
}

let notas = [1, 5, 7, 9, 11];
atribuirConceito(notas);
