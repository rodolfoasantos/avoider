(function($){
  var Allower = (function(){
    var matcher = function(el,rgx){
      var currentValue = el.val();
      if (currentValue.match(rgx) === null) {
        el.val(currentValue.substring(0, currentValue.length-1));
      }
    }
    return {
      letters: function(el){
        return function(){
          matcher(el,new RegExp(/^[A-Za-z ]+$/));
        }
      },
      numbers: function(el){
        return function(){
          matcher(el,new RegExp(/^\d+$/));
        }
      }
    }
  })();

  $.fn.onlyLetters = function(){
    return this.each(function(){
      $(this).on('keyup', Allower.letters($(this)));
    });
  };

  $.fn.onlyNumbers = function(){
    return this.each(function(){
      $(this).on('keyup', Allower.numbers($(this)));
    })
  };

})(jQuery);
