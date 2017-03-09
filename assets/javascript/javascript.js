$( document ).ready(function(){

	var topics = ["Beyonce", "Viola Davis", "One Direction", "Kardashians"]
    
  function displayGif() {
    var topic = $(this).attr("data-name")
    // Giphy API
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      var results = response.data;

      for(var i = 0; i < results.length; i++) {
      // Creating a div to hold the gif
      var gifDiv = $("<div class ='gif'>")

      var rating = results[i].rating;

      // Element that has the gif rating
      var pOne = $("<p>").text("rating" + rating);

      var gifImage = $("<img>");
      gifImage.attr("src", results[i].images.finxed_height.url)

      gifDiv.prepend(p)
      gifDiv.append(pOne);

      $("#gif-view").prepend(gifDiv);
  };
    });

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

  $("#add-gif").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var topic = $("#gif-input").val().trim();

        // Adding movie from the textbox to our array
        topics.push(topic);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });


});