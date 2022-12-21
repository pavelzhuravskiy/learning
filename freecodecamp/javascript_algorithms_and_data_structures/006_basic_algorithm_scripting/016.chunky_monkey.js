function chunkArrayInGroups (arr, size) {
  let arrCopy = arr.slice()
  let newArr = []
  do {
    newArr.push(arrCopy.splice(0, size))
  } while (arrCopy.length > 0)
  return newArr
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))