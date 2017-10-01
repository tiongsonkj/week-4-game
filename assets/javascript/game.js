var wins = 0;
var counter = 0;
var losses = 0;
var targetNumber = 19 + Math.floor(Math.random() * 101);
$("#targetNumber").append(targetNumber);

function getNewTargetNumber () {
	return targetNumber = 19 + Math.floor(Math.random() * 101);
}

initializeGame();

function initializeGame() {

}
// created 4 unique crystal values.
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
		start();
	}
	else if (counter >= targetNumber) {
		alert("You lose!");
		losses++;
		start();
	}
})

var currentScore = "Your total score is: " + counter;
$("#currentScore").append(currentScore);
// create function for updateGameInfo();

