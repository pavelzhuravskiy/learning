function giveMeFive (obj) {
  let arr = []
  for (let item in obj) {
    if (item.length === 5) arr.push(item)
    if (obj[item].length === 5) arr.push(obj[item])
  }
  return arr
}