const accum = (s) => {
  s = s.split("");
  let newArr = [];
  let indexes = [];
  for (let i = 0; i < s.length; i++) {
    indexes.push(i);
    newArr.push("-");
    newArr.push(s[i].toUpperCase());
    let j = 0;
    while (j < indexes.indexOf(i)) {
      j++;
      newArr.push(s[i].toLowerCase());
    }
  }
  return newArr.splice(1).join("");
};