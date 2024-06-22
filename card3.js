totalc1text= document.querySelector("span.total")
totalc1value = parseInt(totalc1text.innerHTML)
let c3_unitpriceText = document.querySelector("div#card_3 h4.unit-price")
let c3_unitpriceValue = parseInt(c3_unitpriceText.innerHTML)
let c3_quantityText = document.querySelector("div#card_3 span.quantity")
let c3_quantityValue = parseInt(c3_quantityText.innerHTML)
let c3_plus_circle = document.querySelector("div#card_3 div i#c3_plus")
let c3_minus_circle = document.querySelector("div#card_3 div i#c3_minus")
let c3_heart = document.querySelector("div#card_3 div i#c3_heart")
let c3_trash = document.querySelector("div#card_3 div i#c3_trash")

function c3_add(){
    c3_plus_circle.addEventListener("click",function(){
        totalc1value +=c3_unitpriceValue
        totalc1text.innerHTML = totalc1value
        c3_quantityValue += 1
        c3_quantityText.innerHTML = c3_quantityValue
        console.log(c3_quantityValue)
    })
}
c3_add()

function c3_sub(){
    c3_minus_circle.addEventListener("click",function(){
        if (totalc1value===0 || c3_quantityValue===0)
            return
        totalc1value -=c3_unitpriceValue
        totalc1text.innerHTML = totalc1value
        c3_quantityValue -= 1
        c3_quantityText.innerHTML = c3_quantityValue
        console.log(c3_quantityValue)
    })
}
c3_sub()
function c3_love(){
    c3_heart.addEventListener("click",function(){
        c3_heart.style.color = "red"
    })
}
c3_love()

function c3_delate(){
    c3_trash.addEventListener("click",function(){
        if (totalc1value===0 || c3_quantityValue===0)
            return
        totalc1value -= c3_unitpriceValue
        totalc1text.innerHTML = totalc1value
        c3_quantityValue -= 1
        c3_quantityText.innerHTML = c3_quantityValue
        console.log(c3_quantityValue)
    })
}
c3_delate()