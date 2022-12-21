const sortIt = arr => {
  let newArr = arr.slice()



  return newArr
}


let testArr = [1, 1, 1, 2, 2, 3]

console.log(sortIt(testArr))

// sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
// because [1,1,1,2,2,3] has one 3, two 2 and three 1