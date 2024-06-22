let allMinus = document.getElementsByClassName("fas fa-minus-circle")
let subQty = document.getElementsByClassName("quantity")
function minusQty(){
    // console.log("mq click")
    for(let k=0;k<subQty.length;k++){
        let value = parseInt(subQty[k].innerHTML)
        console.log("1st val is",value)
        if (value===0){
            return
        }
        value -=1
        subQty[k].innerHTML = value
        console.log(value)
        
    }
}
function minusBtn(){
    for (let i=0;i<allMinus.length;i++){
        allMinus[i].addEventListener("click",minusQty)
    }
}
minusBtn()
