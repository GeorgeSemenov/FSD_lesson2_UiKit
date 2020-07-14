$(document).ready(function(){
  $(".checkbox-list__arrow-toggler")
    .click(function(){
      $(this).parent().parent(".checkbox-list")
             .toggleClass("checkbox-list_expanded");

    })
})
