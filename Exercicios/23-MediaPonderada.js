function calculateGrade(code, grade1, grade2, grade3) {
    let grades = [grade1, grade2, grade3];
    grades.sort((a, b) => b - a);
    let average = (grades[0] * 4 + grades[1] * 3 + grades[2] * 3) / 10;
    let status = average >= 5 ? "APROVADO" : "REPROVADO";
    console.log(`Código do Aluno: ${code}`);
    console.log(`Notas: ${grade1}, ${grade2}, ${grade3}`);
    console.log(`Média: ${average}`);
    console.log(`Status: ${status}`);
    console.log("\n");
}

calculateGrade(1, 7, 8, 9);
calculateGrade(2, 4, 3, 6);
