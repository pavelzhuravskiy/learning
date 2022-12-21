const createPhoneNumber = numbers => {
  return numbers
    .map((num, index) => {
      switch (index) {
        case 0:
          return `(${num}`
        case 2:
          return `${num}) `
        case 5:
          return `${num}-`
        default:
          return num.toString()
      }
    })
    .join('')
}