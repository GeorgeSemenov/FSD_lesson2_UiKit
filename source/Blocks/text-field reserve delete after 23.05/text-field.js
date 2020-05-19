import '../../../node_modules/air-datepicker/dist/js/datepicker.min.js';
/*Для того чтобы при нажатии только на 
тогглер(стрелочка вниз) вызывался бы datepicker
*/
$(document).ready(function(){
  $(".text-field__toggler")
  .click(function(){
    var myDatepicker = $(this).siblings('.datepicker-here')
    	.datepicker().data('datepicker');
    	myDatepicker.show();
    var inpt = myDatepicker = $(this).siblings('.datepicker-here');
    if(inpt.hasClass('showAirPicker')){
    	inpt.removeClass('showAirPicker')
    }else{
    	inpt.addClass('showAirPicker');
    }
  });
});