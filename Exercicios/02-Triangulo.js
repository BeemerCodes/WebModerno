let side1
let side2
let side3

function TriangleType(side1, side2, side3) {

    if (side1 === side2 && side2 === side3) {
        console.log("O Triângulo é do tipo: Equilátero")

    }else if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log("O Triângulo é do tipo: Isósceles")

    }else if (side1 != side2 && side1 != side3) {
        console.log("O Triângulo é do tipo: Escaleno")
    }
}

TriangleType(4, 3, 3);