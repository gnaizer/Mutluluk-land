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





Skype.ui({
  "name": "chat",
  "element": "SkypeButton_Call_konuku31_1",
  "participants": ["konuku31"],
  "imageColor": "white",
  "imageSize": 16,
  "margin": 0
  });
