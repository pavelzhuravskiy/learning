const gimme = (triplet) => {
  let sorted = triplet.slice().sort((a, b) => a - b);
  return triplet.indexOf(sorted[1]);
};