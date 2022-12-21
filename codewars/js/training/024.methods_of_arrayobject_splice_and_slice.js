function threeInOne (arr) {
  let result = []
  for (let i = 0; i < arr.length; i += 3) {
    result.push(arr.slice(i, i + 3).reduce((a, b) => a + b))
  }
  return result
}

x = [1, 2, 3, 4, 5, 6]

console.log(threeInOne(x))