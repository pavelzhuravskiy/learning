const divisors = integer => {
  let newArr = []
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      newArr.push(i)
    }
  }
  return newArr.length ? newArr : `${integer} is prime`
}