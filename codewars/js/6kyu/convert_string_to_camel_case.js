const toCamelCase = (str) => {
  str = str.replace(/[^a-z]/gi, " ");
  str = str.split(" ");
  return str
    .map((word, index, array) => {
      if (word === array[0]) {
        return word;
      } else {
        return word[0].toUpperCase() + word.replace(word[0], "");
      }
    })
    .join("");
};