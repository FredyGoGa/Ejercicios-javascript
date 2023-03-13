function suma(numero) {
  // Verificar que el número sea positivo
  if (numero < 0) {
    return "Error: el número debe ser positivo";
  }

  // Inicializar la suma en cero
  var suma = 0;

  // Iterar desde 1 hasta el número dado
  for (var i = 1; i <= numero; i++) {
    // Sumar cada número al acumulador
    suma += i;
  }

  // Retornar la suma
  return suma;
}

console.log(suma(4)); // 1 + 2 + 3 + 4 = 10
console.log(suma(10)); // 55
console.log(suma(15)); // 120
