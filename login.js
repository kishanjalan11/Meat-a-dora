otpShow=()=>{
    let mobile=document.getElementById("mobile");
    if(mobile.value.length!=10){
        alert("Invalid Mobile Number")
    }
    else{
        alert("OTP Sent")
        let otpDiv=document.getElementById("otp");
        let otpInp=document.createElement("input");
        otpInp.setAttribute("placeholder","Enter OTP")
        otpDiv.append(otpInp);
        let button=document.querySelector("#login-panel button");
        button.style.display="none";
        let butDiv=document.getElementById("button");
        let nButton=document.createElement("button");
        nButton.innerText="Confirm OTP"
        nButton.addEventListener("click",function(){
            let enteredOTP=otpInp.value;
            if(enteredOTP=="1234"){
                alert("Welcome");
                closeNav();
                let text=document.querySelector("#login>p");
                text.innerText="Profile"
                document.getElementById("login").setAttribute("onclick","")
            }
            else{
                alert("Invalid OTP")
            }
        })
        butDiv.append(nButton);
    }
}

function openNav() {
    document.getElementById("login-panel").style.display = "block";
    // document.querySelector("body div:not(#login-panel)").style.filter="blur(8px)"    
  }

  function closeNav() {
    document.getElementById("login-panel").style.display="none"
    // document.querySelector("body div:not(#login-panel)").style.filter="none"
}