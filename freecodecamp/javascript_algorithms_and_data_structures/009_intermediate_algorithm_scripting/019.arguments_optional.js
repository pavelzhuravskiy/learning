function addTogether () {
  let arg0 = arguments[0]
  let arg1 = arguments[1]
  if (Object.keys(arguments).length === 2) {
    if (typeof arg0 === 'number' && typeof arg1 === 'number')
      return arg0 + arg1
  } else if (Object.keys(arguments).length === 1) {
    if (typeof arg0 === 'number')
      return function (n) {
        if (typeof n === 'number') {
          return n + arg0
        }
      }
  }
}