const cutIt = (arr) => {
  let min = Math.min(...arr.map(word => word.length))
  return arr.map(word => word.slice(0, min))
}