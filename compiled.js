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
        if (totalc2value ===0 || c2_qtyValue===0)
            return
        totalc2value -=c2_unitPriceValue
        totalc2text.innerHTML = totalc2value
        console.log(totalc2value)
        c2_qtyValue -= 1
        c2_qtyText.innerHTML = c2_qtyValue 
        console.log(c2_qtyValue)
    })
}
c2_delate()


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
        totalc1value -=c3_unitpriceValue
        totalc1text.innerHTML = totalc1value
        c3_quantityValue -= 1
        c3_quantityText.innerHTML = c3_quantityValue
        console.log(c3_quantityValue)
    })
}
c3_delate()


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