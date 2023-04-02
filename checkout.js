let cart=localStorage.getItem("cart");
cart=JSON.parse(cart);

let proceedToDelivery=document.getElementById("proceedDelivery");
proceedToDelivery.addEventListener("click",function(){
    let container1=document.getElementById("container1")
    container1.style.display="none";
    let container2=document.getElementById("container2")
    container2.style.display="block";
})
let proceedToPayment=document.getElementById("proceed");
proceedToPayment.addEventListener("click",function(){
    let container2=document.getElementById("container2")
    container2.style.display="none";
    let container3=document.getElementById("container3")
    container3.style.display="block";
})
let complete=document.getElementById("pay");
complete.addEventListener("click",function(){
    let container3=document.getElementById("container3")
    container3.style.display="none";
    let container4=document.getElementById("container4")
    container4.style.display="block";
    let timer=document.getElementById("timer");
    let start=5;
    setInterval(function(){
        timer.innerText="Redirecting you to Home Page in "+start+" Seconds"
        start--;
        if(start==0){
            window.location.href="./index.html";
            cart=[];
            localStorage.setItem("cart",JSON.stringify(cart))
        }
        hourEl.innerText=hour;
        },1000)
})

// gridContainer.innerHTML="";
let totalAmount=0;
function displayFinalCart(){
    let gridContainer=document.querySelector("#grid");   
    cart.forEach(function(element){
        totalAmount+=element.price*element.cartQuantity;
        let box=document.createElement("div");
            let image=document.createElement("img");
            image.setAttribute("src",element.img);
            let content=document.createElement("div");
                let upper=document.createElement("div");
                    let name=document.createElement("p");
                    name.innerText=element.name;
                upper.append(name);
                let lower=document.createElement("div");
                lower.setAttribute("id","lower")
                    let price=document.createElement("p");
                    price.setAttribute("id","price")
                    let quantity=document.createElement("p");
                    let cartQuantity=document.createElement("p");
                    price.innerText="₹"+element.price;
                    quantity.innerText=element.quantity;
                    cartQuantity.innerText="Qty: "+element.cartQuantity;
                lower.append(quantity,price,cartQuantity);
            content.append(upper,lower);
        box.append(image,content)

        gridContainer.append(box);
    })

}
displayFinalCart();

if(totalAmount<399){
    totalAmount+=39;
}
console.log(totalAmount)
let finalButton=document.getElementById("pay").innerText="Pay ₹"+totalAmount;