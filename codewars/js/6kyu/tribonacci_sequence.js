const tribonacci = (signature, n) => {
  if (n < 4) {
    return signature.slice(0, n);
  }
  for (let i = 0; i < n - 3; i++) {
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
  }
  return signature;
};