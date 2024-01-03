document.addEventListener("DOMContentLoaded", () => {

    const apiBaseURL = "https://microbloglite.onrender.com";
    const  checkBox = document.querySelector(".signup");
    const SIGNUP = document.querySelector("input[type=submit]")
    SIGNUP.addEventListener("click", async e =>{
       fetch (apiBaseURL + "/api/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ //object Literal
            "username": username.value,
            "fullName": fullName.value,
            "password": password.value,
          })
       }) .then (r => r.json()) .then (data => {
        window.location = "/"
       })
    });
});


