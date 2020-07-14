$(document).ready(function(){
  var checkboxArr = $(".checkbox");
  checkboxArr.each(function(){
    if($(this).hasClass("checkbox_checked")){
      $(this).children("input").prop('checked', true)
    }else{
      $(this).children("input").prop('checked', false)
    }
  })
  $(".checkbox__inner-space").click(function(){
    var checkbox = $(this).parent();

    checkbox.toggleClass("checkbox_unchecked");
    checkbox.toggleClass("checkbox_checked");
  })
});