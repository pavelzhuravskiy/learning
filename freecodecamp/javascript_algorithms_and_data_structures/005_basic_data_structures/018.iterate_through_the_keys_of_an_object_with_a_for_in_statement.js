const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline (usersObj) {
  let count = 0
  // Only change code below this line
  for (const user in usersObj) {
    if (usersObj[user]['online']) {
      count++
    }
  }
  return count
  // Only change code above this line
}

console.log(countOnline(users))