function maxIndex(number) {
  if (number.length === 0) {
    return -1;
  }

  let maxIndex = 0;
  for (let i = 1; i < number.length; i++) {
    if (number[i] > number[maxIndex]) {
      maxIndex = 1;
    }
  }
  return maxIndex;
}
console.log(maxIndex([])); // -1
