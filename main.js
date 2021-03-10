

let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

function open1() {
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    btn1.style.borderBottom = "2px solid #264f59";
    btn2.style.borderBottom = "none";
    btn3.style.borderBottom = "none";


    btn1.style.color="#264f59";
    btn2.style.color="#666";
    btn3.style.color="#666";

    content1.style.transitionDelay = ".3s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0s";

}

function open2() {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";
    btn1.style.borderBottom = "none";
    btn2.style.borderBottom = "2px solid #264f59";
    btn3.style.borderBottom = "none";

    btn1.style.color="#666";
    btn2.style.color="#264f59";
    btn3.style.color="#666";

    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = ".3s";
    content3.style.transitionDelay = "0s";
}

function open3() {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0)";
    btn1.style.borderBottom = "none";
    btn2.style.borderBottom = "none";
    btn3.style.borderBottom = "2px solid #264f59";
    

    btn1.style.color="#666";
    btn2.style.color="#666";
    btn3.style.color="#264f59";

    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = ".3s";
}

$(document ).ready(function() {
    open1();
})

function openMenu() {

    if ( document.getElementsByClassName("items-mobile")[0].style.display === "block" ) {
        document.getElementsByClassName("items-mobile")[0].style.transform = "translateX(-400%)" 
        document.getElementsByClassName("items-mobile")[0].style.display = "none";
    }
    else {
        document.getElementsByClassName("items-mobile")[0].style.transform = "translateX(0)";
        document.getElementsByClassName("items-mobile")[0].style.display = "block";
    }

}
