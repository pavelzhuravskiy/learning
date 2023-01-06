const breakChocolate = (n, m) => {
  let chunks = n * m - 1;
  return chunks < 0 ? 0 : chunks;
};