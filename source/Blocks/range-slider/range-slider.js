import '../../../node_modules/jquery/dist/jquery.min.js';
let rSlider = $(".range-slider__slider");
let RSParent = rSlider.parent();
let rubl = "₽" ;
let numbersDisplayField = $(".range-slider .optional-inp-drop-title-and-desc-wrapper__desc");

$( function() {
  //Инициализация всех слайдеров
  rSlider.slider({
    range: true,
    min: RSParent.data("rangeMin"),
    max: RSParent.data("rangeMax"),
    values: [ RSParent.data("defaultValueMin"), 
    RSParent.data("defaultValueMax") ],
    slide: function( event, ui ) {//отображение значений во время движения слайдера
      $(this).parent().children('.optional-inp-drop-title-and-desc-wrapper')
             .children('.optional-inp-drop-title-and-desc-wrapper__desc').text(
        separateThousandsBySpace(ui.values[ 0 ])
        + rubl + " - " + 
        separateThousandsBySpace(ui.values[ 1 ] ) 
        + rubl);
    }
  });
  //- Инициация цифровых значений положения бегунков при загрузке страницы
  $( ".range-slider" ).each(function( index ) {
    console.log("hello");
    $(this).children('.optional-inp-drop-title-and-desc-wrapper')
          .children('.optional-inp-drop-title-and-desc-wrapper__desc')
          .text( 
    separateThousandsBySpace($(this).children('.range-slider__slider').slider( "values", 0))
    + rubl + " - " + 
    separateThousandsBySpace($(this).children('.range-slider__slider').slider( "values", 1)) 
    + rubl );
  });
            // .css({"border":"10px solid red"})
});

function separateThousandsBySpace(numb){
  let strNumb = String(numb);
  let resultStr = [];
  let k = Math.trunc(strNumb.length / 4);
  let n = 0;
  for (let i =(strNumb.length-1); i>=0; i--){
    n++;
    if( n % 4 == 0){
      resultStr[i+k]=' ';
      k--;
    }
    resultStr[i + k]= strNumb[i];
  }
  return resultStr.join('');
}