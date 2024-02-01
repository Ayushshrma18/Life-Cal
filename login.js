function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Implement your login logic here (e.g., check credentials on a server)
    // For simplicity, let's log the data for now
    console.log("Username:", username);
    console.log("Password:", password);

    // Redirect to the home page or perform other actions after login
    window.location.href = 'index.html';
}
