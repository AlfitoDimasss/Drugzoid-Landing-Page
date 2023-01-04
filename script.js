$(function () {
  $('#btn').click(function () {
    const navbarMenu = $('#navbar-menu');
    if (navbarMenu.hasClass('active')) {
      navbarMenu.toggleClass('active');
      navbarMenu.slideDown();
    } else {
      navbarMenu.toggleClass('active');
      navbarMenu.slideUp();
    }
  });
});

function clickedMenu(e) {
  $('li>a.text-blue-900').toggleClass('text-blue-900');
  $('li>a.text-blue-900').toggleClass('hover:text-blue-900');
  e.classList.toggle('text-blue-900');
  e.classList.toggle('hover:text-blue-900');
}