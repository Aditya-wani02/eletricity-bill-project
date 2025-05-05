document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("customerName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Generate a random 5-digit customer ID
    const randomCustomerId = Math.floor(10000 + Math.random() * 90000).toString();

    // Redirect to success.html with query parameters
    const successUrl = `success.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&id=${randomCustomerId}`;
    window.location.href = successUrl;
});
