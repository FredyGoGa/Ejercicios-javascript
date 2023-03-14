function max(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }

  return maxNumber;
}
console.log(max([])); // undefined
