function signup() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Implement your signup logic here (e.g., send data to a server)
    // For simplicity, let's log the data for now
    console.log("Username:", username);
    console.log("Password:", password);

    // Redirect to the home page or perform other actions after signup
    window.location.href = 'index.html';
}
