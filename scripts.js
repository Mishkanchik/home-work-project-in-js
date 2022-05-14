let productCountNum = document.getElementById("product-count")


let addToCardBtns = document.querySelectorAll(".Add-to-cart")

for(let i = 0; i < addToCardBtns.length;i++){
    addToCardBtns[i].addEventListener("click",function(){
        productCountNum.textContent = +productCountNum.textContent + 1;
  
        
    })
}


let modal = document.querySelector(".modal")
let moreDetalsBtns = document.querySelectorAll(".more-details")

function openModal (){
    modal.classList.add("show")
    modal.classList.remove("hide")
}

moreDetalsBtns.forEach((btn) => {

    btn.addEventListener("click",openModal )
})


let btnCloseBack = document.querySelector(".btn-close");

function clickX(){
    modal.classList.add("hide")
    modal.className ="modal"
    
   

}

    
btnCloseBack.addEventListener("click",clickX)




let buttonLike = document.querySelectorAll(".like")

buttonLike.forEach((btn) => {
    btn.addEventListener("click",function (){
        let btnLike = btn
        btnLike.classList.toggle("like-show")
    })



})

modal.addEventListener("click",function(e){

   if(e.target === modal)
   clickX()

})


$(".slider").slick({
   
    dots:true,

})