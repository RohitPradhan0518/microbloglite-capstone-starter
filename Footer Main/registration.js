document.addEventListener("DOMContentLoaded", () => {

    const apiBaseURL = "https://microbloglite.onrender.com";
    const  checkBox = document.querySelector(".signup");
    const SIGNUP = document.getElementById("signup")
    SIGNUP.addEventListener("click", async e =>{
       fetch (apiBaseURL + "/api/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ //object Literal
            "username": Signup_username.value,
            "fullName": fullName.value,
            "password": Signup_password.value,
          })
       }) .then (r => r.json()) .then (data => {
        window.location = "/Posts"
       })
    });
});


