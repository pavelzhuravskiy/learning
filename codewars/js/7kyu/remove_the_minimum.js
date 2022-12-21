const removeSmallest = numbers => {
  let newArr = []
  let minIndex = numbers.indexOf(Math.min(...numbers))
  for (let i = 0; i < numbers.length; i++) {
    if (i === minIndex) {
      continue
    }
    newArr.push(numbers[i])
  }
  return newArr
}