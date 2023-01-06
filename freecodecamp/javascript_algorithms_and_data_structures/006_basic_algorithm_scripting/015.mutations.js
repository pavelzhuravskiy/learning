function mutation(arr) {
  let lowerCased = arr.map((word) => word.toLowerCase());
  let filteredSecondPart = lowerCased[1]
    .split("")
    .filter((char) => !lowerCased[0].split("").includes(char));
  return filteredSecondPart.length === 0;
}

console.log(mutation(["Hello", "he"]));