

$(document).ready(function(){
	$("#down1").click(function(e) {
		$(".one").slideDown('slow');
		$(e.target).slideUp('slow').fadeOut();
	})

	$("#down2").click(function(e) {
		$(".two").slideDown(1000);
		$(e.target).fadeOut('slow')
		$(".one").hide();
	})

	$("#down3").click(function(e) {
		$(".three").slideDown(1000);
		$(e.target).hide();
		$(".two").hide();
	})

	$("#close").click(function() {
		$(".panel").slideUp(1000);
		setTimeout(showButtons, 1000);
	})

	function showButtons() {
			$("#down1").fadeIn('slow');
			$("#down2").show();
			$("#down3").show();
	}

	function blink(){
	  $('.down').fadeOut(1000).fadeIn(1500);
	}
	// function scale(){
	// 	$('.down').animate({width: 150px}, 1000);
 //    $('.down').animate({width: 100px}, 1000);
	// }


	setInterval(blink, 500);

})