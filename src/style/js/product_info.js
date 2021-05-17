import * as $ from 'jquery';

$('.button_blur').click(function() {
  $('.container__product_info').toggleClass('blur');
  $(this).children().toggleClass('rotate');
});
