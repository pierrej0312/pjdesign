
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
            x[currentTab + 1].querySelector('figcaption').style.background = 'none';
            x[currentTab].classList.remove('nextSlide');
            x[currentTab].classList.remove('prevSlide');
            document.querySelector('.swipe-container').style.setProperty('--currentTab', currentTab);
            document.querySelector('.swipe-container').style.setProperty('--w', W + "px");
            x[n].style.setProperty('background', 'rgba(255,255,255,0.5) url(' + x[n].querySelector('img').getAttribute('src') + ')');
            x[n].style.setProperty('background-size', 'cover');
            document.querySelector('.button-right.slider-button').style.setProperty('background', 'url(' + x[currentTab + 1].querySelector('img').getAttribute('src') + ')');
            document.querySelector('.button-right.slider-button').style.setProperty('background-size', 'cover');
            if (n > 0 ) {
                document.querySelector('.button-left.slider-button').style.setProperty('background', 'url(' + x[currentTab - 1].querySelector('img').getAttribute('src') + ')');
                document.querySelector('.button-left.slider-button').style.setProperty('background-size', 'cover');
            }
            else {
                document.querySelector('.button-left.slider-button').style.setProperty('background', 'none')
            }

            var figcap = x[currentTab].querySelector('figcaption');
            /*figcap.style.background = "none";*//*"radial-gradient(144.08% 144.08% at 128.66% 110.14%, rgba(165, 198, 240, 0.81) 0%, rgba(255, 255, 255, 0.16) 100%), radial-gradient(86.02% 86.02% at -13.5% 126.41%, #E4665C 0%, #424F60 100%)"*//*"radial-gradient(256.55% 519.75% at 23.97% -78.29%, #E4665C 0.46%, #424F60 100%)";*///figcap.getAttribute('data-color');
            //document.querySelector('.swipe-container').style.setProperty('--tx', '0px');
            //document.querySelector('.swipe-container').setAttribute('style','transform:translateX(calc(' + currentTab + '*(-' + w + 'px)));')       #e4665c;

        if (n > 0 && n < (x.length - 2)) {
            x[currentTab - 1].classList.add('prevSlide');
            /*x[currentTab - 1].querySelector('figcaption').style.background = 'none';*/
        }
        /*if (n = 0 && n < (x.length - 3)) {
            //x[currentTab + 1].classList.add('nextSlide');
            //x[currentTab + 1].querySelector('figcaption').style.background = 'white';
        }*/

        if (n == 0) {
            document.querySelector(".button-left.slider-button").style.display = "none";
            document.querySelector('.absolute-link').setAttribute('href', '/works.html#balabulle');
          } else {
            document.querySelector(".button-left.slider-button").style.display = "flex";
        }
        if(n == 1) {
            document.querySelector('.absolute-link').setAttribute('href', '/works.html#wallcom');
        }
        if(n == 2) {
            document.querySelector('.absolute-link').setAttribute('href', '/works.html#potagio');
        }
        if(n == 3) {
            document.querySelector('.absolute-link').setAttribute('href', '/works.html#chevetogne');
        }
        if(n == 4) {
            document.querySelector('.absolute-link').setAttribute('href', '/index.html#top');
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
