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
    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts?limit=1000&offset=0",{
        headers:{"Authorization" : `Bearer ${token}`}                    
    })
    .then(response=>response.json())
    .then(renderPosts)    
})
async function submitPost(data={}){
    try{
        const response =await fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
            method: "POST" ,
            headers:{"Authorization" : `Bearer ${token}`},
            body: JSON.stringify(data)
        });
   const result=await response.json();
   console.log("Success:", result);
    }catch (error){
        console.error("Error:",error);
    }
}
document.addEventListener("onclick"(),)