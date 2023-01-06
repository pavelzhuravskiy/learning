function digitize(n) {
  if (n >= 0) {
    return Array.from(String(n), Number).reverse();
  }
}