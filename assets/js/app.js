$('document').ready(function() {
  var moves = [];




  $("#addBtn").on("click", function(e) {
    var newMove = $("#text").val();
    var newButton = $("<button>");
    newButton.text(newMove);
    $("#buttons").append(newButton);


  });

});
