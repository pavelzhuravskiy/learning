const stray = numbers => {
  return parseInt(numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num)))
}