const getMiddle = s => {
  let newArr = []
  s = s.split('')
  let middle = s.length / 2
  if (s.length % 2 === 0) {
    newArr.push(s[middle - 1] + s[middle])
  } else {
    newArr.push(s[Math.floor(middle)])
  }
  return newArr.join()
}