var wins = 0;
var counter = 0;
var losses = 0;
var targetNumber = 19 + Math.floor(Math.random() * 101);
$("#targetNumber").html(targetNumber);

// create a function that will update the wins/losses?

// created 4 unique crystal values and put them in an array
function getCrystalValue () {
	// going 1 ID in a time and putting value in it
for(var i = 1; i <= 4; i++) {
	$("#crystal-" + i).attr("data-crystalvalue",1 + Math.floor(Math.random() * 12));
}

}

// for loop that will create 4 different images and will give them 
// each a different value.
// THE LOOPS HAVE DIFFERENT IDS
for (var i = 0; i < 4; i++) {
	var crystal = $("<img>");
	crystal.addClass("crystal-image");
	// when you concatenate a string with a number, it just adds to the string.
	crystal.attr("src", "assets/images/Crystal"+(i+1)+".jpg");
	crystal.attr("id", "crystal-"+(i+1));
	$("#crystals").append(crystal);
}

// calling values to the elements on the page
getCrystalValue();

// function: when image is clicked, provide it with the random
// crystal Value and keep adding it and alert it to the page.
$(".crystal-image").on("click", function() {
	var crystalNewValue = ($(this).attr("data-crystalvalue"));
	crystalNewValue = parseInt(crystalNewValue);
	// alert(crystalNewValue);
	counter += crystalNewValue;
	alert(counter);

	if (counter === targetNumber) {
		alert("You win!");
		wins++;
		resetGame();
		$("#gameStats").html("<p>You won!</p>" + 
			"<p>Wins: </p>" + wins + "<p>Losses: </p>" + losses);
		console.log("This is the new target: " + targetNumber);
		// call function reset game which will... 
		// bring counter back to zero, get a new target number,
		// get new values for the array.
	}
	else if (counter >= targetNumber) {
		alert("You lose!");
		losses++;
		resetGame();
		$("#gameStats").html("<p>You lost!</p>" + 
			"<p>Wins: </p>" + wins + "<p>Losses: </p>" + losses);
		console.log("This is the new target: " + targetNumber);
		// call function reset game which will... 
		// bring counter back to zero, get a new target number,
		// get new values for the array.
	}
	$("#currentScore").html(counter);
	console.log(counter);
});

function resetGame() {
	// put counter back to zero
	counter = 0;

	// get a new target number
	// working but not replacing it in HTML. WHY?!??!?!
	// redisplayed this to the page
	targetNumber = getNewTargetNumber();
	$("#targetNumber").html(targetNumber);

	// get new array values
	// calling to reassign values to elements on the page
	getCrystalValue();
}

function getNewTargetNumber() {
	return newTargetNumber = 19 + Math.floor(Math.random() * 101);
	$("#targetNumber").html(newTargetNumber);
}