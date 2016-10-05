$(document).on('ready', function () {
  // var winningCombos = []
  var turn = 0;

  $('td').hover(function () {
    // if (turn % 2 === 0) {
      $(this).css('background-color', 'yellow');
    }, function () {
      $(this).css('background-color', 'cyan');
    // }
    // } else {
    //   $(this).css('background-color', 'red');
    // }
  });

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
