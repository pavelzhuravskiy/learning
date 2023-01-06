const SeriesSum = (n) => {
  let x = 0;
  let y = 4;
  if (n === 1) {
    x = 1;
  } else if (n >= 2) {
    x = 1.25;
    let i = 0;
    while (i < n - 2) {
      i++;
      y += 3;
      x = x + 1 / y;
    }
  }
  return x.toFixed(2);
};