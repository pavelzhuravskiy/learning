function destroyer (arr) {
  let argsArr = []
  for (const arg in arguments) {
    argsArr.push(arguments[arg])
  }
  argsArr.shift()
  return arr.filter(item => !argsArr.includes(item))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))