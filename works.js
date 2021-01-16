function openMainNav() {
    document.querySelector('.main-nav').classList.add('open');
}
function closeMainNav() {
    document.querySelector('.main-nav.open').classList.remove('open');
}



window.addEventListener("scroll", ()=> {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("header").classList.add("scrolled");
      }
    else {
        document.querySelector("header").classList.remove("scrolled");
    }
});


window.addEventListener("load", function() {
    document.querySelector('header.fade-up').classList.add("start");
});

let work = document.querySelectorAll(".WorkCard.fade-down");
window.addEventListener("scroll", function(e) {
    work.forEach(function(item, index, arr) {
        if(item.offsetTop < window.scrollY+800){
            item.classList.add('start');
        }
        else{
            item.classList.remove('start');
        }
    })
});

//open & close Work
let fadeDownIn = function() {
    let work = document.querySelector(".Work.open");
    let fadeDown = work.querySelectorAll(".fade-down");
    window.addEventListener("scroll", function(e) {
        fadeDown.forEach(function(item, index, arr) {
            if(item.offsetTop < window.scrollY+600){
                item.classList.add('start');
            }
            else{
                item.classList.remove('start');
            }
        })
    });
};


function openWorkBalabulle() {
    var balabulle = document.querySelector(".Work.balabulle");
        balabulle.classList.add("open");
        document.querySelector("header").classList.add("white");
        document.documentElement.scrollTop = 0;
        fadeDownIn();
}
function closeWorkBalabulle() {
    var balabulle = document.querySelector(".Work.balabulle.open");
        balabulle.classList.remove("open"); 
        document.querySelector("header").classList.remove("white");
        document.documentElement.scrollTop = (document.querySelector(".Work.balabulle").offsetTop);
}
function openWorkWallcom() {
    var balabulle = document.querySelector(".Work.wallcom");
        balabulle.classList.add("open");
        document.querySelector("header").classList.add("white");
        document.documentElement.scrollTop = 0;
        fadeDownIn();
}
function closeWorkWallcom() {
    var balabulle = document.querySelector(".Work.wallcom.open");
        balabulle.classList.remove("open");
        document.querySelector("header").classList.remove("white");
        document.documentElement.scrollTop = (document.querySelector(".Work.wallcom").offsetTop);
}
function openWorkPotagio() {
    var balabulle = document.querySelector(".Work.potagio");
        balabulle.classList.add("open");
        document.querySelector("header").classList.add("white");
        document.documentElement.scrollTop = 0;
        fadeDownIn();
}
function closeWorkPotagio() {
    var balabulle = document.querySelector(".Work.potagio.open");
        balabulle.classList.remove("open");
        document.querySelector("header").classList.remove("white");
        document.documentElement.scrollTop = (document.querySelector(".Work.potagio").offsetTop);
}
function openWorkChevetogne() {
    var balabulle = document.querySelector(".Work.chevetogne");
        balabulle.classList.add("open");
        document.querySelector("header").classList.add("white");
        document.documentElement.scrollTop = 0;
        fadeDownIn();
}
function closeWorkChevetogne() {
    var balabulle = document.querySelector(".Work.chevetogne.open");
        balabulle.classList.remove("open");
        document.querySelector("header").classList.remove("white");
        document.documentElement.scrollTop = (document.querySelector(".Work.chevetogne").offsetTop);
}