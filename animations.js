//country detect
/*
var lang = navigator.language;
              if (!$.cookie('language-fr-be-redirect-cookie') && lang.indexOf("fr-be") !== -1) {
              var date = new Date();      
              date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
              $.cookie('language-de-redirect-cookie', true, { expires: date });
              $(location).attr('href', 'https://www.pjdesign.eu/fr-be/index.html');
          }
        	  else if (!$.cookie('language-fr-redirect-cookie') && lang.indexOf("fr") !== -1) {
              var date = new Date();      
              date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
              $.cookie('language-fr-redirect-cookie', true, { expires: date });
              $(location).attr('href', 'https://www.pjdesign.eu/fr/index.html');
          }
          else if (!$.cookie('language-nl-be-redirect-cookie') && lang.indexOf("nl-be") !== -1) {
              var date = new Date();      
              date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
              $.cookie('language-fr-redirect-cookie', true, { expires: date });
              $(location).attr('href', 'https://www.pjdesign.eu/nl-be/index.html');
          }
          else if (!$.cookie('language-nl-be-redirect-cookie') && lang.indexOf("nl") !== -1) {
              var date = new Date();      
              date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
              $.cookie('language-fr-redirect-cookie', true, { expires: date });
              $(location).attr('href', 'https://www.pjdesign.eu/nl/index.html');
          }
       	 else {
          		// do nothing
          		}
*/

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

let scrollfadetreePanel = window.innerHeight*1.4 + 400;

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
            figcap.style.background = "#e4665c";/*"radial-gradient(144.08% 144.08% at 128.66% 110.14%, rgba(165, 198, 240, 0.81) 0%, rgba(255, 255, 255, 0.16) 100%), radial-gradient(86.02% 86.02% at -13.5% 126.41%, #E4665C 0%, #424F60 100%)"*//*"radial-gradient(256.55% 519.75% at 23.97% -78.29%, #E4665C 0.46%, #424F60 100%)";*///figcap.getAttribute('data-color');
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

//country change

function countryHandler(value) {
    window.location.assign(`/${value}/index.html`);
}