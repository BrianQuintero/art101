//Changing BG
var images = [
  "https://cdn.wallpapersafari.com/28/22/HIzvms.jpg",
  "https://www.teahub.io/photos/full/101-1017503_relax-wallpaper-and-anxiety-relief-quote-image-anxiety.jpg",
	"https://wallpaperaccess.com/full/1812309.jpg",
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
