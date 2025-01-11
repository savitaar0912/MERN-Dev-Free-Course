let word = 'hello'
word = word.concat(' World. ' , 'We' , ' are' , ' here')
console.log(word)
console.log(word.toLowerCase())
console.log(word.toUpperCase())
console.log(word[4])
console.log(word.length)
console.log(word.charAt(6))
console.log(word.indexOf('l' , 4))
console.log(word.slice(2))
console.log(word.replace('hello', 'hi'))
console.log(word.split(' '))
console.log(word.split(' ').reverse().join(' '))

console.log(word.trim())

// case sensitive
console.log(word.includes('We'))

console.log(word.charCodeAt(4))

console.log(word.substring(2,8))

console.log(word.endsWith('here'))