 $(window).on('load', function () {
  /*функционал необходимый для работы самой пагинации, тут изменяется значение actpage*/
  $('.pagination__item').on('click', function(){
    var pagination__content = $(this).parent();
    var paginationPage = parseInt(pagination__content.attr('actpage'), 10);
    var go = $(this).attr('href').replace('#!', '');
    if (go === '+1') {
      paginationPage++;
    } else if (go === '-1') {
      paginationPage--;
    }else{
      paginationPage = parseInt(go, 10);
    }
    pagination__content.attr('actpage', paginationPage);

    /*тут происходит изменение количества вариантов аренды */
    var valueOfCalculation = $(this).parent().parent()
                                    .children('.pagination__display-calculations')
                                    .children('i');
    valueOfCalculation.text(`${(paginationPage-1)*12 + 1} - ${paginationPage*12}`)
  });
});