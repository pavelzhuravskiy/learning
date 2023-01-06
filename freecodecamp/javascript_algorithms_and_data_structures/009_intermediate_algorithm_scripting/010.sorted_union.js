function uniteUnique(...arr) {
  let newArr = [];
  for (const subarray of arr) {
    for (const item in subarray) {
      if (!newArr.includes(subarray[item])) {
        newArr.push(subarray[item]);
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));