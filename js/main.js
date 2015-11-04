var mouseX;

$(document).mousemove(function(e) {
   mouseX = e.pageX * -0.2; 

	$("html").mouseover(function(){
	  $('#heroimage').css({'background-position':mouseX});
	});
});


