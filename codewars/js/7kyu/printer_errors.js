const printerError = s => {
  let errorArray = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  return s
    .split('')
    .filter(char => errorArray.includes(char))
    .length + '/' + s.length
}