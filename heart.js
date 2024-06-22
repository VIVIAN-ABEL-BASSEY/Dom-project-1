let love = document.getElementsByClassName("fas fa-heart")
function heartonce(){
    for (let i=0;i<love.length;i++){
        love[i].addEventListener("click",()=>{
            love[i].style.color = "red"
        })
    }
}
heartonce()

// function heartTwice(){
//     for (let i=0;i<love.length;i++){
//         love[i].addEventListener("dblclick",()=>{
//             love[i].style.color = "black"
//         })
//     }
// }
// heartTwice()
function heartTwice(){
    console.log("heartTwice1")
    for(let a=0;a<love.length;a++){
        love[a].addEventListener("dblclick",()=>{
            love[a].style.color = "blue"
            console.log("heartTwice")
        })
    }
}
heartTwice()
