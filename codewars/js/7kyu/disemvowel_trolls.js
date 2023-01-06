const disemvowel = (str) => {
  let vowelsArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newArr = [];
  for (let char of str) {
    if (!vowelsArr.includes(char)) {
      newArr.push(char);
    }
  }
  return newArr.join("");
};