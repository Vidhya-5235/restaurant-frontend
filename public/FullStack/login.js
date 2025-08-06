function loginUser() {
    let enteredUsername = document.getElementById("username").value;
    let enteredPassword = document.getElementById("password").value;

    let savedUsername = localStorage.getItem("registeredUsername");
    let savedPassword = localStorage.getItem("registeredPassword");

    if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
        alert("Welcome, " + savedUsername + "!");
       window.location.href = "index.html";
    } else {
        alert("Invalid username or password.");
    }
}
