function sentensify (str) {
  // Only change code below this line
  return str
    .split(/[^a-z]/gi)
    .join(' ')
  // Only change code above this line
}

console.log(sentensify('May-the-force-be-with-you'))