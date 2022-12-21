function dropElements (arr, func) {
  let count = 0
  for (const num of arr) {
    if (func(num)) {
      break
    }
    count++
  }
  return arr.slice(count, arr.length)
}