// alert("hello")
// let minus = document.getElementsByClassName("fas fa-minus-circle")
// minus.addEventListener("click",()=>{
//     console.log("minus")
// })
// let plus = document.getElementById("only_me")
// plus.addEventListener("click",function(){
//     console.log("plus clicked")
// })

let allPlus = document.getElementsByClassName("fas fa-plus-circle")
let allQty = document.getElementsByClassName("quantity")
let total = parseInt(document.querySelector("span.total").innerHTML)
let i=0
// console.log(total +1)
function addQty(){
    let j=0
    for (j;j<allQty.length;j++){
        // allQty[j].innerHTML = parseInt("1")
        let add = parseInt(allQty[j].innerHTML)
        add +=1
        allQty[j].innerHTML =add
    }
    
}
// addQty()
// function plus(){
//    for (let i=0;i<allPlus.length;i++){
//     allPlus[i].addEventListener("click",()=>{
//         console.log("clicked")
//         addQty()
//     })
//    }
// }
// plus()

