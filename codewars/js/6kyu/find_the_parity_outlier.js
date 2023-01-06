const findOutlier = (integers) => {
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  if (oddCount > evenCount) {
    return parseInt(integers.filter((num) => num % 2 === 0));
  } else {
    return parseInt(integers.filter((num) => num % 2 !== 0));
  }
};