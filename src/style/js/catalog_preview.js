import * as $ from 'jquery';


$('.quickly__preview_button').on('click', function() {
  console.log('on');
  $('.block__preview').css('display', 'block');
  $('.container').css('opacity', '0.5');
  $('.container__product_preview').css('opacity', '1');
});


$('.close_preview').on('click', function() {
  console.log('off');
  $('.block__preview').css('display', 'none');
  $('.container').css('opacity', '1');
});
