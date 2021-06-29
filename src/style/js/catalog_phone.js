import * as $ from 'jquery';


$('.sidebar__sort_phone').on('click', function() {
  console.log('on');
  $('.block__sort_phone').css('display', 'block');
  $('.container').css('opacity', '0.5');
});

$('.sidebar__filter_phone').on('click', function() {
  console.log('on');
  $('.block__filter_phone').css('display', 'block');
  $('.container').css('opacity', '0.5');
});

$('.close_phone').on('click', function() {
  console.log('off');
  $('.block__sort_phone').css('display', 'none');
  $('.block__filter_phone').css('display', 'none');
  $('.container').css('opacity', '1');
});
