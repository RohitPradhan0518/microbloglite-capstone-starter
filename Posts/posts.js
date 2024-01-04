function getPost(item){
    if(item.text.match(/<\/?(?:(?!img).)+>/)){
        item.text="unknown HTML eliminated"
    }
    return `
    <div class="card m-4 "> 
        <div class="card-header userPost">${item.username} <p class="time">${item.createdAt}</p></div>
        <div class="card-subtitle"> </div>
        <div class="card-text ">${item.text} <br></div> 
        <button class="like likeElement" data-postid="${item._id}"> ${item.likes.length} Likes</button>
        <button class="like deleteButton bg-danger" data-postid="${item._id}"> Delete</button>
    </div>
    `
}
function renderPosts(data){
    console.log(data)
    results.innerHTML=data.map(getPost).join("")
    const buttons =[...document.getElementsByClassName("likeElement")];
    buttons.forEach(e=>e.onclick=like);
    const deleteButtons =[...document.getElementsByClassName("deleteButton")];
    deleteButtons.forEach(e=>e.onclick=deletePost);
}
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
function getLoginData () {
    const loginJSON = window.localStorage.getItem("login-data");
    return JSON.parse(loginJSON) || {};
}
function like(e){
    const _id=e.target.dataset.postid
    console.log(_id)
    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/likes",{
        method: "POST",
        headers:{"Authorization" : `Bearer ${localStorage.token}`,
        "Content-Type" : "application/json"},
        body: JSON.stringify({"postId":_id})
    })
}
document.addEventListener("DOMContentLoaded",e=>{
    document.getElementById("submitPost").onclick=createPost;
    document.getElementById("logout").onclick=logout;
    

    const token=localStorage.token;
    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts?limit=25&offset=0",{
        headers:{"Authorization" : `Bearer ${token}`}                    
    })
    .then(response=>response.json())
    .then(renderPosts)    
})
function deletePost(e){
    const _id=e.target.dataset.postid
    console.log(_id)
    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts/"+_id,{
        method: "DELETE",
        headers:{"Authorization" : `Bearer ${localStorage.token}`,
        "accept" : "application/json"},
        body: JSON.stringify({"postId":_id})
    })
}
