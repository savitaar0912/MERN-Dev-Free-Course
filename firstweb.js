const a = 5
console.log(a)

console.log(`Hi this is our script`)


// DOM - document object model
// Selection - 
// document.getElementById
// document.querySelector
// document.querySelectorAll
// document.getElementsByClassName
// document.getElementsByTagName
// editing
// alert prompt confirm

let x = document.getElementsByClassName("title")
x[0].innerHTML = "HELLO WORLD!!"

if(x){
    // alert("Changes made")
    // const y = prompt("Changes made")
    // console.log(y)
    const y = confirm("Changes to be made ?")
    if(y){
        alert("Changes made")
    }
    else{
        alert("Changes not made")
    }
}