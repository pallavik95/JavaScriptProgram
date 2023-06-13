
function check(){
    const email = document.getElementById("emaildata").value;
    const password = document.getElementById("pass").value;
    let message = document.getElementById("msg");
    let regexp = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-.]+(?:[a-zA-Z0-9-]+)/gi;
    
    if(email.match(regexp) && password.length >= 8){
       
        message.innerText = "Valid email and password!";
        message.style.color = "green";
        return true;
    }
    else{
        
        message.innerText = "Invalid email or password!";
        message.style.color ="red"
        return false;
    }
}

