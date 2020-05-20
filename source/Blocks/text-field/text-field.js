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
  $(".text-field__math-operation").click(function(){
    var isDropdownNumbersOnly =false;
    var resultNode = $(this).siblings(".text-field__math-result");
    var count = +(resultNode.text());
    if ($(this).hasClass("text-field__math-operation_minus")){
      if (count > 0)
        resultNode.text(--count);
      if (count == 0 && !$(this).hasClass("text-field__math-operation_disabled"))
        $(this).addClass("text-field__math-operation_disabled");
    } else{
      resultNode.text(++count);
      var siblingMinusNode= $(this).siblings(".text-field__math-operation_minus");
      if ((count -1 == 0) && siblingMinusNode.hasClass("text-field__math-operation_disabled"))
        siblingMinusNode.removeClass("text-field__math-operation_disabled");
    }
    
    let mainO = returnMainObject($(this));
    //Если нет кнопки "применить" то вывод происходит мгновенно
    if (!mainO.isThereApplyButton){
      mainO.totalResultField.text(convertObjectInResultString(mainO));
    }

  });
});







function convertObjectInResultString ({resultObj = {}, charachersInString = 9, isDropdownNumbersOnly = false}){
  let resultString="";
  if (isDropdownNumbersOnly){
    let additionalWords;
    let count= 0 ;
    let values = Object.values(resultObj);
    for (let value of values){
      count += value;
    }
    switch(count){
      case 1: 
        additionalWords = "гость";
        break;
      case 2: 
      case 3:
      case 4:  
        additionalWords = "гостя";
        break;
      case 5:  
      case 6:  
      case 7:  
      case 8:  
      case 9:  
      case 0:  
        additionalWords = "гостей";
        break;
      default:
        count = ""
        additionalWords = "Недопустимое количество";
    }
    resultString=`${count} ${additionalWords}`;
  } else{ 
    let pairsArr = Object.entries(resultObj);
    for (i = 0; i<pairsArr.length && !isDropdownNumbersOnly; i++){
      let pair = pairsArr[i];
      //Если пользователь ввёл значение отличное от нуля, то стоит вывести его в строку
      if(pair[1] > 0){
        if(resultString.length > 0){
          resultString += ", ";
        }
        resultString += pair[1] + " " + stringCutter(pair[0],charachersInString).toLowerCase();
      }
    }
  }

  return resultString;
}

function stringCutter (str , charachersInString = 9){
  rightString = "";

  if (str.length >= charachersInString){
    rightString = str.slice(0,charachersInString);
    rightString += "...";
  } else{
    rightString = str;
  }
  return rightString;
}

function collectValuesAndKeysToResultObj (collectionNode){
  resultObj = {};
  collectionNode.each(function(index, item){
      let key = $(this).children(".text-field__item-text").text();
      let value = +($(this).children(".text-field__item-math-field")
                         .children(".text-field__math-result").text());
      resultObj[key] = value;
  })
  return resultObj;
}

function returnMainObject (initialNode){
  let mainObject = {};
  mainObject.menu = initialNode.parents(".text-field__menu");
  mainObject.totalResultField = mainObject.menu.siblings(".text-field__total-result-and-toggler-wrapper")
                                 .children(".text-field__total-result-field");
  mainObject.dropdownItemsCollection = mainObject.menu.children('.text-field__item');
  
  mainObject.resultObj = collectValuesAndKeysToResultObj(mainObject.dropdownItemsCollection);

  mainObject.dropdown = mainObject.menu.parents(".text-field");
  mainObject.isDropdownNumbersOnly = mainObject.dropdown.hasClass("text-field_numbers-only");  

  mainObject.isThereApplyButton=mainObject.menu.children('.text-field__item-button-container')
                                                       .children('.text-field__button-apply')
                                                       .hasClass('text-field__button-apply');
  return mainObject;
}