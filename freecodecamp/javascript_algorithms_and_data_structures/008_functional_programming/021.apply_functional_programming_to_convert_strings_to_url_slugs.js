// Only change code below this line
function urlSlug (title) {
  return title
    .split(' ')
    .filter(word => word.match(/[a-z]/gi))
    .map(word => word.toLowerCase())
    .join('-')
}

// Only change code above this line