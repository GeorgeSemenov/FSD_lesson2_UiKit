window.onload = function(){
  var paginationPage = parseInt($('.pagination__content').attr('actpage'), 10);
  $('.pagination__pagination-item').on('click', function(){
    var go = $(this).attr('href').replace('#!', '');
    if (go === '+1') {
      paginationPage++;
    } else if (go === '-1') {
      paginationPage--;
    }else{
      paginationPage = parseInt(go, 10);
    }
    $('.pagination__content').attr('actpage', paginationPage);
  });
};