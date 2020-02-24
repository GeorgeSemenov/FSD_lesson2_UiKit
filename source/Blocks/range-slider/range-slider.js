// alert("defaultValueMin = " + rSlider.data("defaultValueMin"));
// rangeSliderArray = [];

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
            separtaeThousandsBySpace(ui.values[ 0 ])
            + rubl + " - " + 
            separtaeThousandsBySpace(ui.values[ 1 ] ) 
            + rubl);
        }
      });
      numbersDisplayField.val( 
        separtaeThousandsBySpace(rSlider.slider( "values", 0))
        + rubl + " - " + 
        separtaeThousandsBySpace(rSlider.slider( "values", 1)) 
        + rubl );
    } );

function separtaeThousandsBySpace(numb){
  let thousands= Math.floor(numb/1000);
  let notThousands= numb - thousands*1000;
  let additionalZeros = (thousands==0 || notThousands!=0) ? '':'00';
  return `${thousands==0 ? '':thousands} ${notThousands}${additionalZeros}`;
}