/****************************
Author:Jasper Mishra,
Email:jbloom1704@gmail.com
File: svg2.js
Description: Creates the thunder and lightning effect,involving change in background and lightning image. 
Makes use of the jQuery function 'switchClass('old','new', duration)
***************************/

function thunder(){
 var thunderStrike=$("<audio id='thunderFile' style='display:none;' controls='controls' height='50px' width='100px' loop='loop' autoplay='autoplay' ><source src='thunder.mp3' type='audio/mpeg'/><embed height='50px' width='100px' src='thunder.mp3' /></audio>");
 $("body").append(thunderStrike);
 }

function causeLightning(){
   $("body").switchClass('nightSky','lightning',70);
}

function removeLightning(){
$("body").switchClass('lightning','nightSky',70);
}

function lightningEffect(){

thunder();

causeLightning(); //flash
removeLightning(); //flashless
lightningStrike()//lightningStrike

causeLightning(); //flash
removeLightning();//flashless
lightningStrike()//lightningStrike

causeLightning();//flash
removeLightning(); //flashless
lightningStrike()//lightningStrike

causeLightning();//flash
removeLightning();//flashless
lightningStrike()//lightningStrike

setTimeout(function(){$('.lightStrike').remove()},1000);
setTimeout(function(){$('#thunderFile').remove()},13000);
}

function lightningStrike() {
var lightStrikeArray=["<img src='lightning3.png' >","<img src='lightning4.png' >"];
var index=Math.floor((lightStrikeArray.length*Math.random()),1);
var lightStrike=$(lightStrikeArray[index]).addClass("lightStrike");
lightStrike.css({'position':'absolute','left':Math.random()*1400+'px'});
$("body").append(lightStrike);
}



function randomizeCloud1Position() {
 var clouds=$("#cloudsContainer1 img");
  clouds.each(function(i){
   $(this).css({'top':Math.random()*3+'em'});   
   });
}



function moveCloud1() {
 
	$("#cloudsContainer1").animate({
	'left':'+=140em',
	},87000,function(){
	var left=$("#cloudsContainer1").css('left');
	if(left=='0px'){ 
	 moveCloud1();
	 }
	 else if(left=='2240px'){
	 $("#cloudsContainer1").css({'left':'-2240px'});
	 randomizeCloud1Position();
	 moveCloud1();
	 }
	});
}



jQuery(document).ready(function($)
{
   lightningEffect(); //Has been turned off to protect epiliptic patients.
  setInterval(lightningEffect,15000);
  randomizeCloud1Position();
 moveCloud1();
});