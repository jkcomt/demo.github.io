$(document).ready(function () {

  $('ul.nav a').on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      console.log('holis');
      var hash = this.hash;
      console.log(hash);
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});
