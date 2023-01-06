const maskify = (cc) => {
  cc = cc.split("");
  let lastFour = cc.slice(-4);
  return cc
    .slice(0, -4)
    .map((char) => char.replace(char, "#"))
    .concat(lastFour)
    .join("");
};