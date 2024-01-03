function getPost(item){
    return `
    <div class="card m-4 "> 
        <div class="card-header userPost">${item.username} </div>
        <div class="card-subtitle"> ${item._id}</div>
        <div class="card-text">${item.text} </div> 
    </div>
    `
}
function renderPosts(data){
    console.log(data)
    results.innerHTML=data.map(getPost).join("")
}
document.addEventListener("DOMContentLoaded",e=>{
    const token=localStorage.token;
    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts?limit=25&offset=0",{
        headers:{"Authorization" : `Bearer ${token}`}                    
    })
    .then(response=>response.json())
    .then(renderPosts)    
})
async function createPost(){
    try{
        const response =await fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts/", {
            method: "POST" ,
            headers:{"Authorization" : `Bearer ${localStorage.token}`,
            "Content-Type" : "application/json"},
            body: JSON.stringify({text:document.getElementById("message").value})
        });
   const result=await response.json();
   console.log("Success:", result);
  // window.location.reload()
  window.location=window.location
    }catch (error){
        console.error("Error:",error);
    }
}
document.getElementById("submitPost").onclick=createPost
//document.getElementById("submitPost").onclick=e=>createPost({text:document.getElementById("message").value});
function logout () {
    const loginData = getLoginData();

    // GET /auth/logout
    const options = { 
        method: "GET",
        headers: { 
            // This header is how we authenticate our user with the
            // server for any API requests which require the user
            // to be logged-in in order to have access.
            // In the API docs, these endpoints display a lock icon.
            Authorization: `Bearer ${loginData.token}`,
        },
    };

    fetch(apiBaseURL + "/auth/logout", options)
        .then(response => response.json())
        .then(data => console.log(data))
        .finally(() => {
            // We're using `finally()` so that we will continue with the
            // browser side of logging out (below) even if there is an 
            // error with the fetch request above.

            window.localStorage.removeItem("login-data");  // remove login data from LocalStorage
            window.location.assign("/");  // redirect back to landing page
        });
}
document.getElementById("logout").onclick=logout
function getLoginData () {
    const loginJSON = window.localStorage.getItem("login-data");
    return JSON.parse(loginJSON) || {};
}
