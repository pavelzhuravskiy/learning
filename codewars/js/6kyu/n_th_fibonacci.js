const nthFibo = (n) => {
  const fibonacciArr = [0, 1];
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    for (let i = 0; i < n - 2; i++) {
      fibonacciArr.push(fibonacciArr[i] + fibonacciArr[i + 1]);
    }
    return fibonacciArr[fibonacciArr.length - 1];
  }
};