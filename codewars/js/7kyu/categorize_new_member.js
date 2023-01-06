const openOrSenior = (data) => {
  let newArr = [];
  for (const pair of data) {
    if (pair[0] >= 55 && pair[1] > 7) {
      newArr.push("Senior");
    } else {
      newArr.push("Open");
    }
  }
  return newArr;
};