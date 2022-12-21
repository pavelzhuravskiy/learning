function convertHTML (str) {
  return str
    .split('')
    .map(char => {
      switch (char) {
        case '&':
          return '&amp;'
        case '<':
          return '&lt;'
        case '>':
          return '&gt;'
        case '"':
          return '&quot;'
        case '\'':
          return '&apos;'
        default:
          return char
      }
    })
    .join('')
}

console.log(convertHTML('Schindler\'s List'))