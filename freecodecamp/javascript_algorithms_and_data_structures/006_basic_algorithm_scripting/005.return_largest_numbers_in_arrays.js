function largestOfFour (arr) {
  let maxArr = []
  for (const subArr of arr) {
    maxArr.push(...subArr
      .filter(num => num === Math.max(...subArr)))
  }
  return maxArr
}