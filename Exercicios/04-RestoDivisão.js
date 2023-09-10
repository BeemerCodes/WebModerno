let value1, value2, result

function ExpoCalc(value1, value2, result){
    result = value1/value2
    console.log(`O Resultado da divisão entre ${value1}/${value2} é: `+ result.toFixed(2))
    result = value1 % value2
    console.log(`O Resto da Divisão é de: ${result}`)
}

ExpoCalc(10, 3)