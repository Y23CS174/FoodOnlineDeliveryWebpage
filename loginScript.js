function validate(){
    let userName=document.getElementById("userName").value.trim();
    let password=document.getElementById("password").value.trim();
    if (userName==="" || password==""){
        window.alert("Username and Password cannot be empty!");
        return false
    }
    if (password.length<6) {
        window.alert("Password must be at least 6 characters long! ");
        return false;
    }
    else{
        window.location.href="loginsuccesss.html";
        return false;
    }
    
}