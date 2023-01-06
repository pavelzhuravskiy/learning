function findLongestWordLength(str) {
  let lengthArr = str.split(" ").map((word) => word.length);
  return Math.max(...lengthArr);
}