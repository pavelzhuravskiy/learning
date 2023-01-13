const strCount = (obj) => {
  let count = 0
  for (const key in obj) {
    const myKey = obj[key];
    if (typeof myKey === "string") {
      count++;
    } else if (typeof myKey === "object") {
      count += strCount(obj[key])
    }
  }
  return count;
};