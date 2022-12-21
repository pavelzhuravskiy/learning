function frankenSplice (arr1, arr2, n) {
  let firstPart = arr2.slice(0, n)
  let lastPart = arr2.slice(n, arr2.length)
  return [...firstPart, ...arr1, ...lastPart]
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))