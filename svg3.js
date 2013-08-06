/****************************
Author:Jasper Mishra,
File: svg.js
Description: Creates rain droplets and randomizes their position.
Runs animation in infinite duration 
***************************/

function moveCloud2() {
 
	$("#cloudsContainer2").animate({
	'left':'+=2240px',
	},87000,function(){
	 var left=$("#cloudsContainer2").css('left');
	 if(left=='0px'){ 
	 moveCloud2();
	 }
	 else if(left=='2240px'){
	 $("#cloudsContainer2").css({'left':'-2240px'});
	 randomizeCloud2Position();
	 moveCloud2();
	 }
	  
	});
}


function randomizeCloud2Position() {
 var clouds=$("#cloudsContainer2 img");
  clouds.each(function(i){
   $(this).css({'top':Math.random()*3+'em'});  
   });
}

jQuery(document).ready(function($)
{
  randomizeCloud2Position();
  moveCloud2();
	

  for(var i=0;i<30;i++) 
 {	  
     var droplets=[]; //rain droplets array
	 
	//creating and storing droplets
	 var droplet=$("<div>").addClass('droplet');
	 setDropletShapePosition(droplet);
	 $("body").append(droplet);  
	  droplets.push(droplet);
  }	
 
  var droplets=$(".droplet");
  
  droplets.each(function(){
    splashVanish($(this));
     });  
   
});


function setDropletShapePosition(droplet) {
var equalDim=Math.random()*6;
var r=(Math.random()*10)+10;

 droplet.css({
   'webkit-border-radius':r+'em',
   'moz-border-radius':r+'em',
   'o-border-radius':r+'em',
   'ms-border-radius':r+'em',
   'border-radius':r+'em',
   'height':equalDim+'em',
   'width':equalDim+'em',
   'top':Math.random()*600+'px',
   'left':Math.random()*1400+'px'
   });
}

function splashVanish(droplet) {
	   droplet.fadeOut(Math.random()*6000, function(){
	     droplet.css({'top':Math.random()*600+'px','left':Math.random()*1400+'px'});
		 droplet.remove();
		 $("body").append(droplet);
		 droplet.fadeIn(1,function(){splashVanish(droplet)});
       });
} 

