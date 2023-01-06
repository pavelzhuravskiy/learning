const findOdd = (A) => {
  const obj = {};
  for (const num of A) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }
  for (const num in obj) {
    if (obj[num] % 2 !== 0) {
      return parseInt(num);
    }
  }
};