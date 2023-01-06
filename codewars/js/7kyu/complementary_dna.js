const DNAStrand = (dna) => {
  return dna
    .split("")
    .map((char) => {
      switch (char) {
        case "A":
          return "T";
        case "T":
          return "A";
        case "C":
          return "G";
        case "G":
          return "C";
      }
    })
    .join("");
};