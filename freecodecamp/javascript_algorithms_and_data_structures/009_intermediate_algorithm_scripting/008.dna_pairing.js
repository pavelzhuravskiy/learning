function pairElement (str) {
  str = str
    .split('')
    .map(char => {
      switch (char) {
        case 'A':
          return [char, 'T']
        case 'T':
          return [char, 'A']
        case 'C':
          return [char, 'G']
        case 'G':
          return [char, 'C']
        default:
          return 'Not a part of base pair!'
      }
    })
  return str
}

console.log(pairElement('GAG'))