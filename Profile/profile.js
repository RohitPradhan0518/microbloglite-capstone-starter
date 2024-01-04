const apiBaseURL = "http://microbloglite.us-east-2.elasticbeanstalk.com"

document.addEventListener("DOMContentLoaded",e=>{
    saveElement.addEventListener("click", e =>{
        fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users/"+localStorage.username, {
            method: "PUT" ,
            headers:{"Authorization" : `Bearer ${localStorage.token}`,
            "Content-Type" : "application/json"},
            body: JSON.stringify({
                bio:bioElement.value, 
                password:"abc",
                fullName:"Trevor Belmont"
            })
        }).then(r => r.json())
        .then(data =>{
            console.log(data)
            window.location = window.location
        })
    })
    const token=localStorage.token;
    usernameElement.innerText = localStorage.username   
    fetch(apiBaseURL+"/api/users/"+localStorage.username,{
        headers:{"Authorization" : `Bearer ${token}`}                    
    })
    .then(response=>response.json())
    .then(data => {
        bioElement.innerText = data.bio
    })    
})
