const dontGiveMeFive = (start, end) => {
  let newArr = []
  do {
    newArr.push(start)
    start++
  } while (start <= end)
  return newArr.filter(num => !String(num).includes(5)).length
}