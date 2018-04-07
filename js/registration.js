function submit() {
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    localStorage.setItem("Name", name.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Number", number.value);
    localStorage.setItem("Password", password.value);

    if (name.value === "" && email.value === "" && password.value === "") {
        alert("Please fill the form first");        
    }
    else{
        name.value = "";
        password.value = "";
        email.value = "";
        number.value = "";
        window.location = "login.html"
    }
}
function login() {
    var userEmail = document.getElementById("userEmail");
    var userPass = document.getElementById("userPassword");
    var storageEmail = localStorage.getItem("Email");
    var storagePass = localStorage.getItem("Password");

    if(storageEmail === "" && storagePass === ""){
        alert("You're not signed-up");
        window.location = "index.html";
    }
    else if(userEmail.value === storageEmail && userPass.value === storagePass) {
        window.location = "profile.html";
    }
    else {
        alert("Incorrect Details");
    }
    
    
}


var name = localStorage.getItem("Name");
document.getElementById("userProfile").innerHTML = "Welcome!  " + name; 


function logout() {
    window.location = "login.html";
}