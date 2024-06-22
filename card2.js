totalc1text= document.querySelector("span.total")
totalc1value = parseInt(totalc1text.innerHTML)
let c2_unitPriceText = document.querySelector("div#card_2 h4.unit-price")
let c2_unitPriceValue = parseInt(c2_unitPriceText.innerHTML)
let c2_qtyText = document.querySelector("div#card_2 span.quantity")
let c2_qtyValue = parseInt(c2_qtyText.innerHTML)
let c2_plus = document.querySelector("div#card_2 div i#c2_plus")
let c2_minus = document.querySelector("div#card_2 div i#c2_minus")
let c2_heart =document.querySelector("div#card_2 div i#c2_heart")
let c2_trash =document.querySelector("div#card_2 div i#c2_trash")

function c2_add(){
    c2_plus.addEventListener("click",function(){
        totalc1value +=c2_unitPriceValue
        totalc1text.innerHTML = totalc1value
        console.log(totalc1value)
        c2_qtyValue += 1
        c2_qtyText.innerHTML = c2_qtyValue 
        console.log(c2_qtyValue)
    })
    
}
c2_add()

function c2_sub(){
    c2_minus.addEventListener("click",()=>{
        if (totalc1value ===0 || c2_qtyValue===0)
            return
        totalc1value -=c2_unitPriceValue
        totalc1text.innerHTML = totalc1value
        console.log(totalc1value)
        c2_qtyValue -= 1
        c2_qtyText.innerHTML = c2_qtyValue 
        console.log(c2_qtyValue)
    })
    
}
c2_sub()

function c2_love(){
    c2_heart.addEventListener("click",function(){
        c2_heart.style.color ="red"
    })
}
c2_love()

function c2_delate(){
    c2_trash.addEventListener("click",()=>{
        if (totalc1value ===0 || c2_qtyValue===0)
            return
        totalc1value -= c2_unitPriceValue
        totalc1text.innerHTML = totalc1value
        console.log(totalc1value)
        c2_qtyValue -= 1
        c2_qtyText.innerHTML = c2_qtyValue 
        console.log(c2_qtyValue)
    })
}
c2_delate()