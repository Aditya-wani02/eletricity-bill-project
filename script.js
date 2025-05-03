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

    // Generate a unique 13-digit customer ID using timestamp and random digits
    const timestamp = Date.now().toString();
    const randomDigits = Math.floor(100 + Math.random() * 900).toString();
    const randomCustomerId = timestamp.slice(0, 10) + randomDigits;

    document.getElementById("success").innerHTML =
        `<p style='color:green;'>Consumer Registration successful.</p>
         <p><strong>Customer ID:</strong> ${randomCustomerId}</p>
         <p><strong>Customer Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>`;

    document.getElementById("registrationForm").reset();
});