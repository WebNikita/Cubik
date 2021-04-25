import * as $ from 'jquery';
import '@scss/main.scss';

$('.header').hover(
    (function() {
      $('.header__slider').css({
        'display': 'block',
        'margin': '0px'});
      $('ul').css('margin', '0');
    }),
    function() {
      $('.header__slider').css('display', 'none');
    }
);

$('#1').hover(
    function() {
      $('.dev').css('display', 'block');
    },
    function() {
      $('.dev').css('display', 'none');
    }
);
