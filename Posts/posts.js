/* Posts Page JavaScript */

"use strict";
const apiBaseURL = "https://microbloglite.onrender.com";
// Backup server:   https://microbloglite.herokuapp.com
function posts() {
    fetch(HOST + "/api/posts?limit=100&offset=0", {
        method: "GET",
        headers: { 'Authorization': `Bearer ${localStorage.token}` }
    })
    .then(response => response.json())
    .then(output=>{
        console.log(JSON.stringify(output,0,4));
        document.body.innerHTML += output.map(
            p=> `<div class="card ">
                    <h5>${p.username} (${p.createdAt})</h5>  
                    <h6>"${p.text} [${p.likes}]:</h6>"
                </div>`
        ).join("");
    });
}