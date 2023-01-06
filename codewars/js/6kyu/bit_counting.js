const countBits = (n) => {
  n = n.toString(2).split("");
  let count = 0;
  for (const num of n) {
    if (num === "1") {
      count++;
    }
  }
  return count;
};