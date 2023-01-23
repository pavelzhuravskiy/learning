const duplicateCount = (text) => {
  let result = [];
  const splittedArray = text
      .split("")
      .map((char) => char.toLowerCase())
      .sort();
  for (let i = 0; i < splittedArray.length; i++) {
    if (splittedArray[i] === splittedArray[i + 1]) {
      result.push(splittedArray[i]);
    }
  }
  return [...new Set(result)].length;
};