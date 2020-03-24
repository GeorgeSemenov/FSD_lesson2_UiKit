import '../../JScomponents/simplePagination/simplePagination.js';
var pagination = $('.pagination__content');
/*Функция призыва пагинации*/
$(function(){
  // pagination.children().css({"border":"solid 10px red"});
  console.log("it's working");
  pagination.pagination({
    pages: 20,
    cssStyle: 'light-theme',
    displayedPages: 3,
    edges: 1,
    onPageClick:  function(pageNumber) {
      // console.log("page number =" + pageNumber)
      if (pageNumber == 1){
        console.log(`this = ${JSON.stringify(this)}`);
        console.log(`more tha four`);
        this["prevText"]= '';
      }else{
        this["prevText"]= 'Prev';
      }
    } 
  })
})

$(document).ready(function(){
  $('.page-link')
  .click(function(){
    console.log('Page-link is pressed');
    let href = this.attributes[0].value;
    // console.log(href);
    // console.log(href.length);
    console.log(href[href.length - 1]);
  })

})



