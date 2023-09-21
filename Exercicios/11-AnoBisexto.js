function ehBissexto(ano) {
    if (ano % 400 === 0) {
        return console.log(true);;
    } else if (ano % 100 === 0) {
        return console.log(false);;
    } else if (ano % 4 === 0) {
        return console.log(true);;
    } else {
        return console.log(false);;
    }
}

ehBissexto(2024)
