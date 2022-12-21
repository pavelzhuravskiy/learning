const squareDigits = num => {
  return parseInt(String(num)
    .split('')
    .map(num => num * num)
    .join(''))
}