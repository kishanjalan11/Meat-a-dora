
showLogin=()=>{
    let loginPanel=document.getElementById("login-panel");
    loginPanel.style.display="block";
    document.querySelector("body").style.overflow="hidden";
    let body=document.querySelector("body").style.filter="blur(2px)";
    loginPanel.style.filter="blur(0px)";
}
otpShow=()=>{
    let otpDiv=document.getElementById("otp");
    let otpInp=document.createElement("input");
    otpInp.setAttribute("placeholder","Enter OTP")
    otpDiv.append(otpInp);
    let button=document.querySelector("#login-panel button");
    button.style.display="none";
    let butDiv=document.getElementById("button");
    let nButton=document.createElement("button");
    nButton.innerText="Confirm OTP"
    butDiv.append(nButton);
}
