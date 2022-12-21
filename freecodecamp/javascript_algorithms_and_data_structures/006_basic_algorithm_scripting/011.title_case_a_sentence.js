function titleCase (str) {
  str = str
    .split('')
    .map(char => char.toLowerCase())
    .join('')
    .split(' ')
    .map(word => {
      let sliced = word.slice(1, word.length)
      return word[0].toUpperCase() + sliced
    })
    .join(' ')
  return str
}

console.log(titleCase('sHoRt AnD sToUt'))