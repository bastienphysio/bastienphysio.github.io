$(document).ready(function(){
	// Set button variables
	var $fr_btn = $("#fr_btn");
	var $en_btn = $("#en_btn");
	var $img = $("img")

	// Hide the button
	$fr_btn.hide();
	$en_btn.hide();
	$img.hide();
	$img.fadeTo('slow', 1);
	$("#fr_btn,#en_btn").fadeTo('slow', 0.8);

	// Fade oposite button
	$fr_btn.mouseenter(function() {
       $en_btn.fadeTo('slow', 0.5);
       $fr_btn.fadeTo('slow', 1);
   	});
   	$fr_btn.mouseleave(function() {
       $en_btn.fadeTo('fast', 0.8);
       $fr_btn.fadeTo('fast', 0.8);
   	});

   	$en_btn.mouseenter(function() {
       $fr_btn.fadeTo('slow', 0.5);
       $en_btn.fadeTo('slow', 1);
   	});
   	$en_btn.mouseleave(function() {
       $en_btn.fadeTo('fast', 0.8);
       $fr_btn.fadeTo('fast', 0.8);
   	});

	

});