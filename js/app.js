window.addEventListener("load", function() {
	var game = new AdventureGame();
});
//map numbers
// 0- free space
// 1- 
// 2- 
// 3- 
// 4- 
// 5- 
// 6- unstoppable wall

class AdventureGame {
	constructor() {
		//setup variables
		this.adventureText = [];
		this.position = [0,0];

		this.generateMap();
		this.getElements();
		this.assignListeners();
		this.introduction();
		this.displayText();
	}

	generateMap() {
		this.map = [
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
			[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
		]
	}

	getElements() {
		this.button = document.getElementById("submit");
		this.textOutput = document.getElementById("textOutput");
		this.minimap = document.getElementById("minimap");
	}

	assignListeners() {
		this.button.addEventListener("click", function(event) {
			gameLogic();
		});
	}

	gameLogic() {

	}

	introduction() {
		this.addText("You awake from a slumber in the middle of the woods.");
	}

	addText(text) {
		this.adventureText.push(text);
	}

	displayText() {
		//this.textOutput.innerText = "WEVE GOT TEXT\nhelo";
		var buildAString = "";
		for (var i = this.adventureText.length - 1; i >= 0; i--) {
			buildAString += this.adventureText[i] + "\n";
			//buildAString += "\n";
		}
		this.textOutput.innerText = buildAString;
	}
}

