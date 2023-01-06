function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  let result = 0;
  for (const element of arr) {
    if (element < num) {
      result++;
    }
  }
  return result;
}