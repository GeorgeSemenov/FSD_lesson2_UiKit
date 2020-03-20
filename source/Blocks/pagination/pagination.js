import '../../JScomponents/simplePagination/simplePagination.js';
var pagination = $('.pagination__content');
/*Функция призыва пагинации*/
$(function(){
  pagination.pagination({
    pages: 20,
    cssStyle: 'light-theme',
    displayedPages: 3,
    edges: 1,
    onPageClick:  function(pageNumber) {
      // console.log("page number =" + pageNumber)
    } 
  })
})

$(document).ready(function(){
  $('.page-link')
  .click(function(){
    let href = this.attributes[0].value;
    console.log(href);
    console.log(href.length);
    console.log(href[href.length - 1]);
  })

})



