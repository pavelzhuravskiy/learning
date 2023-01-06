function countPositivesSumNegatives(input) {
  let finalArray = [];
  if (input === null || input.length === 0) {
    return [];
  }
  let positiveCount = input.filter((num) => num > 0).length;
  let negativeSum = input
    .filter((negNum) => negNum < 0)
    .reduce((a, b) => a + b);
  finalArray.push(positiveCount, negativeSum);
  return finalArray;
}