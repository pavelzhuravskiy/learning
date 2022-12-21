// Helper function to determine if character is a letter. Only letters can be lowercase or uppercase

function isCharLetter (char) {
  return char.toUpperCase() !== char.toLowerCase()
}

// Helper functions to determine character case

function isLowerCase (char) {
  return char === char.toLowerCase()
}

function isUpperCase (char) {
  return char === char.toUpperCase()
}

// Comparing characters

function sameCase (charOne, charTwo) {
  if (!isCharLetter(charOne) || !isCharLetter(charTwo)) {
    return -1
  } else if (isLowerCase(charOne) === isLowerCase(charTwo) || isUpperCase(charOne) === isUpperCase(charTwo)) {
    return 1
  } else {
    return 0
  }

}