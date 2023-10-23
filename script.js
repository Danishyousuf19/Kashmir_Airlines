function show_login() {
    let r = document.getElementById("onstart");
    if (r.style.display === "none" || r.style.display === "") {
        r.style.display = "block";
    }
    else {
        r.style.display = "none";
    }
}
var dome_visible=false;
var inte_visible=false;
function buy_domestic() {
    var p = document.getElementById("selected");
    let content = document.getElementById("buy_dome");
    if (content.style.display === "none" || content.style.display === ""||inte_visible===true) {
        content.style.display = "block";
        p.style.display = "block";
        dome_visible=true;
    }
}
function buy_international() {
    var p = document.getElementById("selected");
    let content = document.getElementById("buy_dome");

    if (content.style.display === "none" || content.style.display === "" || dome_visible===true) {
        content.style.display = "block";
        p.style.display = "none";
inte_visible=true;
    }
 

}
window.onload = function () {

    let isDarkMode = false;
    let v = document.getElementById("dark");
    v.addEventListener('click', function () {
        if (isDarkMode) {
            toggleMode("lightmode.css");
        } else {
            toggleMode("darkmode.css");
        }
        isDarkMode = !isDarkMode;
    });
};

function toggleMode(stylesheet) {
    var link = document.getElementById("stylesheet-link");
    link.href = stylesheet;
}
function manipulateLink() {

    var linkSelect = document.getElementById("selected");
    var selectedLink = linkSelect.options[linkSelect.selectedIndex].value;
    var returnFlights = document.getElementsByClassName("return_flight");

    if (selectedLink === "link2") {
        for (var i = 0; i < returnFlights.length; i++) {
            returnFlights[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < returnFlights.length; i++) {
            returnFlights[i].style.display = "none";
        }
    }
}
function maxpes() {

    var links = document.getElementById("selected_more");
    var selectedLink = links.options[links.selectedIndex].value;
    var maxpas = document.getElementsByClassName("pes");

    if (selectedLink === "link3") {
        for (var i = 0; i < maxpas.length; i++) {
            maxpas[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < maxpas.length; i++) {
            maxpas[i].style.display = "none";
        }
    }
}