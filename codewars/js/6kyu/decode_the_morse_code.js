const decodeMorse = (morseCode) => {
  const morseObj = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    "&": ".-...",
    "'": ".----.",
    "@": ".--.-.",
    ")": "-.--.-",
    "(": "-.--.",
    ":": "---...",
    ",": "--..--",
    "=": "-...-",
    "!": "-.-.--",
    ".": ".-.-.-",
    "-": "-....-",
    "*": "-..-",
    "%": "-----",
    "+": ".-.-.",
    '"': ".-..-.",
    "?": "..--..",
    "/": "-..-.",
    SOS: "...---...",
  };
  morseCode = morseCode
    .trim()
    .split(" ")
    .map((e, i, a) => {
      if (e === "") {
        return e;
      }
      for (const letter in morseObj) {
        const code = morseObj[letter];
        if (e === code) {
          return (e = letter);
        }
      }
    })
    .join(" ");
  let i = 0;
  while (i < 2) {
    i++;
    morseCode = morseCode.replace(/\s(?=\S)/g, "");
  }
  return morseCode;
};