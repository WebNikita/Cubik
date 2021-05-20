import * as $ from 'jquery';
let count = 0;
const text = $('.block__product_preview_second-top_price').prop('innerText');
const inter = parseInt(text);

$('.plus').on('click', function() {
  count++;
  const price =inter*count;
  $('.end_price').html(price + ' Р');
  $('.count').html(count);
  console.log(count);
  console.log(price);
});

$('.minus').on('click', function() {
  if (count >= 1) {
    const end = $('.end_price').prop('innerText');
    const price = parseInt(end);
    count--;
    const priceEnd = price-inter;
    $('.end_price').html(priceEnd + ' Р');
    $('.count').html(count);
    console.log(count);
    console.log(price);
  }
});
