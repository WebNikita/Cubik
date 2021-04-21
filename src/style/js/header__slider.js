import * as $ from 'jquery';
import '@/scss/main.scss';

$('.header').hover(
    (function() {
      console.log('ININ');
      $('.header').addClass('hover');
    }),
    function() {
      console.log('OUTPUT');
      $(this).removeClass('hover');
    }
);
