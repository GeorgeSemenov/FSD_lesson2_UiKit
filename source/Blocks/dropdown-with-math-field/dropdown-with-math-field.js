$(document).ready(function(){
  //Появление/исчезание подменю
  $(".dropdown-with-math-field__toggler")
  .click(function(){
    var dropdown = $(this).parent().parent();
    var dropdownThisMenu = dropdown.children(
      ".dropdown-with-math-field__menu");

    dropdownThisMenu
    .toggleClass("dropdown-with-math-field__menu_show");
  });
  //Проверка, если при загрузке страницы у всех арифметических полей стоит ноль, то задизейблеваем минусы
  var resultsCollection = $(".dropdown-with-math-field__math-result");
  resultsCollection.each(function(index, resultItem){
    var minusItem = $(this).siblings(".dropdown-with-math-field__math-operation_minus");
    if ( (+($(this).text()) == 0) && !minusItem.hasClass("dropdown-with-math-field__math-operation_disabled"))
      minusItem.addClass("dropdown-with-math-field__math-operation_disabled");
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

  //вывод результата в строку с кнопкой применить (без кнопки - очистить)
  $(".dropdown-with-math-field__button-apply").click(function(){
    var dropdownMenu = $(this).parents(".dropdown-with-math-field__menu");
    var totalResultField = dropdownMenu.siblings(".dropdown-with-math-field__total-result-and-toggler-wrapper")
                                   .children(".dropdown-with-math-field__total-result-field");
    var dropdownItemsCollection = dropdownMenu.children('.dropdown-with-math-field__item');
    
    resultObj = collectValuesAndKeysToResultObj(dropdownItemsCollection);

    var dropdown = dropdownMenu.parents(".dropdown-with-math-field");
    isDropdownNumbersOnly = dropdown.hasClass("dropdown-with-math-field_numbers-only");

    totalResultField.text(convertObjectInResultString({resultObj: resultObj, isDropdownNumbersOnly: isDropdownNumbersOnly}));
  })

  //При нажатии на кнопку очистить
  $(".dropdown-with-math-field__button-clear").click(function(){
    let dropdownMenu = $(this).parents(".dropdown-with-math-field__menu");
    let dropdownItemsCollection = dropdownMenu.children('.dropdown-with-math-field__item');
    let totalResultField = dropdownMenu.siblings(".dropdown-with-math-field__total-result-and-toggler-wrapper")
                                   .children(".dropdown-with-math-field__total-result-field");

    dropdownItemsCollection.each(function(index, item){
      $(this).children(".dropdown-with-math-field__item-math-field")
             .children(".dropdown-with-math-field__math-result").text(0);
      $(this).children(".dropdown-with-math-field__item-math-field")
              .children(".dropdown-with-math-field__math-operation_minus")
              .addClass("dropdown-with-math-field__math-operation_disabled");
    })

    totalResultField.text("");
  })
})


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
      let key = $(this).children(".dropdown-with-math-field__item-text").text();
      let value = +($(this).children(".dropdown-with-math-field__item-math-field")
                         .children(".dropdown-with-math-field__math-result").text());
      resultObj[key] = value;
  })
  return resultObj;
}

function returnMainObject (initialNode){
  let mainObject = {};
  mainObject.dropdownMenu = initialNode.parents(".dropdown-with-math-field__menu");
  mainObject.totalResultField = mainObject.dropdownMenu.siblings(".dropdown-with-math-field__total-result-and-toggler-wrapper")
                                 .children(".dropdown-with-math-field__total-result-field");
  mainObject.dropdownItemsCollection = mainObject.dropdownMenu.children('.dropdown-with-math-field__item');
  
  mainObject.resultObj = collectValuesAndKeysToResultObj(mainObject.dropdownItemsCollection);

  mainObject.dropdown = mainObject.dropdownMenu.parents(".dropdown-with-math-field");
  mainObject.isDropdownNumbersOnly = mainObject.dropdown.hasClass("dropdown-with-math-field_numbers-only");  

  mainObject.isThereApplyButton=mainObject.dropdownMenu.children('.dropdown-with-math-field__item-button-container')
                                                       .children('.dropdown-with-math-field__button-apply')
                                                       .hasClass('dropdown-with-math-field__button-apply');
  return mainObject;
}