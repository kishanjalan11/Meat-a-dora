let totalProducts=localStorage.getItem("products");
totalProducts=JSON.parse(totalProducts);

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
            container.append(cell);
    }
}
Display();

let search=document.getElementById("input");
search.addEventListener("input",function(){
    let body=document.querySelector("body");
    let cont=document.createElement("div");
    cont.setAttribute("id","searchCont")
    body.append(cont);
    if(search.value.length>0){
        document.getElementById("by_category").style.display="none";
    }
    else{
        document.getElementById("by_category").style.display="block";
        // document.getElementById("searchCont").innerHTML="";
        // document.getElementById("searchCont").style.display="none"
        // cont.style.display-"none"
    }
    let filtered=products.filter(function(element){
        if(element.name.toUpperCase().includes(search.value.toUpperCase())){
            return true;
        }
    });
    displaySearched(filtered);
})




function displaySearched(data){

}
filtered.forEach(function(element){
    // cont.innerHTML=""
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
            low.innerText=element.quantity;
            content.append(name,low);    
        box.append(img,content);
});


let remove=()=>{
    document.getElementById("footer").style.display="none";
    document.getElementById("main").style.display="none";
}