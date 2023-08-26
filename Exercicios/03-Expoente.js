let value1, value2

function ExpoCalc(value1, value2) {

    if (typeof value1 != "number" || typeof value2 != "number"){
        console.log("Houve um erro! Os dados utilizados devem ser números.")

    }else
    console.log(`O Expoente de ${value1} por ${value2} é: ${value1 ** value2}`)
}

ExpoCalc(2, 3)
