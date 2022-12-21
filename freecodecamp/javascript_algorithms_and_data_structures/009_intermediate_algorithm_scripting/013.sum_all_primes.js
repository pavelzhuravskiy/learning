// Helper func to determine that num is prime
const primeCheck = num => {
  let divider = 2
  let result = 0
  while (divider < num) {
    let x = num / divider
    if (Number.isInteger(x)) {
      result++
    }
    divider++
  }
  return result
}


function sumPrimes (num) {
  let newArr = []
  let count = 2
  while (count <= num) {
    newArr.push(count)
    count++
  }
  return newArr
    .filter(num => !primeCheck(num))
    .reduce((a, b) => a + b)
}

console.log(sumPrimes(10))



// console.log(primeCheck(4))