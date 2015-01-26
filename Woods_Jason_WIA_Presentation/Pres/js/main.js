$(function () {
  $('.tlt').textillate().textillate({out:{effect:"bounce"}});

  $('.tlt').on("click", function(){
  	$(this).textillate('out');
  })

  $('.tada').on("click", function(){
  	$(this).textillate({out:{effect:"tada"}});
  	$(this).textillate('out');
  })


});