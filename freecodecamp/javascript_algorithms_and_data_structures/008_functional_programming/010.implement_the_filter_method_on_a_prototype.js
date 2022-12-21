Array.prototype.myFilter = function (callback) {
  const newArray = []
  // Only change code below this line
  this.forEach((element, index, array) => {
    if (callback(element, index, array)) {
      newArray.push(element)
    }
  })
  // Only change code above this line
  return newArray
}