/****************************
Author:Jasper Mishra,
Email:jbloom1704@gmail.com
File: svg.js
Description: Creates rain drops and randomizes their positon
Runs further animation in infinite duration 
***************************/



function fallEffect(randSpeed,obj) {
    obj.animate({
	  "top":"+795"
	 },randSpeed,'linear',function(){
	  obj.remove().css({'top':'-2px','left':(Math.random()*1450)+'px'});
	  $("body").append(obj);
	  fallEffect(Math.random()*1500,obj);
	 });  

}

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


jQuery(document).ready(function($)
{

	 var objects=[];  //rain drops array
	  for(var i=0;i<120;i++)
	  {
	        //creating and storing drops
			var obj=$("<img src='raindrop2.png' />").addClass("globalObj");
			obj.css({'left':(Math.random()*1450)+'px'})
			$("body").append(obj);
			objects.push(obj);	 
	  } 
	  
	  $.each(objects,function(i){
		 fallEffect(Math.random()*1500,this);
	  });    
});