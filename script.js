document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const loginForm = document.getElementById("loginForm");
  
    // Handle Registration
    if (registrationForm) {
      registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const userId = document.getElementById("userId").value.trim();
  
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const userIdPattern = /^(?=.*\d).{6,}$/;
  
        if (!emailPattern.test(email)) {
          alert("Please enter a valid email.");
          return;
        }
  
        if (!passwordPattern.test(password)) {
          alert("Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 special character.");
          return;
        }
  
        if (!userIdPattern.test(userId)) {
          alert("User ID must be more than 5 characters and contain at least one number.");
          return;
        }
  
        if (password !== confirmPassword) {
          alert("Passwords do not match.");
          return;
        }
  
        const customerId = Math.floor(10000 + Math.random() * 90000);
        const formData = {
          customerId: customerId,
          billNumber: document.getElementById("billNumber").value,
          customerNumber: document.getElementById("customerNumber").value,
          title: document.getElementById("title").value,
          customerName: document.getElementById("customerName").value,
          email: email,
          countryCode: document.getElementById("countryCode").value,
          mobileNumber: document.getElementById("mobileNumber").value,
          userId: userId,
          password: password
        };
  
        localStorage.setItem(userId, JSON.stringify(formData));
        localStorage.setItem("currentUser", userId);
        window.location.href = "success.html";
      });
    }
  
    // Handle Login
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const userId = document.getElementById("userId").value.trim();
        const password = document.getElementById("password").value;
  
        const userData = JSON.parse(localStorage.getItem(userId));
  
        if (!userData) {
          alert("User ID not found. Please register first.");
          return;
        }
  
        if (userData.password !== password) {
          alert("Incorrect password. Please try again.");
          return;
        }
  
        // Save current user session
        localStorage.setItem("currentUser", userId);
        window.location.href = "dashboard.html";
      });
    }
  });
  