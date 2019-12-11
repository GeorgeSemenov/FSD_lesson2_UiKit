$(document).ready(function(){
  var checkboxArr = $(".checkbox");
  checkboxArr.each(function(){
    if ($(this).children("input").prop('checked')){
      $(this).toggleClass("checkbox_checked");
    }
  })
  $(".checkbox__inner-space").click(function(){
    console.log("hello");
    var checkbox = $(this).parent();

    checkbox.toggleClass("checkbox_unchecked");
    checkbox.toggleClass("checkbox_checked");
  })
});