function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const rangeArray = rangeOfNumbers(startNum, endNum - 1);
    rangeArray.push(endNum);
    return rangeArray
  }
};

// Points commit comment