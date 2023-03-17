function maxIndex(number) {
  if (number.length === 0) {
    return -1;
  }

  let maxIndex = 0;
  for (let i = 1; i < number.length; i++) {
    if (number[i] > number[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}
console.log(maxIndex([])); // -1
