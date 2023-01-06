function sumFibs(num) {
  let newArr = [1, 1];
  for (let i = 0; i < num; i++) {
    let sum = newArr[i] + newArr[i + 1];
    if (sum > num) {
      break;
    }
    newArr.push(sum);
  }
  return newArr.filter((num) => num % 2 !== 0).reduce((a, b) => a + b, 0);
}
console.log(sumFibs(10));