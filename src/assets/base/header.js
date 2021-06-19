import * as $ from 'jquery';

$('[data-hover="catalog"]').hover(function() {
  $('[data-visible="second"]').toggleClass('active__inline');
  $('[data-visible="second"]').hover(function() {
    $(this).addClass('active__inline');
  }, function() {
    $(this).removeClass('active__inline');
    removeClass();
  });
});

function removeClass() {
  $('[data-hover="overalls"]').children().css('visibility', 'hidden');
  $('.header__background').css('height', 0);
}

// function headerBG(value) {
//   $('.header__background')
//   .css('height', value.children().outerHeight() + 20);
// }

$('[data-hover="overalls"]').hover(function() {
  removeClass();
  console.log($(this));
  $(this).children().css('visibility', 'visible');
  // let value = $(this).children().outerHeight();
  // setTimeout(() => {
  //   $('.header__background')
  //       .css('height', $(this).children().outerHeight() + 20);
  // }, 0);
  // eslint-disable-next-line max-len
  // headerBG($(this));

  // eslint-disable-next-line max-len
  $('.header__background').css('height', $(this).children().outerHeight() + 20);

  // do {
  //   value = $(this).children().outerHeight();
  //   $('.header__background').css('height', value + 20);
  //   // console.log(value);
  //   // eslint-disable-next-line no-undef
  // } while (value === 0);


  console.log($(this).children().outerHeight() + 20);
});

// "loop" logic
$('[data-focus="loop"]').click(function() {
  $(this).prev().toggleClass('active__grid');
  $(this).toggleClass('active__loop');
  $(this).parent().toggleClass('header__label_bd');
  console.log($(this).parents('li').prev()
      .toggleClass('active__hide')); // TODO fix!!!
});


// TODO maybe use later
// $('[data-focus="input"]').on('focus', function() {
//   console.log($(this).prev().toggleClass('active__grid'));
//   $(this).toggleClass('active__loop');
//   $(this).parent().toggleClass('header__label_bd');
// });
