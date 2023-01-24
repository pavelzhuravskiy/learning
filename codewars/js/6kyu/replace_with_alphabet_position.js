const alphabetPosition = (text) => {
  return text
    .toLowerCase()
    .split("")
    .filter((char) => char.match(/[a-z]/))
    .map((char) => char.charCodeAt(0) - 96)
    .join(" ");
};