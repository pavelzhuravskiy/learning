function repeatStringNumTimes (str, num) {
  let stringCopy = str
  if (num <= 0) {
    return ''
  } else {
    while (num > 1) {
      str += stringCopy
      num--
    }
  }
  return str
}

console.log(repeatStringNumTimes('abc', 0))