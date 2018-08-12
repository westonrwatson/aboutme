$(document).ready(function() {

  // Mobile nav Functionality
  $('#hamburger,#close').click(function() {
    $('#hamburger,#close').toggle();
    $('.c-navigation #links').toggleClass('visible');
  });

});

window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});
