import * as $ from 'jquery';
import '@scss/_valid.scss';

// $('')

$('.filter__button').click(function() {
  console.log('on');
  $(this).children().css('fill', '#8FBBD3');
});

// $(this).click(function() {
//   $(this).css('fill', 'blue_hover');
// });
