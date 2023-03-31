let totalProducts=localStorage.getItem("products");
totalProducts=JSON.parse(totalProducts);
let specialN="";
let headName=["iftar","bestsellers","combos","lower","breakfast","boneless","toprated"];
let Display=()=>{
    let container;
    for(let i=0;i<=headName.length-1;i++){
        container=document.querySelector("#"+headName[i]+">div");
        let filtered=products.filter(function(element){
            if(element.special==headName[i]){
                return true;
            }
        })
        filtered.forEach(function(element){
            specialN=element.special;
            let cell=document.createElement("div");
            cell.setAttribute("class","carousel-cell");
            container.append(cell);
            let image=document.createElement("img");
            let name=document.createElement("h1");
            let quantity=document.createElement("p");
            let price=document.createElement("h4");
            image.setAttribute("src",element.img);
            name.innerText=element.name;
            quantity.innerText=element.quantity;
            price.innerText="₹"+element.price;
            cell.append(image,name,quantity,price)
        })
            let cell=document.createElement("div");
            cell.innerText="View All"
            cell.setAttribute("class","carousel-cell");
            cell.addEventListener("click",function(){
                window.location.href="./special.html"
                let specialName=headName[i];
                localStorage.setItem("specialName",specialName);
            })
            container.append(cell);
    }
}
Display();

let search=document.getElementById("input");
    let body=document.querySelector("body");
    let searchCont=document.createElement("div");
    searchCont.setAttribute("id","searchCont");
    body.append(searchCont);
search.addEventListener("input",function(){
    if(search.value.length>0){
        document.getElementById("by_category").style.display="none";
        document.getElementById("searchCont").style.display="grid";
    }
    else{
        document.getElementById("by_category").style.display="block";
        document.getElementById("searchCont").style.display="none";
        }
    let filtered=products.filter(function(element){
        if(element.category.toUpperCase().includes(search.value.toUpperCase())){
            return true;
        }
    });
    displaySearched(filtered);
})

function displaySearched(data){
    let cont=document.getElementById("searchCont");
    cont.innerHTML="";
    let text=document.createElement("h1");
    text.innerText="Search Results";
    let subtext=document.createElement("p");
    subtext.innerText="Freshest meats just for you";
    cont.append(text,subtext)
    data.forEach(function(element){
        let box=document.createElement("div");
        cont.append(box);
            let img=document.createElement("div");
                let image=document.createElement("img");
                image.setAttribute("src",element.img);
                img.append(image);
            let content=document.createElement("div");
                let name=document.createElement("p");
                name.innerText=element.name;
                let low=document.createElement("div");
                content.append(name,low);
                    let price=document.createElement("p");
                    let button=document.createElement("button");
                    price.innerText=element.quantity+" | ₹"+element.price;
                    button.innerText="ADD TO CART";
                    low.append(price,button)
            box.append(img,content);
    })
}

function remove(){
    document.getElementById("footer").style.display="none";
    document.getElementById("main").style.display="none";
}