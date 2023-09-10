let value1

function FormattedValue(value1) {
    let correctValue = parseFloat(value1).toFixed(2)
    correctValue = correctValue.replace('.', ',')
    return console.log("R$: " + correctValue)
}

FormattedValue(50)
