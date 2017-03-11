$( document ).ready(function(){


	var topics = ["Beyonce", "Viola Davis", "One Direction", "Kardashians"]
    

function displayGifInfo() {
// var topic = $(this).attr("data-name")

$("#buttons-view").on("click", function(){

  // Clear gifs before loading new ones
  $("#gif-view").empty();

  var topic = $(this).attr("data-name")

    // Giphy API
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
         topics + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(queryURL)
      console.log(response)

      var results = response.data;

      for (var i = 0; i < results.length; i++){

      // Creating a div to hold the gif
      var gifDiv = $("<div>")

      // Element that has the gif rating
      var p = $("<p>").text("Rating " + results[i].rating);

      var gipImage = $('<img>');
                animateUrl = results[i].images.fixed_height.url;
                staticUrl = results[i].images.fixed_height_still.url; 
                gipImage.attr('src', animateUrl);
                gipImage.attr('data-state', "animate");
                gipImage.attr('data-animate', animateUrl);  
                gipImage.attr('data-still', staticUrl); 
                gipImage.attr('class', "giphyItem");
                var gifDiv = $('<div class="item">');
      
      gifDiv.append(p);
      gifDiv.append(gipImage);

      $("#gif-view").prepend(gifDiv);


  };
  
    });

  
});
};

displayGifInfo()

function replaceSpace(string) {
  alteredString = string.replace(/ /g, "+");
  return alteredString
}

  function renderButtons(){

    $("#buttons-view").empty();

    for(var i = 0; i < topics.length; i++) {

        var a = $("<button>");

        a.addClass("topic");
        a.attr("data-name", topics[i]);
        a.text(topics[i])

        $("#buttons-view").append(a);
    }
    
  }
  renderButtons()

  $("#add-gif").on("click", function(event) {
        event.preventDefault();
        // This line grabs the text from the textbox
        var giphy = $("#gif-input").val().trim();

        // Adding gif from the textbox to our array
        topics.push(giphy);

        // Calling renderButtons which handles the processing of the gif array
        renderButtons();
      });

});
