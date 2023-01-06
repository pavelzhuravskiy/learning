const howManySmaller = (arr, n) => {
  const mappedArr = arr.map((x) => x.toFixed(2));
  const smallNumArr = [];
  for (const num of mappedArr) {
    if (num < n) {
      smallNumArr.push(num);
    }
  }
  return smallNumArr.length;
};