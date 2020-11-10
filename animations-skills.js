



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

//loading

window.addEventListener("load", function() {
    document.querySelector('header.fade-up').classList.add("start");
    document.querySelector('.MySkills.fade-left').classList.add("start");
    document.querySelector('.Skills-descr.fade-down').classList.add("start");
});

let scrollfadezeroPanel = 100;

window.addEventListener("scroll", ()=> {
    
    if(document.body.scrollTop > scrollfadezeroPanel || document.documentElement.scrollTop > scrollfadezeroPanel){
        document.querySelector(".scrollfadezero.fade-right").classList.add("start");
    }
});

let scrollfadeonePanel = 1193 - 400;

window.addEventListener("scroll", ()=> {
    
    if(document.body.scrollTop > scrollfadeonePanel || document.documentElement.scrollTop > scrollfadeonePanel){
        document.querySelector(".scrollfadeone.fade-left").classList.add("start");
    }
});
let scrollfadetwoPanel = 1710 - 400;

window.addEventListener("scroll", ()=> {
    
    if(document.body.scrollTop > scrollfadetwoPanel || document.documentElement.scrollTop > scrollfadetwoPanel){
        document.querySelector(".scrollfadetwo.fade-right").classList.add("start");

    }
});

let scrollfadetreePanel = 2320 - 400;

window.addEventListener("scroll", ()=> {
    
    if(document.body.scrollTop > scrollfadetreePanel || document.documentElement.scrollTop > scrollfadetreePanel){
        document.querySelector(".scrollfadethree.fade-left").classList.add("start");
    }
});
