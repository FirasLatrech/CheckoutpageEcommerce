let minus=document.getElementById("minus");
let plus=document.getElementById("plus");
let numbers=document.querySelector(".numbers")
let c=0
minus.addEventListener("click",function(){
  if (c>0){

    numbers.innerHTML=c-1;
    c=c-1
  }

})
plus.addEventListener("click",function(){
    numbers.innerHTML=c+1;
    c=c+1
})
addCart=document.querySelector(".addToCart");
let number=document.querySelector(".numbr")
addCart.addEventListener("click",function(){
  number.classList.toggle("numberBlock")
  if (c!=0){
  number.innerHTML=c;
  }
  
})
const cart=document.querySelector(".cart");
const cartcontiner=document.querySelector(".cartcontiner");
const messageCart=document.querySelector(".p");
const  cartCheckout=document.querySelector(".cartCheckout");
cart.addEventListener("click",function(){
  if (c==0){
    messageCart.innerHTML="Your cart is empty."
    cartCheckout.style.display="none"

    
  }
  else{
    messageCart.style.display="none"
    cartCheckout.style.display="flex"

    document.querySelector(".numberOfElment").innerHTML=c
  }
  cartcontiner.classList.toggle("cartcontinerDisplay")
  
})
deletItem=document.querySelector(".deletItem");
deletItem.addEventListener("click",function(){
  cartCheckout.style.display="none";
  messageCart.classList.toggle("displBlock");
   messageCart.innerHTML="Your cart is empty."
  number.innerHTML=0;
  

})
const burgermenu=document.querySelector(".burgerMenu");
const  mobielMenu=document.querySelector(".mobielMenu");
burgermenu.addEventListener("click",function(){
  mobielMenu.classList.toggle("displflex");

})
const closeIcon=document.querySelector(".closeIcon");
closeIcon.addEventListener("click",function(){
  mobielMenu.classList.toggle("displflex");
})
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const primaryImage = document.querySelector(".primaryImageProductOne");

const images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];
let i = 0;

previous.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  primaryImage.src=images[i];

});
next.addEventListener("click", function () {
  i++;
  if (i >= images.length) {
    i = 0;
  }
  primaryImage.src=images[i];


});

