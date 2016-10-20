var numColors = 3;
var colorsList = generateColors(numColors);
var colors = document.getElementsByClassName("color-box");
var jumbotronBG = document.getElementById("jumboBG");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard"); 
var hardRow = document.getElementById("hard-row");
var tryAgain = document.getElementById("tryAgain");
var colorName = document.getElementById("colorName");
var newGame = document.getElementById("newGame");
var footer = document.getElementById("footer");
var pickedColor = pickColor();

colorName.textContent = pickedColor;

for (var i = 0; i < colors.length; i++) {

	colors[i].style.background = colorsList[i];

	colors[i].addEventListener("click", function(){

		var clickedColor = this.style.background;
		console.log(clickedColor, pickedColor);
		if (clickedColor === pickedColor) {

			// need to add background color change to #A6D98A in jumbotron 
			// and #f0e6e4 to general background 
			// on a winning!

			changeOnWin(pickedColor);

		} else {
			this.style.background = "none";
			tryAgain.textContent = "Try Again!";
		}
	});

}

// need to add background color change to #ff8f84 in jumbotron 
// and #f0e6e4 to general background 
// on a winning!

newGame.addEventListener("click", function(){
	reset(numColors);
});

function changeOnWin(color){

	tryAgain.textContent = "Correct!";
	newGame.textContent = "Play Again?";
	footer.style.color = "#6a5e62";
	jumbotronBG.style.background = color;

	document.body.style.background = "#f0e6e4";

	for (var i = 0; i < colors.length; i++) {
		colors[i].style.background = color;
	}

}

function pickColor() {
	var random = Math.floor(Math.random()*colorsList.length);
	return colorsList[random];
}


function generateColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb("+ r + ", " + g + ", " + b + ")";
}

function reset(num) {
	colorsList = generateColors(num);
	tryAgain.textContent = " ";
	newGame.textContent = "New Colors";
	jumbotronBG.style.background = "#f0e6e4";
	footer.style.color = "#393e41";
	document.body.style.background = "#b5aaab";
	pickedColor = pickColor();
	colorName.textContent = pickedColor;
	for (var i = 0; i < colors.length; i++) {
		colors[i].style.background = colorsList[i];
	}	
}

reset(numColors);

easy.addEventListener("click", function(){
		if (numColors == 6) {
			numColors = 3;
			reset(numColors);
			hard.classList.add("inactive-btn");
			easy.classList.remove("inactive-btn");
			hardRow.classList.add("hard-level");
		} else {
			reset(numColors);
		}
});

hard.addEventListener("click", function(){
		if (numColors == 3) {
			numColors = 6;
			reset(numColors);
			easy.classList.add("inactive-btn");
			hard.classList.remove("inactive-btn");
			hardRow.classList.remove("hard-level");
		} else {
			reset(numColors);
		}
});