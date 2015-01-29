
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

// Charts'
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
var ctx = document.getElementById('barChart').getContext("2d");
var barChart = new Chart(ctx).Bar(data);
var ctx2 = document.getElementById('lineChart').getContext("2d");
var lineChart = new Chart(ctx2).Line(data);













});

