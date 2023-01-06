const sumAll = (arr) => {
  let result = 0;
  let newArr = [...arr].sort((a, b) => a - b);
  for (let i = newArr[0]; i <= newArr[newArr.length - 1]; i++) {
    result += i;
  }
  return result;
};

console.log(sumAll([1, 4]));