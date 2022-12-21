function truncateString (str, num) {
  let sliced = str
    .split('')
    .slice(0, num)
    .join('')
  if (str.length > num) {
    return sliced + '...'
  } else {
    return sliced
  }
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length))