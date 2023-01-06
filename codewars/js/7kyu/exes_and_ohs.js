const XO = (str) => {
  str = str.toLowerCase().split("");
  let xCount = 0;
  let oCount = 0;
  for (const char of str) {
    if (char === "x") {
      xCount++;
    }
    if (char === "o") {
      oCount++;
    }
  }
  return xCount === oCount;
};