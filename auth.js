function checkSession() {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    alert("Session expired or invalid. Please login.");
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  alert("Logged out successfully.");
  window.location.href = "index.html";
}