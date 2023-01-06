function pickIt(arr) {
  let odd = [],
    even = [];
  for (let number of arr) {
    number % 2 ? odd.push(number) : even.push(number);
  }

  return [odd, even];
}