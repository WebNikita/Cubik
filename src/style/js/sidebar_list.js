import * as $ from 'jquery';

// Открытие фильтра

$('.sidebar__filter').hover(function() {
  $(this).children('p').css('color', '#4C95BD');
  $('.sidebar__list_filter').css('display', 'flex');
  $('.filter__button').children().css('fill', '#4C95BD');
  $('.filter__button').css({transform: 'rotate(180deg)'});
}, function() {
  $(this).children('p').css('color', '#767676');
  $('.sidebar__list_filter').css('display', 'none');
  $('.filter__button').children().css('fill', '#767676');
  $('.filter__button').css({transform: 'rotate(0deg)'});
  if ($('.block__select-filter').children('li').length!=0) {
    $('.sidebar__filter').children('p').css('color', '#4C95BD');
    $('.filter__button').html('<path fill="#4C95BD" d="M10 1.178L8.822 0 5 3.822 1.178 0 0 1.178 3.822 5 0 8.822 1.178 10 5 6.178 8.822 10 10 8.822 6.178 5 10 1.178z"/>');
  }
});

// Открытие сортировки

$('.sidebar__sort').hover(function() {
  $(this).children('p').css('color', '#4C95BD');
  $('.sidebar__list_sort').css('display', 'block');
  $('.sort__button').children().css('fill', '#4C95BD');
  $('.sort__button').css({transform: 'rotate(180deg)'});
}, function() {
  $(this).children('p').css('color', '#767676');
  $('.sidebar__list_sort').css('display', 'none');
  $('.sort__button').children().css('fill', '#767676');
  $('.sort__button').css({transform: 'rotate(0deg)'});
});

// Открытие показать

$('.sidebar__reveal').hover(function() {
  $(this).children('p').css('color', '#4C95BD');
  $('.sidebar__list_reveal').css('display', 'block');
  $('.reveal__button').children().css('fill', '#4C95BD');
  $('.reveal__button').css({transform: 'rotate(180deg)'});
}, function() {
  $(this).children('p').css('color', '#767676');
  $('.sidebar__list_reveal').css('display', 'none');
  $('.reveal__button').children().css('fill', '#767676');
  $('.reveal__button').css({transform: 'rotate(0deg)'});
});

// Открытие категорий

$('.filter_first_one-head').on('click', function() {
  $('.filter_first_one-button').toggleClass('on');
  $('.filter_first_one-content').toggleClass('on');
});

$('.filter_first_two-head').on('click', function() {
  $('.filter_first_two-button').toggleClass('on');
  $('.filter_first_two-content').toggleClass('on');
});

$('.filter_first_three-head').on('click', function() {
  $('.filter_first_three-button').toggleClass('on');
  $('.filter_first_three-content').toggleClass('on');
});

$('.filter_first_four-head').on('click', function() {
  $('.filter_first_four-button').toggleClass('on');
  $('.filter_first_four-content').toggleClass('on');
});

$('.page__list').children().on('click', function() {
  $(this).toggleClass('select_page');
});
