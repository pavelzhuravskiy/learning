const order = (words) => {
  return words
    .split(" ")
    .map((word) => {
      return word.replace(/[a-zA-Z]/g, "") + word;
    })
    .sort()
    .join(" ")
    .replace(/\b\d/g, "");
};