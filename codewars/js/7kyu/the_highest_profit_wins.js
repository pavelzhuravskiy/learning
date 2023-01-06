const minMax = (arr) => {
  let newArr = [];
  newArr.push(Math.min(...arr), Math.max(...arr));
  return newArr;
};