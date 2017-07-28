$('document').ready(function() {

  var moves = [];

  $('#Sumit').on("click", function() {
    event.preventDefault();
    var button = $("<button>");
    var text = $("#text").val();
    button.text(text);

    $("#buttons").append(button);

  })
}
