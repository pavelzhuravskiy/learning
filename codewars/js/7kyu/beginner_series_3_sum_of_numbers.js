const getSum = (a, b) => {
  let newArr = [];
  if (a > b) {
    [a, b] = [b, a];
  }
  newArr.push(a);
  while (a < b) {
    a++;
    newArr.push(a);
  }
  return newArr.reduce((a, b) => a + b);
};