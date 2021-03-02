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
