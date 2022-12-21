const isIsogram = str => {
  str = str
    .toLowerCase()
    .split('')
    .sort()
  let newArr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      newArr.push(str[i])
    }
  }
  return newArr.length === 0;
}