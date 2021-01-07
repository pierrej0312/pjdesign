//country detect

//in js
/*
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\"/g, '"').replace(/\\/g, '\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

var lang = navigator.language;
              if (!$.cookie('language-fr-be-redirect-cookie') && lang.indexOf("fr-be") !== -1) {
              var date = new Date();      
              date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
              $.cookie('language-de-redirect-cookie', true, { expires: date });
              document.querySelector(location).attr('href', 'https://www.pjdesign.eu/fr-be/index.html');
          }
        	  else if (!$.cookie('language-fr-redirect-cookie') && lang.indexOf("fr") !== -1) {
              var date = new Date();      
              date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
              $.cookie('language-fr-redirect-cookie', true, { expires: date });
              document.querySelector(location).attr('href', 'https://www.pjdesign.eu/fr/index.html');
          }
          else if (!$.cookie('language-nl-be-redirect-cookie') && lang.indexOf("nl-be") !== -1) {
              var date = new Date();      
              date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
              $.cookie('language-fr-redirect-cookie', true, { expires: date });
              document.querySelector(location).attr('href', 'https://www.pjdesign.eu/nl-be/index.html');
          }
          else if (!$.cookie('language-nl-be-redirect-cookie') && lang.indexOf("nl") !== -1) {
              var date = new Date();      
              date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
              $.cookie('language-fr-redirect-cookie', true, { expires: date });
              document.querySelector(location).attr('href', 'https://www.pjdesign.eu/nl/index.html');
          }
       	 else {
          		// do nothing
                  }
*/








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



    window.addEventListener("scroll", ()=> {
        if (document.body.srollTop == 0 || document.documentElement.scrollTop == 0) {
            document.querySelector(".inside-nav.white").classList.remove('white');
        }
        if (document.body.srollTop > window.innerHeight*0.7 || document.documentElement.scrollTop > window.innerHeight*0.7) {
            document.querySelector(".inside-nav").classList.add('white');
        }
        if (document.body.srollTop > window.innerHeight*1.5 || document.documentElement.scrollTop > window.innerHeight*1.5) {
            document.querySelector(".inside-nav.white").classList.remove('white');
        }
        if (document.body.srollTop < window.innerHeight*0.7 || document.documentElement.scrollTop < window.innerHeight*0.7) {
            document.querySelector(".inside-nav.white").classList.remove('white');
        }
    })




let scrollfadeonePanel = window.innerHeight*0.5;

/*window.addEventListener("scroll", ()=> {
    
    if(document.body.scrollTop > scrollfadeonePanel || document.documentElement.scrollTop > scrollfadeonePanel){
        document.querySelector(".scrollfadeone.fade-down").classList.add("start");
        //document.querySelector(".scrollfadeone.fade-right").classList.add("start");
    }
});*/
let scrollfadetwoPanel = window.innerHeight*1.6;

window.addEventListener("scroll", ()=> {
    
    if(document.body.scrollTop > scrollfadetwoPanel || document.documentElement.scrollTop > scrollfadetwoPanel){
        document.querySelector(".scrollfadetwo.fade-shoot-left").classList.add("start");
        document.querySelector(".scrollfadetwo.fade-left").classList.add("start");
        document.querySelector(".scrollfadetwo.fade-down").classList.add("start");
        //document.querySelector(".scrollfadetwo.fade-right").classList.add("start");
    }
});

let scrollfadetreePanel = window.innerHeight*1.6 + 400;

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
    document.querySelector(".inside-nav.white").classList.remove('white');
    //document.querySelector('.alert').classList.add("active");
    //document.querySelector('.filter-alert').classList.add("active");
});

//Array latestworks

const _C = document.querySelector('.latestwork'),
      N = document.querySelector('.latestwork').children.length;
var currentTab = 0;
showTab(currentTab);

function showTab(n) {

    var i, x = document.getElementsByClassName("latestwork");

    //var W = document.querySelector(".latestwork").offsetWidth;

    x[currentTab].classList.add('currentSlide');
    //x[currentTab].classList.remove("prevSlide");
    x[currentTab].classList.remove("nextSlide");
    x[currentTab].setAttribute('onclick','');
    //x[n].removeAttribute('onclick');
    if (screen.width < 700) {
        x[currentTab].setAttribute('onmousedown','');
            x[currentTab].setAttribute('ontouchstart','');
            x[currentTab].setAttribute('onmouseup','');
            x[currentTab].setAttribute('ontouchend','');
            x[currentTab].setAttribute('ontouchmove','');
            x[currentTab].setAttribute('onmousemove','');
            x[currentTab].setAttribute('ontouchmove','');
    }
    if (n < (x.length - 1)) {
        x[currentTab + 1].classList.add('nextSlide');
        x[currentTab + 1].setAttribute('onclick','nextPrev(1)');
        //x[currentTab + 1].addEventListener("click", nextPrev(+1));

    }
    if (n > 0) {
        x[currentTab - 1].classList.add('prevSlide');
        //x[currentTab - 1].addEventListener("click", nextPrev(-1));

    }
    if (n == (x.length - 1)) {
        x[0].classList.add('nextSlide');
        x[0].setAttribute('onclick','nextPrev(0)');
    }
    if (n == 0) {
        document.querySelector(".inside-nav").classList.add('white');
        document.querySelector(".title.absolute").style.setProperty("color","#ffff");
    }
    if (n == 1) {
        document.querySelector(".inside-nav").classList.add('white');
        document.querySelector(".title.absolute").style.setProperty("color","#ffff");
    }
    if (n == 2) {
        document.querySelector(".inside-nav.white").classList.remove('white');
        document.querySelector(".title.absolute").style.setProperty("color","#424f60");
    }
    if (n == 3) {
        document.querySelector(".title.absolute").style.setProperty("color","#424f60");

        if (screen.width < 700) {
            x[0].setAttribute('onmousedown','lock(event); return false;');
            x[0].setAttribute('ontouchstart','lock(event); return false;');
            x[0].setAttribute('onmouseup','move(event); return false;');
            x[0].setAttribute('ontouchend','move(event); return false;');
            x[0].setAttribute('ontouchmove','e => {e.preventDefault(this)}; return false;');
            x[0].setAttribute('onmousemove','drag(event); return false;');
            x[0].setAttribute('ontouchmove','drag(event); return false;');
        }
        

    }

    document.querySelector('.latestworksList').style.setProperty('--currentTab', currentTab);

    fixStepIndicator(n)
    
}

function nextPrev(n) {
        
    var x = document.getElementsByClassName("latestwork");
    var z = document.getElementsByClassName("stepIndicator");

    x[currentTab].classList.remove("currentSlide");
    /*if (n > 0 && n < x.length) {
        x[currentTab - 1].removeAttribute('onclick');
    }*/
    if (currentTab > 0 && currentTab < x.length) {
        x[currentTab - 1].classList.remove("prevSlide")
    }
    if (currentTab < (x.length - 1)) {
        x[currentTab + 1].classList.remove("nextSlide")
    }

    if (currentTab == 1 || currentTab == 2) {
        document.querySelector(".progress-bar").classList.add("dark");
    }
    else {
        document.querySelector(".progress-bar").classList.remove("dark");
    }
    
    z[currentTab].classList.remove("active");

    if(document.querySelector(".latestwork.active")) document.querySelector(".latestwork.active").classList.remove("active")
    
    if (n == 0) {
        currentTab = 0;
    }
    else {
        currentTab = currentTab + n;
    }
    console.log(n);
    showTab(currentTab);
    fixStepIndicator(currentTab);
    
    
}


//swipe phone

//transform: translate(calc(var(--i)/var(--n)*-60vw));

function unify(e) {
    e = e || window.event || this;
    var targ = e.target || e.srcElement || e;
     return e.changedTouches ? e.changedTouches[0] : e };

let x0 = null;

let locked = false;

let w;


function lock(e) { 
    e = e || window.event || this;
    var targ = e.target || e.srcElement || e;
    //if (targ.nodeType == 3) // defeat Safari bug
    //targ = targ.parentNode;

    x0 = unify(e).clientX 
    if (currentTab > 3) {
        x[currentTab + 1].classList.toggle('smooth', !(locked = true));
    }
    else {
        x[0].classList.toggle('smooth', !(locked = true));
    }
    
};

let i = 0;

function drag(e) {
    //e.preventDefault();
    e = e || window.event || this;
    var targ = e.target || e.srcElement || e;
    //if (targ.nodeType == 3) // defeat Safari bug
    //targ = targ.parentNode;

  if(locked) {
    x[currentTab + 1].style.setProperty('clip-path', `polygon(0% 0%, 1% 0%,${Math.round((((unify(e).clientX - x0) / screen.width)*50)+10)}% 69%, ${Math.round((((unify(e).clientX - x0) / screen.width)*70)+13)}% 73%, ${Math.round((((unify(e).clientX - x0) / screen.width)*80)+16)}% 76%, ${Math.round((((unify(e).clientX - x0) / screen.width)*90)+18)}% 78%, ${Math.round((((unify(e).clientX - x0) / screen.width)*100)+18)}% 80%, ${Math.round((((unify(e).clientX - x0) / screen.width)*90)+18)}% 82%, ${Math.round((((unify(e).clientX - x0) / screen.width)*80)+16)}% 84%, ${Math.round((((unify(e).clientX - x0) / screen.width)*70)+13)}% 87%, ${Math.round((((unify(e).clientX - x0) / screen.width)*50)+10)}% 91%, 5% 100%, 0% 100%`);
    //clip-path: polygon(0% 0%, 1% 0%, 10% 69%, 13% 73%, 16% 76%, 18% 78%, 18% 80%, 18% 82%, 16% 84%, 13% 87%, 10% 91%, 5% 100%, 0% 100%);
    //clip-path: polygon(0% 0%, 1% 0%, 34% 69%, 46% 73%, 54% 76%, 60% 78%, 65% 80%, 60% 82%, 54% 84%, 46% 87%, 34% 91%, 5% 100%, 0% 100%);
    x[currentTab + 1].querySelector('.next').style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`);
    //document.querySelectorAll('.swipe-content').setAttribute('style','transform:translateX(calc(' + Math.round(unify(e).clientX - x0) + 'px));');
    //_C.style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`)
  }   
};

function size() { w = window.innerWidth };

function move(e) {
    e = e || window.event || this;
    var targ = e.target || e.srcElement || e;
    //if (targ.nodeType == 3) // defeat Safari bug
    //targ = targ.parentNode;

    var x = document.getElementsByClassName("latestwork");
    var z = document.getElementsByClassName("stepIndicator");
  if(locked) {
    let dx = unify(e).clientX - x0, s = Math.sign(dx),
        f = +(s*dx/w).toFixed(2);

        console.log(dx);
  
    if((i < 0 || s > 0) && f > .5)/*else*/ {

        if (currentTab > 0 && currentTab < x.length) {
            x[currentTab - 1].classList.remove("prevSlide")
        }
        if (currentTab < (x.length - 1)) {
            x[currentTab + 1].classList.remove("nextSlide")
        }
    
        if (currentTab == 1 || currentTab == 2) {
            document.querySelector(".progress-bar").classList.add("dark");
        }
        if (currentTab == 0 || currentTab == 3) {
            document.querySelector(".progress-bar").classList.remove("dark");
        }
        z[currentTab].classList.remove("active");



        if(currentTab == 3) {
            x[currentTab].classList.remove("currentSlide");
            x[currentTab].setAttribute('onclick','');
            x[currentTab].setAttribute('onmousedown','');
            x[currentTab].setAttribute('ontouchstart','');
            x[currentTab].setAttribute('onmouseup','');
            x[currentTab].setAttribute('ontouchend','');
            x[currentTab].setAttribute('ontouchmove','');
            x[currentTab].setAttribute('onmousemove','');
            x[currentTab].setAttribute('ontouchmove','');

            console.log(currentTab);
            
            currentTab = 0;

            x[currentTab].style.setProperty('--tx', '0%');
            x[currentTab].style.setProperty('clip-path','');
            x[currentTab].querySelector('.next').style.setProperty('--tx', `0px`);
            x[currentTab].classList.toggle('smooth', !(locked = false));
    
            showTab(currentTab);
            fixStepIndicator(currentTab);

            f = 1 - f

    
            x[0].style.setProperty('--tx', '0%');
            x[0].querySelector('.next').style.setProperty('--tx', `0px`);
            x[0].classList.toggle('smooth', !(locked = false));
            x[0].setAttribute('onclick','');
            x[0].setAttribute('onmousedown','lock(event); return false;');
            x[0].setAttribute('ontouchstart','lock(event); return false;');
            x[0].setAttribute('onmouseup','move(event); return false;');
            x[0].setAttribute('ontouchend','move(event); return false;');
            x[0].setAttribute('ontouchmove','e => {e.preventDefault(this)}; return false;');
            x[0].setAttribute('onmousemove','drag(event); return false;');
            x[0].setAttribute('ontouchmove','drag(event); return false;');
            x0 = null
        }

        else {
                x[currentTab].classList.remove("currentSlide");
                x[currentTab].setAttribute('onclick','');
                x[currentTab].setAttribute('onmousedown','');
                x[currentTab].setAttribute('ontouchstart','');
                x[currentTab].setAttribute('onmouseup','');
                x[currentTab].setAttribute('ontouchend','');
                x[currentTab].setAttribute('ontouchmove','');
                x[currentTab].setAttribute('onmousemove','');
                x[currentTab].setAttribute('ontouchmove','');
                
                console.log(currentTab);
    
                currentTab = currentTab + 1;

                x[currentTab].style.setProperty('--tx', '0%');
                x[currentTab].style.setProperty('clip-path','');
                x[currentTab].querySelector('.next').style.setProperty('--tx', `0px`);
                x[currentTab].classList.toggle('smooth', !(locked = false));
           
                showTab(currentTab);
                fixStepIndicator(currentTab);
    
                f = 1 - f
    
                x[currentTab + 1].style.setProperty('--tx', '0%');
                x[currentTab + 1].querySelector('.next').style.setProperty('--tx', `0px`);
                x[currentTab + 1].classList.toggle('smooth', !(locked = false));
                x[currentTab + 1].setAttribute('onclick','');
                x[currentTab + 1].setAttribute('onmousedown','lock(event); return false;');
                x[currentTab + 1].setAttribute('ontouchstart','lock(event); return false;');
                x[currentTab + 1].setAttribute('onmouseup','move(event); return false;');
                x[currentTab + 1].setAttribute('ontouchend','move(event); return false;');
                x[currentTab + 1].setAttribute('ontouchmove','e => {e.preventDefault(this)}; return false;');
                x[currentTab + 1].setAttribute('onmousemove','drag(event); return false;');
                x[currentTab + 1].setAttribute('ontouchmove','drag(event); return false;');
                x0 = null
        }
        
        x0 = null
    }
    else {

        //document.querySelector('.swipe-container').style.setProperty('--tx', '0px');

    
        /*if (currentTab > 0 && currentTab < x.length) {
        x[currentTab - 1].classList.remove("prevSlide")
    }
    if (currentTab < (x.length - 1)) {
        x[currentTab + 1].classList.remove("nextSlide")
    }

    if (currentTab == 1 || currentTab == 2) {
        document.querySelector(".progress-bar").classList.add("dark");
    }
    else {
        document.querySelector(".progress-bar").classList.remove("dark");
    }
    
    z[currentTab].classList.remove("active");

    if(document.querySelector(".latestwork.active")) document.querySelector(".latestwork.active").classList.remove("active")*/

    
        if(currentTab == 0 || currentTab < 0) {
            x[currentTab + 1].style.setProperty('--tx', '0%');
            x[currentTab + 1].style.setProperty('clip-path','');
            x[currentTab + 1].querySelector('.next').style.setProperty('--tx', `0px`);
            x[currentTab + 1].classList.toggle('smooth', !(locked = false));
            x0 = null
            return
        }
        else {
            //x[currentTab].classList.remove("currentSlide");

            //currentTab = currentTab - 1;
       
            //showTab(currentTab);

            f = 1 - f

            x[currentTab + 1].style.setProperty('--tx', '0%');
            x[currentTab + 1].style.setProperty('clip-path','');
            x[currentTab + 1].querySelector('.next').style.setProperty('--tx', `0px`);
            x0 = null
            return
        }


    }
  }
};


if (screen.width < 700) {
    var x = document.getElementsByClassName("latestwork");
    x[currentTab + 1].setAttribute('onclick','');
    size();

    addEventListener('resize', size, false);

    document.querySelector(".nextSlide").addEventListener('mousedown', lock, false);
    document.querySelector(".nextSlide").addEventListener('touchstart', lock, false);

    document.querySelector(".nextSlide").addEventListener('mouseup', move, false);
    document.querySelector(".nextSlide").addEventListener('touchend', move, false);

    document.querySelector(".nextSlide").addEventListener('touchmove', e => {e.preventDefault()}, false)


    document.querySelector(".nextSlide").addEventListener('mousemove', drag, false);
    document.querySelector(".nextSlide").addEventListener('touchmove', drag, false);  
}
else {
}

function fixStepIndicator(n) {
    var z = document.getElementsByClassName("stepIndicator");
    z[n].classList.add('active');
  };

    let currentWork = document.querySelectorAll(".latestwork")
    currentWork.forEach(element => {
        element.querySelector(".latestworkbttn").addEventListener("click", function(ev) {
            console.log(this);
            //if(document.querySelector(".latestwork.active")) document.querySelector(".latestwork.active").classList.remove("active")
                element.classList.toggle("active");
                element.parentNode.classList.toggle("show");

            //scroll view se positionne sur activity top
            console.log(this.offsetTop);
            //document.documentElement.scrollTop = element.querySelector('.firstview').offsetTop;
        });
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


/*
//latest work swipe API

let url = 'latestWorks_api.jason'
let start = 0;
let latestworks = document.querySelector(".latestworksList");

let Affiche = function() {
    workslist.forEach(element => {
        //console.log(element)
        latestworks.innerHTML += `<li class="latestwork ${element.class}">
        <div class="content">
            <h2 class="little-title">${element.title}</h2>
            
            <p class="note-hero">${element.title2}</p>

            <p class="latestwork-descr">${element.texte}</p>
            <button>see more</button>
        </div>
        <img class="activity-img" src="${element.img}" alt="${element.text_img}">
    </li>`
    })
}


const Main = function() {
    axios.get(url)
    .then(response => {
        workslist = response.data.feed
        //console.log(activityList)
    })
    .then(Affiche)
    .then(WorksArray)
    .catch( function() {
        //alert('erreur de chargement')
    })
}
window.addEventListener("load", Main)
*/

//country change

function countryHandler(value) {
    window.location.assign(`/${value}/index.html`);
}

//alert


function closeAlert() {
    document.querySelector('.alert').classList.add('closed');
    document.querySelector('.filter-alert').classList.remove('active');
}