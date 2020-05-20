import '../../../node_modules/air-datepicker/dist/js/datepicker.min.js';
/*Для того чтобы при нажатии только на 
тогглер(стрелочка вниз) вызывался бы datepicker
*/
$(document).ready(function(){
  $(".text-field__toggler")
  .click(function(){
    /*вывод/сокрытие календаря */
    if($(this).siblings('.text-field__input').hasClass('datepicker-here')){
      var myDatepicker = $(this).siblings('.datepicker-here')
      	.datepicker().data('datepicker');
      	myDatepicker.show();
      var inpt = myDatepicker = $(this).siblings('.datepicker-here');
      if(inpt.hasClass('showAirPicker')){
      	inpt.removeClass('showAirPicker')
      }else{
      	inpt.addClass('showAirPicker');
      }
    }

    /*вывод/сокрытие менюшки dropdown*/
    if($(this).siblings('ul').hasClass('text-field__menu')){
      var thisMenu = $(this).siblings('.text-field__menu');
      thisMenu.toggleClass("text-field__menu_show");
    }

  });

  //Проверка, если при загрузке страницы у всех арифметических полей стоит ноль, то задизейблеваем минусы
  var resultsCollection = $(".text-field__math-result");
  resultsCollection.each(function(index, resultItem){
    console.log('i see zero!');
    var minusItem = $(this).siblings(".text-field__math-operation_minus");
    if ( (+($(this).text()) == 0) && !minusItem.hasClass("text-field__math-operation_disabled"))
      minusItem.addClass("text-field__math-operation_disabled");
  })

  //арифметические операции
  $(".dropdown-with-math-field__math-operation").click(function(){
    var isDropdownNumbersOnly =false;
    var resultNode = $(this).siblings(".dropdown-with-math-field__math-result");
    var count = +(resultNode.text());
    if ($(this).hasClass("dropdown-with-math-field__math-operation_minus")){
      if (count > 0)
        resultNode.text(--count);
      if (count == 0 && !$(this).hasClass("dropdown-with-math-field__math-operation_disabled"))
        $(this).addClass("dropdown-with-math-field__math-operation_disabled");
    } else{
      resultNode.text(++count);
      var siblingMinusNode= $(this).siblings(".dropdown-with-math-field__math-operation_minus");
      if ((count -1 == 0) && siblingMinusNode.hasClass("dropdown-with-math-field__math-operation_disabled"))
        siblingMinusNode.removeClass("dropdown-with-math-field__math-operation_disabled");
    }
    
    let mainO = returnMainObject($(this));
    //Если нет кнопки "применить" то вывод происходит мгновенно
    if (!mainO.isThereApplyButton){
      mainO.totalResultField.text(convertObjectInResultString(mainO));
    }

  });
});