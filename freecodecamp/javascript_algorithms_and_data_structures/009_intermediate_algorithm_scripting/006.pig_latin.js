function translatePigLatin(str) {
  const vowelRegex = /[aeiou]/;

  str = str.split("");

  let consonantCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(vowelRegex)) {
      break;
    }
    consonantCount++;
  }

  if (consonantCount === 0) {
    return str.join("") + "way";
  } else {
    const firstPart = str.slice(0, consonantCount);
    const secondPart = str.slice(consonantCount);
    return secondPart.concat(firstPart).join("") + "ay";
  }
}
console.log(translatePigLatin("cdfghalifornia"));