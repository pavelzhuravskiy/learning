const queueTime = (customers, n) => {
  if (customers.length === 0) {
    return 0;
  } else if (n === 1) {
    return customers.reduce((a, b) => a + b, 0);
  } else if (n < customers.length) {
    const firstQueue = customers.slice(0, n);
    const secondQueue = customers.slice(n, customers.length);
    for (let i = 0; i < secondQueue.length; i++) {
      const minIndex = firstQueue.indexOf(Math.min(...firstQueue));
      firstQueue[minIndex] += secondQueue[i];
    }
    return Math.max(...firstQueue);
  } else {
    return Math.max(...customers);
  }
};