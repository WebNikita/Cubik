import * as $ from 'jquery';

$('.block__product_preview_second-bottom_button-append').click(function() {
  console.log('on');
  $('.block__append-to-card').css('display', 'block');
  $('.container').css('opacity', '0.5');
});

$('.open-size').click(function() {
  console.log('on');
  $('.block__size').css('display', 'block');
  $('.container').css('opacity', '0.5');
});

$('.close').click(function() {
  console.log('off');
  $('.block__append-to-card').css('display', 'none');
  $('.block__size').css('display', 'none');
  $('.container').css('opacity', '1');
});
