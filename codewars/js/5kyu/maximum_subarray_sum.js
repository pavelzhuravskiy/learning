const maxSequence = arr => {
  if (arr.length === 0 || arr.every(num => num < 0)) {
    return 0
  } else {
    let slicedArr = []
    for (let i = 0; i < arr.length; i++) {
      slicedArr.push(arr.slice(i))
    }
    let newArr = []
    for (let i = 0; i < slicedArr.length; i++) {
      for (let j = 0; j < slicedArr[i].length; j++) {
        newArr.push(slicedArr[i]
          .slice(0, j + 1)
          .reduce((a, b) => a + b, 0)
        )
      }
    }
    console.log(newArr)
    return Math.max(...newArr)
  }
}