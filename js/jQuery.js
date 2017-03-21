$(document).ready(function(){

	// OFF MAIN WINDOW

	$(".off").click(function(){
		$(".container2").fadeOut("fast", "swing");
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
	$(".blockcolor5").click(function(){
		$(".wrapper6").addClass("lightSpeedIn");
	});
   $(".blockcolor66").click(function(){
      $(".wrapper7").removeClass("off3").addClass("lightSpeedIn");
   });

	// BACK TO MAIN WINDOW

	$(".ion-bug2").click(function(){
     $(".wrapper, .wrapper2, .wrapper3, .wrapper4, .wrapper5, .wrapper6, .wrapper7").removeClass("lightSpeedIn");
	});

	$(".ion-bug2").click(function(){
		$(".container2").fadeIn("slow");
	});

	// RANDOM SLIDE IN

	$(".ion-arrow-left-c").click(function(){
		random = Math.floor(Math.random() * 7);
		$("div.slide").removeClass("lightSpeedIn").eq(random).addClass("lightSpeedIn");
	});

});
