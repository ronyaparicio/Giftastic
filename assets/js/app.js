$('document').ready(function() {

  $('#Sumit').on("click", function() {
    event.preventDefault();
    var button = $("<button>");
    var text = $("#text").val();
    $("#buttons").append(button);

  })
}
