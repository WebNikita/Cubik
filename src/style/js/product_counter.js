import * as $ from 'jquery';
let count = 0;
const text = $('.block__product_third-top_price').prop('innerText');
const inter = parseInt(text);

$('.plus').click(function() {
  count++;
  const price =inter*count;
  $('.end_price').html(price + ' Р');
  $('.count').html(count);
  console.log(count);
  console.log(price);
});

$('.minus').click(function() {
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

// let counter = 0;
// counter += inter;
// console.log(counter);
// counter += inter;
// console.log(counter);
// counter += inter;
// console.log(text);


// console.log(inter);
// console.log(counter);
