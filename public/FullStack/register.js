function registerUser() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username && email && password) {
        // Save user data to localStorage
        localStorage.setItem("registeredUsername", username);
        localStorage.setItem("registeredEmail", email);
        localStorage.setItem("registeredPassword", password);

        
        window.location.href = "login1.html"; 
    } else {
        alert("Please fill in all fields.");
    }
}
