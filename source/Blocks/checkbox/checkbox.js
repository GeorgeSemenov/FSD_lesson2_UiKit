$(document).ready(function(){
  $(".checkbox__inner-space").click(function(){
    console.log("hello");
    var checkbox = $(this).parent();

    checkbox.toggleClass("checkbox_unchecked");
    checkbox.toggleClass("checkbox_checked");
  })
});