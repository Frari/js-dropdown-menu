$('.item-right').mouseenter(function(){
  $(this).children('.down').addClass('comparso');
  // $(this).children('.down').addClass('black');
});

$('.item-right').mouseleave(function(){
  $(this).children('.down').removeClass('comparso');
});
