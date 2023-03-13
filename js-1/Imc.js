function bmi(peso, altura) {
  // Convertir altura a metros
  altura = altura / 100;

  // Calcular BMI
  var bmi = peso / (altura * altura);

  // Redondear a dos decimales
  bmi = bmi.toFixed(2);

  // Retornar resultado
  return bmi;
}

console.log(bmi(65, 1.8)); // 20.061728395061728
console.log(bmi(72, 1.6)); // 28.124999999999993
console.log(bmi(52, 1.75)); //  16.979591836734695
