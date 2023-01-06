const number = (array) => {
  return array.map((char, index) => `${index + 1}: ${char}`);
};