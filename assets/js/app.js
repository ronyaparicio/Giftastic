$('document').ready(function() {
  var moves = [];

  function createButtons() {
    $('#buttons').empty();
    for (var i = 0; i < moves.length; i++) {
      var newButton = $('<button>');
      newButton.addClass("btn")
      newButton.attr('moveName', moves[i]);
      newButton.text(moves[i])
      $('#buttons').append(newButton)
    }
  }



  $("#add-move").on("click", function(event) {
    event.preventDefault();
    var move = $('#move-input').val().trim();

    moves.push(move);
    createButtons();

  });


});
