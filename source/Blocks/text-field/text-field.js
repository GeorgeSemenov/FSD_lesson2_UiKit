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
    var minusItem = $(this).siblings(".text-field__math-operation_minus");
    if ( (+($(this).text()) == 0) && !minusItem.hasClass("text-field__math-operation_disabled"))
      minusItem.addClass("text-field__math-operation_disabled");
  })

  //при загрузке страницы - происходит вывод изначальных значений в text-field__input 
  $(".text-field__menu").each(function(index, resultItem){
    let textInput = $(this).siblings(".text-field__input");
    let mainO= returnMainObject($(this).children('.text-field__item'));
    if (textInput.data().initaialString){
      mainO.totalResultField.val(textInput.data().initaialString);
    } else{
      mainO.totalResultField.val(convertObjectInResultString(mainO));
    }
  })

  //арифметические операции
  $(".text-field__math-operation").click(function(){
    var isTextFieldNumbersOnly =false;
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
      mainO.totalResultField.val(convertObjectInResultString(mainO));
    }

  });

  //вывод результата в строку с кнопкой применить (без кнопки - очистить)
  $(".text-field__button-apply").click(function(){
    let mainO = returnMainObject($(this));
    mainO.totalResultField.val(convertObjectInResultString({resultObj: mainO.resultObj, isTextFieldNumbersOnly: mainO.isTextFieldNumbersOnly}));
  })

  // При нажатии на кнопку очистить, этот код нужен, если по каким-то причинам ты не можешь
  // использовать button(type="reset")
  $(".text-field__button-clear").click(function(){
    let mainO = returnMainObject($(this));

    mainO.items.each(function(index, item){
      $(this).children(".text-field__item-math-field")
             .children(".text-field__math-result").text(0);
      $(this).children(".text-field__item-math-field")
             .children(".text-field__math-operation_minus")
             .addClass("text-field__math-operation_disabled");
    })

  })
});







function convertObjectInResultString ({resultObj = {}, charachersInString = 9, isTextFieldNumbersOnly = false}){
  let resultString="";
  if (isTextFieldNumbersOnly){
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
    for (let i = 0; i<pairsArr.length && !isTextFieldNumbersOnly; i++){
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
  let rightString = "";

  if (str.length >= charachersInString){
    rightString = str.slice(0,charachersInString);
    rightString += "...";
  } else{
    rightString = str;
  }
  return rightString;
}

function collectValuesAndKeysToResultObj (collectionNode){
  let resultObj = {};
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
  mainObject.mainBlock = initialNode.parents(".text-field");
  mainObject.wrapper = initialNode.parents(".text-field__input-wrapper");
  mainObject.menu = mainObject.wrapper.children(".text-field__menu");
  mainObject.totalResultField = mainObject.menu.siblings(".text-field__input");
  mainObject.items = mainObject.menu.children('.text-field__item');
  
  mainObject.resultObj = collectValuesAndKeysToResultObj(mainObject.items);

  mainObject.dropdown = mainObject.menu.parents(".text-field");
  mainObject.isTextFieldNumbersOnly = mainObject.dropdown.hasClass("text-field_numbers-only");  

  mainObject.isThereApplyButton=mainObject.wrapper.children('.text-field__button-container')
                                                       .children('.text-field__button-apply')
                                                       .hasClass('text-field__button-apply');
  return mainObject;
}