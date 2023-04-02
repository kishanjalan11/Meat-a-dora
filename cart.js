
function openCart() {
    document.getElementById("cart-panel").style.display = "block";
    document.querySelector("nav").style.filter="blur(8px)";
    document.getElementById("by_category").style.filter="blur(8px)";
    document.getElementById("main").style.filter="blur(8px)";    
    document.getElementById("footer").style.filter="blur(8px)";
  }

  function closeCart() {
    document.getElementById("cart-panel").style.display="none"
    document.querySelector("nav").style.filter="none";
    document.getElementById("by_category").style.filter="none";
    document.getElementById("main").style.filter="none";    
    document.getElementById("footer").style.filter="none";
}

function DisplayCart(){
    let cart=localStorage.getItem("cart");
    if(cart==null){
        cart=[]
    }
    else{
        cart=JSON.parse(cart);
    }
    let subTotal=0;
    let totalAmount=0;
    let container=document.getElementById("details");
    container.innerHTML=""
    let itemnum=1
    cart.forEach(function(element,index){
        subTotal+=element.price*element.cartQuantity;
        let box=document.createElement("div");
        container.append(box);
            let num=document.createElement("div");
            num.innerText=itemnum;
            itemnum++;  

            let desc=document.createElement("div");
                let name=document.createElement("p");
                name.innerText=element.name;
                let priceandquantity=document.createElement("div");
                priceandquantity.setAttribute("id","priceandquantity")
                    let price=document.createElement("p");
                    let quantity=document.createElement("p");
                    price.innerText="₹"+element.price;
                    quantity.innerText=element.quantity;
                priceandquantity.append(quantity,price);
            desc.append(name,priceandquantity);

            let cartQuantity=document.createElement("div");
            cartQuantity.setAttribute("id","cartQuantity");
                let upper=document.createElement("div");
                    let remove=document.createElement("p");
                    remove.innerText="X"
                upper.append(remove)
                let lower=document.createElement("div");
                    let increment=document.createElement("button");
                    let quan=document.createElement("p")
                    let decrement=document.createElement("button");
                    increment.innerText="+"
                    quan.innerText=element.cartQuantity;
                    decrement.innerText="-"
                lower.append(decrement,quan,increment)
            cartQuantity.append(upper,lower)
        box.append(num,desc,cartQuantity)
        remove.addEventListener("click",function(){
            cart=cart.filter(function(ele){
                return ele.id!=element.id
            })
            localStorage.setItem("cart",JSON.stringify(cart))
            DisplayCart();
            location.reload();
        })
        increment.addEventListener("click",function(){
            element.cartQuantity++;
            localStorage.setItem("cart",JSON.stringify(cart))
            quan.innerText=element.cartQuantity;
            DisplayCart();
        })
        decrement.addEventListener("click",function(){
            if(element.cartQuantity>1){
                element.cartQuantity--;
                localStorage.setItem("cart",JSON.stringify(cart))
                quan.innerText=element.cartQuantity;
                DisplayCart();  
            }
            else if(element.cartQuantity==1){
                cart=cart.filter(function(ele){
                return ele.id!=element.id
            })
            localStorage.setItem("cart",JSON.stringify(cart))
            DisplayCart();
            }
        })
    })
    document.getElementById("sub").innerText=subTotal;
    if(subTotal<399 && subTotal!=0){
        deliveryCh=39;      
        document.getElementById("green").innerText="Your cart value is less than ₹399 & delivery charge applies" 
    }
    else if(subTotal==0){
        document.getElementById("green").innerText="Please Add items in your cart to Proceed" 
        deliveryCh=0;
    }
    else if(subTotal>=400){
        document.getElementById("green").innerText="Congratulations, Your delivery charge is waived off!!!"
        deliveryCh=0;
    }
    document.getElementById("charge").innerText=deliveryCh;

    totalAmount=subTotal+deliveryCh;
    let amount=document.getElementById("amount");
    amount.innerText="₹"+totalAmount;
    document.getElementById("totAmt").innerText="Total : ₹"+totalAmount;
    document.getElementById("checkout").addEventListener("click",function(){
        window.location.href="./checkout.html";
    })
    }   
    DisplayCart();