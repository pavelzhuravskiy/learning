// Helper function to sum numbers
const accum = n => {
  n = n
    .toString()
    .split('')
    .map(Number)
    .reduce((prev, next) => prev + next, 0)
  return n
}
// Counting
const digitalRoot = n => {
  let count = 0
  while (count < n) {
    count++
    n = accum(n)
  }
  return n
}