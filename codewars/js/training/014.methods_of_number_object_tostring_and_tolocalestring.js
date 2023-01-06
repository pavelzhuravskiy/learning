const colorOf = (r, g, b) => {
  let redHex = r.toString(16);
  let greenHex = g.toString(16);
  let blueHex = b.toString(16);

  if (redHex.length === 1) {
    redHex = `0${redHex}`;
  }
  if (greenHex.length === 1) {
    greenHex = `0${greenHex}`;
  }
  if (blueHex.length === 1) {
    blueHex = `0${blueHex}`;
  }

  return `#${redHex}${greenHex}${blueHex}`;
};