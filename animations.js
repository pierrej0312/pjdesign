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

let scrollfadeonePanel = window.innerHeight - 800;

window.addEventListener("scroll", ()=> {
    
    if(document.body.scrollTop > scrollfadeonePanel || document.documentElement.scrollTop > scrollfadeonePanel){
        document.querySelector(".scrollfadeone.fade-shoot-left").classList.add("start");
        document.querySelector(".scrollfadeone.fade-left").classList.add("start");
        document.querySelector(".scrollfadeone.fade-down").classList.add("start");
    }
});
let scrollfadetwoPanel = window.innerHeight;

window.addEventListener("scroll", ()=> {
    
    if(document.body.scrollTop > scrollfadetwoPanel || document.documentElement.scrollTop > scrollfadetwoPanel){
        document.querySelector(".scrollfadetwo.fade-shoot-left").classList.add("start");
        document.querySelector(".scrollfadetwo.fade-right").classList.add("start");
    }
});

//loading

window.addEventListener("load", function() {
    document.querySelector('header.fade-up').classList.add("start");
    document.querySelector('.main-descr.fade-left').classList.add("start");
    document.querySelector('.main-anim.loading').classList.remove("loading");
    document.querySelector('.hero-anim.fade-down').classList.add("start");
    document.querySelector('.why-me.fade-left').classList.add("start");
});