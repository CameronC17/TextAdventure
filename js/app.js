window.addEventListener("load", function() {
	var game = new AdventureGame();
});
//map keys
// " " - blank
// "d"- door
// "k"- key
// "i"- inner wall
// "g100"- = 100 gold
// "l"- lava (you dead)
// "w"- unstoppable wall
// "c" - chest


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
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","k"," "," ","w"],
			["w"," "," "," ","g100"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," ","l","l","l","l","l"," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," ","l","l","l","l","l"," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," ","l","l"," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," ","l","l"," ","l","l"," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," ","l","l","c","l","l"," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," ","l","l","l","l","l"," "," "," "," "," ","g4"," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","i","i","i","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","i"," "," ","w"],
			["w"," "," "," "," "," "," "," "," "," "," "," ",""," "," "," ","d"," ","g1000","w"],
			["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"]
		];
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
		this.getCommand();
		if (this.command != null) {
			this.
		}

		this.clearCommand();
	}

	getCommand() {
		this.command = this.commandBox.value;
	}

	clearCommand() {
		this.commandBox.value = "";
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
