import * as $ from 'jquery';

// console.log($('.filter_first_one-content').children());
$('.filter').children().on('click', function() {
  $(this).toggleClass('select');
  check($(this));
});
function check(className) {
  const Content = (className.html());
  if (className.hasClass('select')) {
    console.log('on');
    $('.block__select-filter').append(`<li>${Content}</li>`);
  } else {
    console.log('off');
    console.log(Content);
    console.log($('.block__select-filter').contents());
    console.log($('.block__select-filter').contents().text() == Content);
    if ($('.block__select-filter').contents().text() != Content) {
      $('.block__select-filter').contents().text().remove();
    }
    // $('.block__select-filter').contents().text(Content).each(function() {
    //   // $('.block__select-filter').remove();
    // });
  }
}
