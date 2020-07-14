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
    console.log("click - " + $(this).data('number'));
    toMarkStars($(this),'rate-button__star_filed');
    $(this).first().css({"baorder": "2px solid red"});
    toFadeFilled($(this).siblings('.rate-button__star:first'),"rate-button__star_filedFaded","");
  })

  //Изменение значений окрашенных звёздочек при наведении мышки
  $(".rate-button__star").mouseover(function() {
    toMarkStars($(this),'rate-button__star_faded');
    toFadeFilled($(this),"",'rate-button__star_filedFaded');
  })
  $(".rate-button__star").mouseout(function() {
    toMarkStars($(this),'rate-button__star_faded','');
    toFadeFilled($(this),'rate-button__star_filedFaded');
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

function toFadeFilled(initialNode, classNameToRemove="", classNameToAdd=""){
  let stars = initialNode.parent().children(".rate-button__star");
  let nops = initialNode.data('number');// means number of pressed/mouseover star
  stars.each(function(index, resultItem){
    if ( (index >= nops) && $(this).hasClass("rate-button__star_filed")){
      $(this).addClass(classNameToAdd);
      $(this).removeClass(classNameToRemove);
    }
  })
}