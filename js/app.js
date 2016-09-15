window.addEventListener("load", function() {
	var game = new AdventureGame();
});
//map numbers
// 0- free space
// 1- gold
// 2- 
// 3- 
// 4- 
// 5- 
// 6- unstoppable wall

class AdventureGame {
	constructor() {
		//setup variables
		this.adventureText = [];
		this.position = [10,10];
		this.command = null;

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
		this.commandBox = document.getElementById("userChoice");
	}

	assignListeners() {
		this.button.addEventListener("click", function(event) {
			event.preventDefault();
			this.gameLogic();
		}.bind(this));
	}

	gameLogic() {
		this.checkCommand();

		this.clearCommand();
	}

	checkCommand() {
		this.command = this.commandBox.value;
		console.log(this.command);
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

