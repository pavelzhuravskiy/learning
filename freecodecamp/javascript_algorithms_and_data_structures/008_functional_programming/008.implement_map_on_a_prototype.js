Array.prototype.myMap = function (callback) {
  const newArray = []
  // Only change code below this line
  this.forEach((element, index, originalArr) =>
    newArray.push(callback(element, index, originalArr))
  )
  // Only change code above this line
  return newArray
}

let x = [23, 65, 98, 5, 13] //[46, 130, 196, 10, 26]

console.log(x.myMap(item => item * 2))