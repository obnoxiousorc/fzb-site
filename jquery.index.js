var fadeOutOverlay = function () {
  $('.overlay').fadeOut(1000);
};

var init = function () {
  $('#enter').on('click', function () {
    $(this).fadeOut();

    var $blue = $('.blue'),
        $red = $('.red');

    var blueTop = $blue.position().top,
        blueLeft = $blue.position().left,
        redTop = $red.position().top,
        redLeft = $red.position().left;

    $blue.animate({
      top: blueTop + 64,
      left: blueLeft - 192
    }, 1500);

    $red.animate({
      top: redTop - 64,
      left: redLeft + 192
    }, 1500);

    setTimeout(fadeOutOverlay, 2000);
  });


  $('.logo').on('mouseenter', function () {
    var $this = $(this);

    $this.animate({
    });
  });

  $
}

$(document).on('ready', init);
