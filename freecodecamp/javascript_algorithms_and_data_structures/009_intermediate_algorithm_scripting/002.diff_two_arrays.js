function diffArray (arr1, arr2) {
  let newArr = []

  for (const item of arr1) {
    if (!arr2.includes(item)) {
      newArr.push(item)
    }
  }

  for (const item of arr2) {
    if (!arr1.includes(item)) {
      newArr.push(item)
    }
  }

  return newArr
}

let x = ["andesite", "grass", "dirt", "pink wool", "dead shrub"]
let y = ["diorite", "andesite", "grass", "dirt", "dead shrub"]

console.log(diffArray(x, y))