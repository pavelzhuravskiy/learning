const findShort = s => {
  let stringArray = s.split(' ')
  let newArr = []
  for (const word of stringArray) {
    newArr.push(word.length)
  }
  return Math.min(...newArr)
}