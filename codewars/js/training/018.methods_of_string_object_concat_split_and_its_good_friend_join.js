const splitAndMerge = (str, sp) =>
  str
    .split(" ")
    .map((word) => word.split("").join(sp))
    .join(" ");