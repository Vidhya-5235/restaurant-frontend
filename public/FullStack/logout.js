function logout() {
    sessionStorage.removeItem("loggedIn"); 
    alert("Logged out successfully!");
    window.location.replace("login1.html");
}