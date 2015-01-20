/*
     Name:Jason Woods
     Date:6 Jan 2015
     Class & Section:  WIA-0115
     Comments: "HTML5 Canvas Drawing"
 */

window.onload = function(){

	if(Modernizr.canvas){


	/*******************************************
	HTML5 Shape Drawing Activity
	    1.  Setup the canvas and 2d context
	    2.  Draw out each shape in the sections below
	     
	********************************************/

	/*******************************************
	FILE SETUP

	// Setup up 7 different Canvases in index.html one for each problem.
	//Link Modernizr.js
	// Link the main.js file
	// Setup the call to that canvas and get it's 2d context
	//Use Modernizr to verify that your browser supports canvas, include a fallback message


	/*******************************************
	PART 1

	Draw a rectangle starting at point (0 ,0)
	That has a width of 50 px and a heigh of 100px
	Set the color of the rectangle to a shade of blue.
	Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

	Reminder - set the style first then draw.
	********************************************/

	//Draw Rectangle here
		var part1 = document.getElementById('part1');
		if(part1){
			var ctx = part1.getContext("2d");
			if (ctx){
				ctx.strokeStyle = "black";
				ctx.fillStyle = "lightblue";
				ctx.lineWidth = 1;
									
				//Draw the rectangle
				ctx.fillRect(0, 0, 50, 100);
				ctx.strokeRect(0, 0, 50, 100);
				


			}
		};
	/*******************************************
	PART 2

	Draw a circle starting at point (50 ,50)
	That has a radius of 20 px 
	Set the color of the circle to a shade of red and set the alpha to .5
	Set the stroke color to black and use a radius of 30px for this circle.

	Reminder - set the style first then draw.
	Use the arc method
	********************************************/


	//Draw Circle here
		if(part1){
			var ctx = part1.getContext("2d");
			if (ctx){
				ctx.strokeStyle = "black";
				ctx.fillStyle = "rgba(248,64,61,.5)";
				ctx.lineWidth = 5;
				
				ctx.beginPath();
				// arc(x,y,r,sA, eA, clockwise or counter);					
				ctx.arc(50,50,30,0, 2 * Math.PI, true );
				ctx.fill();
				ctx.stroke();

			}
		};

	/*******************************************
	PART 3

	Practice using Path drawing.
	Create a 5-point star shaped pattern using the lineTo method.
	Begin this shape at (100, 100)

	Height and width and color are up to you.

	********************************************/


	//Draw Star here
		if(part1){
			var ctx = part1.getContext("2d");
			if(ctx){
				ctx.translate(250, 250);
				ctx.rotate((Math.PI * 1 / 10));
				var length = 30;
				ctx.moveTo(0,0);
				// 5 points
				for (var i = 5; i--;) {
				    
				    ctx.lineTo(0, length);
				    ctx.translate(0, length);
				    ctx.rotate((Math.PI * 2 / 10));
				    ctx.lineTo(0, -length);
				    ctx.translate(0, -length);
				    ctx.rotate(-(Math.PI * 6/ 10));
				};
				ctx.lineTo(0, length);
				ctx.closePath();
				// stroke the path
				ctx.stroke();
								
								

			};
		};

								
	/*******************************************
	PART 4

	Practice drawing with Bezier curves.
	Try drawing the top to an umbrella.
	This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

	Position, height, width and color are your choice.
	Do not overlap any other object.

	********************************************/

	//Draw Umbrella top here
		var part2 = document.getElementById("part2");
		if(part2){
			var ctx = part2.getContext("2d");
			if (ctx) {
				ctx.strokeStyle = "blue";
				ctx.lineWidth = 5;
						
				//Stroke a simple bezier curve
				ctx.beginPath();
				ctx.moveTo(50,200);
						
				//bezierCurveTo(cx1, cy1, cx2, cy2, x, y )		
						
				ctx.bezierCurveTo(50,100, 200, 100, 200, 200);
				ctx.bezierCurveTo(200,180,150,180,150,200);
				ctx.bezierCurveTo(150,180,100,180,100,200);
				ctx.bezierCurveTo(100,180,50,180,50,200);
				ctx.closePath();
						
				ctx.stroke();				
			}
		}

		
		
	/*******************************************
	PART 5

	Practice using text.
	Draw text into your canvas.  It can said whatever you would like in any color.

	********************************************/

	//Draw text here

	if(part2){
		var ctx = part2.getContext("2d");
		if(ctx){

			var text = "My first Text in the canvas";
			ctx.font = "14pt Georgia";	

			ctx.fillText(text, 20,20);
		}
	}

	/*******************************************
	PART 6

	Pixel manipulation.
	Draw the image logo.png into the canvas in the following 3 ways.
	1. The image exactly as it is.
	2. Shrink the image by 50%
	3. Slice a section of the logo out and draw that onto the canvas.

	Reminder to use the drawImage method for all 3 of the ways.

	********************************************/

<<<<<<< HEAD
//Draw images here
var part3 = document.getElementById("part3");
if(part3){
	var ctx = part3.getContext("2d");
	if(ctx){
		var img =document.getElementById("logo");
		ctx.drawImage(img, 0,0);
		ctx.drawImage(img, 50,50,150,300);
=======
	//Draw images here
	var part3 = document.getElementById("part3");
	if(part3){
		// resized image to fit before used. 
		var ctx = part3.getContext("2d");
		if(ctx){
			var img =document.getElementById("logo");
			// full size image
			ctx.drawImage(img, 0,0);
			ctx.height = img.height *0.5;
			ctx.width = img.width *0.5;
				//50%
			ctx.drawImage(img, 200,500, ctx.width, ctx.height);
			//slice
			ctx.drawImage(img, 800, 80, 100, 300,70, 500,200, 280);
		}
>>>>>>> 13d4c84020dcd2a3df7bf27c9e265577da579838
	}


	/*******************************************
	PART 7

	Putting it all together. 

	Using a combination of all the methods. 
	Create a complex scene.
	You must use at least 3 different methods.

	********************************************/

	// Draw scene here
		var part4 = document.getElementById("part4");

		if(part4){

			var ctx = part4.getContext("2d");
			ctx.save();
			if(ctx){

					// Sun
				ctx.beginPath()
				ctx.strokeStyle = "rgba(248,200,0,0.5)";
				ctx.fillStyle = "rgba(248,200,0,1)";
				ctx.lineWidth = 5;
				ctx.shadowColor = "rgba(248,200,0,1)";
				ctx.shadowOffsetX = 10;
				ctx.shadowOffsetY = 5;
				ctx.shadowBlur = 100;		
				
				// arc(x,y,r,sA, eA, clockwise or counter);					
				ctx.arc(50,50,150,0, 2 * Math.PI);
				ctx.fill();
				ctx.stroke();
				
				ctx.restore();
				//cloud
				ctx.strokeStyle = "gray";
				ctx.fillStyle = "gray";
				ctx.lineWidth = 5;
					
				
				ctx.beginPath();
				ctx.shadowColor = "black";
				ctx.shadowOffsetX = 10;
				ctx.shadowOffsetY = 5;
				ctx.shadowBlur = 100;		
				ctx.moveTo(170, 80);		
				ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
			    ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
			    ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
			    ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
			    ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
			    ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
				ctx.closePath();
				ctx.fill();		
				ctx.stroke();
				ctx.closePath();

				
			


				//rain
				ctx.restore();
				for (var i=0;i< 15; i++) {
					ctx.beginPath();
					ctx.lineWidth = 1;
					ctx.moveTo(300 +20*i,150 +25*i);
					ctx.lineTo(310 +20*i,175 +25*i);
					ctx.stroke();
				};			
				
				for(var i=0; i<15; i++){
					ctx.beginPath();
					ctx.lineWidth = 1;
					ctx.moveTo(200 +15*i,150 +30*i);
					ctx.lineTo(210 +15*i,175 +30*i);
					ctx.stroke();
				}
				
				
								
				

			}
		}

	}else{
		alert("Your Browser doesn't Support Canvas");
	}
};
