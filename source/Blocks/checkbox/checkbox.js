$(document).ready(function(){
  var checkboxArr = $(".checkbox");
  checkboxArr.each(function(){
    if($(this).hasClass("checkbox_checked")){
      $(this).children("input").prop('checked', true)
    }else{
      $(this).children("input").prop('checked', false)
    }
    // if ($(this).children("input").prop('checked')){
    //   $(this).toggleClass("checkbox_checked");
    // }else{
    //   $(this).toggleClass("checkbox_unchecked");
    // }
  })
  $(".checkbox__inner-space").click(function(){
    console.log("hello");
    var checkbox = $(this).parent();

    checkbox.toggleClass("checkbox_unchecked");
    checkbox.toggleClass("checkbox_checked");
  })
});