var theToggle = document.getElementById('toggle');
// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}

//nextPage() function
function nextPage() {
    if (document.getElementById('option-11').checked) {
			window.location.href = 'pages/stress/stress.html';
    }
		else if (document.getElementById('option-12').checked) {
			window.location.href = 'pages/selfConfidence/selfConfidence.html';
		}
		else if (document.getElementById('option-13').checked) {
			window.location.href = 'pages/money/money.html';
		}
		else if (document.getElementById('option-14').checked) {
			window.location.href = 'pages/health/health.html';
		}
		else if (document.getElementById('option-15').checked) {
			window.location.href = 'pages/academics/academics.html';
		}
}

//Changing BG
var images = [
  "https://wallpaperaccess.com/full/2933288.jpg",
  "https://i.pinimg.com/originals/b6/2a/97/b62a97205ca99a9b197ed4beac75c105.jpg",
	"https://images.unsplash.com/photo-1414500923875-1704944d8df7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80",
	"https://cutewallpaper.org/21/calming-desktop-background/Calming-Screensavers-Wallpaper-Lock-Wallpapers.jpg",
	"https://images.unsplash.com/photo-1548109284-4ae7430c16a4?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MTM3NjI3fHxlbnwwfHx8&ixlib=rb-1.2.1&w=1000&q=80"
]

//function to change background image
var i = 0;
setInterval(function() {
      document.body.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
      	i =  0;
      }
}, 10000);
