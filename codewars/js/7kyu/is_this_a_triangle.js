const isTriangle = (a, b, c) => {
  let newArr = [];
  newArr.push(a, b, c);
  newArr.sort((a, b) => a - b);
  return newArr[2] < newArr[0] + newArr[1];
};