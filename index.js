$(document).ready(function() {
  $('.burger-menu').on('click', function() {
      $('header nav ul').toggleClass('open');
  });
});







$('a.scrollTo').on('click', function() {
  var scrollTo = $(this).attr('data-scrollTo');
  $('body, html').animate({
      "scrollTop": $('#' + scrollTo).offset().top
  }, 1000 );
  return false;
})






