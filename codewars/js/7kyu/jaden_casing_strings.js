String.prototype.toJadenCase = function () {
  let stringArray = this.split(' ')
  let newArr = []
  for (const word of stringArray) {
    let firstChar = word.charAt(0)
    let upperFirstChar = word.charAt(0).toUpperCase()
    newArr.push(word.replace(firstChar, upperFirstChar))
  }
  return newArr.join(' ')
}