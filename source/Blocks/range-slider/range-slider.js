import '../../../node_modules/jquery/dist/jquery.min.js';
let rubl = "₽" ;

$( function() {
  //Инициация слайдеров при загрузке страницы, а также вывод изображения значений бегунков, во время движения последних.
  $( ".range-slider" ).each(function( index ) {
    $(this).children('.range-slider__slider').slider({
    range: true,
    min: $(this).data("rangeMin"),
    max: $(this).data("rangeMax"),
    values: [ $(this).data("defaultValueMin"), 
    $(this).data("defaultValueMax") ],
    slide: function( event, ui ) {//отображение значений во время движения слайдера
      $(this).parent().children('.optional-inp-drop-title-and-desc-wrapper')
             .children('.optional-inp-drop-title-and-desc-wrapper__desc').text(
        separateThousandsBySpace(ui.values[ 0 ])
        + rubl + " - " + 
        separateThousandsBySpace(ui.values[ 1 ] ) 
        + rubl);
      }
    });
    //Инициация цифровых значений бегунков при начальной загрузке страницы
    $(this).children('.optional-inp-drop-title-and-desc-wrapper')
          .children('.optional-inp-drop-title-and-desc-wrapper__desc')
          .text( 
    separateThousandsBySpace($(this).children('.range-slider__slider').slider( "values", 0))
    + rubl + " - " + 
    separateThousandsBySpace($(this).children('.range-slider__slider').slider( "values", 1)) 
    + rubl );
  });
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