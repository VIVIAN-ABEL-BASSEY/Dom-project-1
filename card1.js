let totalc1text= document.querySelector("span.total")
// console.log(totalc1text)
let totalc1value = parseInt(totalc1text.innerHTML)
// totalc1value +=1
// console.log(totalc1value)
// totalc1text.innerHTML=totalc1value
let unit_pricetext = document.querySelector("div#card_1 h4.unit-price")
let unit_pricevalue =parseInt(unit_pricetext.innerHTML)
console.log(unit_pricevalue)
let c1_qtytext = document.querySelector("div#card_1 span.quantity")
let c1_qtyvalue = parseInt(c1_qtytext.innerHTML)
let c1_plus = document.querySelector("div#card_1 div i#c1_plus")
let c1_minus = document.querySelector("div#card_1 div i#c1_minus")
let c1_heart =document.querySelector("div#card_1 div i#c1_heart")
let c1_trash =document.querySelector("div#card_1 div i#c1_trash")

function add_c1(){
    // console.log("add_c1_total")
    c1_plus.addEventListener("click",function(){
        totalc1value += unit_pricevalue
        console.log(totalc1value)
        totalc1text.innerHTML = totalc1value
        c1_qtyvalue +=1
        console.log(c1_qtyvalue)
        c1_qtytext.innerHTML = c1_qtyvalue
    })
}
add_c1()

function sub_c1(){
    // console.log("add_c1_total")
    c1_minus.addEventListener("click",function(){
        console.log("sub")
        if (totalc1value===0 || c1_qtyvalue===0 )
            return;
        totalc1value -= unit_pricevalue
        console.log(totalc1value)
        totalc1text.innerHTML = totalc1value
        c1_qtyvalue -=1
        console.log(c1_qtyvalue)
        c1_qtytext.innerHTML = c1_qtyvalue
    })
}
sub_c1()

function c1trash(){
    // console.log("add_c1_total")
    c1_trash.addEventListener("click",function(){
        console.log("sub")
        if (totalc1value===0 || c1_qtyvalue===0 )
            return;
        totalc1value -= unit_pricevalue
        console.log(totalc1value)
        totalc1text.innerHTML = totalc1value
        c1_qtyvalue -=1
        console.log(c1_qtyvalue)
        c1_qtytext.innerHTML = c1_qtyvalue
    })
}
c1trash()

function c1_love(){
    c1_heart.addEventListener("click",()=>{
        c1_heart.style.color ="red"
    })
}
c1_love()

// console.log(unit_price+totalc1)
// console.log(c1_qty)

// console.log(c1_plus)
// c1_plus.addEventListener("click",function(){
//     c1_plus.style.color = "blue"
// })

// console.log(c1_minus)
// c1_minus.addEventListener("click",function(){
//     c1_minus.style.color = "blue"
// })

// console.log(c1_heart)
// c1_heart.addEventListener("click",function(){
//     c1_heart.style.color = "blue"
// })

// console.log(c1_trash)
// c1_trash.addEventListener("click",function(){
//     c1_trash.style.color = "blue"
// })