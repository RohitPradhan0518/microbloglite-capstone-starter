"use strict";

const apiBaseURL = "https://microbloglite.onrender.com";

function getLoginData () {
    const loginJSON = window.localStorage.getItem("login-data");
    return JSON.parse(loginJSON) || {};
}
function isLoggedIn () {
    const loginData = getLoginData();
    return Boolean(loginData.token);
}