function check(){

    let password = document.getElementById("pass").value;
    let confirmpassword = document.getElementById("confirmpass").value;
    let messages = document.getElementById("message"); 
    if(password.length!=0)
    {
        if(password == confirmpassword){
            messages.textContent="Password Matched. Password validation Successful.";
        }
        else{
            messages.textContent="Password didn't match. Password validation unsuccessful.";
        }
    }
    else{
        alert("password cannot be empty")
    }
    
}
