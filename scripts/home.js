$(document).ready(function(){
	// Set button variables
	var $apt_btn = $("#apt_btn");

	// Fade in apoirintment button
	$apt_btn.hide();
	$apt_btn.fadeTo('slow',0.5);

	// Expand and fade button when honve
	$apt_btn.mouseenter(function() {
       $apt_btn.fadeTo('slow', 1);
   	});
   	$apt_btn.mouseleave(function() {
       $apt_btn.fadeTo('slow', 0.5);
   	});

   	// Fill in info button
   	var $info_btn = $(".info-button");
   	$info_btn.mouseenter(function() {
       $(this).css("background-color","rgb(0,117, 190)");
       $(this).css("color","white");
   	});
   	$info_btn.mouseleave(function() {
       $(this).css("background-color","white");
       $(this).css("color","black");
   	});

});