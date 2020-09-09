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

let scrollfadeonePanel = window.innerHeight - 500;

window.addEventListener("scroll", ()=> {
    
    if(document.body.scrollTop > scrollfadeonePanel || document.documentElement.scrollTop > scrollfadeonePanel){
        document.querySelector(".scrollfadeone.fade-down").classList.add("start");
    }
});
let scrollfadetwoPanel = window.innerHeight + 300;

window.addEventListener("scroll", ()=> {
    
    if(document.body.scrollTop > scrollfadetwoPanel || document.documentElement.scrollTop > scrollfadetwoPanel){
        document.querySelector(".scrollfadetwo.fade-shoot-left").classList.add("start");
        document.querySelector(".scrollfadetwo.fade-left").classList.add("start");
        document.querySelector(".scrollfadetwo.fade-down").classList.add("start");
    }
});

let scrollfadetreePanel = window.innerHeight*2 - 200;

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
});

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
            x[currentTab].classList.remove('nextSlide');
            x[currentTab].classList.remove('prevSlide');
            document.querySelector('.swipe-container').style.setProperty('--currentTab', currentTab);
            document.querySelector('.swipe-container').style.setProperty('--w', W + "px");
            //document.querySelector('.swipe-container').style.setProperty('--tx', '0px');
            //document.querySelector('.swipe-container').setAttribute('style','transform:translateX(calc(' + currentTab + '*(-' + w + 'px)));');

        if (n > 0 && n < (x.length - 2)) {
            x[currentTab - 1].classList.add('prevSlide');
        }

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
















/*const _C = document.querySelector('.swipe-container');
N = _C.children.length;
_C.style.setProperty('--n', N);

let locked = false;

const TFN = {
    'linear': function(k) {
        return k
    },
    'ease-in': function(k, e = 1.675) {
        return Math.pow(k, e)
    },
    'ease-out': function(k, e = 1.675) {
        return 1 - Math.pow(1 - k, e)
    },
    'ease-in-out': function(k) {
        return .5*(Math.sin((k - .5)*Math.PI) + 1)
    },
    'bounce-out': function(k, a = 2.75, b = 1.5) {
        return 1 - Math.pow(1 - k, a)*Math.abs(Math.cos(Math.pow(k, b)*(n + .5)*Math.PI))
    }
};

function unify(e) {
    return e.changedTouches ? e.changedTouches[0] : e
};

let x0 = null;

function lock(e) {
    x0 = unify(e).clientX;
    locked = true
};

function drag(e) {

    e.preventDefault();

    if(locked) {
        let dx = unify(e).clientX - x0, f = +(dx/w).toFixed(2);
        _C.style.setProperty('--i', i - f)
    }   
};

let w;

function size() {
    w = window.innerWidth
};

let ini, fin;

const NF = 30;

let rID = null;

function stopAni() {
    cancelAnimationFrame(rID);
    rID = null
};

function ani(cf = 0) {
    _C.style.setProperty('--i', ini + (fin - ini)*TFN['ease-out'](cf/anf));

    if(cf === anf) {
        stopAni();
        return
    }

    rID = requestAnimationFrame(ani.bind(this, ++cf))
};

var n;

let i = 0;

function move(e) {
    if(locked) {
        let dx = unify(e).clientX - x0, s = Math.sign(dx), f = +(s*dx/w).toFixed(2);
        ini = i - s*f;

        anf = Math.round(f*NF)
        n = 2 + Math.round(f)

        ani();

        if ((i > 0 || s < 0) && (i < N - 1 || s > 0) && f > .2) {
            i -= s;
            f = 1 - f
        }

        fin = i;
        ani();
        x0 = null;
        locked = false
    }
};

addEventListener('resize', size, false);

_C.addEventListener('mousedown', lock, false);
_C.addEventListener('touchstart', lock, false);

_C.addEventListener('mouseup', move, false);
_C.addEventListener('touchend', move, false);

_C.addEventListener('touchmove', e => {
    e.preventDefault()
}, false )

_C.addEventListener('mousemove', drag, false);
_C.addEventListener('touchmove', drag, false);*/

//autre methode swipe a combiner avec https://inspiredwebdev.com/javascript-carousel

/*
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.getElementById('modalContent');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
    if (touchendX < touchstartX) {
        console.log('Swiped left');
    }
    
    if (touchendX > touchstartX) {
        console.log('Swiped right');
    }
    
    if (touchendY < touchstartY) {
        console.log('Swiped up');
    }
    
    if (touchendY > touchstartY) {
       console.log('Swiped down');
    }
    
    if (touchendY === touchstartY) {
       console.log('Tap');
    }
}
*/

//ou








/*
let startX = 0;
let startY = 0;

const gestureZone = document.querySelector('.swipe-container');

gestureZone.addEventListener('touchstart', function(event) {
    handleTouchStart();
}, false);

gestureZone.addEventListener('touchend', function(event) {
    handleTouchEnd();
}, false); 

function handleTouchStart(e) {
  startX = e.changedTouches[0].screenX;
  startY = e.changedTouches[0].screenY;
}

function handleTouchEnd(e) {
  const diffX = e.changedTouches[0].screenX - startX;
  const diffY = e.changedTouches[0].screenY - startY;
  const ratioX = Math.abs(diffX / diffY);
  const ratioY = Math.abs(diffY / diffX);
  const absDiff = Math.abs(ratioX > ratioY ? diffX : diffY);

  // Ignore small movements.
  if (absDiff < 30) {
    return;
  }

  if (ratioX > ratioY) {
    if (diffX >= 0) {
      console.log('right swipe');
    } else {
      console.log('left swipe');
    }
  } else {
    if (diffY >= 0) {
      console.log('down swipe');
    } else {
      console.log('up swipe');
    }
  }
}








let startX = 0;
let startY = 0;

const gestureZone = document.querySelector('.swipe-container');

gestureZone.addEventListener('touchstart', function(event) {
    handleTouchStart();
}, false);

gestureZone.addEventListener('touchend', function(event) {
    handleTouchEnd();
}, false); 

function handleTouchStart(e) {
  startX = e.changedTouches[0].screenX;
  startY = e.changedTouches[0].screenY;
}

function handleTouchEnd(e) {
  const diffX = e.changedTouches[0].screenX - startX;
  const diffY = e.changedTouches[0].screenY - startY;
  const ratioX = Math.abs(diffX / diffY);
  const ratioY = Math.abs(diffY / diffX);
  const absDiff = Math.abs(ratioX > ratioY ? diffX : diffY);

  // Ignore small movements.
  if (absDiff < 30) {
    return;
  }

  if (ratioX > ratioY) {
    if (diffX >= 0) {
        var x = document.getElementsByClassName("swipe-content");

        x[currentTab].classList.remove("currentSlide");

        currentTab = currentTab + 1;
       
        showTab(currentTab);
    } else {
        var x = document.getElementsByClassName("swipe-content");

        x[currentTab].classList.remove("currentSlide");

        currentTab = currentTab - 1;
       
        showTab(currentTab);
    }
  } else {
    if (diffY >= 0) {
      console.log('down swipe');
    } else {
      console.log('up swipe');
    }
  }
}
*/