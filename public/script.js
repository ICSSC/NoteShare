// Only execute this code in the landing page
// This is only a precaution, jQuery is very good with handling
// the case when you can't find an element.
if ($(document.body).hasClass('lp-page')) {
  // Calculate the height of the nav bar
  var navOffset = $('.navigation')[0].getBoundingClientRect().height;

  // Get the height of the container and window
  var container = $('.container');
  var containerHeight = container.height();
  var h = $(window).height();

  // Center the container inside the window
  container.css('padding-top', ((h - containerHeight - navOffset) / 2) + 'px');

  // Recenter the container whenever the page changes size
  $(window).resize(function() {
    var containerHeight = container.height();
    var h = $(window).height();
    container.css('padding-top',
        ((h - containerHeight - navOffset) / 2) + 'px');
  });

  // Get the options elements and whenever one is clicked,
  // update the button and hidden input's text.
  var caret = '<span class="caret"></span>';
  var input = $('#select-input');
  var btn = $('#select-btn');
  var dropdownOptions = $('.dropdown-menu a');
  dropdownOptions.click(function() {
    var element = $(this);
    input.val(element.attr('data-value'));
    btn.html(element.text() + ' ' + caret);
  });
}

if ($(document.body).hasClass('class-page')) {
  var menuButton = $('.menu-button');
  menuButton.click(function() {
    var menuBar = $('.menu-bar');
    var pageContainer = $('.container');
    menuBar.css('display', 'block');
    pageContainer.css('margin-left', '15%');
  });
}
