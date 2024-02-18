const power  = require('./app')
const os = require('os')

let a = power(3, 3)

console.log(a)
console.log(os.freemem())