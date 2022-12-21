function smallestCommons (arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let newArr = []
  while (min <= max) {
    newArr.push(min)
    min++
  }
  let result = 0
  let count = 1
  while (result < 1) {
    if (newArr.every(num => Number.isInteger(count / num))) {
      result = count
    }
    count++
  }
  return result
}