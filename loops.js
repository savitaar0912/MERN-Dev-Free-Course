const arr = [1,2,3,56,67, 'array', [2,3,45]]

// for
for (let i = 0; i < arr.length; i++) {
    console.log(i)
    const element = arr[i];
    console.log(`The el are ${element}`);
}

// forin indexing
for (i in arr) {
    console.log(i)
}

// forof value
for (i of arr) {
    console.log(i)
}

// foreach
arr.forEach((e)=>{
    console.log(`El using foreach are ${e}`)
})

// map
arr.map((e)=>{
    console.log(`El using Map ${e}`)
})
