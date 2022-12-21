// The global variable
const bookList = ['The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae']

// Change code below this line
function add (arr, bookName) {
  const newBookList = arr.slice()
  newBookList.push(bookName)
  return newBookList

  // Change code above this line
}

// Change code below this line
function remove (arr, bookName) {
    return arr.filter(book => book !== bookName)
}