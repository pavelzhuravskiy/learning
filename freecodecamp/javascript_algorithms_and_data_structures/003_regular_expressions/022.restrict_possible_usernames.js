let username = 'JACK'
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i
let result = userCheck.test(username)