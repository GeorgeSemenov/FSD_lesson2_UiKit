$(document).ready(function(){
  // Закрашивание нужного количества звёздочек при первой загрузке страницы
  $(".rate-button").each(function(index,resulItem){
    let iStarsFilled = $(this).data('initialStarsFilled');// i means initial
    let lastFilledStar = $(this).children(`.rate-button__line`)
                                .children(`.rate-button__star:nth-child(${iStarsFilled})`);
    toMarkStars(lastFilledStar , "rate-button__star_filed");
  })

  //Изменение значений окрашенных звёздочек при клике
  $(".rate-button__star").click(function(){
    toMarkStars($(this),'rate-button__star_filed');
  })

  //Изменение значений окрашенных звёздочек при наведении мышки
  $(".rate-button__star").mouseover(function() {
    toMarkStars($(this),'rate-button__star_faded');
    // toFadeFilled($(this),'rate-button__star_faded');
  })
  $(".rate-button__star").mouseout(function() {
    toMarkStars($(this),'rate-button__star_faded','');
    // toFadeFilled($(this),'rate-button__star_faded','');
  })
})

function toMarkStars(initialNode, classNameToRemove, classNameToAdd=classNameToRemove){
  let stars = initialNode.parent().children(".rate-button__star");
  let nops = initialNode.data('number');// means number of pressed/mouseover star
  stars.each(function(index, resultItem){
    $(this).removeClass(classNameToRemove);
    if (index < nops){
       $(this).addClass(classNameToAdd);
    }
  })
}

function toFadeFilled(initialNode, classNameToRemove, classNameToAdd=classNameToRemove){
  let stars = initialNode.parent().children(".rate-button__star");
  let nops = initialNode.data('number');// means number of pressed/mouseover star
  stars.each(function(index, resultItem){
    $(this).removeClass(classNameToRemove);
    if ( (index >= nops) && $(this).hasClass("rate-button__star_filed")){
      $(this).addClass(classNameToRemove);
    }
  })
}