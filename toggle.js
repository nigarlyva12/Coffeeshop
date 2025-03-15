document.addEventListener("DOMContentLoaded", function () {
    console.log("js is running");
    let loginToggle = document.getElementById("login-toggler");
    let subscribeToggle = document.getElementById("subscribe-toggler");
    let subscribeHolder = document.querySelector(".subscribe-holder");
    let loginHolder = document.querySelector(".login-holder");

    subscribeHolder.style.display = "block"; // Show Sign Up by default
    loginHolder.style.display = "none"; // Hide Login by default

    loginToggle.addEventListener("click", function () {
        console.log("Login Clicked"); // Debugging step
        if (window.getComputedStyle(loginHolder).display === "none") {
            loginHolder.style.display = "block";
            subscribeHolder.style.display = "none";
        }
    });

    subscribeToggle.addEventListener("click", function () {
        console.log("Sign Up Clicked"); // Debugging step
        if (window.getComputedStyle(subscribeHolder).display === "none") {
            subscribeHolder.style.display = "block";
            loginHolder.style.display = "none";
        }
    });
});