import '../../../node_modules/jquery/dist/jquery.min.js';
let rangeSliderArray= $(".range-slider__slider");
let rSlider = $(".range-slider__slider");
let rubl = "₽" ;
  $( function() {
      let RSParent = rSlider.parent();
      let numbersDisplayField = RSParent
      .children('.range-slider__text-wrapper')
      .children('.range-slider__numbers-display-field');
      rSlider.slider({
        range: true,
        min: RSParent.data("rangeMin"),
        max: RSParent.data("rangeMax"),
        values: [ RSParent.data("defaultValueMin"), 
        RSParent.data("defaultValueMax") ],
        slide: function( event, ui ) {
          numbersDisplayField.val(
            separateThousandsBySpace(ui.values[ 0 ])
            + rubl + " - " + 
            separateThousandsBySpace(ui.values[ 1 ] ) 
            + rubl);
        }
      });
      numbersDisplayField.val( 
        separateThousandsBySpace(rSlider.slider( "values", 0))
        + rubl + " - " + 
        separateThousandsBySpace(rSlider.slider( "values", 1)) 
        + rubl );
    } );

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
$(document).ready(function(){
  if(window.jQuery){
    console.log("jQuery loaded")
  }else{
    console.log("jQuery not loaded")
  }
})