


let searchForm=document.querySelector('.search-form');

let searchBtn=document.querySelector("#search-btn");
searchBtn.onclick=()=>{
    
        searchForm.classList.toggle("active");
        shoppingCart.classList.remove("active");
        loginForm.classList.remove("active");
        navbar.classList.remove("active");
        let mainDiv=document.querySelector(".main");
        mainDiv.style.left="-60rem";

   
}
let shoppingCart=document.querySelector('.shopping-cart');

let cartBtn=document.querySelector("#cart-btn");
cartBtn.onclick=()=>{  
    searchForm.classList.remove("active");
    shoppingCart.classList.toggle("active");
    loginForm.classList.remove("active");
    navbar.classList.remove("active");
    mainDiv.style.left="-60rem";

}


let loginForm=document.querySelector('.login-form');

let loginBtn=document.querySelector("#login-btn");
loginBtn.onclick=()=>{
    let selectedActive=document.querySelector('.active');
    
    searchForm.classList.remove("active");
        shoppingCart.classList.remove("active");
        loginForm.classList.toggle("active");
        navbar.classList.remove("active");
   
        mainDiv.style.left="-60rem";





}
let navbar=document.querySelector('.navbar');

let menuBtn=document.querySelector("#menu-btn");

menuBtn.onclick=()=>{
    
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    navbar.classList.toggle("active");



}
window.onload=()=>{
    var searchBox=document.getElementById("search-box");
    searchBox.value="";
}
var searchBox=document.getElementById("search-box");
console.log(searchBox);
var mainDiv=document.querySelector(".main");
var mainText=mainDiv.innerHTML;

   function searhable(){

   
searchBox.addEventListener("input",(e)=>{
    mainDiv.innerHTML=" ";
    let searchValue=searchBox.value;
    
    searchValue=searchValue.toLowerCase();

    
    
    h1find=document.querySelectorAll(".product-slider .wrapper .box h1");
    
    Array.from(h1find).forEach((hOne)=>{
        let hInnerVlue=hOne.innerHTML.toLowerCase();
        if(hInnerVlue.includes(searchValue)){
            
            
            let boxDiv=document.createElement("div");
            
            boxDiv.innerHTML=hOne.parentElement.innerHTML;
            boxDiv.classList.add("search-items");
            
            mainDiv.appendChild(boxDiv);
            console.log(mainDiv)
            mainDiv.style.left="0";
          
            
            
        }
        if(e.target.value==""){
          mainDiv.style.left="-80rem";
            
        }
        
        
          
        }
    )

    addToCart();
    
    })
    
    
  }
searhable();
console.log(searchBox.vlaue)
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      });
         
      let badgecount=0;
      function addToCart(){
      const cart=document.getElementById("shopping-cart");
      const cartAddBtn=document.querySelectorAll(".addBtn");
      Array.from(cartAddBtn).forEach((addBtn)=>{
      
          addBtn.addEventListener("click",()=>{
            if(addBtn.innerText=="Add To Cart"){
              badgecount++;
              let badge=document.getElementById("badge");
              badge.innerHTML=badgecount;
              let delBtn=document.getElementById("del");
              delBtn.style.display="block";
            addBtn.innerText="added to cart";
            addBtn.style.background="blue";
            addBtn.style.color="white";

            let wrapper=document.createElement("div");
            wrapper.classList.add("cartclass")
            wrapper.innerHTML=addBtn.parentElement.innerHTML;
            cart.appendChild(wrapper);
            checkOut(wrapper,cart);
            
            let decreaseBtn=wrapper.querySelectorAll(".qty button")[0];
            let qtyBtn=wrapper.querySelectorAll(".qty button")[1];     
            let increaseBtn=wrapper.querySelectorAll(".qty button")[2];
            increaseBtn.addEventListener("click",()=>{
              let qty=parseInt(qtyBtn.innerHTML)+1;
              qtyBtn.innerText=qty;
              let price=parseFloat(wrapper.querySelector("h1").dataset.price);
        
              let totalSpan=document.getElementById("total");
              let totalSpanValue=parseFloat(totalSpan.innerText);
              let nTotal=totalSpanValue+price;
              totalSpan.innerHTML=nTotal;
        

            })  
            decreaseBtn.addEventListener("click",()=>{
              let qty=parseInt(qtyBtn.innerHTML);
              
              if(qty>0){
                qty=parseInt(qtyBtn.innerHTML)-1;

              
              qtyBtn.innerText=qty;
              let price=parseFloat(wrapper.querySelector("h1").dataset.price);
        
              let totalSpan=document.getElementById("total");
              let totalSpanValue=parseFloat(totalSpan.innerText);
              let nTotal=totalSpanValue-price;
              totalSpan.innerHTML=nTotal;
              }

            })  
            
            
          
          
          
          
          }
        
          

      })
    })
  }
     
  addToCart();
    
    function checkOut(wrapper,cart){
      
      
      let increaseBtn=document.querySelectorAll(".cartclass .qty button")[2];
      let quantityBtn=document.querySelectorAll(".cartclass .qty button")[1];
      
        let price=parseFloat(wrapper.querySelector("h1").dataset.price);
        let qty=parseFloat(wrapper.querySelectorAll("button")[1].innerText);

        let totalvalue=price*qty;
        let totalSpan=document.getElementById("total");
        let totalSpanValue=parseFloat(totalSpan.innerText);
        let nTotal=totalSpanValue+totalvalue;
        
        totalSpan.innerHTML=nTotal;
        

      

    }


      const deletBtn=document.getElementById("del");
      deletBtn.addEventListener("click",()=>{
        badgecount=0;
        let badge=document.getElementById("badge");
        badge.innerHTML=badgecount;
        let cartAddBtn=document.querySelectorAll(".addBtn");
      Array.from(cartAddBtn).forEach((addBtn)=>{
      
          addBtn.innerText="Add To Cart";
          addBtn.style.background="white";
          addBtn.style.color="black";
          
        })

        document.querySelector("#total").innerHTML="00";
        let shoppingCart=document.getElementById("shopping-cart");
        let cartClass=shoppingCart.querySelectorAll(".cartclass");
        Array.from(cartClass).forEach((box)=>{
          shoppingCart.removeChild(box);
          
        })
      })
   