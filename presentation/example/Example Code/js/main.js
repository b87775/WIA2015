$(function () {
    $('.tlt').textillate();
    $('.test').textillate({in: {effect: 'flash'}});
    $('.btn').textillate({in: {effect: 'bounce'}});


    $(".test").on("click", function(){
      $(this).append("<p>Default out</p>");
      $(this).textillate('out');
    })
});

