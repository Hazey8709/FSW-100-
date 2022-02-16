// JavaScript Page

var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function () {
    if (window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

var typed = new Typed(".auto-input", {
    strings: [
        " Welcome to Noobie J's. ",
        "Here you will find Pictures and Video of work / Projects I built.",
        "Hope you enjoy! It's a work in progress. Thank you for visit.!",
    ],
    typeSpeed: 75,
    backspeed: 50,
    loop: true,
});

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("#my-form")) {
        form.reset();
    }
};

/*
function myFunction() {
    document.getElementById("#my-form").reset();
}
*/

/*
var form = document.getElementById("my-form");

form.addEventListener("submit", function () {
    form.reset(form);
});
*/

/*
window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        status.classList.add("success");
        status.innerHTML = "Thanks!";
    }

    function error() {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});
*/
