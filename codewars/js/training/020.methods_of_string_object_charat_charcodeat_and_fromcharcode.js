const topSecret = str => {
  const chars = str.split('')
  for (let i = 0; i < chars.length; i++) {
    const shiftedCode = str.charCodeAt(i) - 3
    if (shiftedCode >= 65 && shiftedCode <= 90 || shiftedCode >= 97 && shiftedCode <= 122) {
      chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3)
    }
    if (shiftedCode >= 94 && shiftedCode <= 96 || shiftedCode >= 62 && shiftedCode <= 64) {
      chars[i] = String.fromCharCode(chars[i].charCodeAt() + 23)
    }
  }
  return chars.join('')
}

//question1: The top secret file number is...
answer1="?";
//question2: Super agent's name is...
answer2="?";
//question3: He stole the treasure is...
answer3="?";