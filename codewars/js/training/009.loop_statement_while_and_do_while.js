function padIt (str, n) {
  while (n > 0) {
    n--
    str = n % 2 !== 0 ? str + `*` : '*' + str
  }
  return str
}