function myReplace (str, before, after) {
  if (before.split('')[0] === before.split('')[0].toUpperCase()) {
    const afterToUpper = after
      .split('')
      .map(char => {
        if (char === after[0]) {
          return char.toUpperCase()
        } else {
          return char
        }
      })
      .join('')
    return str.replace(before, afterToUpper)
  } else {
    const afterToLower = after
      .split('')
      .map(char => {
        if (char === after[0]) {
          return char.toLowerCase()
        } else {
          return char
        }
      })
      .join('')
    return str.replace(before, afterToLower)
  }
}