$(document).on('ready', function () {
  // var winningCombos = []
  var turn = 0;

  $('td').on('click', function () {

    if (turn % 2 === 0) {
      $(this).addClass('yellow').css('background-color', 'yellow');
    } else {
      $(this).addClass('red').css('background-color', 'red');
    }

    $(this).off('click');
    turn++;
  });
});
