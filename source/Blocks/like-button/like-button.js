window.onload = function(){
  $('.like-button').children('.like-button__wrapper')
                   .children('.like-button__count').text()
  /*let's check if there need to expand block*/
  $('.like-button').each(function(index){
    //$(this).css('width',((index+1)*100 + "px"));
    var currentValue=+$(this).children('.like-button__wrapper')
           .children('.like-button__count').text();
    if((currentValue > 99) && (currentValue < 1000) && !$(this).hasClass('like-button_hundreds-of-them')){
      $(this).addClass('like-button_hundreds-of-them');
    }
    if((currentValue > 999) && !$(this).hasClass('like-button_thousands-of-them')){
      $(this).addClass('like-button_thousands-of-them');

    }
  })
  /*increasing and decreasing text value and toggle class _pressed*/
  $('.like-button').on('click', function(){
    var likeButton__count = $(this).children('.like-button__wrapper')
           .children('.like-button__count');
    var value = likeButton__count.text();
    if ($(this).hasClass('like-button_pressed')){
      value = +value - 1;
      $(this).removeClass('like-button_pressed');
      if($(this).hasClass('like-button_thousands-of-them') && (value < 1000)){
        $(this).removeClass('like-button_thousands-of-them');
        $(this).addClass('like-button_hundreds-of-them');
      }else if($(this).hasClass('like-button_hundreds-of-them') && (value < 100)){
        $(this).removeClass('like-button_hundreds-of-them');
      }
    } else{
      value = +value + 1;
      $(this).addClass('like-button_pressed');
      if(!($(this).hasClass('like-button_hundreds-of-them')) && (value > 99) && (value < 1000)){
        $(this).addClass('like-button_hundreds-of-them');
      }else if(!($(this).hasClass('like-button_thousands-of-them')) && (value > 999)){
        $(this).addClass('like-button_thousands-of-them');
        $(this).removeClass('like-button_hundreds-of-them');
      }

    }
    likeButton__count.text(value);
  })
}
