import * as $ from 'jquery';

$('.button_blur').on('click', function() {
  $('.container__product_info').toggleClass('blur');
  $(this).children().toggleClass('rotate');
});
