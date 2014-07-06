// EXERCISE: Change Background
// $(document).ready(function(){
// 	$('#target').css("background-color", "purple");
// });

// EXERCISE: Change Parent
// $(document).ready(function(){
// 	var span = $('span').eq(0);
// 	span.text("I've changed");
// 	$('body').eq(0).append(span);
// });

// EXERCISE: Create Clone
// $(document).ready(function(){
// 	var span = $('span').eq(0);
// 	body = $('body').eq(0);
// 	span.clone().prependTo(body).text("new address");
// });

// EXERCISE: Use Filter
// $(document).ready(function(){
// 	$('div').filter(".target").css({
// 		"border-color": "#C1E0FF", 
//         "border-width":"34px", 
//         "border-style":"solid"});
// });

// EXERCISE: Disable Buttons
// $(document).ready(function(){
// 	$('button').eq(0).attr("disabled", "disabled");
// });

// Uncheck CheckBoxes
// $(document).ready(function(){
// 	$('input').attr("checked", false);
// });

// EXERCISE: Change Parent
// $(document).ready(function(){
// 	var child = $('div').filter('#child');
// 	var parent2 = $('div').filter('#parent2');
// 	parent2.append(child);
// });

// EXERCISE: Select A Option in A Select Box
// $(document).ready(function(){
// 	$('option').eq(1).attr("selected", true);
// });

// EXERCISE: Change Size
// $(document).ready(function(){
// 	$('div').css({
// 		"height": "40000000000000000000px",
// 		"width": "1000px"
// });
// });

// EXERCISE: Empty Elements
// $(document).ready(function(){
// 	$('div').filter('#target').empty();
// });

// EXERCISE: Delay
// window.setTimeout(function(){
// 	alert("should have arrived in three seconds")
// }, 3000 );

// EXERCISE: Count
// $(document).ready(function(){
// 	var count = $('.child').length;
// 	alert("there are " + count + " children");
// });

// EXERCISE: Animate
// $(document).ready(function(){
// 	$('#target').animate({
// 		"width": "300px",
// 		"height": "380px"
// 	}, 1500);

// 	$('#target').animate({
// 		"width": "30px",
// 		"height": "38px"
// 	}, 1500);
// });

// EXERCISE: Alternate Color
// $(document).ready(function(){
// 	var options = $('option');
// 	for (var i = 0; i < options.length; i++){
// 		if (i == 0 || i % 2 == 0 ){options.eq(i).css("background-color", "red");}
// 		else if (i % 2 != 0 ){options.eq(i).css("background-color", "blue");}
// 	}		
// });

// EXERCISE: All But One
// $(document).ready(function(){
// 	$('#target').contents().not('h2').remove();
// });

// Without Children
// $(document).ready(function(){
// 	var divs = $('div');
// 	divs.not(divs[0]).not(divs[1]).remove();
// });
