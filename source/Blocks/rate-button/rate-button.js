$(document).ready(function(){
  //Закрашивание нужного количества звёздочек при первой загрузке страницы
  $(".rate-button").each(function(index,resulItem){
    $(this).data('')
  })

  //Изменение значений окрашенных звёздочек при клике
  $(".rate-button__star").click(function(){
    let stars = $(this).parent().children(".rate-button__star");
    let nops = $(this).data('number');// means number of pressed star
    stars.each(function(index, resultItem){
      $(this).removeClass('.rate-button__star_filed');
      $(this).removeAttr("fill");
      if (index < nops){
        $(this).addClass('rate-button__star_filed');
        $(this).attr("fill", "url(#gradt)");
      }
    })
  })
})
