var wins = 0;
var counter = 0;
var losses = 0;
var targetNumber = 19 + Math.floor(Math.random() * 101);
$("#targetNumber").html(targetNumber);

// create a function that will update the wins/losses?

// created 4 unique crystal values and put them in an array
var crystalValue1 = 1 + Math.floor(Math.random() * 12);
var crystalValue2 = 1 + Math.floor(Math.random() * 12);
var crystalValue3 = 1 + Math.floor(Math.random() * 12);
var crystalValue4 = 1 + Math.floor(Math.random() * 12);
var crystalArray = [crystalValue1, crystalValue2, crystalValue3, crystalValue4];
console.log(crystalArray);

// HOW CAN I GET DIFFERENT IMAGES WITH THE CRYSTAL VALUES?!?!?!
// for loop that will create 4 different images and will give them 
// each a different value.
for (var i = 0; i < 4; i++) {
	var crystal = $("<img>");
	crystal.addClass("crystal-image");
	crystal.attr("src", "assets/images/greenCrystal.jpg");
	crystal.attr("data-crystalvalue", crystalArray[i]);
	$("#crystals").append(crystal);
}

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
		console.log("This is the new target: " + targetNumber);
		// call function reset game which will... 
		// bring counter back to zero, get a new target number,
		// get new values for the array.
	}
	else if (counter >= targetNumber) {
		alert("You lose!");
		losses++;
		resetGame();
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
	targetNumber = getNewTargetNumber();

	// get new array values
	// no idea how to start
}

function getNewTargetNumber() {
	return newTargetNumber = 19 + Math.floor(Math.random() * 101);
	$("#targetNumber").html(newTargetNumber);
}