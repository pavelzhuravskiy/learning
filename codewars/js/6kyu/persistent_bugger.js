const persistence = (num) => {
  const newArr = [];
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .map((stringNumber) => Number(stringNumber))
      .reduce((a, b) => a * b, 1);
    newArr.push(num);
  }
  return newArr.length;
};