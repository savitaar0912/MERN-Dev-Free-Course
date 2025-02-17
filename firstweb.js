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

// if(x){
//     // alert("Changes made")
//     // const y = prompt("Changes made")
//     // console.log(y)
//     const y = confirm("Changes to be made ?")
//     if(y){
//         alert("Changes made")
//     }
//     else{
//         alert("Changes not made")
//     }
// }

let d = new Date()
console.log(d)
var el = document.getElementById("date")
el.innerHTML = d


let btn = document.getElementById("search")
function pop(){
    el.innerHTML = new Date()
    alert(`Travel with US on ${d}`)
}

btn.addEventListener("click", pop)

btn.addEventListener("mouseover" , scale)
function scale(){
    btn.style.transform = "scale(1.2)"
}

btn.addEventListener("mouseout" , scale2)
function scale2(){
    btn.style.transform = "scale(1)"
}