import * as $ from 'jquery'

$('[data-button="menu-mobile"]').click(function() {
  // $('.header-mobile').toggle()
  document.querySelector('.header-mobile').style.display = 'block'
})

$('[data-button="list_2"]').click(function() {
  // $(this).children().toggleClass('active__block')
  // $(this).children().toggle()
  $(this).children().css('display', 'block')
})

$('[data-button="header-back"]').click(function() {
  // console.log($(this).parent().toggle())
  console.log($(this).parent().css('display', 'none'))
  $(this).parent()
})
