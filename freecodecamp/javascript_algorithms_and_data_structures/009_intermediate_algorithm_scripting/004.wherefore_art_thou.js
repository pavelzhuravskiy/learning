function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);
  return collection.filter((obj) =>
    sourceKeys.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}
let x = [
  {
    apple: 1,
    bat: 2,
  },
  {
    bat: 2,
  },
  {
    apple: 1,
    bat: 2,
    cookie: 2,
  },
];
let y = { apple: 1, bat: 2 };
console.log(whatIsInAName(x, y));