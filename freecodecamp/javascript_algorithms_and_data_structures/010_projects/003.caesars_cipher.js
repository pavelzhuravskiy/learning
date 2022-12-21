function rot13 (str) {
  str = str
    .split('')
    .map((char) => {
      if (char.match(/[A-Z]/g)) {
        char = char.charCodeAt(0)
        if (char >= 78) {
          return String.fromCharCode(char - 13)
        } else {
          return String.fromCharCode(char + 13)
        }
      } else {
        return char
      }
    })
  return str.join('')
}