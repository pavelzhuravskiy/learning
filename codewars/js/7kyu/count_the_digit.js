const nbDig = (n, d) => {
  d = d.toString();
  let count = 0;
  let res = [];

  do {
    res.push(Math.pow(count, 2));
    count++;
  } while (count <= n);

  res = res
    .map(
      (num) =>
        num
          .toString()
          .split("")
          .filter((n) => n === d).length
    )
    .reduce((a, b) => a + b);
  return res;
};

console.log(nbDig(11549, 1));