function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return "A criança 1 ultrapassará a criança 2 em 1 ano.";
        } else if (taxa1 < taxa2) {
            return "A criança 2 ultrapassará a criança 1 em 1 ano.";
        } else {
            return "As crianças têm a mesma altura e crescimento.";
        }
    } else {
        if (altura1 > altura2) {
            if (taxa1 >= taxa2) {
                return "A criança menor não ultrapassará a maior.";
            } else {
                let anos = 0;
                while (altura1 > altura2) {
                    altura1 = altura1 + taxa1;
                    altura2 = altura2 + taxa2;
                    anos++;
                }
                return "A criança menor ultrapassará a maior em " + anos + " anos.";
            }
        } else {
            if (taxa2 >= taxa1) {
                return "A criança menor não ultrapassará a maior.";
            } else {
                let anos = 0;
                while (altura2 > altura1) {
                    altura1 = altura1 + taxa1;
                    altura2 = altura2 + taxa2;
                    anos++;
                }
                return "A criança menor ultrapassará a maior em " + anos + " anos.";
            }
        }
    }
}

console.log(calcularCrescimento(150, 2, 130, 4));
