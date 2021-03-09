//Cheston Chen & Brian Quintero
//Lab 16 - AJAX
//3/3/2021
var buttonEl = document.getElementById("activate");
var response;
var comic;
var picture = document.getElementById("picture");
buttonEl.addEventListener("click", function(){
  $.ajax({
      // The URL for the request (from the api docs)
      url: "https://xkcd.com/info.0.json",
      // The data to send (will be converted to a query string)
      /*data: {
        api_key: "X92XrOhK65HfUY9pq7XXzon2Z5TAmsmmpJ0J3I4S",
      },*/
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
          // do stuff
          comic = data;
          picture.src = comic.img;
          document.getElementById("author").textContent = "Title: " + comic.title;
          picture.alt = comic.alt;
          console.log(comic);
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })
});
