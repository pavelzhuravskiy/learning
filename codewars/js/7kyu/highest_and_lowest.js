const highAndLow = numbers => {
  let numArr = []
  let finalArr = []
  let splitted = numbers.split(' ')
  for (const num of splitted) {
    numArr.push(parseInt(num))
  }
  let max = Math.max(...numArr)
  let min = Math.min(...numArr)
  finalArr.push(max, min)
  return finalArr.join(' ')
}