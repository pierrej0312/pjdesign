//country detect

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
