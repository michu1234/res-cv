$(document).ready(function(){

	// OFF MAIN WINDOW

	$(".off").click(function(){
		$(".container").fadeOut("fast", "swing");
	});



	// OPEN SUBPAGE

	$(".blockcolor").click(function(){
		$(".wrapper").addClass("lightSpeedIn");
	});


	$(".blockcolor3").click(function(){
		$(".wrapper2").addClass("lightSpeedIn");
	});

	$(".blockcolor12").click(function(){
		$(".wrapper3").addClass("lightSpeedIn");
	});
	$(".blockcolor1").click(function(){
		$(".wrapper4").addClass("lightSpeedIn");
	});
	$(".blockcolor54").click(function(){
		$(".wrapper5").addClass("lightSpeedIn");
	});




	// BACK TO MAIN WINDOW


	$(".ion-bug2").click(function(){
		$(".wrapper").removeClass("lightSpeedIn");
	});

	$(".ion-bug2").click(function(){
		$(".wrapper2").removeClass("lightSpeedIn");
	});
	$(".ion-bug2").click(function(){
		$(".wrapper3").removeClass("lightSpeedIn");
	});
	$(".ion-bug2").click(function(){
		$(".wrapper4").removeClass("lightSpeedIn");
	});
	$(".ion-bug2").click(function(){
		$(".wrapper5").removeClass("lightSpeedIn");
	});

	$(".ion-bug2").click(function(){
		$(".container").fadeIn("slow");
	});






});
