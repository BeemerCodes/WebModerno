var day = 3;
var dayName;

switch (day) {
  case 1:
    dayName = "Domingo";
    break;
  case 2:
    dayName = "Segunda-feira";
    break;
  case 3:
    dayName = "Terça-feira";
    break;
  case 4:
    dayName = "Quarta-feira";
    break;
  case 5:
    dayName = "Quinta-feira";
    break;
  case 6:
    dayName = "Sexta-feira";
    break;
  case 7:
    dayName = "Sábado";
    break;
  default:
    dayName = "Valor inválido";
}

console.log(dayName);