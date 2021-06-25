import * as $ from 'jquery';

// console.log($('.filter_first_one-content').children());
$('.filter').children().on('click', function() {
  $(this).toggleClass('select');
  check($(this));
});

function check(className) {
  const Content = (className.html());
  const ID = (className.attr('id'));
  if (className.hasClass('select')) {
    // console.log('on');
    $('.block__sidebar').css('cssText', 'margin-bottom: 30px !important;');
    $('.block__select-filter').css('cssText', 'margin-top: 30px !important; margin-bottom: 70px !important;');
    console.log('on');
    // console.log($('.block__select-filter').children('li').length>0);
    $('.block__select-filter').append(`<li id="${ID}">
                                        ${Content}
                                          <svg class="delete-filter" xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="none" viewBox="0 0 7 7">
                                            <path fill="#767676" d="M7 .825L6.175 0 3.5 2.675.825 0 0 .825 2.675 3.5 0 6.175.825 7 3.5 4.325 6.175 7 7 6.175 4.325 3.5 7 .825z"/>
                                          </svg>
                                       </li>`);
    // console.log($('.block__select-filter').children('li').length>0);
    // console.log($('.block__select-filter').is('li'));
  } else {
    // console.log('off');
    // console.log(Content);
    // console.log($('.block__select-filter').children(`#${ID}`).attr('id'));
    // console.log($('.block__select-filter').children(`#${ID}`).remove());
    $('.block__select-filter').children(`#${ID}`).remove();
    if ($('.block__select-filter').children('li').length==0) {
      $('.block__sidebar').css('cssText', 'margin-bottom: 130px !important;');
      $('.block__select-filter').css('cssText', 'margin-top: 0px !important; margin-bottom: 0px !important;');
      $('.sidebar__filter').children('p').css('cssText', 'color: #767676 !important');
      $('.filter__button').html('<path fill="#767676" d="M8.833 1.917L5 5.75 1.167 1.917 0 3.083l5 5 5-5-1.167-1.167z"/>');
    }
  }
  $('.delete-filter').on('click', function() {
    console.log('delete');
    // console.log($(this).parent().attr('id'));
    const thisId = $(this).parent().attr('id');
    $('.filter').children(`#${thisId}`).removeClass('select');
    $(this).parent().remove();
    if ($('.block__select-filter').children('li').length==0) {
      $('.block__sidebar').css('cssText', 'margin-bottom: 130px !important;');
      $('.block__select-filter').css('cssText', 'margin-top: 0px !important; margin-bottom: 0px !important;');
    }
  });
}
