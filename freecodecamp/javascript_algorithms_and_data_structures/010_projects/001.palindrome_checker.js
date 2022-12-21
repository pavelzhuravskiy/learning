function palindrome (str) {
  let str1 = str
    .split('')
    .map(char => char.toLowerCase())
    .filter(char => char.match(/[a-z0-9]+/g))
  let str2 = str1
    .slice()
    .reverse()
  let check = 0
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      check++
    }
  }
  return check === str1.length
}