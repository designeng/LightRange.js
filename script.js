// IE8+ compatible demo site script

$(function () {
  var $xStart = $('#xStart');
  var $xEnd = $('#xEnd');

  var $yStart = $('#yStart');
  var $yEnd = $('#yEnd');

  var $width = $('#width');
  var $height = $('#height');

  var $charStart = $('#charStart');
  var $charEnd = $('#charEnd');

  var $characters = $('#characters');
  var $charactersAll = $('#charactersAll');

  var $text = $('#text');

  var $infobar = $('#infobar');


  var positionInfobar = function () {
    var selectionInfo = lightrange.getSelectionInfo();

    $xStart.text(selectionInfo.xStart);
    $xEnd.text(selectionInfo.xEnd);

    $yStart.text(selectionInfo.yStart);
    $yEnd.text(selectionInfo.yEnd);

    $width.text(selectionInfo.width);
    $height.text(selectionInfo.height);

    $charStart.text(selectionInfo.charStart);
    $charEnd.text(selectionInfo.charEnd);

    $characters.text(selectionInfo.characters);
    $charactersAll.text(selectionInfo.charactersAll);

    $text.text(selectionInfo.text);

    $infobar.css('top', selectionInfo.yStart - $infobar.outerHeight() - 4);
    $infobar.css('left', selectionInfo.xStart + (selectionInfo.width / 2 - $infobar.outerWidth() / 2));
  };



  $('body').on('mouseup', function () {
    positionInfobar();
    $infobar.addClass('active');
  });
  $('body, main').on('scroll', function () {
    positionInfobar();
  });
  $(window).on('resize', function () {
    positionInfobar();
  });

  $('#save-selection').on('click', function (event) {
    lightrange.saveSelection();
    // Preventing from display empty infobar if clicked at start
    event.stopPropagation();
  });
  $('#restore-selection').on('click', function (event) {
    lightrange.restoreSelection();
    positionInfobar();
    // Preventing from display empty infobar if clicked at start
    event.stopPropagation();
  });

  $('.main-button').on('click', function (event) {
    // Preventing from display empty infobar if clicked at start
    event.stopPropagation();
  });

});
