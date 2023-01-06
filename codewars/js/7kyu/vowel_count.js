let vowelsArr = ["a", "e", "i", "o", "u"];

const getCount = (str) => {
  let newArr = [];
  for (const char of str) {
    if (vowelsArr.includes(char)) {
      newArr.push(char);
    }
  }
  return newArr.length;
};