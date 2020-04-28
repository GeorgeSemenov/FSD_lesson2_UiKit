 $(window).on('load', function () {
  /*функционал необходимый для работы самой пагинации, тут изменяется значение actpage*/
  var paginationPage = parseInt($('.pagination__content').attr('actpage'), 10);
  $('.pagination__pagination-item').on('click', function(){
    var go = $(this).attr('href').replace('#!', '');
    var valueOfCalculation = $(this).parent().parent().children('.pagination__display-calculations').children('i');
    console.log(valueOfCalculation.text());
    if (go === '+1') {
      paginationPage++;
    } else if (go === '-1') {
      paginationPage--;
    }else{
      paginationPage = parseInt(go, 10);
    }
    $('.pagination__content').attr('actpage', paginationPage);
  });
});