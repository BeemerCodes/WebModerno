function QualFruta(fruta){

    switch (fruta) {
        case "maçã":
            console.log("Não temos maçã infelizmente :(");
        break;

        case "kiwi":
            console.log("Estamos com escassez de kiwis :(");
        break;

        case "melancia":
            console.log("Aqui está, são 3 reais o quilo :)");
        break;

        default:
             console.log("Desculpe, houve um erro no sistema. Tente novamente mais tarde");
    }
}

QualFruta("melão")
