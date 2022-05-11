let productCountNum = document.getElementById("product-count")


let addToCardBtns = document.querySelectorAll(".Add-to-cart")

for(let i = 0; i < addToCardBtns.length;i++){
    addToCardBtns[i].addEventListener("click",function(){
        productCountNum.textContent = +productCountNum.textContent + 1;
  
        
    })
}


let modal = document.querySelector(".modal")
let moreDetalsBtns = document.querySelectorAll(".more-details")


moreDetalsBtns.forEach((btn) => {

    btn.addEventListener("click", function (){
        modal.classList.add("show")
    })
})

let btnCloseBack = document.querySelector(".btn-close");

function clickX(){
    
    modal.classList.remove("shop")
    
    modal.classList.add("hide")

}

    
btnCloseBack.addEventListener("click",clickX)




let buttonLike = document.querySelectorAll(".like")
for(let i = 0; i < buttonLike.length;i++){
    buttonLike[i].addEventListener("click",function(a){
        
        a.target.style.cssText = `
        background-color: #2c71b8;
        background-image: url(images/love2.png);`
        
    })
}


for(let i = 0; i < buttonLike.length;i++){
    buttonLike[i].addEventListener("dblclick",function(b){
        
        
        b.target.style.cssText = `
        background-color: #cadbed;
        background-image: url(images/love1.png);`
    
    })
}





