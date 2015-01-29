
$(document).ready(function(){
	
	// Jquery Effects Animations
  
  $( "#plane" ).click(function() {
    $( "#planeImg" ).animate({
      opacity: 0.25,
      left: "+=50",
      height: "toggle"
    }, 5000, function() {
      $("#planeImg").animate({
        opacity:1,
        left:"-=50",
        height: "toggle"
      })
    });
  });

  $("#airways").click(function(){
    $("#airImg").animate({
      height:"200px",
      width:"300px"
    },500 , function(){
        $("#airImg").animate({
        height:"125px",
        width:"200px"
      })
    });
  });

  //Map Features
  $("#map").on("click", function(){
    $(".mapContainer").slideToggle( "slow" );
  });
  
  $("a.dot").hover(function(){
    //alert($(this).attr('loc'));
    $("a.dot").removeClass("selected");
    $(this).addClass("selected");
    var loc = "#"+ $(this).attr('loc');
    //alert(loc);
    $(loc).css("display", "block");

  },function(){
    $("a.dot").removeClass("selected");
    var loc = "#"+ $(this).attr('loc');
    $(loc).css("display", "none");
  })
});

