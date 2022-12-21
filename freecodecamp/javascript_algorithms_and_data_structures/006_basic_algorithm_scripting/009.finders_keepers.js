function findElement (arr, func) {
  let newArr = arr.filter(num => func(num))
  return newArr[0]
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))