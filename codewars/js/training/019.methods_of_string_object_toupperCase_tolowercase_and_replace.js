const alienLanguage = (str) => {
  const myArr = str.split(" ").map((word) => word.toUpperCase());
  return myArr
    .map((word) => word.slice(0, -1) + word[word.length - 1].toLowerCase())
    .join(" ");
};