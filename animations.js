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

let scrollfadeonePanel = window.innerHeight*0.5;

window.addEventListener("scroll", ()=> {
    
    if(document.body.scrollTop > scrollfadeonePanel || document.documentElement.scrollTop > scrollfadeonePanel){
        document.querySelector(".scrollfadeone.fade-down").classList.add("start");
    }
});
let scrollfadetwoPanel = window.innerHeight*1.4;

window.addEventListener("scroll", ()=> {
    
    if(document.body.scrollTop > scrollfadetwoPanel || document.documentElement.scrollTop > scrollfadetwoPanel){
        document.querySelector(".scrollfadetwo.fade-shoot-left").classList.add("start");
        document.querySelector(".scrollfadetwo.fade-left").classList.add("start");
        document.querySelector(".scrollfadetwo.fade-down").classList.add("start");
    }
});

let scrollfadetreePanel = window.innerHeight*1.4 + 300;

window.addEventListener("scroll", ()=> {
    
    if(document.body.scrollTop > scrollfadetreePanel || document.documentElement.scrollTop > scrollfadetreePanel){
        document.querySelector(".scrollfadetree.fade-shoot-left").classList.add("start");
        document.querySelector(".scrollfadetree.fade-down").classList.add("start");
        document.querySelector(".scrollfadetree.fade-right").classList.add("start");
    }
});

//loading

window.addEventListener("load", function() {
    document.querySelector('header.fade-up').classList.add("start");
    document.querySelector('.main-descr.fade-left').classList.add("start");
    document.querySelector('.main-anim.loading').classList.remove("loading");
    document.querySelector('.hero-anim.fade-down').classList.add("start");
    document.querySelector('.why-me.fade-left').classList.add("start");
    document.querySelector('.inside-nav.fade-left').classList.add("start");
});


//inside-link active

var z = document.getElementsByClassName("inside-link");

var currentTab = 0;

let topTop = window.innerHeight*0;
let latestWorksTop = window.innerHeight*0.5;
let whymeTop = window.innerHeight*1.4;
let toplink = document.querySelector('.inside-link[href="#top"]');
let latestWorkslink = document.querySelector('.inside-link[href="#latestworks"]');
let whymelinks = document.querySelector('.inside-link[href="#whyme"]');

window.addEventListener("scroll", ()=> {
    
    if(document.querySelector('#top') && (document.body.scrollTop > topTop || document.documentElement.scrollTop > topTop) && (document.body.scrollTop < latestWorksTop || document.documentElement.scrollTop < latestWorksTop)){
        if(document.querySelector('.inside-link.active')) document.querySelector('.inside-link.active').classList.remove('active')
        z[0].classList.add("active");
    }
    if(document.querySelector('#latestworks') && (document.body.scrollTop > latestWorksTop || document.documentElement.scrollTop > latestWorksTop) && (document.body.scrollTop < whymeTop || document.documentElement.scrollTop < whymeTop)){
        if(document.querySelector('.inside-link.active')) document.querySelector('.inside-link.active').classList.remove('active')
        z[1].classList.add("active");
    }
    if(document.querySelector('#whyme') && (document.body.scrollTop > whymeTop || document.documentElement.scrollTop > whymeTop)){
        if(document.querySelector('.inside-link.active')) document.querySelector('.inside-link.active').classList.remove('active')
        z[2].classList.add("active");

    }
    else {
        return
    }
});



function toscrollTop() {
    document.documentElement.scrollTop = topTop
};
function toscrolllatestworks() {
    document.documentElement.scrollTop = latestWorksTop
};
function toscrollwhyme() {
    document.documentElement.scrollTop = whymeTop
};


//swipe car



const _C = document.querySelector('.swipe-content'),
      N = document.querySelector('.swipe-content').children.length;


    //let swipeContents = Array.from(_C.children);
      
    
    var currentTab = 0;
    showTab(currentTab);

      
    function showTab(n) {
        

        var i, x = document.getElementsByClassName("swipe-content");

        var W = document.querySelector(".swipe-content").offsetWidth;
        
        
            x[n].classList.add('currentSlide');
            x[currentTab + 1].classList.add('nextSlide');
            x[currentTab + 1].querySelector('figcaption').style.background = 'white';
            x[currentTab].classList.remove('nextSlide');
            x[currentTab].classList.remove('prevSlide');
            document.querySelector('.swipe-container').style.setProperty('--currentTab', currentTab);
            document.querySelector('.swipe-container').style.setProperty('--w', W + "px");

            var figcap = x[currentTab].querySelector('figcaption');
            figcap.style.background = /*"radial-gradient(256.55% 519.75% at 23.97% -78.29%, #E4665C 0.46%, #424F60 100%)";*/figcap.getAttribute('data-color');
            //document.querySelector('.swipe-container').style.setProperty('--tx', '0px');
            //document.querySelector('.swipe-container').setAttribute('style','transform:translateX(calc(' + currentTab + '*(-' + w + 'px)));');

        if (n > 0 && n < (x.length - 2)) {
            x[currentTab - 1].classList.add('prevSlide');
            x[currentTab - 1].querySelector('figcaption').style.background = 'white';
        }
        /*if (n = 0 && n < (x.length - 3)) {
            //x[currentTab + 1].classList.add('nextSlide');
            //x[currentTab + 1].querySelector('figcaption').style.background = 'white';
        }*/

        if (n == 0) {
            document.querySelector(".button-left.slider-button").style.display = "none";
          } else {
            document.querySelector(".button-left.slider-button").style.display = "flex";
        }
        if (n == (x.length - 3)) {
            document.querySelector(".button-right.slider-button").style.display = "none";
          } else {
            document.querySelector(".button-right.slider-button").style.display = "flex";
        }
        
        
        
        //document.querySelector('.swipe-container').style./*display = "none"; */transform = "translate-x(calc(" + (currentTab + 1) + "*-" + w + ")";
        

    }


    function nextPrev(n) {
            
        var x = document.getElementsByClassName("swipe-content");

        x[currentTab].classList.remove("currentSlide");


        currentTab = currentTab + n;
        
       
        showTab(currentTab);
    }

//transform: translate(calc(var(--i)/var(--n)*-60vw));

function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };

let x0 = null;

let locked = false;

let w;

function lock(e) { 

    x0 = unify(e).clientX 
    document.querySelector('.swipe-container').classList.toggle('smooth', !(locked = true));
};

let i = 0;

function drag(e) {
    e.preventDefault();

  if(locked) {
    document.querySelector('.swipe-container').style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`)
    //document.querySelectorAll('.swipe-content').setAttribute('style','transform:translateX(calc(' + Math.round(unify(e).clientX - x0) + 'px));');
    //_C.style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`)
  }   
};

function size() { w = window.innerWidth };

function move(e) {
  if(locked) {
    let dx = unify(e).clientX - x0, s = Math.sign(dx),
        f = +(s*dx/w).toFixed(2);
  
    if((i > 0 || s < 0) && f > .2) {
        var x = document.getElementsByClassName("swipe-content");

        //document.querySelector('.swipe-container').style.setProperty('--tx', '0px');

        if(currentTab == (x.length - 3) || currentTab > (x.length - 3)) {
            document.querySelector('.swipe-container').style.setProperty('--tx', '0px');
            document.querySelector('.swipe-container').classList.toggle('smooth', !(locked = false));
            x0 = null
            return
        }
        else {
            x[currentTab].classList.remove("currentSlide");

            currentTab = currentTab + 1;
       
            showTab(currentTab);

            f = 1 - f

            document.querySelector('.swipe-container').style.setProperty('--tx', '0px');
            document.querySelector('.swipe-container').classList.toggle('smooth', !(locked = false));
            x0 = null
        }

        x0 = null


    } else {

        var x = document.getElementsByClassName("swipe-content");

        if(currentTab == 0 || currentTab < 0) {
            document.querySelector('.swipe-container').style.setProperty('--tx', '0px');
            document.querySelector('.swipe-container').classList.toggle('smooth', !(locked = false));
            x0 = null
            return
        }
        else {
            x[currentTab].classList.remove("currentSlide");

            currentTab = currentTab - 1;
       
            showTab(currentTab);

            f = 1 - f

            document.querySelector('.swipe-container').style.setProperty('--tx', '0px');
            document.querySelector('.swipe-container').classList.toggle('smooth', !(locked = false));
            x0 = null
        }
        
        x0 = null
    }
  }
};

size();

addEventListener('resize', size, false);

document.querySelector('.swipe-container').addEventListener('mousedown', lock, false);
document.querySelector('.swipe-container').addEventListener('touchstart', lock, false);

document.querySelector('.swipe-container').addEventListener('mouseup', move, false);
document.querySelector('.swipe-container').addEventListener('touchend', move, false);

document.querySelector('.swipe-container').addEventListener('touchmove', e => {e.preventDefault()}, false)


document.querySelector('.swipe-container').addEventListener('mousemove', drag, false);
document.querySelector('.swipe-container').addEventListener('touchmove', drag, false);

