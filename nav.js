let categories=[
    {
        name:"Today's Deals",
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png",
        sub:[]
    },
    {
        name:"Chicken",
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d7048c26-1682-765f-c1a1-b770f6654698/original/Chicken_20.png",
        sub:["Curry Cuts","Boneless & Mince","Speciality Cuts","Offals","Combos"]
    },
    {
        name:"Fish & Seafood",
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d49b56-aeea-a03f-6766-7417f2364593/original/Fish_30.png",
        sub:["Freshwater","Seawater","Crab"]
    },
    {
        name:"Mutton",
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/91e30243-a2bb-0ad1-8122-2d134e3ce09f/original/Mutton_20.png    ",
        sub:["Curry Cuts","Boneless & Mince","Speciality Cuts","Offals","Combos"]
    },
    {
        name:"Ready to Cook",
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2c738ed2-3d81-2566-59ce-e050cb36bbb8/original/RTC_(1).png",
        sub:["Gourmet Marinades","Kebabs & Tandoor", "Wings", "Crispy Snacks","Burger Patties", "Biryani", "Combos"]
    },
    {
        name:"Prawns",
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b0930f2b-9a1d-32a1-384a-11eefb9b574b/original/Prawns.png",
        sub:["Small Size","Medium Size","Large Size"]
    },
    {
        name:"Cold Cuts",
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e274d3a5-32b6-de4c-71a5-642e35859286/original/Coldcuts.png",
        sub:["Sausages","Frankfurters","Lyoners","Salamis"]
    },
    {
        name:"Spreads",
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/12a6be04-f39b-ba65-3ddf-691137615882/original/spreads-transparent_(5).png",
        sub:["Chicken","Egg","Combos"]
    },
    {
        name:"Eggs",
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7ee22866-0f60-74c5-c206-21f065100d18/original/Eggs.png",
        sub:["Classic Eggs", "Speciality Eggs", "Combos"]
    },
    {
        name:"Biryani & Kebab",
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/acfa887c-2730-3473-2308-3360b2962f0f/original/Biryani_(1).png",
        sub:["Biryani","Kebab","Tandoor","Combos"]
    },
    {
        name:"Plant Based Meat",
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d155882b-e23a-ff84-d1a1-9544ca9ea60d/original/Uncrave.png",
        sub:["Chick~n","Mutt~n","Trial Packs","Combos","Combos with Meat"]
    },
    {
        name:"Meat Masala",
        image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5bac1e68-95e2-741b-f634-ff99a48cc6bd/original/Masala_1.png",
        sub:["Combos","Chicken","Mutton","Fish","All Purpose"]
    }
]
function displayDropdown(){
    let leftcontainer=document.getElementById("left");
    categories.forEach(function(element){
        let box=document.createElement("div");
        leftcontainer.append(box);
            let image=document.createElement("img");
            let name=document.createElement("p");
            image.setAttribute("src",element.image);
            name.innerText=element.name;
            box.append(image,name);

            box.addEventListener("mouseenter",function(){
                let cont=document.getElementById("right");
                cont.innerHTML="";
                element.sub.forEach(function(el){
                    let box=document.createElement("div");
                    cont.append(box);
                    let subs=document.createElement("p")
                    subs.innerText=el;
                    box.append(subs)
                })
            });

    })
}
function DisplayCartStart(){
    let cart=localStorage.getItem("cart");
    if(cart==null){
        cart=[]
    }
    else{
        cart=JSON.parse(cart);
    }
    if(cart.length!=0){
        let cartDiv=document.getElementById("cart");
        let quantityText=document.querySelector("#cart>p")
        quantityText.innerText=cart.length+" items"
        cartDiv.style.border="2px solid #d11243";
        cartDiv.style.color="#d11243"
    }
}
displayDropdown();
DisplayCartStart();