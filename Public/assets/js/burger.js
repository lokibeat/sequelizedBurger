$(document).ready(function(){

    $("#addburger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
  
        var newBurger = {
          burger_name: $("#addburger [name=burger_name]").val().trim(),
          devoured: false
        };
  
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("added burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
  
    $(document).on("click", '#devour', function(event){
      var id = $(this).data("id");
      var state =  {devoured : true};
      console.log("send update" + id + state)
      //send devour updates
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: state
    }).then(
        function() {
          console.log("set burger to devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  