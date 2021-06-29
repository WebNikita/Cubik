import * as $ from 'jquery';

const $contentMen = 'size_content_men';
const $contentWomen = 'size_content_women';
const $contentShoes = 'size_content_shoes';
const $contentShirt = 'size_content_shirt';
const $contentTee = 'size_content_tee';
const $contentGlove = 'size_content_glove';
$(`.${$contentMen}`).on('click', function() {
  $(this).children(`.${$contentMen}_table`).toggleClass('display_block');
});
$(`.${$contentWomen}`).on('click', function() {
  $(this).children(`.${$contentWomen}_table`).toggleClass('display_block');
});
$(`.${$contentShoes}`).on('click', function() {
  $(this).children(`.${$contentShoes}_table`).toggleClass('display_block');
});
$(`.${$contentShirt}`).on('click', function() {
  $(this).children(`.${$contentShirt}_table`).toggleClass('display_block');
});
$(`.${$contentTee}`).on('click', function() {
  $(this).children(`.${$contentTee}_table`).toggleClass('display_block');
});
$(`.${$contentGlove}`).on('click', function() {
  $(this).children(`.${$contentGlove}_table`).toggleClass('display_block');
});
