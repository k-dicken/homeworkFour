import * as MODEL from './model.js';

function initListener() {
    console.log($(".submit"));

    $(".submit").on("click", function (e) {
        e.preventDefault();

        console.log("submit");

        let user = $("#username").val();
        let pass = $("#password").val();

        if(user == "" && pass == "") {
            Swal.fire({
                icon: 'error',
                title: 'Incorrect Login',
                text: 'Please enter your username & password.',
                confirmButtonColor: "rgb(249, 129, 69)",
                timer: 4000});
        } else if(user == "") {
            Swal.fire({
                icon: 'error',
                title: 'Incorrect Login',
                text: 'Please enter your username.',
                confirmButtonColor: "rgb(249, 129, 69)",
                timer: 4000});
        } else if (pass == "") {
            Swal.fire({
                icon: 'error',
                title: 'Incorrect Login',
                text: 'Please enter your password.',
                confirmButtonColor: "rgb(249, 129, 69)",
                timer: 4000});
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Login Success',
                text: 'Welcome @' + user,
                confirmButtonColor: "rgb(249, 129, 69)",
                timer: 4000});
            window.location.hash = "#profile";
            MODEL.changePage("profile");
        }

        user = $("#username").val("");
        pass = $("#password").val("");

    });
}

function route() { 
    let hashTag = window.location.hash;
    // console.log(hashTag);
    let pageID = hashTag.replace("#", "");
    // console.log(pageID);

    if (pageID == "") {
        MODEL.changePage("login");
        initListener();
    } else {
        MODEL.changePage(pageID);
        if (pageID == "login") {
            initListener();
        }
    }

}

$(document).ready(function() {
    $(window).on("hashchange", route);
    // route();
    
    initListener();
});