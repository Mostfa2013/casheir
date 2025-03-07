document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (username === "111" && password === "111") {
        window.location.href = "host.html"; // Redirect to Host page
    } else if (username === "123" && password === "123") {
        window.location.href = "cashier.html"; // Redirect to Cashier page
    } else {
        error.textContent = "Invalid username or password!";
    }
});