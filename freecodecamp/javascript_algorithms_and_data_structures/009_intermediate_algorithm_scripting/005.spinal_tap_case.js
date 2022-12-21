function spinalCase (str) {
  str = str.replace(/(?<=[a-z])[A-Z]/g, ' $&')
  str = str.replace(/[^a-zA-Z0-9]/g, '-')
  return str
    .split('-')
    .map(word => word.toLowerCase())
    .join('-')
}

console.log(spinalCase('The_Andy_Griffith_Show'))