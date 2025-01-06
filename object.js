let myobj = {
    'first name': 'savitaar', 
    channel: 'Codmsavitaar',
    isActive: true,
    marks: [1,5,3,6],
    score: 20,
    // arrow function 
    print: ()=>{
        console.log("Object 1")
    }
}

// Access 
// dot and []

myobj.print()
console.log(myobj['channel'])
console.log(myobj.channel)

// Key value pair like in python
// let obj1 = {key: value}

// adding new value
myobj['data'] = {data: "no data" , dates: "01/01/2025"}

console.log(myobj)

// keys 
console.log(Object.keys(myobj))

// value 
console.log(Object.values(myobj))

console.log(Object.entries(myobj))

// convert to string 
let newobj = JSON.stringify(myobj)
console.log(newobj)

// replace 
newobj = newobj.replace('Codmsavitaar' , '@codewithsavitaar')
console.log(newobj)

let oldobj = JSON.parse(newobj)
console.log(oldobj)

Object.freeze(myobj)
myobj['channel'] = 'codewithsavitaar'
console.log(myobj)

let obj2 = {...myobj , a:"one", b:2}
console.log(obj2)