// function declaration
function print() {
    console.log('codewithsavitaar')
}

print()

// function expression
const add = function (a, b) {
    return a + b
}

console.log(add(4, 5))

// Arrow function

const sub = (a, b) => {
    return a - b
}
console.log(sub(10, 4))

// Closure

function outer() {
    let a = 10
    function inner() {
        console.log(a)
    }
    return inner
}
const inner = outer()
inner()

// IIEF (Immediately Invoked Function Expression)

(function(){
    console.log("object")
})()