
// number
let marks = [34, 23, 24, 93 ,73, 25,4];

// string
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23,123,21, 'Orange');
console.log(arr[3]);
console.log(arr.length);

console.log(marks.sort())

// sorting

// existence
console.log(arr.includes("Orange"))

// pop, shift, unshift, push

console.log(arr.pop())

arr.push('apple')

console.log(arr)

arr.unshift("banana")
console.log(arr)

arr.shift()
console.log(arr)

// const arr2 = mixed.concat(arr)

// DESTRUCTING
console.log(...arr)

arr2 = [...arr, ...mixed ]
console.log(arr2)
console.log(arr2.reverse())

console.log(arr2.indexOf(123))

console.log(arr2.splice(2,5))
