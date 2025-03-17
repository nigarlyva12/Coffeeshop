document.addEventListener("DOMContentLoaded", function () {
    console.log("js is running");
    let loginToggle = document.getElementById("login-toggler");
    let subscribeToggle = document.getElementById("subscribe-toggler");
    let subscribeHolder = document.querySelector(".subscribe-holder");
    let loginHolder = document.querySelector(".login-holder");

    subscribeHolder.style.display = "block"; 
    loginHolder.style.display = "none"; 

    loginToggle.addEventListener("click", function () {
        console.log("Login Clicked");
        if (window.getComputedStyle(loginHolder).display === "none") {
            loginHolder.style.display = "block";
            subscribeHolder.style.display = "none";
        }
    });

    subscribeToggle.addEventListener("click", function () {
        console.log("Sign Up Clicked");
        if (window.getComputedStyle(subscribeHolder).display === "none") {
            subscribeHolder.style.display = "block";
            loginHolder.style.display = "none";
        }
    });
});